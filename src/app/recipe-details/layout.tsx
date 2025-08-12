"use client";

import { Button } from "@/styles/components/ui/button";
import { useSession, signOut, signIn } from "next-auth/react";

export default function RecipeDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();

  return (
    <section>
      <Button variant="outline">Button</Button>
      {session ? (
        <>
          Signed in as {session?.user?.email} <br />
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <>
          Not signed in <br />
          <Button onClick={() => signIn('keycloak')}>Sign in</Button>
        </>
      )}

      <main>{children}</main>
    </section>
  );
}
