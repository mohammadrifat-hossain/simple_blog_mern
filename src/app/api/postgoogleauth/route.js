import { connectDB } from "@/app/models/db/connectDB"
import { AuthSchema } from "@/app/models/db/schema/Authschema"
import { NextResponse } from "next/server"

export const POST = async (req) =>{
    const { name, email } = await req.json()

    await connectDB()
    const data = await AuthSchema.create({
        name,
        email
    })

    return NextResponse.json(data)
}