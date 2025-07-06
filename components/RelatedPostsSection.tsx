"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Eye,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { BlogPostData } from "@/types/blog";

interface RelatedPostsSectionProps {
  currentPost: BlogPostData;
}

export const RelatedPostsSection = ({
  currentPost,
}: RelatedPostsSectionProps) => {
  const [relatedPosts, setRelatedPosts] = useState<
    BlogPostData[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const response = await fetch(
          `/api/blog/posts?category=${currentPost.category}&limit=3`
        );
        const data = await response.json();

        // Filter out the current post and limit to 3
        const filtered = data.posts
          .filter(
            (post: BlogPostData) =>
              post._id !== currentPost._id
          )
          .slice(0, 3);

        setRelatedPosts(filtered);
      } catch (error) {
        console.error(
          "Error fetching related posts:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedPosts();
  }, [currentPost._id, currentPost.category]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        year: "numeric",
      }
    );
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 animate-pulse"
                >
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 section-light">
      <div className="w-full max-w-[min(90vw,85rem)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-8">
              Related Posts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post, index) => (
                <motion.article
                  key={post._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="card-professional rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group "
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative aspect-video overflow-hidden ">
                      <Image
                        src={
                          post.featuredImage ||
                          "/placeholder.svg?height=200&width=400"
                        }
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-white mb-3">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(post.createdAt)}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-100 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-white">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime} min
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {post.views}
                          </div>
                        </div>

                        <div className="flex items-center text-purple-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/blog">
                <button className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-200">
                  View All Posts
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
