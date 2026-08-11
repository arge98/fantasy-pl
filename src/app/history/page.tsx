import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import StadiumBackground from "../stadium-background";
import Header from "@/components/Header";

const history = [
  {
    year: "2024",
    title: "Fundación",
    text: "Se promulgan las bases de la English Premier League Fantasy Association bajo la iniciativa de su Presidente Fundador. Con la incorporación de las franquicias originarias, se establece la estructura institucional, el marco normativo y el arranque oficial de la competición.",
  },
  {
    year: "2024",
    title: "Primer Campeón",
    text: "Conclusión de la temporada inaugural y consagración del primer Campeón de Liga en la historia de la asociación. En una hazaña histórica sin precedentes, el soberano de la competición conquista de manera conjunta la Copa de Verano, firmando un doblete memorable que inauguró la vitrina de trofeos del organismo.",
  },
  {
    year: "2025",
    title: "Segunda Temporada y Transición Institucional",
    text: "El certamen celebra su segundo ciclo oficial de competencia, consolidando el formato y la rivalidad entre los clubes. En el plano administrativo, la campaña queda marcada por la reestructuración del padrón competitivo tras la desvinculación de dos integrantes originarios y la consecuente incorporación de dos nuevas franquicias a las filas de la asociación.",
  },
  {
    year: "2025",
    title: "Segundo Campeón",
    text: "Cierre de la segunda campaña con la proclamación del segundo Campeón de Liga en la historia de la competición. Una temporada de altísima exigencia táctica en la que el Presidente Fundador firmó una gesta memorable al dominar la tabla y alzarse con el título de liga.",
  },
  {
    year: "2026",
    title: "Tercera Temporada",
    text: "Apertura oficial del tercer curso competitivo de la asociación. La Liga renueva sus filas tras la partida de un miembro histórico y la posterior incorporación de un nuevo competidor para cubrir su plaza. Con este ajuste en la nómina de clubes, la promulgación de la Carta Magna y la renovación del compromiso deportivo, se da marcha a un nuevo capítulo en busca de la excelencia y la gloria absoluta.",
  },
];

export default async function HistoryPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <StadiumBackground />

      <Header />

      <main className="relative z-10 mx-auto w-full max-w-5xl px-6 py-14">
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold tracking-wide text-gold-300">
            HISTORIA
          </h1>

          <p className="mt-3 text-sm text-cream-100/60">
            English Premier League Fantasy Association
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gold-500/20 md:block" />

          <div className="space-y-12">
            {history.map((event) => (
              <article
                key={`${event.year}-${event.title}`}
                className="relative md:pl-14"
              >
                <div className="absolute left-0 top-1 hidden h-9 w-9 items-center justify-center rounded-full border border-gold-500/30 bg-navy-950 md:flex">
                  <div className="h-2 w-2 rounded-full bg-gold-400" />
                </div>

                <div className="rounded-xl border border-gold-500/15 bg-navy-950/80 p-7 backdrop-blur-sm">
                  <p className="text-sm font-bold tracking-widest text-gold-400">
                    {event.year}
                  </p>

                  <h2 className="mt-2 text-2xl font-bold text-cream-100">
                    {event.title}
                  </h2>

                  <p className="mt-4 leading-8 text-cream-100/80">
                    {event.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}