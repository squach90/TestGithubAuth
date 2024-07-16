// src/types/next-auth.d.ts
import NextAuth from "next-auth";
import { User as PrismaUser } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      money?: number | null;
    };
  }

  interface User extends PrismaUser {
    money?: number | null;
  }
}
