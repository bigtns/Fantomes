import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-encre text-creme px-6 pt-14 pb-16 sm:px-10 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-prose">
          <p className="font-display text-lg text-billet-clair">Fantômes</p>

          <h1 className="mt-6 font-display text-[2.1rem] leading-[1.15] sm:text-5xl">
            Tu paies peut-être pour des abonnements{" "}
            <span className="italic">fantômes</span>.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-creme/85">
            Un essai jamais résilié, un service remplacé, une option activée
            une fois. Chaque prélèvement est trop petit pour se voir sur un
            relevé — mais additionnés, ils tournent depuis des années.
          </p>

          <div className="mt-9">
            <Link
              href="/api/checkout"
              className="block w-full rounded-full bg-billet px-8 py-4 text-center text-lg font-semibold text-creme active:bg-billet-clair sm:inline-block sm:w-auto"
            >
              Débusquer mes fantômes — 19 €
            </Link>
            <p className="mt-3 text-sm text-creme/60">
              Paiement unique. Résultat sous 48 h.
            </p>
          </div>
        </div>
      </section>

      {/* DOULEUR CHIFFRÉE */}
      <section className="bg-creme px-6 py-14 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-prose">
          <p className="font-display text-3xl leading-snug sm:text-4xl">
            8 € par mois oubliés pendant 3 ans, ça fait{" "}
            <span className="text-billet">288 €</span> partis pour rien.
          </p>
          <p className="mt-4 text-encre/70">
            Et la plupart des foyers ont plusieurs fantômes en même temps, pas
            un seul.
          </p>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="bg-sable px-6 py-14 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-prose space-y-8">
          <div className="border-l-2 border-billet pl-5">
            <h2 className="font-display text-xl">
              On trouve, tu ne cherches pas
            </h2>
            <p className="mt-2 text-encre/70">
              Dépose ton relevé bancaire, on repère chaque prélèvement
              récurrent — même les petits.
            </p>
          </div>

          <div className="border-l-2 border-billet pl-5">
            <h2 className="font-display text-xl">
              Classé par ce que ça te coûte vraiment
            </h2>
            <p className="mt-2 text-encre/70">
              Une liste triée par montant annuel, pas mensuel — pour voir ce
              qui pèse vraiment.
            </p>
          </div>

          <div className="border-l-2 border-billet pl-5">
            <h2 className="font-display text-xl">
              La lettre de résiliation, déjà écrite
            </h2>
            <p className="mt-2 text-encre/70">
              Pour chaque fantôme trouvé, une lettre prête à envoyer. Il ne te
              reste qu'à l'envoyer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-encre px-6 py-14 text-creme sm:px-10 sm:py-20">
        <div className="mx-auto max-w-prose text-center">
          <p className="font-display text-2xl sm:text-3xl">
            Combien de fantômes se cachent dans ton relevé&nbsp;?
          </p>
          <Link
            href="/api/checkout"
            className="mt-8 block w-full rounded-full bg-billet px-8 py-4 text-center text-lg font-semibold text-creme active:bg-billet-clair sm:inline-block sm:w-auto"
          >
            Débusquer mes fantômes — 19 €
          </Link>
        </div>
      </section>

      <footer className="bg-encre px-6 py-8 text-center text-sm text-creme/50 sm:px-10">
        Fantômes — {new Date().getFullYear()}
      </footer>
    </main>
  );
}
