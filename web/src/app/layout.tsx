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
  manifest: "/site.webmanifest?v=2",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=2", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png?v=2", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE.url,
    siteName: SITE.name,
    title: "Povraćaj akcize na gorivo | Vratite novac koji ste platili državi",
    description:
      "Povratite deo akcize na dizel, uz stručnu proveru prava i vođenje celog REF-T postupka.",
    images: [
      {
        url: "/og-image.png?v=2",
        width: 1200,
        height: 630,
        alt: "Povraćaj akcize na dizel za prevoznike u Srbiji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png?v=2"],
  },
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
