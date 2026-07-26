import type { Metadata } from "next";
import { Container, Card, Grid, SectionHead, Steps, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Postupak povraćaja akcize korak po korak",
  description:
    "Od provere prava do isplate na račun — kako izgleda saradnja kada mi vodimo ceo REF-T postupak povraćaja akcize umesto vas.",
  alternates: { canonical: "/postupak/" },
};

const STEPS = [
  {
    title: "Provera prava i procena iznosa",
    text: "Analiziramo delatnost, vozila, licence i potrošnju. Dobijate procenu povraćaja pre nego što se bilo šta plati.",
  },
  {
    title: "Prikupljanje i sređivanje dokumentacije",
    text: "Računi za gorivo, licence, saobraćajne, otpremnice / CMR i izvodi iz banke.",
  },
  {
    title: "Izrada obračuna i obrasca REF-T",
    text: "Radimo tačan obračun utrošenih litara po kvartalu i popunjavamo zahtev: podaci o podnosiocu, vrsta prevoza, potrošnja i kilometraža, količine i način nabavke goriva.",
  },
  {
    title: "Elektronsko podnošenje Poreskoj upravi",
    text: "Zahtev se podnosi najranije 20 dana po isteku kvartala. Prvi zahtev automatski znači i upis u registar korisnika.",
  },
  {
    title: "Praćenje rešenja",
    text: "Poreska uprava donosi rešenje u roku od 30 dana. Komuniciramo sa Upravom i rešavamo eventualne dopune.",
  },
  {
    title: "Isplata na vaš račun",
    text: "Uplata se vrši u roku od 2 radna dana od prijema rešenja. Zatim nastavljamo kvartalno, automatski.",
  },
];

export default function PostupakPage() {
  return (
    <Container className="py-14">
      <SectionHead
        eyebrow="Postupak"
        as="h1"
        title="Kako teče povraćaj — korak po korak"
        lead="Zahtev se podnosi elektronski na obrascu REF-T preko Portala Poreske uprave. Evo kako izgleda kada mi vodimo ceo proces umesto vas."
      />

      <Steps items={STEPS} />

      <Grid cols={3} className="mt-6">
        <Card className="text-center">
          <div className="text-[2rem] font-extrabold text-accent-dark">20 dana</div>
          <p className="text-muted">po isteku kvartala — najraniji rok za podnošenje</p>
        </Card>
        <Card className="text-center">
          <div className="text-[2rem] font-extrabold text-accent-dark">30 dana</div>
          <p className="text-muted">za rešenje Poreske uprave</p>
        </Card>
        <Card className="text-center">
          <div className="text-[2rem] font-extrabold text-accent-dark">2 radna dana</div>
          <p className="text-muted">do isplate od prijema rešenja</p>
        </Card>
      </Grid>

      <CtaBand
        title="Preuzmemo ceo postupak umesto vas"
        text="Vi šaljete račune jednom u kvartalu. Sve ostalo — obračun, obrazac, podnošenje i praćenje — radimo mi."
        buttonLabel="Započni saradnju"
        buttonHref="/kontakt/"
      />
    </Container>
  );
}
