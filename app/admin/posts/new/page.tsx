"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { ArrowLeft, Save, Eye } from "lucide-react"
import Link from "next/link"
import type { BlogPostFormData } from "@/types/blog"

export default function NewPost() {
    const { data: session } = useSession()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState<BlogPostFormData>({
        title: "",
        slug: "",
        excerpt: "",
        content: "",
        category: "",
        tags: "",
        featuredImage: "",
        published: false,
        featured: false,
        seo: {
            metaTitle: "",
            metaDescription: "",
            keywords: "",
        },
    })

    useEffect(() => {
        if (!session) {
            router.push("/admin/login")
        }
    }, [session, router])

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .replace(/\s+/g, "-")
            .trim()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target

        if (name === "title") {
            setFormData((prev) => ({
                ...prev,
                title: value,
                slug: generateSlug(value),
            }))
        } else if (name.startsWith("seo.")) {
            const seoField = name.split(".")[1] as keyof typeof formData.seo
            setFormData((prev) => ({
                ...prev,
                seo: {
                    ...prev.seo,
                    [seoField]: value,
                },
            }))
        } else if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked
            setFormData((prev) => ({ ...prev, [name]: checked }))
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const tagsArray = formData.tags
                .split(",")
                .map((tag) => tag.trim())
                .filter((tag) => tag)
            const keywordsArray = formData.seo.keywords
                .split(",")
                .map((keyword) => keyword.trim())
                .filter((keyword) => keyword)

            const postData = {
                ...formData,
                tags: tagsArray,
                seo: {
                    ...formData.seo,
                    keywords: keywordsArray,
                },
                author: session?.user?.id // Add the current user's ID as the author
            }

            const response = await fetch("/api/blog/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            })

            if (response.ok) {
                router.push("/admin/dashboard")
            } else {
                alert("Error creating post")
            }
        } catch (error) {
            console.error("Error creating post:", error)
            alert("Error creating post")
        } finally {
            setLoading(false)
        }
    }

    if (!session) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <div className="flex items-center space-x-4">
                            <Link href="/admin/dashboard">
                                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                                    <ArrowLeft className="w-4 h-4" />
                                    <span>Back to Dashboard</span>
                                </button>
                            </Link>
                            <h1 className="text-2xl font-bold text-gray-900">Create New Post</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                type="button"
                                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <Eye className="w-4 h-4" />
                                <span>Preview</span>
                            </button>
                            <button
                                form="post-form"
                                type="submit"
                                disabled={loading}
                                className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-colors disabled:opacity-50"
                            >
                                <Save className="w-4 h-4" />
                                <span>{loading ? "Creating..." : "Create Post"}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.form
                    id="post-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    {/* Basic Information */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">Basic Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="Enter post title"
                                    required
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Slug *</label>
                                <input
                                    type="text"
                                    name="slug"
                                    value={formData.slug}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="post-url-slug"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                                    required
                                >
                                    <option value="">Select Category</option>
                                    <option value="Web Design">Web Design</option>
                                    <option value="Development">Development</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="UI/UX">UI/UX</option>
                                    <option value="Branding">Branding</option>
                                    <option value="Company News">Company News</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                                <input
                                    type="text"
                                    name="tags"
                                    value={formData.tags}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="web design, react, nextjs"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image URL</label>
                                <input
                                    type="url"
                                    name="featuredImage"
                                    value={formData.featuredImage}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt *</label>
                                <textarea
                                    name="excerpt"
                                    value={formData.excerpt}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                    placeholder="Brief description of the post"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">Content</h2>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleInputChange}
                                rows={20}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                placeholder="Write your post content here... (Markdown supported)"
                                required
                            />
                        </div>
                    </div>

                    {/* SEO Settings */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">SEO Settings</h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
                                <input
                                    type="text"
                                    name="seo.metaTitle"
                                    value={formData.seo.metaTitle}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="SEO title for search engines"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                                <textarea
                                    name="seo.metaDescription"
                                    value={formData.seo.metaDescription}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                    placeholder="SEO description for search engines"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Keywords (comma separated)</label>
                                <input
                                    type="text"
                                    name="seo.keywords"
                                    value={formData.seo.keywords}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                                    placeholder="keyword1, keyword2, keyword3"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Publishing Options */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">Publishing Options</h2>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="published"
                                    checked={formData.published}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                />
                                <label className="ml-2 text-sm text-gray-700">Publish immediately</label>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="featured"
                                    checked={formData.featured}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                />
                                <label className="ml-2 text-sm text-gray-700">Mark as featured post</label>
                            </div>
                        </div>
                    </div>
                </motion.form>
            </div>
        </div>
    )
}
