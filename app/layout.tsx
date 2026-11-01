import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SANTT Clínica Integrada | Saúde, Performance e Longevidade em Natal/RN",
  description: siteConfig.description,
  keywords: [
    "Santt Clínica",
    "clínica Natal RN",
    "nutrição esportiva Natal",
    "emagrecimento saudável",
    "performance física",
    "longevidade",
    "Capim Macio",
  ],
  authors: [{ name: "SANTT Clínica Integrada" }],
  openGraph: {
    title: "SANTT Clínica Integrada | Saúde, Performance e Longevidade em Natal/RN",
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <body className="bg-santt-base text-santt-text antialiased selection:bg-santt-gold/30 selection:text-santt-gold-light">
        {children}
      </body>
    </html>
  );
}

