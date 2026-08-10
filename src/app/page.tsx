import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import SignOutButton from "./sign-out-button";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-semibold">You&apos;re in.</h1>
      <p className="text-sm text-neutral-500">
        Signed in as {user.email}. The league table, fixtures, and everything
        else gets built from here.
      </p>
      <SignOutButton />
    </main>
  );
}
