import { connectDB } from "@/app/models/db/connectDB";
import { blogSchema } from "@/app/models/db/schema/DBschema";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  await connectDB();

  const data = await blogSchema.create(body);

  return NextResponse.json(data);
};
