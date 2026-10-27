"use client";

import { useState } from "react";
import Papa from "papaparse";
import {
  detectGhosts,
  generateCancellationLetter,
  Transaction,
  Ghost,
} from "../lib/detectGhosts";

function findColumn(row: Record<string, string>, keywords: string[]) {
  const keys = Object.keys(row);
  for (const key of keys) {
    const lower = key.toLowerCase();
    if (keywords.some((k) => lower.includes(k))) return key;
  }
  return null;
}

function parseAmount(raw: string): number {
  let cleaned = raw.replace(/[€\s]/g, "");

  if (cleaned.includes(",")) {
    // format français : 1.234,56 -> 1234.56
    cleaned = cleaned.replace(/\./g, "").replace(",", ".");
  }
  // sinon on garde le point tel quel : 1234.56

  const value = parseFloat(cleaned);
  return isNaN(value) ? NaN : value;
}

export default function AuditClient() {
  const [ghosts, setGhosts] = useState<Ghost[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleFile(file: File) {
    setError(null);
    setLoading(true);

    Papa.parse<Record<string, string>>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const rows = results.data;
          if (!rows.length) {
            setError("Le fichier semble vide.");
            setLoading(false);
            return;
          }

          const dateKey = findColumn(rows[0], ["date"]);
          const labelKey = findColumn(rows[0], ["libell", "label", "desc"]);
          const amountKey = findColumn(rows[0], ["montant", "amount"]);

          if (!dateKey || !labelKey || !amountKey) {
            setError(
              "Colonnes non reconnues. Le fichier doit contenir une date, un libellé et un montant."
            );
            setLoading(false);
            return;
          }

          const transactions: Transaction[] = rows
            .map((row) => ({
              date: row[dateKey],
              label: row[labelKey],
              amount: parseAmount(row[amountKey] ?? ""),
            }))
            .filter((t) => t.date && t.label && !isNaN(t.amount));

          if (!transactions.length) {
            setError("Aucune transaction exploitable n'a été trouvée.");
            setLoading(false);
            return;
          }

          setGhosts(detectGhosts(transactions));
          setLoading(false);
        } catch {
          setError("Le fichier n'a pas pu être lu. Vérifie qu'il s'agit bien d'un export CSV.");
          setLoading(false);
        }
      },
      error: () => {
        setError("Le fichier n'a pas pu être lu.");
        setLoading(false);
      },
    });
  }

  function downloadLetter(ghost: Ghost) {
    const text = generateCancellationLetter(ghost);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `resiliation-${ghost.label.slice(0, 20)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!ghosts) {
    return (
      <div className="mx-auto max-w-prose">
        <p className="text-encre/70">
          Dépose ton relevé bancaire au format CSV (export disponible depuis
          ton appli ou ton espace bancaire en ligne). Rien n'est envoyé sur un
          serveur : tout se passe directement sur ton téléphone.
        </p>

        <label className="mt-6 block w-full cursor-pointer rounded-2xl border-2 border-dashed border-billet bg-creme px-6 py-10 text-center">
          <span className="font-display text-lg text-billet">
            {loading ? "Analyse en cours…" : "Choisir mon fichier CSV"}
          </span>
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
            }}
          />
        </label>

        {error && (
          <p className="mt-4 rounded-xl bg-red-50 p-4 text-red-700">
            {error}
          </p>
        )}
      </div>
    );
  }

  if (ghosts.length === 0) {
    return (
      <div className="mx-auto max-w-prose text-center">
        <p className="font-display text-2xl">Aucun fantôme trouvé !</p>
        <p className="mt-3 text-encre/70">
          Soit ton relevé est trop court pour repérer un abonnement mensuel,
          soit tu n'as vraiment aucun fantôme. Bravo dans ce cas.
        </p>
      </div>
    );
  }

  const total = ghosts.reduce((sum, g) => sum + g.annualAmount, 0);

  return (
    <div className="mx-auto max-w-prose">
      <p className="font-display text-2xl">
        {ghosts.length} fantôme{ghosts.length > 1 ? "s" : ""} trouvé
        {ghosts.length > 1 ? "s" : ""}, pour {total.toFixed(2)} € par an.
      </p>

      <div className="mt-8 space-y-4">
        {ghosts.map((ghost, i) => (
          <div key={i} className="rounded-2xl bg-sable p-6">
            <p className="font-display text-lg">{ghost.label}</p>
            <p className="mt-1 text-encre/70">
              {ghost.monthlyAmount.toFixed(2)} € / mois —{" "}
              {ghost.annualAmount.toFixed(2)} € / an
            </p>
            <button
              onClick={() => downloadLetter(ghost)}
              className="mt-4 rounded-full bg-billet px-5 py-2 text-sm font-semibold text-creme"
            >
              Télécharger la lettre de résiliation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
