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
            className="group flex min-w-[126px] items-center justify-center gap-3 rounded-lg border border-gold-500/70 bg-transparent px-5 py-3 text-[16px] font-medium text-white transition-all hover:bg-gold-500/10 hover:shadow-[0_0_22px_rgba(233,0,127,0.14)]"
        >
            <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-gold-500 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M10 17l5-5-5-5" />
                <path d="M15 12H3" />
                <path d="M21 19V5a2 2 0 0 0-2-2h-5" />
            </svg>
            Sign out
        </button>
    );
}
