"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Eye, Share2, ArrowLeft, User, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import type { BlogPostData } from "@/types/blog"

interface BlogPostSectionProps {
    post: BlogPostData
}

export const BlogPostSection = ({ post }: BlogPostSectionProps) => {
    const [views, setViews] = useState(post.views)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Increment view count
        const incrementViews = async () => {
            try {
                const response = await fetch(`/api/blog/posts/${post._id}/views`, {
                    method: "POST",
                })
                if (response.ok) {
                    const data = await response.json()
                    setViews(data.views)
                }
            } catch (error) {
                console.error("Error incrementing views:", error)
            }
        }

        incrementViews()
    }, [post._id])

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
    }

    const sharePost = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                })
            } catch (error) {
                console.log("Error sharing:", error)
            }
        } else {
            await navigator.clipboard.writeText(window.location.href)
            alert("Link copied to clipboard!")
        }
    }

    const formatContent = (content: string) => {
        return content
            .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-8">$1</h1>')
            .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-6">$1</h2>')
            .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-4">$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>')
            .replace(/\*(.*?)\*/g, "<em>$1</em>")
            .replace(/^- (.*$)/gm, '<li class="ml-4 mb-2 text-gray-700 dark:text-white">$1</li>')
            .replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 dark:text-white leading-relaxed">')
            .replace(/^(?!<[h|l])/gm, '<p class="mb-4 text-gray-700 dark:text-white leading-relaxed">')
            .replace(/<\/p><p class="mb-4 text-gray-700 dark:text-white leading-relaxed">$/g, "</p>")
    }

    if (!mounted) {
        return null
    }

    return (
        <article className="pt-32 pb-16 md:pb-20 section-light">
            <div className="container mx-auto px-4 md:px-6">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <Link
                        href="/blog"
                        className="inline-flex items-center dark:text-white text-gray-900 hover:text-purple-600 transition-colors duration-200 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                        Back to Blog
                    </Link>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm dark:text-white text-gray-900">
                            <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full font-medium">
                                {post.category}
                            </span>
                            <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {formatDate(post.createdAt)}
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {post.readTime} min read
                            </div>
                            <div className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                {views.toLocaleString()} views
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-gray-900leading-tight mb-6">
                            {post.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-xl md:text-2xl dark:text-white text-gray-900 leading-relaxed mb-8">{post.excerpt}</p>

                        {/* Author and Share */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                                    <span className="text-lg font-medium dark:text-white text-gray-900">
                                        {post.author.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-semibold dark:text-white text-gray-900">{post.author.name}</p>
                                    <p className="text-sm dark:text-white text-gray-900">Graphics Garage Team</p>
                                </div>
                            </div>
                            <button
                                onClick={sharePost}
                                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors duration-200"
                            >
                                <Share2 className="w-4 h-4" />
                                <span>Share</span>
                            </button>
                        </div>
                    </motion.header>

                    {/* Featured Image */}
                    {post.featuredImage && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-12"
                        >
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src={post.featuredImage || "/placeholder.svg?height=600&width=1200"}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </motion.div>
                    )}

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="prose prose-lg prose-gray max-w-none mb-12"
                    >
                        <div
                            className="dark:text-white text-gray-900 leading-relaxed space-y-6"
                            dangerouslySetInnerHTML={{
                                __html: formatContent(post.content),
                            }}
                        />
                    </motion.div>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mt-12 pt-8 border-t border-gray-200"
                        >
                            <div className="flex items-center space-x-2 mb-4">
                                <Tag className="w-5 h-5 text-gray-500" />
                                <h3 className="text-lg font-semibold dark:text-white text-gray-900">Tags</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full border border-gray-200 transition-colors duration-200 cursor-pointer"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Author Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-12 p-6 card-professional rounded-2xl border-2 border-purple-primary dark:border-purple-100"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <User className="w-8 h-8 dark:text-white text-gray-700" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold dark:text-white text-gray-700 mb-2">About {post.author.name}</h4>
                                <p className="text-purple-primary leading-relaxed">
                                    {post.author.name} is a talented member of the Graphics Garage team, bringing creativity and expertise
                                    to every project. With a passion for design and innovation, they contribute valuable insights to our
                                    blog and help our clients achieve their visual goals.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </article>
    )
}
