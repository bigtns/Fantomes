import Stripe from "stripe";
import Link from "next/link";
import AuditClient from "./AuditClient";

export default async function Audit({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    return (
      <main className="flex min-h-screen items-center bg-encre px-6 text-creme">
        <div className="mx-auto max-w-prose text-center">
          <p className="font-display text-2xl">Accès refusé.</p>
          <p className="mt-3 text-creme/70">
            Cette page n'est accessible qu'après un paiement.
          </p>
          <Link href="/" className="mt-8 inline-block underline">
            Retour à l'accueil
          </Link>
        </div>
      </main>
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  let paid = false;
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    paid = session.payment_status === "paid";
  } catch {
    paid = false;
  }

  if (!paid) {
    return (
      <main className="flex min-h-screen items-center bg-encre px-6 text-creme">
        <div className="mx-auto max-w-prose text-center">
          <p className="font-display text-2xl">Paiement introuvable.</p>
          <p className="mt-3 text-creme/70">
            Si tu viens de payer, réessaie dans quelques secondes.
          </p>
          <Link href="/" className="mt-8 inline-block underline">
            Retour à l'accueil
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-creme px-6 py-14 sm:px-10">
      <p className="mx-auto mb-10 max-w-prose font-display text-3xl">
        Débusquons tes fantômes.
      </p>
      <AuditClient />
    </main>
  );
}
