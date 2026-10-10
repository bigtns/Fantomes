import Link from "next/link";
import AnimatedNumber from "./components/AnimatedNumber";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-encre text-creme px-6 pt-14 pb-16 sm:px-10 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-prose">
          <div className="flex items-center justify-between">
            <p className="font-display text-3xl sm:text-4xl text-billet-clair">
              Fantôme Services
            </p>
            <span className="ghost-float text-7xl" aria-hidden="true">👻</span>
          </div>

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
      
