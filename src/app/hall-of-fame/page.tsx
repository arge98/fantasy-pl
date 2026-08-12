import Image from "next/image";
import Header from "@/components/Header";

const legends = [
    {
        image: "/hall-of-fame/01.jpg",
        number: "1",
        achievements: [
            "Premier League Champion 2025",
            "Summer Cup Champion 2025",
        ],
    },
    {
        image: "/hall-of-fame/02.jpg",
        number: "2",
        achievements: ["Premier League Champion 2026"],
    },

    {
        image: "/hall-of-fame/03.jpg",
        number: "3",
        achievements: ["Winter Cup Champion 2026"],
    },

    {
        image: "/hall-of-fame/04.jpg",
        number: "4",
        achievements: ["Winter Cup Champion 2025"],
    },
    
    {
        image: "/hall-of-fame/05.jpg",
        number: "5",
        achievements: ["Summer Cup Champion 2026"],
    },
];

export default function HallOfFamePage() {
    return (
        <div className="min-h-screen bg-black text-cream-100">
            <Header />

            <main className="mx-auto w-full max-w-7xl px-6 py-14">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">
                        Hall of Fame
                    </h1>

                    <h2 className="mt-3 text-2xl font-semibold text-gold-400">
                        Legendary Managers
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cream-200">
                        Honramos a los genios tácticos que definieron la liga con visión
                        inigualable, espíritu competitivo y la firme búsqueda de la
                        excelencia.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {legends.map((legend) => (
                        <article
                            key={legend.number}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                        >
                            <div className="relative aspect-[3/4] w-full">
                                <Image
                                    src={legend.image}
                                    alt={`Hall of Fame manager ${legend.number}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            <div className="p-6">
                                <div className="mb-4 text-sm font-semibold tracking-widest text-gold-400">
                                    {legend.number}
                                </div>

                                <div className="space-y-2">
                                    {legend.achievements.map((achievement) => (
                                        <p
                                            key={achievement}
                                            className="text-lg font-semibold text-cream-100"
                                        >
                                            {achievement}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}