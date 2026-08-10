# Fantasy PL

Private site for our 12-person Fantasy Premier League group. Next.js (App
Router) + Supabase (Postgres + Auth), deployed on Vercel.

## Stack

- **Next.js 16** — UI and API routes, React under the hood
- **Supabase** — Postgres database, and Google-only auth
- **Vercel** — hosting, free tier, connects a custom domain later

## One-time setup (do this before `npm run dev` will work)

### 1. Create the Supabase project

1. Go to [supabase.com](https://supabase.com), create a free account and a
   new project.
2. In **Project Settings > API**, copy the **Project URL** and the
   **anon public** key.
3. Copy `.env.local.example` to `.env.local` and paste those two values in.

### 2. Set up Google sign-in

1. In the Supabase dashboard: **Authentication > Providers > Google**,
   toggle it on.
2. You'll need a Google OAuth Client ID/Secret from the
   [Google Cloud Console](https://console.cloud.google.com/apis/credentials) —
   Supabase's provider page links directly to the instructions and gives you
   the exact redirect URL to paste into the Google OAuth consent screen.
3. In **Authentication > URL Configuration**, add
   `http://localhost:3000/auth/callback` as a redirect URL (add your real
   domain there too once you have one).

### 3. Create the database + allow-list

1. In the Supabase dashboard, open **SQL Editor**, paste in the contents of
   [`supabase/schema.sql`](./supabase/schema.sql), and run it.
2. Edit the `insert into league_members` line first (or just add rows via
   **Table Editor** afterwards) so it has your email, then add the other 11
   friends' emails the same way. Only emails in this table are allowed to
   sign in — Google auth alone doesn't restrict who can log in, this table
   is what does.

### 4. Run it

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected
to `/login`. Sign in with an email that's in `league_members` and you're in.

## How auth works here

- `src/proxy.ts` — runs on every request, redirects signed-out users to
  `/login` and keeps the Supabase session cookie fresh.
- `src/app/login/page.tsx` — the Google sign-in button.
- `src/app/auth/callback/route.ts` — where Google sends the user back after
  sign-in; this is also where we check the email against `league_members`
  and reject anyone not on the list.
- `src/lib/supabase/` — the three Supabase client variants Next.js needs
  (browser, server component, proxy).

## Deploying

Push this to a GitHub repo, import it into [Vercel](https://vercel.com/new),
and add the two `NEXT_PUBLIC_SUPABASE_*` env vars in the Vercel project
settings. Then add your real domain's callback URL in Supabase's
**URL Configuration** once you've bought one.
