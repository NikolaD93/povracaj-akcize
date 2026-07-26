import type { Metadata } from "next";
import { Container, Card, Grid, SectionHead, Pill, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Dokumentacija za povraćaj akcize (REF-T)",
  description:
    "Koja dokumentacija je potrebna za podnošenje REF-T zahteva za povraćaj akcize: licence, saobraćajne dozvole, računi za gorivo, CMR i evidencija utroška.",
  alternates: { canonical: "/dokumentacija/" },
};

export default function DokumentacijaPage() {
  return (
    <Container className="py-14">
      <SectionHead
        eyebrow="Dokumentacija"
        as="h1"
        title="Šta je potrebno za zahtev"
        lead="Uz zahtev se prilažu dokazi koji zavise od delatnosti. Ne brinite ako nešto nemate složeno — deo posla je upravo sređivanje ove dokumentacije."
      />

      <Grid cols={2}>
        <Card>
          <h3>📋 Osnovna dokumentacija</h3>
          <ul className="mt-3 ml-[18px] list-disc text-muted">
            <li>Licence ministarstva za saobraćaj</li>
            <li>Izvod iz evidencije osnovnih sredstava</li>
            <li>Saobraćajne dozvole vozila</li>
            <li>Ugovor o zakupu ili lizingu</li>
            <li>Depo karton banke</li>
          </ul>
        </Card>
        <Card>
          <h3>⛽ Dokazi o nabavci i utrošku</h3>
          <ul className="mt-3 ml-[18px] list-disc text-muted">
            <li>Računi / fiskalni računi za nabavljeno gorivo</li>
            <li>Kopije korporativnih kartica za gorivo</li>
            <li>Otpremnice, CMR ili izlazni računi kao dokaz utroška</li>
            <li>Izvod iz banke</li>
            <li>Izveštaj o utrošku goriva i pređenoj kilometraži</li>
          </ul>
        </Card>
      </Grid>

      <Card className="mt-6">
        <h3>Obrazac REF-T sadrži:</h3>
        <div className="mt-3.5">
          <Pill>Podaci o podnosiocu (naziv, adresa, PIB, račun)</Pill>
          <Pill>Vrsta prevoza (javni / sopstvene potrebe)</Pill>
          <Pill>Potrošnja i kilometraža (prethodna godina + kvartal)</Pill>
          <Pill>Vrsta, količina i način nabavke goriva</Pill>
          <Pill>Brojevi računa za gorivo</Pill>
        </div>
      </Card>

      <div className="mt-6 rounded-xl border border-accent/30 bg-accent/8 p-[22px]">
        <b className="text-accent-dark">Naš zadatak:</b>{" "}
        <span className="text-ink">
          Od vaše „razbacane&rdquo; papirologije pravimo uredan, prihvatljiv zahtev. Vi ne morate da
          znate koja stavka ide gde — to je posao koji radimo mi.
        </span>
      </div>

      <p className="mt-6 text-center">
        <Button href="/kalkulator/">Izračunaj koliko možeš da vratiš →</Button>
      </p>
    </Container>
  );
}
