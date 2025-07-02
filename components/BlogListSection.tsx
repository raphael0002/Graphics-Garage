"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Eye,
  Share2,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

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

  // Essential states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [filteredPosts, setFilteredPosts] =
    useState<BlogPost[]>(posts);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

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

    // Search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.author.name.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (post) => post.category === selectedCategory
      );
    }

    // Sort
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
      case "popular":
        filtered.sort((a, b) => b.views - a.views);
        break;
    }

    setFilteredPosts(filtered);
    setCurrentPage(1);
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

  // Pagination logic
  const totalPages = Math.ceil(
    filteredPosts.length / postsPerPage
  );
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    endIndex
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  // Modern Pagination Component
  const PaginationComponent = () => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
      const pages = [];
      const showPages = 5;

      let start = Math.max(
        1,
        currentPage - Math.floor(showPages / 2)
      );
      const end = Math.min(
        totalPages,
        start + showPages - 1
      );

      if (end - start < showPages - 1) {
        start = Math.max(1, end - showPages + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      return pages;
    };

    return (
      <div className="flex items-center justify-center gap-2 mt-12">
        <Button
          variant="outline"
          size="sm"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {getPageNumbers().map((page) => (
          <Button
            key={page}
            variant={
              currentPage === page ? "default" : "outline"
            }
            size="sm"
            onClick={() => goToPage(page)}
            className="min-w-[40px]"
          >
            {page}
          </Button>
        ))}

        <Button
          variant="outline"
          size="sm"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    );
  };

  return (
    <section className="py-12 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                className="pl-10 pr-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category and Sort */}
            <div className="flex gap-3 w-full md:w-auto">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
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

              <Select
                value={sortBy}
                onValueChange={setSortBy}
              >
                <SelectTrigger className="w-full md:w-32">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">
                    Newest
                  </SelectItem>
                  <SelectItem value="oldest">
                    Oldest
                  </SelectItem>
                  <SelectItem value="popular">
                    Popular
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-muted-foreground">
                Filters:
              </span>
              {searchQuery && (
                <Badge
                  variant="secondary"
                  className="text-xs"
                >
                  {searchQuery}
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge
                  variant="secondary"
                  className="text-xs"
                >
                  {selectedCategory}
                </Badge>
              )}
              {sortBy !== "newest" && (
                <Badge
                  variant="secondary"
                  className="text-xs"
                >
                  {sortBy}
                </Badge>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="h-6 px-2 text-xs"
              >
                Clear all
              </Button>
            </div>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {filteredPosts.length === 0
              ? "No articles found"
              : `${filteredPosts.length} article${
                  filteredPosts.length === 1 ? "" : "s"
                } found`}
          </p>
        </div>

        {/* Posts Grid */}
        {currentPosts.length > 0 ? (
          <>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={
                isInView ? { opacity: 1 } : { opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {currentPosts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 group">
                    <a
                      href={`/blog/${post.slug}`}
                      className="block h-full"
                    >
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={
                            post.featuredImage ||
                            "/placeholder.svg?height=200&width=400"
                          }
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {post.featured && (
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-primary text-primary-foreground">
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>

                      <CardContent className="p-6 flex flex-col h-[calc(100%-12rem)]">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            variant="secondary"
                            className="text-xs"
                          >
                            {post.category}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground gap-3">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}m
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {formatDate(post.createdAt)}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-grow">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-2 border-t border-border">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-xs font-medium text-primary">
                                {post.author.name.charAt(0)}
                              </span>
                            </div>
                            <span className="text-xs font-medium text-foreground">
                              {post.author.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {post.views.toLocaleString()}
                            </span>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                sharePost(post);
                              }}
                              className="hover:text-primary transition-colors"
                            >
                              <Share2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            <PaginationComponent />
          </>
        ) : (
          /* No Results */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No articles found
            </h3>
            <p className="text-muted-foreground mb-4">
              {`Try adjusting your search or filters to find
              what you're looking for.`}
            </p>
            {hasActiveFilters && (
              <Button
                onClick={clearFilters}
                variant="outline"
              >
                Clear filters
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};
