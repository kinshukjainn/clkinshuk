import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  FaSearch,
  FaExternalLinkAlt,
  FaSpinner,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaEye,
  FaHeart,
  FaClock,
  FaTimes,
  FaFilter,
  FaSortAmountDown,
} from "react-icons/fa";

// Types
interface BlogPost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  updatedAt: string;
  readTimeInMinutes?: number;
  views?: number;
  reactionCount?: number;
  coverImage?: {
    url: string;
  };
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  author: {
    name: string;
    profilePicture?: string;
  };
  url?: string;
}

type SortOption = "newest" | "oldest" | "mostViewed" | "mostLiked" | "readTime";

interface Filters {
  tags: string[];
  readTimeMin: number;
  readTimeMax: number;
  sortBy: SortOption;
}

class SimpleSearchEngine {
  private posts: BlogPost[] = [];

  constructor(posts: BlogPost[]) {
    this.posts = posts;
  }

  search(query: string): BlogPost[] {
    if (!query.trim()) return this.posts;

    const queryLower = query.toLowerCase();
    const queryWords = queryLower.split(/\s+/).filter((w) => w.length > 0);

    return this.posts
      .map((post) => {
        let score = 0;
        const titleLower = post.title.toLowerCase();
        const briefLower = post.brief.toLowerCase();
        const authorLower = post.author.name.toLowerCase();
        const tagsLower = post.tags.map((t) => t.name.toLowerCase()).join(" ");

        if (titleLower.includes(queryLower)) score += 100;
        if (briefLower.includes(queryLower)) score += 50;
        if (authorLower.includes(queryLower)) score += 30;
        if (tagsLower.includes(queryLower)) score += 20;

        queryWords.forEach((word) => {
          if (titleLower.includes(word)) score += 10;
          if (briefLower.includes(word)) score += 5;
          if (authorLower.includes(word)) score += 3;
          if (tagsLower.includes(word)) score += 2;
        });

        return { post, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ post }) => post);
  }
}

const HASHNODE_API_URL = "https://gql.hashnode.com/";
const BLOG_POSTS_QUERY = `
  query GetUserPosts($host: String!) {
    publication(host: $host) {
      id
      title
      posts(first: 50) {
        edges {
          node {
            id
            title
            brief
            slug
            publishedAt
            updatedAt
            readTimeInMinutes
            views
            reactionCount
            coverImage {
              url
            }
            tags {
              id
              name
              slug
            }
            author {
              name
              profilePicture
            }
          }
        }
      }
    }
  }
`;

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch(HASHNODE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: BLOG_POSTS_QUERY,
        variables: {
          host: "blog.cloudkinshuk.in",
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    if (data.errors) {
      throw new Error(data.errors[0]?.message || "GraphQL error");
    }

    if (!data.data?.publication?.posts?.edges) {
      throw new Error("No blog posts found");
    }

    type Edge = { node: BlogPost };
    const posts = (data.data.publication.posts.edges as Edge[]).map((edge) => ({
      ...edge.node,
      url: `https://blog.cloudkinshuk.in/${edge.node.slug}`,
    }));

    return posts;
  } catch (error) {
    console.error("Detailed error in fetchBlogPosts:", error);
    throw error;
  }
};

interface BlogCardProps {
  post: BlogPost;
  searchQuery?: string;
}

