import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import StadiumBackground from "../stadium-background";
import SignOutButton from "../sign-out-button";

const franchises = [
  {
    name: "Ariel's Avengers",
    image: "/franchises/Ariel's Avengers.jpg",
    description:
      "La escuadra debuta oficialmente en la presente temporada envuelta en un halo de expectación e incertidumbre respecto a su planteamiento táctico, propuesta estratégica y estilo de juego. Su incorporación añade un elemento inédito a la dinámica de la asociación, donde la incógnita sobre su verdadero alcance deportivo quedará despejada en el terreno de juego, midiendo si posee el temple y la solvencia necesarios para estar a la altura de las exigencias competitivas de la Liga.",
  },
  {
    name: "Meet Your Daddy",
    image: "/franchises/Meet Your Daddy.jpg",
    description:
      "Tras su irrupción en la competición la temporada pasada, este club se convirtió en la gran revelación del certamen al sostener una encarnizada lucha por el título durante prácticamente toda la campaña. De cara a su segundo ciclo consecutivo en la asociación, la franquicia afronta el nuevo año con la madurez adquirida y el objetivo inequívoco de culminar la obra iniciada, buscando reclamar la gloria absoluta que se le escapó en el tramo final de su torneo debut.",
  },
  {
    name: "El Pantano 913 FC",
    image: "/franchises/El Pantano 913 FC.jpg",
    description:
      "Surgida en el año 2024 como una de las escuadras fundadoras de la organización, esta franquicia se distingue por su trayectoria impredecible, marcada por profundas oscilaciones en la tabla de posiciones y una permanente presencia en el centro de la polémica. Caracterizado por su espíritu combativo e irreverente, el club afronta la presente campaña con la firme ambición institucional de romper su sequía histórica y conquistar finalmente su primer título oficial en la competición.",
  },
  {
    name: "Narra Football Federation",
    image: "/franchises/Narra Football Federation.jpg",
    description:
      "Surgida en la temporada inaugural de 2024, esta escuadra atravesó un complejo periodo de adaptación que la relegó a la zona baja de la tabla en sus inicios, no sin antes consagrarse como una auténtica «mata-gigantes» al eliminar a Los Astros de Houston en la competición de copa. Tras aquel bautismo de fuego, la franquicia protagonizó en su segunda campaña la progresión más espectacular en la historia de la asociación, escalando de forma incontestable hasta un histórico cuarto puesto.",
  },
  {
    name: "Dinastia FC",
    image: "/franchises/Dinastia FC.jpg",
    description:
      "Establecida en el estado de Texas como una de las instituciones originarias de la asociación, esta escuadra ostenta una de las trayectorias más intensas y controversiales de la competición. Antiguamente conocida como Los Astros de Houston, la franquicia es coprotagonista del clásico más encarnizado de la Liga frente a Narra Football Federation, erigiendo una rivalidad histórica de época.",
  },
  {
    name: "Papi Boris FC",
    image: "/franchises/Papi Boris FC.jpg",
    description:
      "Inspirada en el linaje y la mística del legendario Manchester United, esta entidad fundadora se ha erigido como una de las más sólidas y constantes de la asociación, manteniendo un rendimiento competitivo de alto nivel a lo largo de cada una de las temporadas disputadas. Anteriormente conocida como Bugarrones United, la escuadra ha destacado históricamente por desplegar un estilo de juego profundamente táctico, ordenado y enmarcado en el más estricto sentido del juego limpio.",
  },
  {
    name: "AFC Richmond",
    image: "/franchises/AFC Richmond.jpg",
    description:
      "Integrada al circuito competitivo desde la temporada fundacional, esta escuadra se distingue por su probada constancia y por atesorar ya un trofeo oficial en sus vitrinas tras haberse coronado campeona del torneo de copa. Con una identidad táctica innegociable, la franquicia se ha caracterizado históricamente por mantener un comportamiento regular y sólido, asentándose con solvencia en la zona media-alta de la clasificación.",
  },
  {
    name: "Kingsbury Albion",
    image: "/franchises/Kingsbury Albion.jpg",
    description:
      "Eje central de la asociación y génesis sobre la cual se erigió la historia de la competición, la escuadra del Presidente se ha consolidado indiscutiblemente como la franquicia más regular, sólida y temible de todos los tiempos. Compitiendo de manera permanente en la cúspide de la tabla, la trayectoria del club está marcada por el temple competitivo: tras ver escaparse un título liguero en el tramo final de la campaña inaugural, resurge en el ciclo posterior con una actuación magistral para coronarse Campeón Absoluto de la Liga.",
  },
  {
    name: "FC Jose Marti",
    image: "/franchises/FC Jose Marti.jpg",
    description:
      "Inspirada en el pensamiento, la mística y el ideario del Apóstol, esta escuadra originaria ocupa un lugar de honor en los anales de la asociación al haberse consagrado como el primer Campeón de Liga en la historia de la competición, firmando además un histórico e inédito doblete al conquistar la copa en esa misma campaña inaugural. Tras rozar el cielo institucional, la franquicia experimentó un drástico repliegue que la llevó a ocupar los puestos bajos de la tabla en el curso posterior; sin embargo, encara este nuevo año con la firme determinación de apelar a su estirpe ganadora.",
  },
  {
    name: "Catenaccio Haram FC",
    image: "/franchises/Catenaccio Haram FC.jpg",
    description:
      "Procedente de Italia e inspirada en la época dorada de la Serie A, aquel periodo glorioso en que el fútbol transalpino dominaba el panorama internacional con su implacable solidez defensiva y rigor táctico, esta escuadra originaria se erige como una de las más temidas y competitivas de la asociación. Respaldada por el prestigio de haber conquistado múltiples ediciones del certamen de Fantasy de la Serie A, la entidad traslada todo su oficio y mentalidad ganadora al circuito inglés.",
  },
  {
    name: "Versalles Vendetta FC",
    image: "/franchises/Versalles Vendetta FC.jpg",
    description:
      "Rindiendo un emotivo homenaje en su denominación al barrio humilde que vio nacer y crecer a su presidente, esta escuadra originaria se ha ganado el afecto y la simpatía unánime de toda la comunidad por su autenticidad y carisma. Aunque en el terreno puramente competitivo la fortuna no le ha acompañado en los cursos anteriores, relegándola a la zona baja de la clasificación, la entidad encara esta tercera temporada con un cambio de rumbo estratégico fundamental.",
  },
  {
    name: "Los Repas",
    image: "/franchises/Los Repas.jpg",
    description:
      "Corazón de hierro y espíritu incansable, combatientes que no se rinden hasta el silbato final.",
  },
];

export default async function FranquiciasPage() {
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
            className="text-sm font-semibold text-gold-300"
          >
            Franquicias
          </Link>

          <SignOutButton />
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-7xl px-6 py-14">
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold tracking-wide text-gold-300">
            FRANQUICIAS
          </h1>

          <p className="mt-3 text-sm text-cream-100/60">
            Perfiles Oficiales — Temporada 2026–2027
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-4">
          {franchises.map((franchise) => (
            <article key={franchise.name}>
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src={franchise.image}
                  alt={franchise.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className="mt-5 text-2xl font-bold leading-tight text-cream-100">
                {franchise.name}
              </h2>

              <p className="mt-4 text-base leading-7 text-cream-100/80">
                {franchise.description}
              </p>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}