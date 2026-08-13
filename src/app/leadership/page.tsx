import Image from "next/image";
import Header from "@/components/Header";

const leaders = [
  {
    name: "Alberto David",
    role: "Presidente",
    image: "/leadership/Alberto.jpg",
    description:
      "Fundador y máxima autoridad ejecutiva, administrativa y constitucional de la English Premier League Fantasy Association. Su liderazgo ha sido fundamental para establecer las bases institucionales y normativas que sostienen la competición. Actualmente es el Campeón Absoluto de la English Premier League Fantasy 2026.",
  },
  {
    name: "Gabriel",
    role: "Vicepresidente",
    image: "/leadership/Gabriel.jpg",
    description:
      "Como Vicepresidente de la asociación, colabora directamente con la Presidencia en la dirección institucional y en el cumplimiento de los principios que rigen la competición. Su función contribuye a mantener la estabilidad, organización y continuidad de la Liga.",
  },
  {
    name: "Ricardo Ocaña",
    role: "Tesorero",
    image: "/leadership/Ricardo.jpg",
    description:
      "Responsable de la estabilidad financiera y del orden administrativo de la English Premier League Fantasy Association. Supervisa la gestión de los recursos destinados a premios, trofeos y demás necesidades oficiales de la organización.",
  },
  {
    name: "Pedro Rafael",
    role: "Miembro del Comité",
    image: "/leadership/Pedro.jpg",
    description:
      "Integrante del Comité Institucional, participa en las funciones judiciales y consultivas de la asociación. Colabora en la aplicación imparcial de las normas, la resolución de controversias y la preservación del juego limpio dentro de la competición.",
  },
  {
    name: "Jorge Diaz",
    role: "Miembro del Comité",
    image: "/leadership/Jorge.jpg",
    description:
      "Integrante del Comité Institucional, desempeña funciones judiciales y consultivas dentro de la asociación. Junto con los demás miembros del Comité, contribuye al análisis de conflictos y al cumplimiento de las normas de la Liga.",
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-black text-cream-100">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Liderazgo
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cream-200">
            Directivos oficiales de la English Premier League Fantasy
            Association y responsables de la administración institucional
            de la competición.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-cream-100">
                  {leader.name}
                </h2>

                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold-400">
                  {leader.role}
                </p>

                <p className="mt-4 text-base leading-7 text-cream-200">
                  {leader.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}