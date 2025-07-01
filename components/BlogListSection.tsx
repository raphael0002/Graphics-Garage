
"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Calendar, Clock, Eye, Share2, Search, X, Grid, List } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface BlogPost {
    _id: string
    title: string
    slug: string
    excerpt: string
    featuredImage?: string
    category: string
    tags: string[]
    author: {
        name: string
        avatar?: string
    }
    createdAt: string
    views: number
    readTime: number
    featured: boolean
}

interface BlogListSectionProps {
    posts: BlogPost[]
}

export const BlogListSection = ({ posts }: BlogListSectionProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    // Simplified state management
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [sortBy, setSortBy] = useState("newest")
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts)
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

    // Extract unique categories
    const categories = ["all", ...Array.from(new Set(posts.map((post) => post.category)))]

    // Filter and search logic
    useEffect(() => {
        let filtered = [...posts]

        // Search functionality
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter(
                (post) =>
                    post.title.toLowerCase().includes(query) ||
                    post.excerpt.toLowerCase().includes(query) ||
                    post.category.toLowerCase().includes(query) ||
                    post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
                    post.author.name.toLowerCase().includes(query)
            )
        }

        // Category filter
        if (selectedCategory !== "all") {
            filtered = filtered.filter((post) => post.category === selectedCategory)
        }

        // Sorting
        switch (sortBy) {
            case "newest":
                filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                break
            case "popular":
                filtered.sort((a, b) => b.views - a.views)
                break
            case "oldest":
                filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
                break
            default:
                break
        }

        setFilteredPosts(filtered)
    }, [searchQuery, selectedCategory, sortBy, posts])

    const clearFilters = () => {
        setSearchQuery("")
        setSelectedCategory("all")
        setSortBy("newest")
    }

    const hasActiveFilters = searchQuery || selectedCategory !== "all" || sortBy !== "newest"
    const featuredPosts = filteredPosts.filter((post) => post.featured).slice(0, 2)
    const regularPosts = filteredPosts.filter((post) => !post.featured)

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
    }

    const sharePost = async (post: BlogPost) => {
        const url = `${window.location.origin}/blog/${post.slug}`

        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: url,
                })
            } catch (error) {
                console.log("Error sharing:", error)
            }
        } else {
            navigator.clipboard.writeText(url)
            // Toast notification would be better here
            alert("Link copied to clipboard!")
        }
    }

    return (
        <section className="py-20 section-light min-h-screen">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Search and Filter Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <Card className="bg-white/100 border-0">
                        <CardContent className="p-6">
                            {/* Top Row - Search and View Toggle */}
                            <div className="flex flex-col md:flex-row lg:flex-row gap-4 mb-6">
                                <div className="relative flex-1">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                                    <Input
                                        type="text"
                                        placeholder="Search articles, authors, or topics..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-12 pr-12 py-6 text-lg border-slate-200 focus:border-slate-900 focus:ring-slate-900/10 rounded-xl bg-white transition-all duration-200"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery("")}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>

                                {/* View Mode Toggle */}
                                <div className="flex items-center bg-slate-100 rounded-xl p-1">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`p-3 rounded-lg transition-all duration-200 ${viewMode === "grid"
                                            ? "card-professional shadow-sm text-slate-900"
                                            : "text-slate-500 hover:text-slate-700"
                                            }`}
                                    >
                                        <Grid className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`p-3 rounded-lg transition-all duration-200 ${viewMode === "list"
                                            ? "card-professional shadow-sm text-slate-900"
                                            : "text-slate-500 hover:text-slate-700"
                                            }`}
                                    >
                                        <List className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Bottom Row - Filters */}
                            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-slate-700 whitespace-nowrap">Category:</span>
                                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                            <SelectTrigger className="w-48 border-slate-200 focus:border-slate-900 rounded-lg bg-white">
                                                <SelectValue placeholder="All Categories" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-lg border-slate-200 bg-white shadow-xl">
                                                {categories.map((category) => (
                                                    <SelectItem key={category} value={category} className="rounded-md">
                                                        {category === "all" ? "All Categories" : category}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-slate-700 whitespace-nowrap">Sort by:</span>
                                        <Select value={sortBy} onValueChange={setSortBy}>
                                            <SelectTrigger className="w-40 border-slate-200 focus:border-slate-900 rounded-lg bg-white">
                                                <SelectValue placeholder="Sort by" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-lg border-slate-200 bg-white shadow-xl">
                                                <SelectItem value="newest" className="rounded-md">Latest</SelectItem>
                                                <SelectItem value="popular" className="rounded-md">Popular</SelectItem>
                                                <SelectItem value="oldest" className="rounded-md">Oldest</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Results count and clear filters */}
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-slate-600">
                                        {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                                    </span>
                                    {hasActiveFilters && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={clearFilters}
                                            className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
                                        >
                                            <X className="w-4 h-4 mr-2" />
                                            Clear
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Featured Posts */}
                {featuredPosts.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-professional mb-8">
                            Featured Posts<span className="text-purple-primary">.</span>
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                            {featuredPosts.map((post, index) => (
                                <motion.article
                                    key={post._id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="card-professional rounded-3xl overflow-hidden hover:border-purple-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
                                >
                                    <Link href={`/blog/${post.slug}`} className="block">
                                        <div className="relative overflow-hidden">
                                            <Image
                                                src={post.featuredImage || "/placeholder.svg?height=300&width=600"}
                                                alt={post.title}
                                                width={600}
                                                height={300}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute top-4 left-4">
                                                <Badge className="bg-purple-primary text-white hover:bg-purple-primary/90 rounded-full px-3 py-1">
                                                    Featured
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-center flex-wrap gap-2 mb-4">
                                                <Badge variant="secondary" className="bg-blue-100 text-blue-700 rounded-full">
                                                    {post.category}
                                                </Badge>
                                                {post.tags.slice(0, 2).map((tag) => (
                                                    <Badge key={tag} variant="outline" className="text-xs rounded-full">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>

                                            <div className="flex items-center space-x-4 mb-4 text-sm text-muted-professional">
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    {formatDate(post.createdAt)}
                                                </div>
                                                <div className="flex items-center">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    {post.readTime} min read
                                                </div>
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-bold text-professional mb-3 group-hover:text-purple-primary transition-colors duration-300 line-clamp-2">
                                                {post.title}
                                            </h3>

                                            <p className="text-muted-professional leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-3">
                                                    <div className="w-8 h-8 bg-purple-primary/10 rounded-full flex items-center justify-center">
                                                        <span className="text-xs font-medium text-purple-primary">
                                                            {post.author.name
                                                                .split(" ")
                                                                .map((n) => n[0])
                                                                .join("")}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-professional">{post.author.name}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-4 text-muted-professional text-sm">
                                                    <div className="flex items-center">
                                                        <Eye className="w-4 h-4 mr-1" />
                                                        {post.views.toLocaleString()}
                                                    </div>
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            sharePost(post)
                                                        }}
                                                        className="flex items-center hover:text-purple-primary transition-colors"
                                                    >
                                                        <Share2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Regular Posts */}
                {regularPosts.length > 0 && (
                    <div className={viewMode === "grid"
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        : "space-y-6"
                    }>
                        {regularPosts.map((post, index) => (
                            <motion.article
                                key={post._id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`card-professional rounded-3xl overflow-hidden hover:border-purple-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${viewMode === "list" ? "flex flex-col md:flex-row" : ""
                                    }`}
                            >
                                <Link href={`/blog/${post.slug}`} className="block">
                                    <div className={`relative overflow-hidden ${viewMode === "list" ? "md:w-80 md:flex-shrink-0" : ""
                                        }`}>
                                        <Image
                                            src={post.featuredImage || "/placeholder.svg?height=200&width=400"}
                                            alt={post.title}
                                            width={400}
                                            height={200}
                                            className={`object-cover group-hover:scale-105 transition-transform duration-300 ${viewMode === "list" ? "w-full h-48 md:h-full" : "w-full h-40"
                                                }`}
                                        />
                                    </div>

                                    <div className="p-6 flex-1">
                                        <div className="flex items-center flex-wrap gap-2 mb-4">
                                            <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs rounded-full">
                                                {post.category}
                                            </Badge>
                                            {post.tags.slice(0, 2).map((tag) => (
                                                <Badge key={tag} variant="outline" className="text-xs rounded-full">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex items-center space-x-4 mb-4 text-sm text-muted-professional">
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 mr-1" />
                                                {post.readTime} min
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {formatDate(post.createdAt)}
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-professional mb-3 group-hover:text-purple-primary transition-colors duration-300 line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-muted-professional text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-6 h-6 bg-purple-primary/10 rounded-full flex items-center justify-center">
                                                    <span className="text-xs font-medium text-purple-primary">
                                                        {post.author.name
                                                            .split(" ")
                                                            .map((n) => n[0])
                                                            .join("")}
                                                    </span>
                                                </div>
                                                <span className="text-xs text-professional">{post.author.name}</span>
                                            </div>
                                            <div className="flex items-center space-x-3 text-muted-professional text-xs">
                                                <div className="flex items-center">
                                                    <Eye className="w-3 h-3 mr-1" />
                                                    {post.views.toLocaleString()}
                                                </div>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        sharePost(post)
                                                    }}
                                                    className="flex items-center hover:text-purple-primary transition-colors"
                                                >
                                                    <Share2 className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                )}

                {/* Enhanced No Results State */}
                {filteredPosts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center py-20"
                    >
                        <div className="max-w-md mx-auto">
                            <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                                <Search className="w-16 h-16 text-purple-primary/60" />
                            </div>
                            <h3 className="text-3xl font-bold text-professional mb-4">No posts found</h3>
                            <p className="text-muted-professional mb-8 leading-relaxed">
                                {`We couldn't find any posts matching your search criteria. Try adjusting your filters or search terms to discover more content.`}
                            </p>
                            {hasActiveFilters && (
                                <Button
                                    onClick={clearFilters}
                                    className="bg-purple-primary hover:bg-purple-primary/90 text-white rounded-xl px-8 py-3"
                                >
                                    <X className="w-4 h-4 mr-2" />
                                    Clear All Filters
                                </Button>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
