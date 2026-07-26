export const SITE = {
  name: "Povraćaj Akcize",
  domain: "povracajakcize.rs",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://povracajakcize.rs",
  phone: "+381 65 8 253 253",
  phoneHref: "tel:+381658253253",
  email: "povracajakcize@gmail.com",
  emailHref: "mailto:povracajakcize@gmail.com",
  location: "Beograd, Srbija",
  asteriUrl: "https://www.poresko-savetovanje-asteri.com/",
} as const;

export const NAV_LINKS = [
  { href: "/povracaj-akcize/", label: "Povraćaj akcize" },
  { href: "/ko-ima-pravo/", label: "Ko ima pravo" },
  { href: "/postupak/", label: "Postupak" },
  { href: "/dokumentacija/", label: "Dokumentacija" },
  { href: "/o-nama/", label: "O nama" },
  { href: "/blog/", label: "Blog" },
  { href: "/kontakt/", label: "Kontakt" },
] as const;

// Kalkulator config — ažurirati CURRENT_RATE/CURRENT_YEAR kad Poreska uprava promeni stopu.
export const CURRENT_YEAR = "2026";
export const CURRENT_RATE = 37.02; // din/l
