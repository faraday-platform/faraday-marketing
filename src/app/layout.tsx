import type { Metadata } from "next";
import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faraday Capital Systems — AI-Powered Financial Infrastructure",
  description:
    "AI-native platform for financial operations — connecting data pipelines, compliance automation, and intelligent decisioning into a single operational layer.",
  metadataBase: new URL("https://faradaycapitalsystems.com"),
  openGraph: {
    title: "Faraday Capital Systems",
    description:
      "AI-native platform for financial operations — data pipelines, compliance automation, and intelligent decisioning.",
    url: "https://faradaycapitalsystems.com",
    siteName: "Faraday Capital Systems",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Faraday Capital Systems",
    description:
      "AI-native platform for financial operations — data pipelines, compliance automation, and intelligent decisioning.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
