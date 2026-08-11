-- Run this once in the Supabase project's SQL editor (Project > SQL Editor).

-- Allow-list of the 12 league members permitted to sign in.
-- Add a row per friend before they try to log in.
create table if not exists league_members (
  email text primary key,
  display_name text not null,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

alter table league_members enable row level security;

-- Any signed-in user can read the member list (e.g. to show names on a leaderboard).
create policy "league members are readable by authenticated users"
  on league_members for select
  to authenticated
  using (true);

-- Seed the first two members so login can be tested. Add the remaining
-- friends the same way (extra rows in this VALUES list, or via Table Editor).
insert into league_members (email, display_name, is_admin)
values
  ('argelrh9@gmail.com', 'Argel', true),
  ('gabilondo12321@gmail.com', 'Gabriel', false),
  ('javier.sardinas@gmail.com', 'Javier', false),
  ('cr7cristianoelanimal@gmail.com', 'Alberto', false)
on conflict (email) do nothing;
