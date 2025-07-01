"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Eye,
  Share2,
  Search,
  Filter,
  X,
  ChevronDown,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar?: string;
  };
  createdAt: string;
  views: number;
  readTime: number;
  featured: boolean;
}

interface BlogListSectionProps {
  posts: BlogPost[];
}

export const BlogListSection = ({
  posts,
}: BlogListSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [filteredPosts, setFilteredPosts] =
    useState<BlogPost[]>(posts);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">(
    "list"
  ); // Default to list for long cards

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [loadMoreCount, setLoadMoreCount] = useState(6); // For load more functionality
  const [paginationType, setPaginationType] = useState<
    "pagination" | "loadmore"
  >("loadmore");
  const postsPerPage = 6;

  // Extract unique categories
  const categories = [
    "all",
    ...Array.from(
      new Set(posts.map((post) => post.category))
    ),
  ];

  // Filter and search logic
  useEffect(() => {
    let filtered = [...posts];

    // Search by title, excerpt, category, and author
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(query)
          ) ||
          post.author.name.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (post) => post.category === selectedCategory
      );
    }

    // Sort posts
    switch (sortBy) {
      case "newest":
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() -
            new Date(a.createdAt).getTime()
        );
        break;
      case "oldest":
        filtered.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() -
            new Date(b.createdAt).getTime()
        );
        break;
      case "most-viewed":
        filtered.sort((a, b) => b.views - a.views);
        break;
      case "shortest-read":
        filtered.sort((a, b) => a.readTime - b.readTime);
        break;
      default:
        break;
    }

    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
    setLoadMoreCount(6); // Reset load more count
  }, [searchQuery, selectedCategory, sortBy, posts]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("newest");
  };

  const hasActiveFilters =
    searchQuery ||
    selectedCategory !== "all" ||
    sortBy !== "newest";

  const featuredPosts = filteredPosts
    .filter((post) => post.featured)
    .slice(0, 3);
  const regularPosts = filteredPosts.filter(
    (post) => !post.featured
  );

  // Pagination logic
  const totalPages = Math.ceil(
    regularPosts.length / postsPerPage
  );
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts =
    paginationType === "pagination"
      ? regularPosts.slice(startIndex, endIndex)
      : regularPosts.slice(0, loadMoreCount);

  const hasMorePosts = loadMoreCount < regularPosts.length;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );
  };

  const sharePost = async (post: BlogPost) => {
    const url = `${window.location.origin}/blog/${post.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: url,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const loadMorePosts = () => {
    setLoadMoreCount((prev) => prev + 6);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <Button
            key={i}
            variant={
              currentPage === i ? "default" : "outline"
            }
            size="sm"
            onClick={() => goToPage(i)}
            className={`min-w-[40px] ${
              currentPage === i
                ? "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {i}
          </Button>
        );
      }
    } else {
      // Always show first page
      buttons.push(
        <Button
          key={1}
          variant={
            currentPage === 1 ? "default" : "outline"
          }
          size="sm"
          onClick={() => goToPage(1)}
          className={`min-w-[40px] ${
            currentPage === 1
              ? "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          1
        </Button>
      );

      if (currentPage > 3) {
        buttons.push(
          <span
            key="ellipsis1"
            className="px-2 text-gray-500"
          >
            <MoreHorizontal className="w-4 h-4" />
          </span>
        );
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        buttons.push(
          <Button
            key={i}
            variant={
              currentPage === i ? "default" : "outline"
            }
            size="sm"
            onClick={() => goToPage(i)}
            className={`min-w-[40px] ${
              currentPage === i
                ? "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {i}
          </Button>
        );
      }

      if (currentPage < totalPages - 2) {
        buttons.push(
          <span
            key="ellipsis2"
            className="px-2 text-gray-500"
          >
            <MoreHorizontal className="w-4 h-4" />
          </span>
        );
      }

      // Always show last page
      if (totalPages > 1) {
        buttons.push(
          <Button
            key={totalPages}
            variant={
              currentPage === totalPages
                ? "default"
                : "outline"
            }
            size="sm"
            onClick={() => goToPage(totalPages)}
            className={`min-w-[40px] ${
              currentPage === totalPages
                ? "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {totalPages}
          </Button>
        );
      }
    }

    return buttons;
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header and Search Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Our{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Blog
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover insights, tutorials, and stories from
              our community
            </p>
          </div>

          {/* Search and Controls */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles, authors, or topics..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                className="pl-12 pr-12 py-4 text-lg border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-gray-50 dark:bg-gray-700 transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Controls Row */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    Category:
                  </span>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger className="w-40 border-gray-300 dark:border-gray-600 focus:border-blue-500 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <SelectValue placeholder="All" />
                      <ChevronDown className="w-4 h-4 opacity-50" />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                      {categories.map((category) => (
                        <SelectItem
                          key={category}
                          value={category}
                          className="rounded-md"
                        >
                          {category === "all"
                            ? "All Categories"
                            : category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    Sort:
                  </span>
                  <Select
                    value={sortBy}
                    onValueChange={setSortBy}
                  >
                    <SelectTrigger className="w-36 border-gray-300 dark:border-gray-600 focus:border-blue-500 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <SelectValue placeholder="Sort by" />
                      <ChevronDown className="w-4 h-4 opacity-50" />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                      <SelectItem
                        value="newest"
                        className="rounded-md"
                      >
                        Latest
                      </SelectItem>
                      <SelectItem
                        value="oldest"
                        className="rounded-md"
                      >
                        Oldest
                      </SelectItem>
                      <SelectItem
                        value="most-viewed"
                        className="rounded-md"
                      >
                        Popular
                      </SelectItem>
                      <SelectItem
                        value="shortest-read"
                        className="rounded-md"
                      >
                        Quick Read
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Pagination Type Toggle */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    View:
                  </span>
                  <Select
                    value={paginationType}
                    onValueChange={(
                      value: "pagination" | "loadmore"
                    ) => setPaginationType(value)}
                  >
                    <SelectTrigger className="w-32 border-gray-300 dark:border-gray-600 focus:border-blue-500 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <SelectValue />
                      <ChevronDown className="w-4 h-4 opacity-50" />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                      <SelectItem
                        value="loadmore"
                        className="rounded-md"
                      >
                        Load More
                      </SelectItem>
                      <SelectItem
                        value="pagination"
                        className="rounded-md"
                      >
                        Pagination
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* View Mode and Clear Filters */}
              <div className="flex items-center gap-4">
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                    className="border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20 rounded-lg bg-transparent"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                )}

                {/* View Mode Toggle */}
                <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === "grid"
                        ? "bg-white dark:bg-gray-600 shadow-sm text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === "list"
                        ? "bg-white dark:bg-gray-600 shadow-sm text-gray-900 dark:text-white"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Filter Sheet */}
            <div className="lg:hidden mt-4">
              <Sheet
                open={isFilterOpen}
                onOpenChange={setIsFilterOpen}
              >
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    More Filters
                    {hasActiveFilters && (
                      <Badge
                        variant="secondary"
                        className="ml-2 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                      >
                        {
                          [
                            searchQuery,
                            selectedCategory !== "all",
                            sortBy !== "newest",
                          ].filter(Boolean).length
                        }
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md bg-white dark:bg-gray-800">
                  <SheetHeader>
                    <SheetTitle className="text-gray-900 dark:text-white">
                      Filter Posts
                    </SheetTitle>
                    <SheetDescription className="text-gray-600 dark:text-gray-300">
                      Refine your search to find the perfect
                      content
                    </SheetDescription>
                  </SheetHeader>
                  <div className="space-y-6 mt-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                        Category
                      </label>
                      <Select
                        value={selectedCategory}
                        onValueChange={setSelectedCategory}
                      >
                        <SelectTrigger className="w-full rounded-lg border-gray-300 dark:border-gray-600">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-gray-800">
                          {categories.map((category) => (
                            <SelectItem
                              key={category}
                              value={category}
                            >
                              {category === "all"
                                ? "All Categories"
                                : category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                        Sort By
                      </label>
                      <Select
                        value={sortBy}
                        onValueChange={setSortBy}
                      >
                        <SelectTrigger className="w-full rounded-lg border-gray-300 dark:border-gray-600">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-gray-800">
                          <SelectItem value="newest">
                            Latest
                          </SelectItem>
                          <SelectItem value="oldest">
                            Oldest
                          </SelectItem>
                          <SelectItem value="most-viewed">
                            Popular
                          </SelectItem>
                          <SelectItem value="shortest-read">
                            Quick Read
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">
                        View Type
                      </label>
                      <Select
                        value={paginationType}
                        onValueChange={(
                          value: "pagination" | "loadmore"
                        ) => setPaginationType(value)}
                      >
                        <SelectTrigger className="w-full rounded-lg border-gray-300 dark:border-gray-600">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-gray-800">
                          <SelectItem value="loadmore">
                            Load More
                          </SelectItem>
                          <SelectItem value="pagination">
                            Pagination
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {hasActiveFilters && (
                      <Button
                        variant="outline"
                        onClick={clearFilters}
                        className="w-full border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20 rounded-lg bg-transparent"
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
                className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-gray-200 dark:border-gray-700"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Active filters:
                </span>
                {searchQuery && (
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full"
                  >
                    Search: {searchQuery}
                  </Badge>
                )}
                {selectedCategory !== "all" && (
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full"
                  >
                    Category: {selectedCategory}
                  </Badge>
                )}
                {sortBy !== "newest" && (
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-full"
                  >
                    Sort: {sortBy.replace("-", " ")}
                  </Badge>
                )}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            isInView ? { opacity: 1 } : { opacity: 0 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-gray-600 dark:text-gray-400">
            {filteredPosts.length === 0
              ? "No posts found matching your criteria"
              : paginationType === "pagination"
              ? `Showing ${startIndex + 1}-${Math.min(
                  endIndex,
                  regularPosts.length
                )} of ${regularPosts.length} posts`
              : `Showing ${Math.min(
                  loadMoreCount,
                  regularPosts.length
                )} of ${regularPosts.length} posts`}
            {hasActiveFilters &&
              ` (filtered from ${posts.length} total)`}
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 50 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={
                          post.featuredImage ||
                          "/placeholder.svg?height=300&width=600"
                        }
                        alt={post.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-3 py-1">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center flex-wrap gap-2 mb-4">
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-full text-xs"
                        >
                          {post.category}
                        </Badge>
                        {post.tags
                          .slice(0, 2)
                          .map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs rounded-full border-gray-300 dark:border-gray-600"
                            >
                              {tag}
                            </Badge>
                          ))}
                      </div>
                      <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.createdAt)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime} min
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                              {post.author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {post.author.name}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 text-sm">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.views.toLocaleString()}
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              sharePost(post);
                            }}
                            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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

        {/* Regular Posts - Long Cards */}
        {currentPosts.length > 0 && (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                : "space-y-6"
            }
          >
            {currentPosts.map((post, index) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1 group ${
                  viewMode === "list"
                    ? "flex flex-col md:flex-row"
                    : ""
                }`}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block w-full"
                >
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === "list"
                        ? "md:w-96 md:flex-shrink-0"
                        : ""
                    }`}
                  >
                    <Image
                      src={
                        post.featuredImage ||
                        "/placeholder.svg?height=300&width=500"
                      }
                      alt={post.title}
                      width={500}
                      height={300}
                      className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === "list"
                          ? "w-full h-64 md:h-full"
                          : "w-full h-56"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-8 flex-1">
                    <div className="flex items-center flex-wrap gap-2 mb-4">
                      <Badge
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-sm rounded-full px-3 py-1"
                      >
                        {post.category}
                      </Badge>
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs rounded-full border-gray-300 dark:border-gray-600 px-2 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {post.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="text-base font-medium text-gray-900 dark:text-white">
                            {post.author.name}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDate(post.createdAt)}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readTime} min read
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                        <div className="flex items-center text-sm">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views.toLocaleString()}
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            sharePost(post);
                          }}
                          className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                        >
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {paginationType === "loadmore" && hasMorePosts && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button
              onClick={loadMorePosts}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-4 text-lg font-medium transition-all duration-200 hover:shadow-lg"
            >
              <Plus className="w-5 h-5 mr-2" />
              Load More Posts (
              {regularPosts.length - loadMoreCount}{" "}
              remaining)
            </Button>
          </motion.div>
        )}

        {/* Pagination */}
        {paginationType === "pagination" &&
          totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Page {currentPage} of {totalPages}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <div className="flex items-center gap-1">
                  {renderPaginationButtons()}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

        {/* No Results State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center mx-auto mb-8">
                <Search className="w-16 h-16 text-blue-500 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                No posts found
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We couldn't find any posts matching your
                search criteria. Try adjusting your filters
                or search terms.
              </p>
              {hasActiveFilters && (
                <Button
                  onClick={clearFilters}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-3"
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
  );
};
