import {
  type NextRequest,
  NextResponse,
} from "next/server";
import connectDB from "@/lib/mongodb";
import BlogPost from "@/models/BlogPost";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;

    const post = await BlogPost.findByIdAndUpdate(
      id,
      { $inc: { views: 1 } },
      { new: true }
    );

    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        {
          status: 404,
          headers: { "Cache-Control": "no-store" },
        }
      );
    }

    return NextResponse.json(
      { views: post.views },
      {
        status: 200,
        headers: { "Cache-Control": "no-store" },
      }
    );
  } catch (error) {
    console.error("Error updating views:", error);
    return NextResponse.json(
      { error: "Failed to update views" },
      {
        status: 500,
        headers: { "Cache-Control": "no-store" },
      }
    );
  }
}
