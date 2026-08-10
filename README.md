# Fantasy PL

Private site for our 12-person Fantasy Premier League group. Next.js (App
Router) + Supabase (Postgres + Auth), deployed on Vercel.

- **Live site:** https://fantasy-pl-nine.vercel.app
- **Repo:** https://github.com/arge98/fantasy-pl (private)
- **Supabase project:** `qpswuqjmbifsjcgkkpro` (dashboard access is
  admin-only — see [Access & permissions](#access--permissions))

## Stack

- **Next.js 16** (App Router, TypeScript, Tailwind v4) — UI and API routes
- **Supabase** — Postgres database, and auth (Google sign-in + magic-link
  email)
- **Vercel** — hosting; auto-deploys `main` on every push, free tier

## Project structure

```
src/app/
  layout.tsx              root layout — fonts, metadata, theme
  globals.css              navy/gold theme tokens + page background
  page.tsx                 homepage (members directory, welcome, nav cards)
  stadium-background.tsx   the fixed stadium SVG + crest watermark
  sign-out-button.tsx
  login/page.tsx           Google button + magic-link email form
  auth/callback/route.ts   lands here after either sign-in method;
                           checks the email against league_members
src/lib/supabase/
  client.ts                Supabase client for Client Components
  server.ts                Supabase client for Server Components
  middleware.ts             Supabase client used inside proxy.ts
src/proxy.ts               runs on every request — redirects signed-out
                           users to /login, keeps the session cookie fresh
supabase/schema.sql        the database schema + member allow-list, source
                           of truth for what should exist in Supabase
public/league-logo.jpg     the league crest (used as favicon, on the
                           login page, header, and background watermark)
```

## Setup for developers joining the project

The Supabase project and Google OAuth app already exist — you don't need to
create anything, just connect to what's already there:

1. Clone the repo and `npm install` (Node 20+).
2. Copy `.env.local.example` to `.env.local` and fill in:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://qpswuqjmbifsjcgkkpro.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_auHC42g6rleiPFkVXR3i9A_2cGr0n0j
   ```
   (This is Supabase's public/publishable key — safe to have in the repo
   history, it's meant to be exposed client-side. It is **not** the same as
   the secret `service_role` key, which nobody but Argel has and which
   should never go in this file or in code.)
3. Make sure your email is already in `league_members` (ask Argel if
   you're not sure — it's a one-line SQL insert on his end, plus adding you
   as a Google test user if you're using Google sign-in).
4. `npm run dev`, open [http://localhost:3000](http://localhost:3000), sign
   in with your email.

Useful scripts:

```bash
npm run dev     # local dev server
npm run build   # production build — run this before pushing anything risky
npm run lint    # eslint
```

You can also just use the live site directly for anything that isn't a
code change — no local setup needed for that.

### Contributing

Small hobby project, three of us — keep it lightweight:

- For small fixes, pushing straight to `main` is fine.
- For anything bigger (new pages, schema changes), a feature branch + a
  quick heads-up to the others before merging is a good habit, mostly so
  we don't step on each other's work.
- Always run `npm run build` and `npm run lint` before pushing — Vercel
  will build whatever's on `main` automatically, so a broken build there
  means the live site breaks for everyone.
- If a change needs a new database table/column, add it to
  `supabase/schema.sql` in the same commit (with `create table if not
  exists` / safe-to-rerun statements) so the file stays the accurate
  source of truth, then let Argel know to run it in Supabase.

## Database schema

Right now there's one table, `league_members` — it's both the member
directory (name shown around the site) and the login allow-list (an email
not in this table gets signed back out immediately after auth, regardless
of sign-in method):

```sql
create table league_members (
  email text primary key,
  display_name text not null,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);
```

See [`supabase/schema.sql`](./supabase/schema.sql) for the full script
(table, RLS policy, and current member rows).

**Planned, not built yet** — the schema will grow to support:
- Multiple seasons/leagues, not just the current one (so past years'
  standings stay queryable)
- Gameweek-level scores per member, which stats and standings get computed
  from
- Member profile pictures (a Supabase Storage bucket + an `avatar_url`
  column)
- A sync job pulling real data from the official Fantasy Premier League API
  (`fantasy.premierleague.com` — public, no auth needed) instead of manual
  entry

Keep this in mind when adding tables — favor a shape that scopes data to a
season rather than one flat "current state" table.

## How auth works here

Two sign-in methods, same downstream flow:

1. **Google** (`login/page.tsx` → `supabase.auth.signInWithOAuth`) or
   **magic link** (`supabase.auth.signInWithOtp`) — both eventually redirect
   to `/auth/callback`.
2. `auth/callback/route.ts` exchanges the code for a session, then checks
   the signed-in email against `league_members`. Not on the list → signed
   back out, redirected to `/login?error=not_a_member`.
3. `src/proxy.ts` runs on every request after that — redirects signed-out
   users to `/login`, refreshes the session cookie so it doesn't expire
   mid-use.

Google sign-in requires the person to actually have a Google account —
university email addresses often don't (we hit this with two members).
Magic link works with any email address, which is why both exist.

## Access & permissions

| System | Who has access | What for |
|---|---|---|
| GitHub repo | Argel, Javier, Gabriel | Read/write code |
| Live site login | All 12 members in `league_members` | Using the app |
| Supabase dashboard | Argel only | Database, auth config, secrets |
| Vercel dashboard | Argel only | Deploy config, env vars, domains |
| Google Cloud Console | Argel only | OAuth client config |

Database or infra changes go through `supabase/schema.sql` (see
Contributing above) rather than direct dashboard access, so everyone can
see and review what changed instead of it happening invisibly in a
dashboard only Argel can see.

## Deployment

Vercel is connected to this GitHub repo — every push to `main` triggers an
automatic build and deploy, live in about a minute. No manual deploy step.
Environment variables live in the Vercel project settings, already
configured with the two `NEXT_PUBLIC_SUPABASE_*` values above.

## Appendix: initial one-time setup (reference only — already done)

These are the steps that were followed to stand the project up from
scratch. Nobody needs to redo these — they're kept here so the "why" of
the current config is traceable later.

### 1. Create the Supabase project

Created at [supabase.com](https://supabase.com); URL and anon key are in
**Project Settings > API**.

### 2. Set up Google sign-in

1. Google provider enabled in Supabase: **Authentication > Providers >
   Google**.
2. OAuth Client ID/Secret created in the
   [Google Cloud Console](https://console.cloud.google.com/apis/credentials),
   with the redirect URI Supabase's provider page shows
   (`https://qpswuqjmbifsjcgkkpro.supabase.co/auth/v1/callback`).
3. The Google OAuth consent screen is in **Testing** status with each
   member's email added under **Test users** — this is a second gate on
   top of `league_members`, and avoids Google's app-verification review.
4. Supabase **Authentication > URL Configuration > Redirect URLs** has
   both `http://localhost:3000/auth/callback` and
   `https://fantasy-pl-nine.vercel.app/auth/callback`.

### 3. Create the database + allow-list

Ran [`supabase/schema.sql`](./supabase/schema.sql) in Supabase's SQL
Editor.

### 4. Deploy

Repo imported into Vercel from GitHub, with the two
`NEXT_PUBLIC_SUPABASE_*` env vars added in project settings.
