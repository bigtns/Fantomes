export const metadata = {
  title: "Informations légales — Fantômes",
};

export default function Legal() {
  return (
    <main className="bg-creme px-6 py-14 sm:px-10">
      <div className="mx-auto max-w-prose space-y-6 text-encre/85 leading-relaxed">
        <a href="/" className="underline">
          Retour à l'accueil
        </a>

        <h1 className="font-display text-3xl text-encre">
          Informations légales
        </h1>

        <p>
          <a href="#mentions" className="underline">Mentions légales</a>
          {" · "}
          <a href="#cgv" className="underline">Conditions générales de vente</a>
          {" · "}
          <a href="#confidentialite" className="underline">Confidentialité</a>
        </p>

        <h2 id="mentions" className="pt-6 font-display text-2xl text-encre">
          Mentions légales
        </h2>
        <p>
          Le site Fantômes est édité par Barber tun's, SAS au capital de
          1 000 €, dont le siège est situé 50 rue de France, 77300
          Fontainebleau.
        </p>
        <p>
          SIRET : 953 424 983 00013. RCS Melun 953 424 983. TVA
          intracommunautaire : FR71 953 424 983 [À VÉRIFIER].
        </p>
        <p>
          Directeur de la publication : Mehdi Sraieb, Président. Contact :
          servicefantomes@outlook.fr.
        </p>
        <p>
          Hébergeur : Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
          États-Unis.
        </p>

        <h2 id="cgv" className="pt-6 font-display text-2xl text-encre">
          Conditions générales de vente
        </h2>
        <p>
          <strong>1. Service.</strong> Fantômes propose un audit de relevé
          bancaire : à partir du relevé fourni par le client, l'éditeur
          identifie les prélèvements récurrents, les classe par montant annuel
          et fournit une lettre de résiliation pour chacun. Le service est
          fourni par email, dans un délai de 48 heures suivant la réception du
          relevé.
        </p>
        <p>
          <strong>2. Prix et paiement.</strong> L'audit est vendu 19 € TTC
          (TVA à 20 % incluse), en paiement unique par carte bancaire via la
          plateforme sécurisée Stripe. L'éditeur ne conserve aucun numéro de
          carte.
        </p>
        <p>
          <strong>3. Commande.</strong> La commande est conclue à la
          validation du paiement. Le client reçoit un reçu par email et doit
          ensuite envoyer son relevé à servicefantomes@outlook.fr depuis
          l'adresse utilisée pour payer.
        </p>
        <p>
          <strong>4. Droit de rétractation.</strong> Conformément au Code de
          la consommation, le client dispose de 14 jours à compter de la
          commande pour se rétracter, sans motif, en écrivant à
          servicefantomes@outlook.fr. En demandant l'exécution immédiate du
          service, le client reconnaît qu'il perd son droit de rétractation
          une fois le service pleinement exécuté. S'il se rétracte après
          avoir demandé l'exécution mais avant sa fin, il règle un montant
          proportionnel à ce qui a déjà été fourni.
        </p>
        <p>
          <strong>5. Responsabilité.</strong> Fantômes est un service
          d'information : il ne constitue ni un conseil financier ni un
          conseil juridique. La résiliation effective des abonnements reste à
          la charge du client. Les résultats dépendent de la qualité et de la
          période couverte par le relevé transmis.
        </p>
        <p>
          <strong>6. Réclamations et médiation.</strong> Toute réclamation
          doit d'abord être adressée par écrit à servicefantomes@outlook.fr.
          En l'absence de solution, le client peut recourir gratuitement au
          médiateur de la consommation : CM2C (Centre de la Médiation de la
          Consommation de Conciliateurs de Justice), 49 rue de Ponthieu,
          75008 Paris, site : www.cm2c.net, email : cm2c@cm2c.net.
        </p>
        <p>
          <strong>7. Droit applicable.</strong> Les présentes conditions sont
          soumises au droit français.
        </p>

        <h2
          id="confidentialite"
          className="pt-6 font-display text-2xl text-encre"
        >
          Politique de confidentialité
        </h2>
        <p>
          Le responsable du traitement est Barber tun's (coordonnées
          ci-dessus). Contact : servicefantomes@outlook.fr.
        </p>
        <p>
          <strong>Données collectées.</strong> Nom et adresse email (saisis au
          paiement), informations de paiement (traitées directement par
          Stripe) et relevé bancaire que vous nous envoyez.
        </p>
        <p>
          <strong>Finalité.</strong> Réaliser l'audit commandé, vous envoyer
          les résultats et tenir notre comptabilité. Base légale : exécution
          du contrat.
        </p>
        <p>
          <strong>Durée de conservation.</strong> Le relevé bancaire est
          supprimé au plus tard 30 jours après l'envoi des résultats. Les
          données de facturation sont conservées 10 ans, comme la loi
          l'impose.
        </p>
        <p>
          <strong>Destinataires.</strong> Stripe (paiement), Vercel
          (hébergement) et Microsoft Outlook (messagerie). Certains de ces
          prestataires sont situés hors de l'Union européenne et appliquent
          des garanties de transfert reconnues.
        </p>
        <p>
          <strong>Vos droits.</strong> Vous pouvez accéder à vos données, les
          rectifier, les faire supprimer ou vous opposer à leur traitement en
          écrivant à servicefantomes@outlook.fr. Vous pouvez aussi saisir la
          CNIL (cnil.fr).
        </p>
        <p>
          <strong>Cookies.</strong> Ce site n'utilise aucun cookie de suivi
          publicitaire.
        </p>
      </div>
    </main>
  );
}
