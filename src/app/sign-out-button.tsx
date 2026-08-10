"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignOutButton() {
  const router = useRouter();

  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={signOut}
      className="rounded-md border border-gold-500/40 px-4 py-2 text-sm font-medium text-cream-100 transition-colors hover:bg-navy-800"
    >
      Sign out
    </button>
  );
}
