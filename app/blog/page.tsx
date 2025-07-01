import { FloatingNav } from "@/components/FloatingNav";
import { BlogSection } from "@/components/BlogSection";
import { BlogListSection } from "@/components/BlogListSection";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Graphics Garage",
  description:
    "Insights, tutorials, and industry trends from the Graphics Garage team.",
};

async function getBlogPosts() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://graphics-garage.vercel.app";
    const response = await fetch(
      `${baseUrl}/api/blog/posts?published=true`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    console.log(data.posts);
    return data.posts || [];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="relative min-h-screen">
      <FloatingNav />
      <BlogSection />
      <BlogListSection posts={posts} />
      <Footer />
    </main>
  );
}
