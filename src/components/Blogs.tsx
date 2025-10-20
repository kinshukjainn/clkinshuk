import React, { useState, useMemo, useCallback, useEffect, useRef } from "react"
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query"
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
  FaKeyboard,
  FaHistory,
} from "react-icons/fa"

// Types
interface BlogPost {
  id: string
  title: string
  brief: string
  slug: string
  publishedAt: string
  updatedAt: string
  readTimeInMinutes?: number
  views?: number
  reactionCount?: number
  coverImage?: {
    url: string
  }
  tags: Array<{
    id: string
    name: string
    slug: string
  }>
  author: {
    name: string
    profilePicture?: string
  }
  url?: string
}

interface SearchSuggestion {
  type: "post" | "recent"
  value: string
  label: string
  post?: BlogPost
}

class SimpleSearchEngine {
  private posts: BlogPost[] = []
  private recentSearches: string[] = []

  constructor(posts: BlogPost[]) {
    this.posts = posts
  }

  addRecentSearch(query: string) {
    if (query.trim().length < 2) return
    const trimmedQuery = query.trim().toLowerCase()
    this.recentSearches = [trimmedQuery, ...this.recentSearches.filter((s) => s !== trimmedQuery)].slice(0, 5)
  }

  getRecentSearches(): string[] {
    return this.recentSearches
  }

  search(query: string): BlogPost[] {
    if (!query.trim()) return this.posts

    const queryLower = query.toLowerCase()
    const queryWords = queryLower.split(/\s+/).filter((w) => w.length > 0)

    return this.posts
      .map((post) => {
        let score = 0
        const titleLower = post.title.toLowerCase()
        const briefLower = post.brief.toLowerCase()
        const authorLower = post.author.name.toLowerCase()
        const tagsLower = post.tags.map((t) => t.name.toLowerCase()).join(" ")

        if (titleLower.includes(queryLower)) score += 100
        if (briefLower.includes(queryLower)) score += 50
        if (authorLower.includes(queryLower)) score += 30
        if (tagsLower.includes(queryLower)) score += 20

        queryWords.forEach((word) => {
          if (titleLower.includes(word)) score += 10
          if (briefLower.includes(word)) score += 5
          if (authorLower.includes(word)) score += 3
          if (tagsLower.includes(word)) score += 2
        })

        return { post, score }
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ post }) => post)
  }

  getSuggestions(query: string): SearchSuggestion[] {
    if (!query.trim()) {
      return this.recentSearches.map((search) => ({
        type: "recent",
        value: search,
        label: search,
      }))
    }

    const suggestions: SearchSuggestion[] = []
    const queryLower = query.toLowerCase()

    this.posts
      .filter((post) => post.title.toLowerCase().includes(queryLower))
      .slice(0, 5)
      .forEach((post) => {
        suggestions.push({
          type: "post",
          value: post.title,
          label: post.title,
          post,
        })
      })

    return suggestions
  }
}

const HASHNODE_API_URL = "https://gql.hashnode.com/"
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
`

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
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    if (data.errors) {
      throw new Error(data.errors[0]?.message || "GraphQL error")
    }

    if (!data.data?.publication?.posts?.edges) {
      throw new Error("No blog posts found")
    }

    type Edge = { node: BlogPost }
    const posts = (data.data.publication.posts.edges as Edge[]).map((edge) => ({
      ...edge.node,
      url: `https://blog.cloudkinshuk.in/${edge.node.slug}`,
    }))

    return posts
  } catch (error) {
    console.error("Detailed error in fetchBlogPosts:", error)
    throw error
  }
}

interface BlogCardProps {
  post: BlogPost
  searchQuery?: string
}

