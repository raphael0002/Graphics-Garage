"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, Eye, TrendingUp, Plus, Edit, Calendar } from "lucide-react"
import type { BlogPostData } from "@/types/blog"

interface DashboardStats {
    totalPosts: number
    publishedPosts: number
    draftPosts: number
    totalViews: number
}

export default function AdminDashboard() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [stats, setStats] = useState<DashboardStats>({
        totalPosts: 0,
        publishedPosts: 0,
        draftPosts: 0,
        totalViews: 0,
    })
    const [recentPosts, setRecentPosts] = useState<BlogPostData[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/admin/login")
        } else if (status === "authenticated") {
            fetchDashboardData()
        }
    }, [status, router])

    const fetchDashboardData = async () => {
        try {
            setLoading(true)

            // Fetch all posts for stats
            const postsResponse = await fetch("/api/blog/posts?limit=100")
            const postsData = await postsResponse.json()
            const posts = postsData.posts || []

            // Calculate stats
            const totalPosts = posts.length
            const publishedPosts = posts.filter((post: BlogPostData) => post.published).length
            const draftPosts = totalPosts - publishedPosts
            const totalViews = posts.reduce((sum: number, post: BlogPostData) => sum + post.views, 0)

            setStats({
                totalPosts,
                publishedPosts,
                draftPosts,
                totalViews,
            })

            // Get recent posts (last 5)
            setRecentPosts(posts.slice(0, 5))
        } catch (error) {
            console.error("Error fetching dashboard data:", error)
        } finally {
            setLoading(false)
        }
    }

    if (status === "loading" || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading dashboard...</p>
                </div>
            </div>
        )
    }

    if (!session) {
        return null
    }

    const statCards = [
        {
            title: "Total Posts",
            value: stats.totalPosts,
            icon: FileText,
            color: "bg-blue-500",
            textColor: "text-blue-600",
        },
        {
            title: "Published",
            value: stats.publishedPosts,
            icon: TrendingUp,
            color: "bg-green-500",
            textColor: "text-green-600",
        },
        {
            title: "Drafts",
            value: stats.draftPosts,
            icon: Edit,
            color: "bg-yellow-500",
            textColor: "text-yellow-600",
        },
        {
            title: "Total Views",
            value: stats.totalViews.toLocaleString(),
            icon: Eye,
            color: "bg-purple-500",
            textColor: "text-purple-600",
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="bg-card border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div>
                            <h1 className="text-2xl font-bold text-professional">Dashboard</h1>
                            <p className="text-muted-professional">Welcome back, {session.user?.name}</p>
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
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {statCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card-professional p-6 rounded-xl"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-muted-professional">{card.title}</p>
                                    <p className="text-2xl font-bold text-professional">{card.value}</p>
                                </div>
                                <div className={`p-3 rounded-full ${card.color}`}>
                                    <card.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Recent Posts */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="card-professional p-6 rounded-xl"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-semibold text-professional">Recent Posts</h2>
                            <Link href="/admin/posts" className="text-purple-primary hover:text-purple-hover text-sm font-medium">
                                View All
                            </Link>
                        </div>

                        {recentPosts.length === 0 ? (
                            <div className="text-center py-8">
                                <FileText className="w-12 h-12 text-muted-professional mx-auto mb-4" />
                                <p className="text-muted-professional mb-4">No posts yet</p>
                                <Link href="/admin/posts/new">
                                    <button className="button-primary px-4 py-2 rounded-lg">
                                        Create Your First Post
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {recentPosts.map((post) => (
                                    <div
                                        key={post._id}
                                        className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-card/50 transition-colors"
                                    >
                                        <div className="flex-1">
                                            <h3 className="font-medium text-professional mb-1">{post.title}</h3>
                                            <div className="flex items-center space-x-4 text-sm text-muted-professional">
                                                <span
                                                    className={`px-2 py-1 rounded-full text-xs ${post.published ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                                                        }`}
                                                >
                                                    {post.published ? "Published" : "Draft"}
                                                </span>
                                                <div className="flex items-center space-x-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Eye className="w-4 h-4" />
                                                    <span>{post.views}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Link href={`/blog/${post.slug}`}>
                                                <button className="p-2 text-muted-professional hover:text-blue-primary transition-colors">
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                            </Link>
                                            <Link href={`/admin/posts/${post._id}/edit`}>
                                                <button className="p-2 text-muted-professional hover:text-purple-primary transition-colors">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </motion.div>

                    {/* Quick Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="card-professional p-6 rounded-xl"
                    >
                        <h2 className="text-lg font-semibold text-professional mb-6">Quick Actions</h2>
                        <div className="flex flex-col space-y-4">
                            <Link href="/admin/posts/new">
                                <button className="w-full flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-card/50 transition-colors">
                                    <Plus className="w-5 h-5 text-purple-primary" />
                                    <span className="font-medium text-professional">Create New Post</span>
                                </button>
                            </Link>
                            <Link href="/admin/posts">
                                <button className="w-full flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-card/50 transition-colors">
                                    <FileText className="w-5 h-5 text-blue-primary" />
                                    <span className="font-medium text-professional">Manage All Posts</span>
                                </button>
                            </Link>
                            <Link href="/blog">
                                <button className="w-full flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-card/50 transition-colors">
                                    <Eye className="w-5 h-5 text-green-primary" />
                                    <span className="font-medium text-professional">View Public Blog</span>
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
