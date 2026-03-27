import type { Metadata } from "next";
import { Instrument_Sans, Outfit } from "next/font/google";
import type React from "react";

import "./globals.css";

const bodyFont = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Outfit({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eight Digital — Desenvolvimento Web",
  description:
    "Landing pages, e-commerces e sistemas rápidos, estáveis e com UX premium. Sem enrolação, com entrega.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${displayFont.variable} dark`}
    >
      <body className="min-h-screen bg-[#0A0A0A] font-sans text-[#F5F5F5] antialiased">
        {children}
      </body>
    </html>
  );
}
