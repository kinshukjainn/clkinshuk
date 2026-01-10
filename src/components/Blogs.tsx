import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

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

interface BlogItemProps {
  post: BlogPost;
  searchQuery?: string;
}

const BlogItem: React.FC<BlogItemProps> = React.memo(
  ({ post, searchQuery }) => {
    const formatDate = useCallback((dateString: string): string => {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
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
          <mark key={i} className="bg-emerald-500/20 text-emerald-300 px-0.5">
            {part}
          </mark>
        ) : (
          part
        )
      );
    }, []);

    return (
      <div className="border-b border-white/10 py-6 px-4 hover:bg-white/5 transition-all duration-300">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
              {highlightText(post.title, searchQuery)}
            </h3>
            <p className="text-sm text-gray-400 mb-3 line-clamp-2">
              {post.brief}
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500 flex-wrap">
              <span className="text-gray-400">
                {highlightText(post.author.name, searchQuery)}
              </span>
              <span className="text-gray-700">•</span>
              <span>{formatDate(post.publishedAt)}</span>
              {post.readTimeInMinutes && (
                <>
                  <span className="text-gray-700">•</span>
                  <span>{post.readTimeInMinutes} min read</span>
                </>
              )}
            </div>
          </div>
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-6 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full transition-all duration-300"
          >
            Read →
          </a>
        </div>
      </div>
    );
  }
);

BlogItem.displayName = "BlogItem";

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
    <div className="bg-white/5 border border-white/10 rounded-4xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
          Filters
          {activeFiltersCount > 0 && (
            <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-black bg-emerald-400 rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </h3>
        <button
          onClick={resetFilters}
          className="text-sm text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Sort By
          </label>
          <select
            title="Sort By"
            value={filters.sortBy}
            onChange={(e) =>
              setFilters({ ...filters, sortBy: e.target.value as SortOption })
            }
            className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            {sortOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-zinc-900"
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Read Time (minutes)
          </label>
          <div className="flex items-center gap-2">
            <input
              title="Minimum Read Time"
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
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <span className="text-sm text-gray-500">-</span>
            <input
              title="Maximum Read Time"
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
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Tags ({filters.tags.length} selected)
          </label>
          <div className="max-h-32 overflow-y-auto border border-white/10 rounded-lg p-2 bg-black/40">
            <div className="flex flex-wrap gap-1.5">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${
                    filters.tags.includes(tag)
                      ? "bg-emerald-600 text-white"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
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
    <div className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-gray-500"
        />
        {searchInput && (
          <button
            onClick={() => setSearchInput("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 text-2xl font-light"
          >
            ×
          </button>
        )}
      </div>
      {searchInput && (
        <div className="mt-3 text-sm text-gray-400 font-medium">
          Showing {resultsCount} of {totalCount} articles
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

    if (filters.tags.length > 0) {
      result = result.filter((post) =>
        post.tags.some((tag) => filters.tags.includes(tag.name))
      );
    }

    result = result.filter((post) => {
      const readTime = post.readTimeInMinutes || 0;
      return readTime >= filters.readTimeMin && readTime <= filters.readTimeMax;
    });

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
      <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-neutral-950 to-black pt-20 flex items-center justify-center p-4">
        <div className="text-center max-w-md bg-white/5 border border-white/10 p-8 rounded-4xl">
          <h2 className="text-xl font-bold text-white mb-3">
            Failed to Load Blog Posts
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            {error instanceof Error ? error.message : "Unknown error occurred"}
          </p>
          <button
            onClick={() => refetch()}
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-zinc-950 via-neutral-950 to-black">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        <header className="mb-12 pb-12 border-b border-white/10">
          <h1 className="text-4xl brand-glow md:text-5xl heading-font font-bold text-white mb-3 leading-tight tracking-tight">
            Technical Blog
          </h1>
          <p className="text-gray-400 text-lg">
            Articles on cloud computing, DevOps, security, and infrastructure
            engineering
          </p>
        </header>

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

        <main>
          {isLoading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-white/10 border-t-emerald-500 mb-4"></div>
              <p className="text-gray-400 font-medium">Loading articles...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-white/5 border border-white/10 rounded-4xl p-8">
              <h3 className="text-xl font-semibold text-white mb-3">
                No articles found
              </h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search or filters
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
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-4xl overflow-hidden">
              {filteredPosts.map((post) => (
                <BlogItem key={post.id} post={post} searchQuery={searchInput} />
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
