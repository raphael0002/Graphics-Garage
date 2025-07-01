"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { ArrowLeft, Save, X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import type { BlogPostData, BlogPostFormData } from "@/types/blog"

interface EditPostPageProps {
    params: Promise<{
        id: string
    }>
}

export default function EditPost({ params }: EditPostPageProps) {
    const { data: session } = useSession()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [fetchLoading, setFetchLoading] = useState(true)
    const [postId, setPostId] = useState<string>("")
    const [tags, setTags] = useState<string[]>([])
    const [currentTag, setCurrentTag] = useState("")
    const [keywords, setKeywords] = useState<string[]>([])
    const [currentKeyword, setCurrentKeyword] = useState("")
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
        const getParams = async () => {
            const resolvedParams = await params
            setPostId(resolvedParams.id)
        }
        getParams()
    }, [params])

    const fetchPost = useCallback(async () => {
        try {
            setFetchLoading(true)
            const response = await fetch(`/api/blog/posts/${postId}`)
            const post: BlogPostData = await response.json()

            if (post) {
                setFormData({
                    title: post.title,
                    slug: post.slug,
                    excerpt: post.excerpt,
                    content: post.content,
                    category: post.category,
                    tags: post.tags.join(", "),
                    featuredImage: post.featuredImage || "",
                    published: post.published,
                    featured: post.featured,
                    seo: {
                        metaTitle: post.seo.metaTitle || "",
                        metaDescription: post.seo.metaDescription || "",
                        keywords: post.seo.keywords?.join(", ") || "",
                    },
                })
                setTags(post.tags)
                setKeywords(post.seo.keywords || [])
            }
        } catch (error) {
            console.error("Error fetching post:", error)
        } finally {
            setFetchLoading(false)
        }
    }, [postId])

    useEffect(() => {
        fetchPost()
    }, [fetchPost])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target

        if (name.startsWith("seo.")) {
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

    const handleCategoryChange = (value: string) => {
        setFormData((prev) => ({ ...prev, category: value }))
    }

    const addTag = () => {
        if (currentTag.trim() && !tags.includes(currentTag.trim())) {
            const newTags = [...tags, currentTag.trim()]
            setTags(newTags)
            setFormData((prev) => ({ ...prev, tags: newTags.join(", ") }))
            setCurrentTag("")
        }
    }

    const removeTag = (tagToRemove: string) => {
        const newTags = tags.filter(tag => tag !== tagToRemove)
        setTags(newTags)
        setFormData((prev) => ({ ...prev, tags: newTags.join(", ") }))
    }

    const addKeyword = () => {
        if (currentKeyword.trim() && !keywords.includes(currentKeyword.trim())) {
            const newKeywords = [...keywords, currentKeyword.trim()]
            setKeywords(newKeywords)
            setFormData((prev) => ({
                ...prev,
                seo: {
                    ...prev.seo,
                    keywords: newKeywords.join(", ")
                }
            }))
            setCurrentKeyword("")
        }
    }

    const removeKeyword = (keywordToRemove: string) => {
        const newKeywords = keywords.filter(keyword => keyword !== keywordToRemove)
        setKeywords(newKeywords)
        setFormData((prev) => ({
            ...prev,
            seo: {
                ...prev.seo,
                keywords: newKeywords.join(", ")
            }
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const postData = {
                ...formData,
                tags: tags,
                seo: {
                    ...formData.seo,
                    keywords: keywords,
                },
                author: session?.user?.id
            }

            const response = await fetch(`/api/blog/posts/${postId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            })

            if (response.ok) {
                router.push("/admin/dashboard")
            } else {
                alert("Error updating post")
            }
        } catch (error) {
            console.error("Error updating post:", error)
            alert("Error updating post")
        } finally {
            setLoading(false)
        }
    }

    if (!session || fetchLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
                <div className="text-center">
                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading post...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
            {/* Header */}
            <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 gap-4">
                        <div className="flex items-center space-x-4">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="gap-2 hover:bg-accent"
                                onClick={() => router.back()}
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span className="hidden sm:inline">Back</span>
                            </Button>

                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Edit Post</h1>
                            <Button
                                form="post-form"
                                type="submit"
                                disabled={loading}
                                size="sm"
                                className="gap-2"
                            >
                                <Save className="w-4 h-4" />
                                <span>{loading ? "Updating..." : "Update Post"}</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <motion.form
                    id="post-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 sm:space-y-8"
                >
                    {/* Basic Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Information</CardTitle>
                            <CardDescription>
                                Essential details about your blog post
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="title">Title *</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    placeholder="Enter post title"
                                    className="text-base"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="slug">URL Slug *</Label>
                                <Input
                                    id="slug"
                                    name="slug"
                                    value={formData.slug}
                                    onChange={handleInputChange}
                                    placeholder="post-url-slug"
                                    className="text-base font-mono"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="category">Category *</Label>
                                    <Select value={formData.category} onValueChange={handleCategoryChange} required>
                                        <SelectTrigger id="category">
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Web Design">Web Design</SelectItem>
                                            <SelectItem value="Development">Development</SelectItem>
                                            <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                                            <SelectItem value="UI/UX">UI/UX</SelectItem>
                                            <SelectItem value="Branding">Branding</SelectItem>
                                            <SelectItem value="Tutorials">Tutorials</SelectItem>
                                            <SelectItem value="Industry News">Industry News</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="featuredImage">Featured Image URL</Label>
                                    <Input
                                        id="featuredImage"
                                        name="featuredImage"
                                        type="url"
                                        value={formData.featuredImage}
                                        onChange={handleInputChange}
                                        placeholder="https://example.com/image.jpg"
                                        className="text-base"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="tags">Tags</Label>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {tags.map((tag, index) => (
                                        <Badge key={index} variant="secondary" className="gap-1">
                                            {tag}
                                            <button
                                                type="button"
                                                onClick={() => removeTag(tag)}
                                                className="ml-1 hover:text-destructive"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Input
                                        value={currentTag}
                                        onChange={(e) => setCurrentTag(e.target.value)}
                                        placeholder="Add a tag"
                                        className="flex-1"
                                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                                    />
                                    <Button type="button" onClick={addTag} variant="outline" size="sm">
                                        <Plus className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="excerpt">Excerpt *</Label>
                                <Textarea
                                    id="excerpt"
                                    name="excerpt"
                                    value={formData.excerpt}
                                    onChange={handleInputChange}
                                    rows={3}
                                    placeholder="Brief description of the post"
                                    className="resize-none"
                                    required
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Content */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Content</CardTitle>
                            <CardDescription>
                                Write your blog post content (Markdown supported)
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <Label htmlFor="content">Content *</Label>
                                <Textarea
                                    id="content"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleInputChange}
                                    rows={20}
                                    placeholder="Write your post content here... (Markdown supported)"
                                    className="resize-none font-mono text-sm"
                                    required
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* SEO Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle>SEO Settings</CardTitle>
                            <CardDescription>
                                Optimize your post for search engines
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="metaTitle">Meta Title</Label>
                                <Input
                                    id="metaTitle"
                                    name="seo.metaTitle"
                                    value={formData.seo.metaTitle}
                                    onChange={handleInputChange}
                                    placeholder="SEO title for search engines"
                                    className="text-base"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="metaDescription">Meta Description</Label>
                                <Textarea
                                    id="metaDescription"
                                    name="seo.metaDescription"
                                    value={formData.seo.metaDescription}
                                    onChange={handleInputChange}
                                    rows={3}
                                    placeholder="SEO description for search engines"
                                    className="resize-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="keywords">SEO Keywords</Label>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {keywords.map((keyword, index) => (
                                        <Badge key={index} variant="outline" className="gap-1">
                                            {keyword}
                                            <button
                                                type="button"
                                                onClick={() => removeKeyword(keyword)}
                                                className="ml-1 hover:text-destructive"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Input
                                        value={currentKeyword}
                                        onChange={(e) => setCurrentKeyword(e.target.value)}
                                        placeholder="Add a keyword"
                                        className="flex-1"
                                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                                    />
                                    <Button type="button" onClick={addKeyword} variant="outline" size="sm">
                                        <Plus className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Publishing Options */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Publishing Options</CardTitle>
                            <CardDescription>
                                Control how and when your post is published
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="published"
                                    checked={formData.published}
                                    onCheckedChange={(checked) =>
                                        setFormData(prev => ({ ...prev, published: checked as boolean }))
                                    }
                                />
                                <Label
                                    htmlFor="published"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Publish immediately
                                </Label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="featured"
                                    checked={formData.featured}
                                    onCheckedChange={(checked) =>
                                        setFormData(prev => ({ ...prev, featured: checked as boolean }))
                                    }
                                />
                                <Label
                                    htmlFor="featured"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Mark as featured post
                                </Label>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Mobile Submit Button */}
                    <div className="sm:hidden">
                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full gap-2"
                            size="lg"
                        >
                            <Save className="w-4 h-4" />
                            <span>{loading ? "Updating..." : "Update Post"}</span>
                        </Button>
                    </div>
                </motion.form>
            </div>
        </div>
    )
}