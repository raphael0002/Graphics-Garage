// import { FloatingNav } from "@/components/FloatingNav"
// import { BlogListSection } from "@/components/BlogListSection"
// import { Footer } from "@/components/Footer"
// import { notFound } from "next/navigation"
// import type { Metadata } from "next"

// interface BlogPostPageProps {
//     params: Promise<{
//         id: string
//     }>
// }

// export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
//     const resolvedParams = await params
//     const post = await getDevToArticle(resolvedParams.id)

//     if (!post) {
//         return {
//             title: "Post Not Found - Graphics Garage",
//             description: "The requested blog post could not be found.",
//         }
//     }

//     return {
//         title: `${post.title} - Graphics Garage Blog`,
//         description: post.excerpt,
//         openGraph: {
//             title: post.title,
//             description: post.excerpt,
//             images: [post.featuredImage],
//         },
//     }
// }

// export default async function BlogPostPage({ params }: BlogPostPageProps) {
//     const resolvedParams = await params
//     const post = await getDevToArticle(resolvedParams.id)

//     if (!post) {
//         notFound()
//     }

//     return (
//         <main className="relative min-h-screen">
//             <FloatingNav />
//             <BlogPostSection post={post} />
//             <RelatedPostsSection currentPost={post} />
//             <Footer />
//         </main>
//     )
// }

// // Note: We can't use generateStaticParams with Dev.to API since we don't know all possible IDs
// // The pages will be generated on-demand

import React from 'react'

const page = () => {
    return (
        <div>

        </div>
    )
}

export default page
