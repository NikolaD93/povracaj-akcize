import type { Metadata } from "next";
import { Container, Card, SectionHead } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt – proverite pravo na povraćaj",
  description:
    "Ostavite osnovne podatke o firmi i voznom parku. Javljamo se u roku od 24h sa procenom prava na povraćaj akcize — bez obaveze.",
  alternates: { canonical: "/kontakt/" },
};

export default function KontaktPage() {
  return (
    <Container className="py-14">
      <SectionHead
        eyebrow="Kontakt"
        as="h1"
        title="Proverite svoje pravo — bez obaveze"
        lead="Ostavite osnovne podatke o firmi i voznom parku. Javimo vam da li imate pravo i okvirnu procenu povraćaja."
      />

      <div className="grid grid-cols-1 items-start gap-6 stack:grid-cols-2">
        <ContactForm />

        <div>
          <Card className="mb-5">
            <h3>Direktan kontakt</h3>
            <p className="mt-2.5 leading-[2.1] text-muted">
              📞{" "}
              <a href={SITE.phoneHref}>
                <b>{SITE.phone}</b>
              </a>
              <br />
              ✉️ <a href={SITE.emailHref}>{SITE.email}</a>
              <br />
              📍 {SITE.location}
            </p>
          </Card>
          <Card dark>
            <h3 className="text-white">Zašto mi?</h3>
            <p className="mt-2.5 text-[#c9d6e4]">
              Ne prodajemo priču o firmi — rešavamo konkretan problem: novac koji vam država duguje.
              Vodimo ceo postupak, od provere prava do isplate na račun.
            </p>
          </Card>
        </div>
      </div>
    </Container>
  );
}
