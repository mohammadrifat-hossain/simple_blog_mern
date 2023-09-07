import { connectDB } from "@/app/models/db/connectDB";
import { blogSchema } from "@/app/models/db/schema/DBschema";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { id } = await req.json();
  await connectDB();

  const data = await blogSchema.findOne({_id:id})

  return NextResponse.json(data);
};
