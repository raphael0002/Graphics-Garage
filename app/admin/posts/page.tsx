"use client"

import { useState, useEffect, useCallback } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Plus, Search, Edit, Trash2, Eye, Calendar, Clock } from "lucide-react"
import type { BlogPostData } from "@/types/blog"

export default function AdminPostsPage() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [posts, setPosts] = useState<BlogPostData[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")



    const fetchPosts = useCallback(async () => {
        try {
            setLoading(true)
            let url = "/api/blog/posts?limit=50"
            if (searchTerm) url += `&search=${encodeURIComponent(searchTerm)}`
            if (selectedCategory) url += `&category=${encodeURIComponent(selectedCategory)}`

            const response = await fetch(url, {
                cache: 'no-store',
                headers: {
                    'Cache-Control': 'no-cache'
                }
            })
            const data = await response.json()
            setPosts(data.posts || [])
        } catch (error) {
            console.error("Error fetching posts:", error)
        } finally {
            setLoading(false)
        }
    }, [searchTerm, selectedCategory])

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/admin/login")
        } else if (status === "authenticated") {
            fetchPosts()
        }
    }, [status, router, fetchPosts])

    const deletePost = async (postId: string) => {
        if (!confirm("Are you sure you want to delete this post?")) return

        try {
            const response = await fetch(`/api/blog/posts/${postId}`, {
                method: "DELETE",
            })

            if (response.ok) {
                setPosts(posts.filter((post) => post._id !== postId))
            } else {
                alert("Error deleting post")
            }
        } catch (error) {
            console.error("Error deleting post:", error)
            alert("Error deleting post")
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [fetchPosts]) // Add fetchPosts to dependency array

    if (status === "loading" || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <div className="w-8 h-8 border-2 border-purple-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-professional">Loading posts...</p>
                </div>
            </div>
        )
    }

    if (!session) {
        return null
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="bg-card border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center space-x-4">
                            <Link href="/admin/dashboard">
                                <button className="text-muted-professional hover:text-professional">← Back to Dashboard</button>
                            </Link>
                            <h1 className="text-2xl font-bold text-professional">Manage Posts</h1>
                        </div>
                        <Link href="/admin/posts/new">
                            <button className="button-primary px-4 py-2 rounded-lg flex items-center space-x-2">
                                <Plus className="w-4 h-4" />
                                <span>New Post</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filters */}
                <div className="card-professional p-6 rounded-xl mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-professional w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search posts..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-purple-primary text-professional"
                            />
                        </div>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-purple-primary text-professional"
                        >
                            <option value="">All Categories</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Development">Development</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="UI/UX">UI/UX</option>
                            <option value="Branding">Branding</option>
                            <option value="Company News">Company News</option>
                        </select>
                    </div>
                </div>

                {/* Posts List */}
                <div className="card-professional rounded-xl overflow-hidden">
                    {posts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-muted-professional mb-4">No posts found</p>
                            <Link href="/admin/posts/new">
                                <button className="button-primary px-4 py-2 rounded-lg">
                                    Create Your First Post
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-card/50">
                                    <tr>
                                        {/* Update all table headers */}
                                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-professional uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-professional uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-professional uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-professional uppercase tracking-wider">
                                            Views
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-professional uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-muted-professional uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {posts.map((post) => (
                                        <motion.tr
                                            key={post._id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="hover:bg-card/50"
                                        >
                                            <td className="px-6 py-4">
                                                <div>
                                                    <div className="text-sm font-medium text-professional">{post.title}</div>
                                                    <div className="text-sm text-muted-professional flex items-center space-x-2">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{post.readTime} min read</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-primary/10 text-blue-primary">
                                                    {post.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${post.published
                                                        ? "bg-green-primary/10 text-green-primary"
                                                        : "bg-yellow-primary/10 text-yellow-primary"
                                                        }`}
                                                >
                                                    {post.published ? "Published" : "Draft"}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-professional">
                                                <div className="flex items-center space-x-1">
                                                    <Eye className="w-4 h-4 text-muted-professional" />
                                                    <span>{post.views}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-muted-professional">
                                                <div className="flex items-center space-x-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium">
                                                <div className="flex items-center space-x-2">
                                                    <Link href={`/blog/${post.slug}`}>
                                                        <button className="text-blue-primary hover:text-blue-hover">
                                                            <Eye className="w-4 h-4" />
                                                        </button>
                                                    </Link>
                                                    <Link href={`/admin/posts/${post._id}/edit`}>
                                                        <button className="text-purple-primary hover:text-purple-hover">
                                                            <Edit className="w-4 h-4" />
                                                        </button>
                                                    </Link>
                                                    <button onClick={() => deletePost(post._id)} className="text-red-primary hover:text-red-hover">
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
