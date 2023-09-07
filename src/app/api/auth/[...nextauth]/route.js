import { connectDB } from "@/app/models/db/connectDB";
import { AuthSchema } from "@/app/models/db/schema/Authschema";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { NextResponse } from "next/server";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;

        try {
          await connectDB();
          const data = await AuthSchema.findOne({ email });
          if (!data) {
            const status = await fetch(
              `${process.env.PAGE_URL}/api/postgoogleauth`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                }),
              }
            );
            if (status.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
