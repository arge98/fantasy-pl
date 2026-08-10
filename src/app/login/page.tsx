"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

const ERROR_MESSAGES: Record<string, string> = {
  not_a_member: "That email isn't on the league's member list yet.",
  auth_failed: "Something went wrong signing you in. Try again.",
};

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const searchParams = useSearchParams();
  const urlError = searchParams.get("error");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(
    urlError ? ERROR_MESSAGES[urlError] ?? "Sign-in failed." : null,
  );
  const [email, setEmail] = useState("");
  const [magicLinkSent, setMagicLinkSent] = useState(false);

  async function signInWithGoogle() {
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  async function sendMagicLink(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setMagicLinkSent(true);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-4">
      <Image
        src="/league-logo.jpg"
        alt="English Premier League Fantasy — 2026 Season"
        width={220}
        height={220}
        priority
        className="rounded-full shadow-[0_0_60px_-10px_rgba(203,161,79,0.45)]"
      />

      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-semibold tracking-wide text-cream-100">
          Welcome to the League
        </h1>
        <p className="text-sm text-cream-100/60">
          Sign in with the Google account you gave the league.
        </p>
      </div>

      <button
        onClick={signInWithGoogle}
        disabled={loading}
        className="flex items-center gap-3 rounded-md border border-gold-500/40 bg-navy-900 px-5 py-2.5 text-sm font-medium text-cream-100 transition-colors hover:bg-navy-800 disabled:opacity-50"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <path
            fill="#4285F4"
            d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62Z"
          />
          <path
            fill="#34A853"
            d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.85.86-3.05.86-2.34 0-4.33-1.58-5.04-3.71H.96v2.33A9 9 0 0 0 9 18Z"
          />
          <path
            fill="#FBBC05"
            d="M3.96 10.71A5.4 5.4 0 0 1 3.68 9c0-.59.1-1.17.28-1.71V4.96H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3-2.33Z"
          />
          <path
            fill="#EA4335"
            d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.96l3 2.33C4.67 5.16 6.66 3.58 9 3.58Z"
          />
        </svg>
        {loading ? "Redirecting…" : "Continue with Google"}
      </button>

      <div className="flex w-full max-w-xs items-center gap-3 text-xs text-cream-100/40">
        <div className="h-px flex-1 bg-gold-500/20" />
        or
        <div className="h-px flex-1 bg-gold-500/20" />
      </div>

      {magicLinkSent ? (
        <p className="max-w-xs text-center text-sm text-cream-100/70">
          Check <span className="text-cream-100">{email}</span> for a sign-in
          link.
        </p>
      ) : (
        <form
          onSubmit={sendMagicLink}
          className="flex w-full max-w-xs flex-col gap-3"
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border border-gold-500/25 bg-navy-900 px-3 py-2 text-sm text-cream-100 placeholder:text-cream-100/30 outline-none focus:border-gold-500/60"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-md border border-gold-500/40 px-4 py-2 text-sm font-medium text-cream-100 transition-colors hover:bg-navy-800 disabled:opacity-50"
          >
            {loading ? "Sending…" : "Email me a sign-in link"}
          </button>
        </form>
      )}

      {error && <p className="text-sm text-red-400">{error}</p>}
    </main>
  );
}
