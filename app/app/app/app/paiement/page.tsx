import Link from "next/link";

export default function Paiement() {
  return (
    <main className="flex min-h-screen items-center bg-encre px-6 text-creme">
      <div className="mx-auto max-w-prose text-center">
        <p className="font-display text-2xl">Le paiement arrive dans 5 minutes.</p>
        <p className="mt-3 text-creme/70">
          On branche Stripe juste après. Reviens sur cette page tout à l'heure.
        </p>
        <Link href="/" className="mt-8 inline-block underline">
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
