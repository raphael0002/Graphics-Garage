import { type NextRequest, NextResponse } from "next/server";

// Simple in-memory store for demo (use a database in production)
const viewCounts = new Map<string, number>();

export async function POST(request: NextRequest) {
  try {
    const { postId } = await request.json();

    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    // Increment view count
    const currentViews = viewCounts.get(postId) || 0;
    const newViews = currentViews + 1;
    viewCounts.set(postId, newViews);

    return NextResponse.json({ views: newViews });
  } catch (error) {
    console.error("Error updating view count:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    const views = viewCounts.get(postId) || 0;
    return NextResponse.json({ views });
  } catch (error) {
    console.error("Error fetching view count:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