const BlogCard: React.FC<BlogCardProps> = React.memo(({ post, searchQuery }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const formatDate = useCallback((dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }, [])

  const formatNumber = useCallback((num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toString()
  }, [])

  const highlightText = useCallback((text: string, query?: string) => {
    if (!query || !query.trim()) return text
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
    const parts = text.split(regex)
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-400 text-black px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      ),
    )
  }, [])

  return (
    <article className="group bg-zinc-900/50 backdrop-blur-sm rounded-4xl border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden bg-zinc-950">
        {post.coverImage && !imageError ? (
          <>
            <img
              src={post.coverImage.url}
              alt={post.title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                imageLoaded ? "opacity-100 group-hover:scale-110" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
                <FaSpinner className="animate-spin text-cyan-500 text-xl" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-zinc-950">
            <FaExternalLinkAlt className="text-zinc-700 text-3xl" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Title */}
        <h2 className="text-base sm:text-lg font-bold text-white leading-snug mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-200">
          {highlightText(post.title, searchQuery)}
        </h2>

        {/* Author & Date */}
        <div className="flex items-center gap-2 mb-3 text-xs sm:text-sm flex-wrap">
          <span className="font-semibold text-cyan-400">{highlightText(post.author.name, searchQuery)}</span>
          <span className="text-zinc-600">•</span>
          <span className="flex items-center gap-1.5 text-zinc-400">
            <FaCalendarAlt className="w-3 h-3" />
            {formatDate(post.publishedAt)}
          </span>
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
          <div className="flex items-center gap-2.5 sm:gap-3 text-xs text-zinc-400 flex-wrap">
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-800 hover:bg-blue-700 text-white rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-blue-500/20"
          >
            Read
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>
      </div>
    </article>
  )
})

BlogCard.displayName = "BlogCard"

interface SearchBarProps {
  searchInput: string
  setSearchInput: (value: string) => void
  resultsCount: number
  totalCount: number
  searchEngine: SimpleSearchEngine | null
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchInput,
  setSearchInput,
  resultsCount,
  totalCount,
  searchEngine,
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchEngine) {
      const newSuggestions = searchEngine.getSuggestions(searchInput)
      setSuggestions(newSuggestions)
      setSelectedIndex(-1)
    }
  }, [searchInput, searchEngine])

  const handleSearch = useCallback(() => {
    if (searchInput.trim() && searchEngine) {
      searchEngine.addRecentSearch(searchInput)
      setShowSuggestions(false)
    }
  }, [searchInput, searchEngine])

  const handleSuggestionClick = useCallback(
    (suggestion: SearchSuggestion) => {
      setSearchInput(suggestion.value)
      setShowSuggestions(false)
      if (searchEngine) {
        searchEngine.addRecentSearch(suggestion.value)
      }
    },
    [setSearchInput, searchEngine],
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
        setShowSuggestions(true)
      }

      if (showSuggestions && suggestions.length > 0) {
        switch (e.key) {
          case "ArrowDown":
            e.preventDefault()
            setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1))
            break
          case "ArrowUp":
            e.preventDefault()
            setSelectedIndex((prev) => Math.max(prev - 1, -1))
            break
          case "Enter":
            e.preventDefault()
            if (selectedIndex >= 0 && suggestions[selectedIndex]) {
              handleSuggestionClick(suggestions[selectedIndex])
            } else if (searchInput.trim()) {
              handleSearch()
            }
            break
          case "Escape":
            setShowSuggestions(false)
            setSelectedIndex(-1)
            break
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [showSuggestions, suggestions, selectedIndex, searchInput, handleSearch, handleSuggestionClick])

  const getSuggestionIcon = (type: SearchSuggestion["type"]) => {
    switch (type) {
      case "post":
        return <FaSearch className="w-3.5 h-3.5" />
      case "recent":
        return <FaHistory className="w-3.5 h-3.5" />
      default:
        return <FaSearch className="w-3.5 h-3.5 text-white " />
    }
  }

  return (
    <div className="relative w-full">
      <div className="relative">
        <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-white  text-base sm:text-lg " />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search articles... (⌘K)"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="w-full pl-10  sm:pl-12 pr-20 sm:pr-32 bg-zinc-900/50 backdrop-blur-xl py-3 sm:py-3.5 rounded-full   focus:border-cyan-500 text-white outline-none placeholder-zinc-500 text-md sm:text-base transition-all duration-200"
        />
        <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1.5 sm:gap-2">
          {searchInput && (
            <button
              title="Clear search"
              onClick={() => {
                setSearchInput("")
                setShowSuggestions(false)
              }}
              className="text-white hover:text-white transition-colors duration-200 p-1"
            >
              <FaTimes className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          )}
          <div className="hidden sm:flex items-center gap-1.5 rounded-lg text-xs text-zinc-400 bg-zinc-800/80 px-2.5 py-1.5 border border-zinc-700">
            <FaKeyboard className="w-3 h-3" />
            ⌘K
          </div>
        </div>
      </div>

      {/* Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl bg-zinc-900/95 backdrop-blur-lg border border-zinc-800 z-50 max-h-60 sm:max-h-80 overflow-y-auto shadow-2xl">
          {suggestions.map((suggestion, index) => (
            <button
              key={`${suggestion.type}-${suggestion.value}`}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`w-full flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 cursor-pointer text-left hover:bg-zinc-800/80 transition-colors duration-150 ${
                index === selectedIndex ? "bg-zinc-800/80" : ""
              } border-b border-zinc-800 last:border-b-0`}
            >
              <div className="p-1.5 sm:p-2 text-cyan-400 bg-cyan-500/10 rounded-lg">
                {getSuggestionIcon(suggestion.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-xs sm:text-sm font-medium truncate">{suggestion.label}</div>
                <div className="text-xs text-zinc-500 capitalize mt-0.5">
                  {suggestion.type === "recent" ? "Recent search" : "Article"}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Results indicator */}
      {searchInput && (
        <div className="absolute -bottom-5 sm:-bottom-6 left-0 text-xs sm:text-sm text-zinc-400 font-mono">
          {resultsCount} of {totalCount} articles
        </div>
      )}
    </div>
  )
}

