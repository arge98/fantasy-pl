import Image from "next/image";
import Header from "@/components/Header";

const licenciados = [
  {
    name: "Daniel",
    title: "Licenciado Mayor",
    season: "2025-2026",
    image: "/licenciados/Daniel.jpg",
  },
  {
    name: "Yohan Abreu",
    title: "Licenciado Segundo",
    season: "2025-2026",
    image: "/licenciados/Yohan.jpg",
  },
  {
    name: "Jorge Diaz",
    title: "Licenciado Tercero",
    season: "2025-2026",
    image: "/licenciados/Jorge.jpg",
  },
  {
    name: "Argelio",
    title: "Licenciado Mayor",
    season: "2024-2025",
    image: "/licenciados/Argelio.jpg",
  },
  {
    name: "Ricardo Ocaña",
    title: "Licenciado Segundo",
    season: "2024-2025",
    image: "/licenciados/Ricardo.jpg",
  },
  {
    name: "Carlos Rivera",
    title: "Licenciado Tercero",
    season: "2024-2025",
    image: "/licenciados/Carlos.jpg",
  },
];

export default function LicenciadosPage() {
  return (
    <div className="min-h-screen bg-black text-cream-100">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-cream-100">
            La Zona de los Licenciados
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-cream-200">
            Santuario de quienes, temporada tras temporada, han convertido la
            derrota en una costumbre y el fracaso en una disciplina. Aquí
            descansan los que hicieron del último lugar una dirección
            permanente, los que confundieron la estrategia con la improvisación
            y el talento con la buena suerte.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {licenciados.map((licenciado) => (
            <article
              key={`${licenciado.name}-${licenciado.season}`}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={licenciado.image}
                  alt={licenciado.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-cream-100">
                  {licenciado.name}
                </h2>

                <p className="mt-2 text-lg text-gold-300">
                  {licenciado.title}
                </p>

                <p className="mt-1 text-sm text-cream-300">
                  ({licenciado.season})
                </p>
              </div>
            </article>
          ))}
        </div>

        <section className="mx-auto mt-16 max-w-4xl text-center text-cream-200">
          <p className="text-lg leading-8">
            Verdaderos poetas en el arte de perder. Maestros del desastre.
            Eruditos de las malas decisiones. Hombres con el raro don de
            convertir cualquier plantilla en una tragedia deportiva.
          </p>

          <p className="mt-6 text-lg leading-8">
            La mayoría pierde una liga por accidente, ellos la pierden por
            convicción. Donde otros encuentran una remontada, ellos descubren
            una nueva forma de complicarse la vida. Donde unos levantan
            trofeos, ellos levantan excusas.
          </p>

          <p className="mt-6 text-lg leading-8">
            Estos son los auténticos Gandhis de la derrota. Los filósofos del
            fracaso. Los que, con una constancia digna de admiración, han
            demostrado que siempre existe un camino más corto hacia el fondo de
            la tabla.
          </p>

          <p className="mt-6 text-xl font-semibold text-gold-300">
            Porque no cualquiera puede ser el peor. Para eso hace falta
            perseverancia. Hace falta talento… pero para equivocarse.
          </p>

          <p className="mt-6 text-2xl font-bold text-cream-100">
            Y ese talento, aquí abunda.
          </p>
        </section>
      </main>
    </div>
  );
}