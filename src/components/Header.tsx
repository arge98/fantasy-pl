"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SignOutButton from "@/app/sign-out-button";

const navItems = [
    { href: "/constitution", label: "Constitution" },
    { href: "/franquicias", label: "Franquicias" },
    { href: "/leadership", label: "Liderazgo" },
    { href: "/history", label: "History" },
    { href: "/licenciados", label: "Licenciados" },
    { href: "/hall-of-fame", label: "Hall of Fame" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-gold-500/30 bg-[#0b0010]/92 backdrop-blur-xl">
            <div className="mx-auto flex min-h-[106px] w-full items-center justify-between gap-8 px-8 lg:px-10">
                {/* League identity */}
                <Link
                    href="/"
                    className="flex min-w-fit items-center gap-5 transition-opacity hover:opacity-90"
                >
                    <Image
                        src="/league-logo.jpg"
                        alt="English Premier League Fantasy"
                        width={72}
                        height={72}
                        priority
                        className="h-[72px] w-[72px] rounded-full object-cover shadow-[0_0_24px_rgba(150,60,255,0.18)]"
                    />

                    <div className="h-14 w-px bg-gold-500" aria-hidden="true" />

                    <div className="leading-none">
                        <div className="text-[25px] font-semibold tracking-tight text-white">
                            The League
                        </div>
                        <div className="mt-2 text-[13px] tracking-wide text-white/45">
                            English Premier League Fantasy Association
                        </div>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-7" aria-label="Main navigation">
                    {navItems.map((item) => {
                        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative whitespace-nowrap px-1 py-4 text-[16px] font-medium transition-colors ${
                                    active
                                        ? "text-white"
                                        : "text-white/80 hover:text-white"
                                }`}
                            >
                                {item.label}
                                <span
                                    className={`absolute inset-x-0 -bottom-[1px] h-[3px] rounded-full bg-gold-500 transition-opacity ${
                                        active ? "opacity-100" : "opacity-0"
                                    }`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                <SignOutButton />
            </div>
        </header>
    );
}
