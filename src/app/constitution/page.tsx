import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import StadiumBackground from "../stadium-background";
import SignOutButton from "../sign-out-button";
import Header from "@/components/Header";

export default async function ConstitutionPage() {
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

      <main className="relative z-10 mx-auto w-full max-w-4xl px-6 py-14">
        <article className="rounded-xl border border-gold-500/15 bg-navy-950/80 p-8 backdrop-blur-sm">

          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-wide text-gold-300">
              LA CARTA MAGNA
            </h1>
            <p className="mt-3 text-sm text-cream-100/60">
              English Premier League Fantasy Association
            </p>
          </div>

          {/* PREÁMBULO */}
          <section className="mb-12">
            <h2 className="mb-5 text-2xl font-bold text-gold-300">
              PREÁMBULO
            </h2>

            <div className="space-y-4 leading-8 text-cream-100/80">
              <p>
                Con el propósito de preservar la integridad, la competitividad,
                el orden institucional y el prestigio de la English Premier League
                Fantasy Association, en adelante la Liga, se establece la presente
                Carta Magna como máxima autoridad normativa de la organización.
              </p>

              <p>
                Toda persona que forme parte de la Liga acepta las disposiciones
                establecidas en esta Constitución. Ningún acuerdo verbal, costumbre,
                interpretación individual, precedente o decisión informal podrá
                prevalecer sobre sus disposiciones.
              </p>
            </div>
          </section>

          {/* TÍTULO I */}
          <section className="mb-12">
            <h2 className="mb-8 text-2xl font-bold text-gold-300">
              TÍTULO I: DE LA AUTORIDAD CONSTITUCIONAL
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 1. Autoridad Suprema
                </h3>
                <p className="mt-3 leading-8 text-cream-100/80">
                  La presente Carta Magna constituye la máxima autoridad normativa
                  de la Liga y debe ser cumplida obligatoriamente por todos sus
                  integrantes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 2. Alcance
                </h3>
                <div className="mt-3 space-y-4 leading-8 text-cream-100/80">
                  <p>
                    Toda decisión administrativa, deportiva o disciplinaria deberá
                    ajustarse a las disposiciones establecidas en esta Constitución.
                  </p>
                  <p>
                    Ninguna regla, acuerdo, costumbre, precedente o interpretación
                    que contradiga este documento tendrá validez.
                  </p>
                  <p>
                    Cualquier asunto que no esté expresamente contemplado en esta
                    Carta Magna no tendrá reconocimiento oficial hasta que sea
                    regulado mediante Resolución Presidencial o mediante una reforma
                    constitucional.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* TÍTULO II */}
          <section className="mb-12">
            <h2 className="mb-8 text-2xl font-bold text-gold-300">
              TÍTULO II: DE LA PRESIDENCIA
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 3. Naturaleza del Cargo
                </h3>
                <p className="mt-3 leading-8 text-cream-100/80">
                  La Presidencia representa la máxima autoridad ejecutiva,
                  administrativa, deportiva y constitucional de la Liga.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 4. Carácter Vitalicio
                </h3>
                <p className="mt-3 leading-8 text-cream-100/80">
                  El cargo de Presidente tendrá carácter vitalicio y será ejercido
                  permanentemente por el fundador de la Liga.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 5. Facultades del Presidente
                </h3>

                <p className="mt-3 leading-8 text-cream-100/80">
                  Corresponde exclusivamente al Presidente:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-cream-100/80">
                  <li>Dirigir la administración general de la Liga.</li>
                  <li>Interpretar la presente Carta Magna.</li>
                  <li>Resolver vacíos constitucionales o reglamentarios.</li>
                  <li>Designar y remover libremente a los miembros del Comité.</li>
                  <li>Determinar el calendario oficial de cada temporada.</li>
                  <li>Convocar el Draft Oficial.</li>
                  <li>Establecer la modalidad oficial de competencia.</li>
                  <li>
                    Emitir Resoluciones Presidenciales cuando las circunstancias
                    lo requieran.
                  </li>
                  <li>
                    Resolver cualquier controversia relacionada con el funcionamiento
                    de la Liga.
                  </li>
                </ul>

                <div className="mt-6 rounded-lg border border-gold-500/10 bg-black/10 p-5">
                  <h4 className="font-semibold text-gold-300">
                    Nota de Carácter Resolutivo
                  </h4>
                  <p className="mt-2 leading-7 text-cream-100/80">
                    Las decisiones del Presidente serán definitivas, obligatorias
                    e inapelables.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 6. Facultad de Remoción
                </h3>
                <p className="mt-3 leading-8 text-cream-100/80">
                  Para preservar la estabilidad institucional, el prestigio y el
                  funcionamiento correcto de la Liga, el Presidente conserva la
                  facultad exclusiva de suspender, remover o expulsar temporal o
                  permanentemente a cualquier integrante cuya conducta, acciones o
                  incumplimientos sean incompatibles con esta Carta Magna o que,
                  a juicio de la Presidencia, perjudiquen el desarrollo normal de
                  la organización.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 7. Permanencia en la Liga
                </h3>
                <div className="mt-3 space-y-4 leading-8 text-cream-100/80">
                  <p>
                    Toda decisión presidencial relacionada con suspensión, remoción
                    o expulsión tendrá efecto inmediato.
                  </p>
                  <p>
                    La permanencia dentro de la Liga constituye un privilegio y no
                    un derecho adquirido.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* TÍTULO III */}
          <section className="mb-12">
            <h2 className="mb-8 text-2xl font-bold text-gold-300">
              TÍTULO III: DEL COMITÉ
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 8. Integración
                </h3>
                <p className="mt-3 leading-8 text-cream-100/80">
                  La Liga contará con un Comité Institucional compuesto por dos
                  miembros designados directamente por el Presidente.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 9. Nombramiento
                </h3>
                <p className="mt-3 leading-8 text-cream-100/80">
                  Los miembros del Comité ejercerán sus funciones mientras cuenten
                  con la confianza del Presidente, quien podrá sustituirlos en
                  cualquier momento.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 10. Funciones
                </h3>

                <p className="mt-3 leading-8 text-cream-100/80">
                  El Comité tendrá funciones consultivas y judiciales dentro de la
                  administración de la Liga. Entre sus responsabilidades estarán:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-cream-100/80">
                  <li>Emitir recomendaciones sobre conflictos entre participantes.</li>
                  <li>Analizar asuntos disciplinarios.</li>
                  <li>Asesorar a la Presidencia.</li>
                  <li>Colaborar en la interpretación del reglamento.</li>
                </ul>

                <p className="mt-5 leading-8 text-cream-100/80">
                  Las decisiones del Comité serán de carácter consultivo. La
                  determinación definitiva corresponderá siempre al Presidente.
                </p>
              </div>

            </div>
          </section>

          {/* TÍTULO IV */}
          <section className="mb-12">
            <h2 className="mb-8 text-2xl font-bold text-gold-300">
              TÍTULO IV: DEL REGLAMENTO DEPORTIVO
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 11. Normativa Oficial
                </h3>
                <div className="mt-3 space-y-4 leading-8 text-cream-100/80">
                  <p>
                    La Liga se desarrollará conforme a las reglas oficiales del
                    Fantasy Premier League administrado por la Premier League de
                    Inglaterra.
                  </p>
                  <p>
                    Las puntuaciones, sistema de juego, transferencias, fichajes,
                    calendario, jugadores elegibles, chips y funcionamiento general
                    estarán regulados por las normas oficiales de dicha plataforma.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 12. Jerarquía Normativa
                </h3>
                <p className="mt-3 leading-8 text-cream-100/80">
                  Cuando exista una contradicción entre las reglas oficiales del
                  Fantasy Premier League y esta Carta Magna, prevalecerán las
                  disposiciones establecidas en la presente Constitución.
                </p>
              </div>

            </div>
          </section>

          {/* TÍTULO V */}
          <section className="mb-12">
            <h2 className="mb-8 text-2xl font-bold text-gold-300">
              TÍTULO V: DE LA MODALIDAD DE COMPETENCIA
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 13. Modalidades
                </h3>

                <p className="mt-3 leading-8 text-cream-100/80">
                  La Liga podrá disputarse bajo cualquiera de las siguientes
                  modalidades oficiales:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 text-cream-100/80">
                  <li>Head-to-Head</li>
                  <li>Classic League</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 14. Determinación
                </h3>
                <p className="mt-3 leading-8 text-cream-100/80">
                  El Presidente determinará exclusivamente la modalidad
                  correspondiente a cada temporada antes del inicio oficial de
                  la competición.
                </p>
              </div>

            </div>
          </section>

          {/* TÍTULO VI */}
          <section className="mb-12">
            <h2 className="mb-8 text-2xl font-bold text-gold-300">
              TÍTULO VI: DEL DRAFT OFICIAL
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 15. Celebración
                </h3>
                <p className="mt-3 leading-8 text-cream-100/80">
                  Antes del comienzo de cada temporada se celebrará un Draft
                  Oficial.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 16. Organización
                </h3>

                <p className="mt-3 leading-8 text-cream-100/80">
                  Corresponde exclusivamente al Presidente establecer:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 text-cream-100/80">
                  <li>La fecha.</li>
                  <li>La hora.</li>
                  <li>La plataforma.</li>
                  <li>El procedimiento oficial del Draft.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 17. Asistencia
                </h3>
                <div className="mt-3 space-y-4 leading-8 text-cream-100/80">
                  <p>
                    La asistencia al Draft Oficial es obligatoria.
                  </p>
                  <p>
                    La ausencia injustificada ocasionará la descalificación
                    automática del participante para la temporada correspondiente,
                    salvo que exista autorización expresa del Presidente.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* TÍTULO VII */}
          <section className="mb-12">
            <h2 className="mb-8 text-2xl font-bold text-gold-300">
              TÍTULO VII: DE LA MEMBRESÍA
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 18. Cuota Anual
                </h3>
                <p className="mt-3 leading-8 text-cream-100/80">
                  La participación en la Liga estará sujeta al pago de una cuota
                  anual de US$20.00.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 19. Destino de los Fondos
                </h3>

                <p className="mt-3 leading-8 text-cream-100/80">
                  Los fondos recaudados serán destinados principalmente a la
                  adquisición de los trofeos oficiales de la Liga, incluyendo:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-6 text-cream-100/80">
                  <li>Trofeo de la Liga.</li>
                  <li>Copa de Invierno.</li>
                  <li>Copa de Verano.</li>
                </ul>

                <p className="mt-5 leading-8 text-cream-100/80">
                  El Presidente podrá autorizar el uso de dichos recursos para
                  cualquier otro propósito que contribuya al desarrollo y prestigio
                  de la organización.
                </p>
              </div>

            </div>
          </section>

          {/* TÍTULO VIII */}
          <section className="mb-12">
            <h2 className="mb-8 text-2xl font-bold text-gold-300">
              TÍTULO VIII: DE LA PARTICIPACIÓN Y LAS VOTACIONES
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 20. Participación
                </h3>
                <p className="mt-3 leading-8 text-cream-100/80">
                  Todos los miembros tendrán derecho a expresar libremente sus
                  opiniones, presentar propuestas y participar en los debates
                  desarrollados mediante los canales oficiales de comunicación
                  de la Liga.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 21. Encuestas
                </h3>
                <p className="mt-3 leading-8 text-cream-100/80">
                  Los integrantes podrán crear encuestas y votaciones con el
                  propósito de conocer la opinión general de los participantes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cream-100">
                  Artículo 22. Votaciones Oficiales
                </h3>

                <div className="mt-3 space-y-4 leading-8 text-cream-100/80">
                  <p>
                    Únicamente las encuestas, votaciones, consultas o referendos
                    publicados oficialmente por la cuenta del Presidente tendrán
                    carácter oficial y producirán efectos administrativos dentro
                    de la Liga.
                  </p>

                  <p>
                    Cualquier encuesta promovida por otro integrante tendrá
                    únicamente carácter consultivo y no será vinculante.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* TÍTULO IX */}
          <section className="mb-12">
            <h2 className="mb-8 text-2xl font-bold text-gold-300">
              TÍTULO IX: DE LA INTERPRETACIÓN CONSTITUCIONAL
            </h2>

            <div>
              <h3 className="text-lg font-semibold text-cream-100">
                Artículo 23. Interpretación
              </h3>

              <div className="mt-3 space-y-4 leading-8 text-cream-100/80">
                <p>
                  La interpretación definitiva de esta Carta Magna corresponderá
                  exclusivamente al Presidente.
                </p>

                <p>
                  Toda controversia, omisión o vacío normativo será resuelto
                  mediante Resolución Presidencial, la cual tendrá carácter
                  obligatorio para todos los miembros.
                </p>
              </div>
            </div>
          </section>

          {/* CLÁUSULA DE CIERRE */}
          <section className="border-t border-gold-500/15 pt-10">
            <h2 className="mb-6 text-2xl font-bold text-gold-300">
              CLÁUSULA DE CIERRE ADMINISTRATIVO
            </h2>

            <div className="space-y-4 leading-8 text-cream-100/80">
              <p>
                Todo asunto que no esté expresamente previsto en esta Carta Magna
                carecerá de efectos administrativos dentro de la Liga, salvo que
                sea resuelto mediante Resolución Presidencial o incorporado
                posteriormente mediante una reforma constitucional.
              </p>

              <p>
                La Liga tiene como finalidad promover la competencia sana, el
                pensamiento estratégico, el respeto entre sus integrantes y la
                excelencia deportiva, bajo un marco institucional inspirado en las
                grandes organizaciones deportivas del mundo.
              </p>
            </div>
          </section>

          {/* INFORMACIÓN OFICIAL */}
          <section className="mt-12 border-t border-gold-500/15 pt-8 text-center">
            <h2 className="text-xl font-bold text-gold-300">
              ENGLISH PREMIER LEAGUE FANTASY
            </h2>

            <p className="mt-3 text-sm text-cream-100/60">
              Official Headquarters
            </p>

            <p className="mt-1 text-sm text-cream-100/80">
              1275 W 49th St, Hialeah, FL 33012
            </p>

            <p className="mt-3 text-sm text-cream-100/60">
              Inquiries
            </p>

            <p className="mt-1 text-sm text-cream-100/80">
              presidentevitalici@gmail.com
            </p>

            <p className="mt-6 text-sm font-semibold text-gold-300">
              Season 2026–2027
            </p>
          </section>

        </article>
      </main>
    </>
  );
}