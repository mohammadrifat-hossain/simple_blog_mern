import { connectDB } from "@/app/models/db/connectDB";
import { blogSchema } from "@/app/models/db/schema/DBschema";
import { NextResponse } from "next/server";

export const PUT = async (req) => {
    const { id, commentData, author } = await req.json();

    try {
        await connectDB();

        const updatedBlog = await blogSchema.findById(id)

        if (!updatedBlog) {
            return NextResponse.error('Blog post not found', 404);
        }
        updatedBlog.comments.push({ comment: commentData, author: author });

        updatedBlog.save()

        return NextResponse.json(updatedBlog);
    } catch (error) {
        console.error(error);
        return NextResponse.error('An error occurred while updating the blog post', 500);
    }
};
