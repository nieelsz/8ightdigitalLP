import type { Metadata } from "next";
import { Montserrat, Sora } from "next/font/google";
import type React from "react";

import "./globals.css";

// Montserrat é a fonte de texto da marca; Sora substitui a Francy (display), que não está no Google Fonts.
const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eight Digital — Soluções Digitais",
  description:
    "Não criamos apenas websites. Construímos estruturas digitais: landing pages, e-commerces e sistemas com design estratégico e engenharia sólida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="min-h-screen bg-white font-sans text-onyx antialiased">
        {children}
      </body>
    </html>
  );
}
