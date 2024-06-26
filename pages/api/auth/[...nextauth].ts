import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "@/lib/prisma"

const githubId = process.env.GITHUB_ID
const githubSecret = process.env.GITHUB_SECRET

if (!githubId || !githubSecret) {
    throw new Error("GITHUB_ID and GITHUB_SECRET must be defined")
}

export const authOptions = {
    adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)