import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Povraćaj akcize na gorivo | Vratite novac koji ste platili državi",
    template: `%s | ${SITE.name}`,
  },
  description:
    "Prevoznici, autobuske i građevinske firme sa sopstvenim voznim parkom mogu da povrate akcizu na dizel — do 5 godina unazad. Proverite pravo za 2 minuta.",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  areaServed: "RS",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beograd",
    addressCountry: "RS",
  },
  description:
    "Refakcija (povraćaj) akcize na dizel gorivo za prevoznike, autobuske i građevinske firme sa sopstvenim voznim parkom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
