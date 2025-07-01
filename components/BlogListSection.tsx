"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Calendar, Clock, Eye, Share2, Search, Filter, X, ChevronDown, Grid, List } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

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

    // Search and filter states
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedTag, setSelectedTag] = useState("all")
    const [sortBy, setSortBy] = useState("newest")
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts)
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

    // Extract unique categories and tags
    const categories = ["all", ...Array.from(new Set(posts.map((post) => post.category)))]
    const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))
    const tags = ["all", ...allTags]

    // Filter and search logic
    useEffect(() => {
        let filtered = [...posts]

        // Search by title, excerpt, category, and tags
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter(
                (post) =>
                    post.title.toLowerCase().includes(query) ||
                    post.excerpt.toLowerCase().includes(query) ||
                    post.category.toLowerCase().includes(query) ||
                    post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
                    post.author.name.toLowerCase().includes(query),
            )
        }

        // Filter by category
        if (selectedCategory !== "all") {
            filtered = filtered.filter((post) => post.category === selectedCategory)
        }

        // Filter by tag
        if (selectedTag !== "all") {
            filtered = filtered.filter((post) => post.tags.includes(selectedTag))
        }

        // Sort posts
        switch (sortBy) {
            case "newest":
                filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                break
            case "oldest":
                filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
                break
            case "most-viewed":
                filtered.sort((a, b) => b.views - a.views)
                break
            case "least-viewed":
                filtered.sort((a, b) => a.views - b.views)
                break
            case "longest-read":
                filtered.sort((a, b) => b.readTime - a.readTime)
                break
            case "shortest-read":
                filtered.sort((a, b) => a.readTime - b.readTime)
                break
            default:
                break
        }

        setFilteredPosts(filtered)
    }, [searchQuery, selectedCategory, selectedTag, sortBy, posts])

    const clearFilters = () => {
        setSearchQuery("")
        setSelectedCategory("all")
        setSelectedTag("all")
        setSortBy("newest")
    }

    const hasActiveFilters = searchQuery || selectedCategory !== "all" || selectedTag !== "all" || sortBy !== "newest"

    const featuredPosts = filteredPosts.filter((post) => post.featured).slice(0, 3)
    const regularPosts = filteredPosts.filter((post) => !post.featured)

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
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
            // You could add a toast notification here instead of alert
            alert("Link copied to clipboard!")
        }
    }

    return (
        <section className="py-16 md:py-20 section-light transition-colors duration-300 relative">

            <div className="container mx-auto px-4 md:px-6 relative">
                {/* Enhanced Search and Filter Section */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div>
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-professional mb-2">
                                    Explore Our Content<span className="text-purple-primary">.</span>
                                </h2>
                                <p className="text-muted-professional">
                                    {`Find exactly what you're looking for with our advanced search and filters`}
                                </p>
                            </div>

                            {/* View Mode Toggle */}
                            <div className="flex items-center gap-2 mt-4 md:mt-0">
                                <span className="text-sm text-muted-professional mr-2">View:</span>
                                <div className="flex items-center bg-muted rounded-xl p-1">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`p-2 rounded-lg transition-all duration-200 ${viewMode === "grid"
                                            ? "bg-background shadow-sm text-professional"
                                            : "text-muted-professional hover:text-professional"
                                            }`}
                                    >
                                        <Grid className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`p-2 rounded-lg transition-all duration-200 ${viewMode === "list"
                                            ? "bg-background shadow-sm text-professional"
                                            : "text-muted-professional hover:text-professional"
                                            }`}
                                    >
                                        <List className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Separator className="mb-6" />

                        {/* Search and Filters */}
                        <div className="space-y-6">
                            {/* Search Input */}
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-professional w-5 h-5" />
                                <Input
                                    type="text"
                                    placeholder="Search posts by title, category, tags, or author..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-12 pr-4 py-4 text-lg border-border focus:border-purple-primary focus:ring-purple-primary/20 rounded-2xl bg-background/50 backdrop-blur-sm transition-all duration-200"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-professional hover:text-professional transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>

                            {/* Desktop Filters */}
                            <div className="hidden lg:flex items-center gap-4 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-professional">Category:</span>
                                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                        <SelectTrigger className="w-48 border-border focus:border-purple-primary rounded-xl bg-background/50 backdrop-blur-sm">
                                            <SelectValue placeholder="All Categories" />
                                            <ChevronDown className="w-4 h-4 opacity-50" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl border-border bg-background/95 backdrop-blur-sm">
                                            {categories.map((category) => (
                                                <SelectItem key={category} value={category} className="rounded-lg">
                                                    {category === "all" ? "All Categories" : category}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-professional">Tag:</span>
                                    <Select value={selectedTag} onValueChange={setSelectedTag}>
                                        <SelectTrigger className="w-40 border-border focus:border-purple-primary rounded-xl bg-background/50 backdrop-blur-sm">
                                            <SelectValue placeholder="All Tags" />
                                            <ChevronDown className="w-4 h-4 opacity-50" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl border-border bg-background/95 backdrop-blur-sm">
                                            {tags.map((tag) => (
                                                <SelectItem key={tag} value={tag} className="rounded-lg">
                                                    {tag === "all" ? "All Tags" : tag}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-professional">Sort:</span>
                                    <Select value={sortBy} onValueChange={setSortBy}>
                                        <SelectTrigger className="w-48 border-border focus:border-purple-primary rounded-xl bg-background/50 backdrop-blur-sm">
                                            <SelectValue placeholder="Sort by" />
                                            <ChevronDown className="w-4 h-4 opacity-50" />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl border-border bg-background/95 backdrop-blur-sm">
                                            <SelectItem value="newest" className="rounded-lg">Newest First</SelectItem>
                                            <SelectItem value="oldest" className="rounded-lg">Oldest First</SelectItem>
                                            <SelectItem value="most-viewed" className="rounded-lg">Most Viewed</SelectItem>
                                            <SelectItem value="least-viewed" className="rounded-lg">Least Viewed</SelectItem>
                                            <SelectItem value="longest-read" className="rounded-lg">Longest Read</SelectItem>
                                            <SelectItem value="shortest-read" className="rounded-lg">Shortest Read</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {hasActiveFilters && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={clearFilters}
                                        className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 rounded-xl bg-transparent"
                                    >
                                        <X className="w-4 h-4 mr-2" />
                                        Clear Filters
                                    </Button>
                                )}
                            </div>

                            {/* Mobile Filter Button */}
                            <div className="lg:hidden">
                                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                                    <SheetTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="w-full border-border rounded-xl bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-200"
                                        >
                                            <Filter className="w-4 h-4 mr-2" />
                                            Filters & Sort
                                            {hasActiveFilters && (
                                                <Badge variant="secondary" className="ml-2 bg-purple-primary/10 text-purple-primary">
                                                    {[searchQuery, selectedCategory !== "all", selectedTag !== "all", sortBy !== "newest"].filter(Boolean).length}
                                                </Badge>
                                            )}
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent className="w-full sm:max-w-md">
                                        <SheetHeader>
                                            <SheetTitle className="text-professional">Filter & Sort Posts</SheetTitle>
                                            <SheetDescription className="text-muted-professional">
                                                {`Refine your search to find exactly what you're looking for`}
                                            </SheetDescription>
                                        </SheetHeader>
                                        <div className="space-y-6 mt-6">
                                            <div>
                                                <label className="text-sm font-medium text-professional mb-3 block">Category</label>
                                                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                                    <SelectTrigger className="w-full rounded-xl">
                                                        <SelectValue placeholder="Select category" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {categories.map((category) => (
                                                            <SelectItem key={category} value={category}>
                                                                {category === "all" ? "All Categories" : category}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div>
                                                <label className="text-sm font-medium text-professional mb-3 block">Tag</label>
                                                <Select value={selectedTag} onValueChange={setSelectedTag}>
                                                    <SelectTrigger className="w-full rounded-xl">
                                                        <SelectValue placeholder="Select tag" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {tags.map((tag) => (
                                                            <SelectItem key={tag} value={tag}>
                                                                {tag === "all" ? "All Tags" : tag}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div>
                                                <label className="text-sm font-medium text-professional mb-3 block">Sort By</label>
                                                <Select value={sortBy} onValueChange={setSortBy}>
                                                    <SelectTrigger className="w-full rounded-xl">
                                                        <SelectValue placeholder="Sort by" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="newest">Newest First</SelectItem>
                                                        <SelectItem value="oldest">Oldest First</SelectItem>
                                                        <SelectItem value="most-viewed">Most Viewed</SelectItem>
                                                        <SelectItem value="least-viewed">Least Viewed</SelectItem>
                                                        <SelectItem value="longest-read">Longest Read</SelectItem>
                                                        <SelectItem value="shortest-read">Shortest Read</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            {hasActiveFilters && (
                                                <Button
                                                    variant="outline"
                                                    onClick={clearFilters}
                                                    className="w-full border-red-200 text-red-600 hover:bg-red-50 bg-transparent rounded-xl"
                                                >
                                                    <X className="w-4 h-4 mr-2" />
                                                    Clear All Filters
                                                </Button>
                                            )}
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>

                            {/* Active Filters Display */}
                            {hasActiveFilters && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="flex flex-wrap gap-2 pt-4 border-t border-border"
                                >
                                    <span className="text-sm font-medium text-professional">Active filters:</span>
                                    {searchQuery && (
                                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 rounded-full">
                                            Search: {`"${searchQuery}"`}
                                        </Badge>
                                    )}
                                    {selectedCategory !== "all" && (
                                        <Badge variant="secondary" className="bg-green-100 text-green-700 rounded-full">
                                            Category: {selectedCategory}
                                        </Badge>
                                    )}
                                    {selectedTag !== "all" && (
                                        <Badge variant="secondary" className="bg-orange-100 text-orange-700 rounded-full">
                                            Tag: {selectedTag}
                                        </Badge>
                                    )}
                                    {sortBy !== "newest" && (
                                        <Badge variant="secondary" className="bg-purple-100 text-purple-700 rounded-full">
                                            Sort: {sortBy.replace("-", " ")}
                                        </Badge>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Results Summary */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8 flex items-center justify-between"
                >
                    <div>
                        <p className="text-muted-professional">
                            {filteredPosts.length === 0
                                ? "No posts found matching your criteria"
                                : `Showing ${filteredPosts.length} ${filteredPosts.length === 1 ? "post" : "posts"}`}
                            {hasActiveFilters && ` (filtered from ${posts.length} total)`}
                        </p>
                    </div>
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
