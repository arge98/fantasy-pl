import Image from "next/image";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import StadiumBackground from "./stadium-background";
import Header from "@/components/Header";

type Member = {
  email: string;
  display_name: string;
  is_admin: boolean;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function MemberAvatar({ name }: { name: string }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/70 bg-navy-950/90 text-sm font-semibold text-gold-300 shadow-[0_0_24px_rgba(233,0,127,0.16)]">
      {initials(name)}
    </div>
  );
}

const COMING_SOON = [
  {
    title: "Standings",
    description: "The full league table for the current season.",
  },
  {
    title: "Fixtures",
    description: "Upcoming gameweeks and matchups.",
  },
  {
    title: "Stats",
    description: "Biggest scores, best picks, head-to-head records.",
  },
] as const;

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: members } = await supabase
    .from("league_members")
    .select("email, display_name, is_admin")
    .order("display_name") as { data: Member[] | null };

  const me = members?.find((m) => m.email === user.email);

  return (
    <>
      <StadiumBackground />

      <Header />

      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col gap-14 px-6 py-14 min-h-[130vh]">
        <div>
          <h1 className="text-2xl font-semibold text-cream-100">
            Welcome back, {me?.display_name ?? user.email}.
          </h1>
          <p className="mt-1 text-sm text-cream-100/60">
            English Premier League Fantasy — 2026 Season
          </p>
        </div>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {COMING_SOON.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gold-500/45 bg-navy-950/90 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-cream-100">
                  {item.title}
                </h2>
                <span className="rounded-full border border-gold-300/60 px-2 py-0.5 text-[10px] uppercase tracking-wide text-gold-300">
                  Coming soon
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-cream-100/60">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-cream-100/80">
            Members
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {members?.map((member) => (
              <div
                key={member.email}
                className="flex flex-col items-center gap-2 text-center"
              >
                <MemberAvatar name={member.display_name} />
                <span className="text-xs text-cream-100/85">
                  {member.display_name}
                  {member.is_admin && (
                    <span className="ml-1 text-gold-300">★</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex flex-col items-center gap-3 border-t border-gold-500/25 pt-10 pb-16 text-center">
          <Image
            src="/league-logo.jpg"
            alt="English Premier League Fantasy"
            width={48}
            height={48}
            className="rounded-full opacity-75"
          />
          <p className="text-xs text-cream-100/45">
            English Premier League Fantasy — 2026 Season · {members?.length ?? 0} members
          </p>
        </footer>
      </main>
    </>
  );
}
