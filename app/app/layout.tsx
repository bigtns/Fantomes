import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fantomes.vercel.app"),
  title: "Fantômes — Débusque les abonnements qu'on paie sans s'en servir",
  description:
    "Dépose ton relevé bancaire, on repère les prélèvements récurrents oubliés et on génère les lettres de résiliation. Audit complet à 19€.",
  openGraph: {
    title: "Fantômes — Débusque les abonnements qu'on paie sans s'en servir",
    description:
      "Dépose ton relevé bancaire, on repère les prélèvements récurrents oubliés et on génère les lettres de résiliation.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