const BlogCard: React.FC<BlogCardProps> = React.memo(
  ({ post, searchQuery }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const formatDate = useCallback((dateString: string): string => {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }, []);

    const formatNumber = useCallback((num: number): string => {
      if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
      if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
      return num.toString();
    }, []);

    const highlightText = useCallback((text: string, query?: string) => {
      if (!query || !query.trim()) return text;
      const regex = new RegExp(
        `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
        "gi"
      );
      const parts = text.split(regex);
      return parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-400 text-black px-1 rounded">
            {part}
          </mark>
        ) : (
          part
        )
      );
    }, []);

    return (
      <article className="rounded-md border-2 border-gray-400 transition-all duration-300 overflow-hidden  bg-gray-100 ">
        <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
          {post.coverImage && !imageError ? (
            <>
              <img
                src={post.coverImage.url}
                alt={post.title}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  imageLoaded
                    ? "opacity-100 group-hover:scale-110"
                    : "opacity-0"
                }`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <FaSpinner className="animate-spin text-cyan-500 text-xl" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <FaExternalLinkAlt className="text-gray-400 text-3xl" />
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5">
          <h2 className="text-base sm:text-lg font-bold text-black leading-snug mb-3 line-clamp-2  transition-colors duration-200">
            {highlightText(post.title, searchQuery)}
          </h2>

          <div className="flex items-center gap-2 mb-3 text-xs sm:text-sm flex-wrap">
            <span className="font-semibold text-gray-700">
              {highlightText(post.author.name, searchQuery)}
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center gap-1.5 text-gray-500">
              <FaCalendarAlt className="w-3 h-3" />
              {formatDate(post.publishedAt)}
            </span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <div className="flex items-center gap-2.5 sm:gap-3 text-sm text-gray-500 flex-wrap">
              {post.readTimeInMinutes && (
                <span className="flex items-center gap-1">
                  <FaClock className="w-3 h-3" />
                  {post.readTimeInMinutes}m
                </span>
              )}
              {post.views && (
                <span className="flex items-center gap-1">
                  <FaEye className="w-3 h-3" />
                  {formatNumber(post.views)}
                </span>
              )}
              {post.reactionCount && post.reactionCount > 0 && (
                <span className="flex items-center gap-1">
                  <FaHeart className="w-3 h-3" />
                  {formatNumber(post.reactionCount)}
                </span>
              )}
            </div>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4  sm:py-2 text-white rounded-lg text-sm sm:text-sm font-bold tracking-wide transition-all duration-200 bg-blue-800 hover:text-white"
            >
              Read
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          </div>
        </div>
      </article>
    );
  }
);

BlogCard.displayName = "BlogCard";

interface FilterPanelProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  availableTags: string[];
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  setFilters,
  availableTags,
}) => {
  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "mostViewed", label: "Most Viewed" },
    { value: "mostLiked", label: "Most Liked" },
    { value: "readTime", label: "Read Time" },
  ];

  const toggleTag = (tag: string) => {
    setFilters({
      ...filters,
      tags: filters.tags.includes(tag)
        ? filters.tags.filter((t) => t !== tag)
        : [...filters.tags, tag],
    });
  };

  const resetFilters = () => {
    setFilters({
      tags: [],
      readTimeMin: 0,
      readTimeMax: 100,
      sortBy: "newest",
    });
  };

  const activeFiltersCount =
    filters.tags.length +
    (filters.readTimeMin > 0 || filters.readTimeMax < 100 ? 1 : 0);

  return (
    <div className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
          <FaFilter className="w-4 h-4" />
          Filters
          {activeFiltersCount > 0 && (
            <span className="bg-cyan-500 text-white text-xs font-bold rounded-lg w-5 h-5 flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </h3>
        <button
          onClick={resetFilters}
          className="text-xs sm:text-sm text-cyan-600 hover:text-cyan-700 font-semibold"
        >
          Reset All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Sort By */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <FaSortAmountDown className="inline w-3.5 h-3.5 mr-1.5" />
            Sort By
          </label>
          <select
            title="none"
            value={filters.sortBy}
            onChange={(e) =>
              setFilters({ ...filters, sortBy: e.target.value as SortOption })
            }
            className="w-full bg-white border-2 border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-cyan-500 transition-colors"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Read Time Range */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <FaClock className="inline w-3.5 h-3.5 mr-1.5" />
            Read Time (minutes)
          </label>
          <div className="flex items-center gap-2">
            <input
              title="texting"
              type="number"
              min="0"
              max="100"
              value={filters.readTimeMin}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  readTimeMin: parseInt(e.target.value) || 0,
                })
              }
              className="w-full bg-white border-2 border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-cyan-500"
            />
            <span className="text-gray-500 text-sm">to</span>
            <input
              title="texting"
              type="number"
              min="0"
              max="100"
              value={filters.readTimeMax}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  readTimeMax: parseInt(e.target.value) || 100,
                })
              }
              className="w-full bg-white border-2 border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Tags ({filters.tags.length} selected)
          </label>
          <div className="max-h-32 overflow-y-auto bg-gray-50 border-2 border-gray-300 rounded-lg p-2">
            <div className="flex flex-wrap gap-1.5">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-2.5 py-1.5 rounded-md text-xs transition-all duration-200 ${
                    filters.tags.includes(tag)
                      ? "bg-cyan-500 text-white font-semibold"
                      : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SearchBarProps {
  searchInput: string;
  setSearchInput: (value: string) => void;
  resultsCount: number;
  totalCount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchInput,
  setSearchInput,
  resultsCount,
  totalCount,
}) => {
  return (
    <div className="relative w-full">
      <div className="relative">
        <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-base sm:text-lg" />
        <input
          type="text"
          placeholder="Search articles by title, content, author, or tags..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full pl-10 sm:pl-12 pr-12 border-2 border-gray-300 py-2.5 sm:py-3 rounded-xl text-gray-900 bg-white outline-none placeholder-gray-400 text-sm sm:text-base transition-all duration-200 focus:border-cyan-500 focus:shadow-lg"
        />
        {searchInput && (
          <button
            title="Clear search"
            onClick={() => setSearchInput("")}
            className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors duration-200 p-1.5 hover:bg-gray-100 rounded-lg"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        )}
      </div>

      {searchInput && (
        <div className="mt-2 text-xs sm:text-sm text-gray-600 font-medium">
          {resultsCount} of {totalCount} articles
        </div>
      )}
    </div>
  );
};

const BlogPageContent: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchEngine, setSearchEngine] = useState<SimpleSearchEngine | null>(
    null
  );
  const [filters, setFilters] = useState<Filters>({
    tags: [],
    readTimeMin: 0,
    readTimeMax: 100,
    sortBy: "newest",
  });

  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 3,
  });

  useEffect(() => {
    if (posts) {
      setSearchEngine(new SimpleSearchEngine(posts));
    }
  }, [posts]);

  const availableTags = useMemo(() => {
    if (!posts) return [];
    const tagsSet = new Set<string>();
    posts.forEach((post) => {
      post.tags.forEach((tag) => tagsSet.add(tag.name));
    });
    return Array.from(tagsSet).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!posts || !searchEngine) return [];

    let result = searchInput.trim() ? searchEngine.search(searchInput) : posts;

    // Apply tag filter
    if (filters.tags.length > 0) {
      result = result.filter((post) =>
        post.tags.some((tag) => filters.tags.includes(tag.name))
      );
    }

    // Apply read time filter
    result = result.filter((post) => {
      const readTime = post.readTimeInMinutes || 0;
      return readTime >= filters.readTimeMin && readTime <= filters.readTimeMax;
    });

    // Apply sorting
    result = [...result].sort((a, b) => {
      switch (filters.sortBy) {
        case "newest":
          return (
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
          );
        case "oldest":
          return (
            new Date(a.publishedAt).getTime() -
            new Date(b.publishedAt).getTime()
          );
        case "mostViewed":
          return (b.views || 0) - (a.views || 0);
        case "mostLiked":
          return (b.reactionCount || 0) - (a.reactionCount || 0);
        case "readTime":
          return (a.readTimeInMinutes || 0) - (b.readTimeInMinutes || 0);
        default:
          return 0;
      }
    });

    return result;
  }, [posts, searchInput, searchEngine, filters]);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 flex items-center justify-center p-4">
        <div className="text-center max-w-md border-2 border-gray-300 p-6 sm:p-8 bg-white rounded-2xl shadow-xl">
          <FaExclamationTriangle className="text-yellow-500 text-4xl sm:text-5xl mx-auto mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
            Failed to Load Blog Posts
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-6">
            {error instanceof Error ? error.message : "Unknown error occurred"}
          </p>
          <button
            onClick={() => refetch()}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-200 uppercase tracking-wide shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900">
      <div className="w-full">
        <section className="pt-12 sm:pt-16 md:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl web-headline font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                Read my <span className="text-green-700">Blogs</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Exploring cloud computing, DevOps, and React development through
                curiosity and real-world experience.
              </p>
            </div>
          </div>
        </section>

        <div className=" top-0 z-40 bg-gradient-to-b from-white to-transparent pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col gap-4">
              <SearchBar
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                resultsCount={filteredPosts.length}
                totalCount={posts?.length || 0}
              />
              <FilterPanel
                filters={filters}
                setFilters={setFilters}
                availableTags={availableTags}
              />
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16 sm:py-20">
              <FaSpinner className="animate-spin text-cyan-600 text-3xl sm:text-4xl mb-4" />
              <h3 className="text-lg sm:text-xl text-gray-900 mb-2 font-semibold">
                Loading articles...
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Fetching the latest insights
              </p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16 sm:py-20">
              <FaSearch className="text-gray-400 text-4xl sm:text-5xl mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                No articles found
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto px-4">
                Try adjusting your search terms or filters to discover more
                content
              </p>
              <button
                onClick={() => {
                  setSearchInput("");
                  setFilters({
                    tags: [],
                    readTimeMin: 0,
                    readTimeMax: 100,
                    sortBy: "newest",
                  });
                }}
                className="px-6 py-3 bg-cyan-600 text-white font-bold rounded-xl transition-all duration-200 uppercase tracking-wide shadow-lg hover:shadow-xl hover:bg-cyan-700"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} searchQuery={searchInput} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
    },
  },
});

const Blogs: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogPageContent />
    </QueryClientProvider>
  );
};

export default Blogs;
