export default function Merci() {
  return (
    <main className="flex min-h-screen items-center bg-encre px-6 text-creme">
      <div className="mx-auto max-w-prose text-center">
        <p className="font-display text-3xl">Paiement reçu, merci !</p>
        <p className="mt-4 text-creme/80">
          Dernière étape : envoie ton relevé bancaire (PDF ou export CSV) à
          l'adresse ci-dessous, depuis l'email que tu as utilisé pour payer.
          On te renvoie ta liste de fantômes et tes lettres de résiliation
          sous 48 h.
        </p>
        <a
          href="mailto:servicefantomes@outlook.fr?subject=Mon relevé pour l'audit Fantômes"
          className="mt-8 block w-full rounded-full bg-billet px-8 py-4 text-center text-lg font-semibold text-creme sm:inline-block sm:w-auto"
        >
          Envoyer mon relevé
        </a>
        <p className="mt-4 text-sm text-creme/60">
          servicefantomes@outlook.fr
        </p>
        <p className="mt-6 text-sm text-creme/60">
          Tu peux masquer ton nom et ton numéro de compte : seuls les libellés
          et les montants des prélèvements nous intéressent.
        </p>
      </div>
    </main>
  );
}
