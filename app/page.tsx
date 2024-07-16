import { auth } from "@/src/lib/auth";
import Image from "next/image";
import { LoginButton, LogoutButton } from "./AuthButtons";
import { LoginPage } from "./loginpage";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default async function Home() {
  const session = await auth();
  return (
    <div className="mx-auto ">
      <LoginPage />
      <h1>
        {session?.user
          ? "Authentificated " + session?.user.email
          : "Not Authentificated"}
      </h1>

      <div>{!session?.user ? <LoginButton /> : <LogoutButton />}</div>
    </div>
  );
}
