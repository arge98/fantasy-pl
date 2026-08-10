import Image from "next/image";
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
    <>
      <header className="flex items-center justify-between border-b border-gold-500/15 px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/league-logo.jpg"
            alt="English Premier League Fantasy"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-sm font-semibold tracking-wide text-cream-100">
            The League
          </span>
        </div>
        <SignOutButton />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-3 px-4 text-center">
        <h1 className="text-2xl font-semibold text-cream-100">
          You&apos;re in.
        </h1>
        <p className="text-sm text-cream-100/60">
          Signed in as {user.email}. The league table, fixtures, and
          everything else gets built from here.
        </p>
      </main>
    </>
  );
}
