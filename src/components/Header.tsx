"use client";

import Image from "next/image";
import Link from "next/link";
import SignOutButton from "@/app/sign-out-button";

export default function Header() {
    return (
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gold-500/15 bg-navy-950/70 px-6 py-4 backdrop-blur-sm">
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

            <div className="flex items-center gap-6">
                <Link
                    href="/constitution"
                    className="text-sm font-semibold text-cream-100 transition hover:text-gold-400"
                >
                    Constitution
                </Link>

                <Link
                    href="/franquicias"
                    className="text-sm font-semibold text-cream-100 transition hover:text-gold-400"
                >
                    Franquicias
                </Link>

                <Link
                    href="/history"
                    className="text-sm font-semibold text-cream-100 transition hover:text-gold-400"
                >
                    History
                </Link>

                <Link
                    href="/licenciados"
                    className="text-sm font-semibold text-cream-100 transition hover:text-gold-400"
                >
                    Licenciados
                </Link>

                <Link
                    href="/hall-of-fame"
                    className="text-sm font-semibold text-cream-100 transition hover:text-gold-400"
                >
                    Hall of Fame
                </Link>

                <SignOutButton />
            </div>
        </header>
    );
}