import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogPostSection } from "@/components/BlogPostSection";
import { RelatedPostsSection } from "@/components/RelatedPostsSection";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

async function getBlogPost(slug: string) {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://graphics-garage.vercel.app";
    const response = await fetch(
      `${baseUrl}/api/blog/slug/${slug}`,
      { cache: "no-store" }
    );
    if (!response.ok) {
      return null;
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found - Graphics Garage",
      description:
        "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} - Graphics Garage Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage
        ? [post.featuredImage]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://graphics-garage.vercel.app";
  try {
    const response = await fetch(
      `${baseUrl}/api/blog/posts?published=true`,
      { cache: "no-store" }
    );
    if (!response.ok) {
      console.error(
        "Failed to fetch blog posts:",
        response.statusText
      );
      return [];
    }
    const data = await response.json();
    console.log("API Response:", data); // Debug log
    return Array.isArray(data.posts)
      ? data.posts.map((post: { slug: string }) => ({
          slug: post.slug,
        }))
      : [];
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const resolvedParams = await params;
  console.log(
    "Fetching post with slug:",
    resolvedParams.slug
  );
  const post = await getBlogPost(resolvedParams.slug);
  console.log("Fetched post:", post);
  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen mb-16 md:mb-0">
      <FloatingNav />
      <BlogPostSection post={post} />
      <RelatedPostsSection currentPost={post} />
      <Footer />
    </main>
  );
}
