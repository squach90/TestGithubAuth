import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import GithubProvider from "next-auth/providers/github";

export const { auth, handlers } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GithubProvider],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
