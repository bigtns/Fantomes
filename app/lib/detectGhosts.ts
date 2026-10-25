export type Transaction = {
  date: string;
  label: string;
  amount: number;
};

export type Ghost = {
  label: string;
  monthlyAmount: number;
  annualAmount: number;
  occurrences: number;
  lastDate: string;
};

function normalizeLabel(label: string): string {
  return label
    .toLowerCase()
    .replace(/[0-9]/g, "")
    .replace(/[^a-z\s]/g, "")
    .trim()
    .slice(0, 20);
}

function daysBetween(a: string, b: string): number {
  const d1 = new Date(a).getTime();
  const d2 = new Date(b).getTime();
  return Math.abs(d2 - d1) / (1000 * 60 * 60 * 24);
}

export function detectGhosts(transactions: Transaction[]): Ghost[] {
  const groups = new Map<string, Transaction[]>();

  for (const t of transactions) {
    if (t.amount >= 0) continue; // on ne garde que les débits
    const key = `${normalizeLabel(t.label)}_${Math.round(Math.abs(t.amount))}`;
    const list = groups.get(key) ?? [];
    list.push(t);
    groups.set(key, list);
  }

  const ghosts: Ghost[] = [];

  for (const list of groups.values()) {
    if (list.length < 2) continue;

    const sorted = [...list].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    let totalGap = 0;
    for (let i = 1; i < sorted.length; i++) {
      totalGap += daysBetween(sorted[i - 1].date, sorted[i].date);
    }
    const avgGap = totalGap / (sorted.length - 1);

    // on ne garde que ce qui ressemble à du mensuel (entre 20 et 40 jours)
    if (avgGap < 20 || avgGap > 40) continue;

    const monthlyAmount = Math.abs(
      sorted.reduce((sum, t) => sum + t.amount, 0) / sorted.length
    );

    ghosts.push({
      label: sorted[0].label.trim(),
      monthlyAmount: Math.round(monthlyAmount * 100) / 100,
      annualAmount: Math.round(monthlyAmount * 12 * 100) / 100,
      occurrences: sorted.length,
      lastDate: sorted[sorted.length - 1].date,
    });
  }

  return ghosts.sort((a, b) => b.annualAmount - a.annualAmount);
}

export function generateCancellationLetter(ghost: Ghost): string {
  return `Objet : Résiliation de mon abonnement — ${ghost.label}

Madame, Monsieur,

Je vous informe par la présente de ma volonté de résilier mon abonnement "${ghost.label}", prélevé à hauteur de ${ghost.monthlyAmount.toFixed(2)} € par mois sur mon compte.

Je vous remercie de bien vouloir prendre en compte cette demande de résiliation dans les meilleurs délais, et de m'en confirmer la bonne réception.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

[Votre nom]
[Votre numéro de client, si connu]`;
}