const styles = `
  .noise-bg {
    background: #000000;
    background-image:
      radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
      radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
      radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0);
    background-size: 20px 20px, 30px 30px, 25px 25px;
    background-position: 0 0, 10px 10px, 15px 5px;
  }
`

const BlogPageContent: React.FC = () => {
  const [searchInput, setSearchInput] = useState("")
  const [searchEngine, setSearchEngine] = useState<SimpleSearchEngine | null>(null)

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
  })

  useEffect(() => {
    if (posts) {
      setSearchEngine(new SimpleSearchEngine(posts))
    }
  }, [posts])

  const filteredPosts = useMemo(() => {
    if (!posts || !searchEngine) return []

    if (!searchInput.trim()) {
      return [...posts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    }

    return searchEngine.search(searchInput)
  }, [posts, searchInput, searchEngine])

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white flex items-center justify-center p-4">
        <div className="text-center max-w-md border border-zinc-800 p-6 sm:p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl">
          <FaExclamationTriangle className="text-yellow-400 text-4xl sm:text-5xl mx-auto mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Failed to Load Blog Posts</h2>
          <p className="text-zinc-400 text-xs sm:text-sm mb-6">
            {error instanceof Error ? error.message : "Unknown error occurred"}
          </p>
          <button
            onClick={() => refetch()}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl transition-all duration-200 uppercase tracking-wide shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen noise-bg text-white relative overflow-x-hidden">
        <div className="relative z-10">
        {/* Hero Section */}
        <section className="border-b pt-20 border-zinc-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Read my <span className="text-blue-500 font-mono">Blogs</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto px-4">
                Exploring cloud computing, DevOps, and React development through curiosity and real-world experience.
              </p>
            </div>
          </div>
        </section>

        {/* Search */}
        <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-zinc-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <SearchBar
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              resultsCount={filteredPosts.length}
              totalCount={posts?.length || 0}
              searchEngine={searchEngine}
            />
          </div>
        </div>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-16 sm:py-20">
              <FaSpinner className="animate-spin text-cyan-500 text-3xl sm:text-4xl mb-4" />
              <h3 className="text-lg sm:text-xl text-white mb-2 font-semibold">Loading articles...</h3>
              <p className="text-zinc-400 text-xs sm:text-sm">Fetching the latest insights</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16 sm:py-20 border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm rounded-2xl">
              <FaSearch className="text-white text-4xl sm:text-5xl mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">No articles found</h3>
              <p className="text-zinc-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto px-4">Try different search terms to discover more content</p>
              <button
                onClick={() => setSearchInput("")}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl transition-all duration-200 uppercase tracking-wide shadow-lg hover:shadow-xl"
              >
                Clear Search
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
    </>
  )
}

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
})

const Blogs: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogPageContent />
    </QueryClientProvider>
  )
}

export default Blogs