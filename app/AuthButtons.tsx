"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

export const LoginButton = () => {
  return (
    <Button onClick={() => signIn()}>
      Login with Github &nbsp; <Icon path={mdiGithub} size={1} />
    </Button>
  );
};

export const LogoutButton = () => {
  return <Button onClick={() => signOut()}>Logout</Button>;
};
