import type { Metadata } from "next";
import { Container, Card, IconBadge, Grid, SectionHead, Pill, WarnBox } from "@/components/ui";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Šta je povraćaj (refakcija) akcize na gorivo",
  description:
    "Akciza je javni prihod već uračunat u cenu dizela. Ako gorivo koristite za registrovan prevoz, država vam po zakonu vraća deo — do 37,02 din po litru.",
  alternates: { canonical: "/povracaj-akcize/" },
};

export default function PovracajAkcizePage() {
  return (
    <Container className="py-14">
      <SectionHead
        eyebrow="Povraćaj akcize"
        as="h1"
        title="Šta je povraćaj (refakcija) akcize na gorivo?"
        lead="Akciza je javni prihod koji je već uračunat u cenu dizela na pumpi. Ako gorivo koristite za registrovan prevoz tereta ili putnika, država vam po zakonu vraća deo te akcize. To se zove refakcija."
      />

      <Grid cols={2}>
        <Card>
          <IconBadge>📌</IconBadge>
          <h3>Koliko iznosi</h3>
          <p className="text-muted">
            Aktuelni povraćaj je <b>37,02 din po litru</b>. Iznos akcize se usklađuje početkom
            godine ili prilikom poremećaja na tržištu nafte.
          </p>
        </Card>
        <Card>
          <IconBadge>⏳</IconBadge>
          <h3>Do koliko unazad</h3>
          <p className="text-muted">
            Zahtev možete podneti za nabavke goriva u <b>poslednjih 5 godina</b>, pod uslovom da su
            računi plaćeni. Mnoge firme tek sad otključavaju taj novac.
          </p>
        </Card>
        <Card>
          <IconBadge>🗓️</IconBadge>
          <h3>Kada se podnosi</h3>
          <p className="text-muted">
            Elektronski, najranije <b>20 dana po isteku kvartala</b> u kojem je gorivo kupljeno i
            utrošeno u transportne svrhe.
          </p>
        </Card>
        <Card>
          <IconBadge>🏦</IconBadge>
          <h3>Kada stiže novac</h3>
          <p className="text-muted">
            Poreska uprava treba da donese rešenje u roku od <b>30 dana</b>. Isplata se vrši u roku
            od <b>2 radna dana</b> od dostavljanja rešenja.
          </p>
        </Card>
      </Grid>

      <Card className="mt-6">
        <h2>Zašto većina firmi ovo ne koristi?</h2>
        <p className="mt-2 text-muted">Ne zato što nemaju pravo, nego zato što:</p>
        <div className="mt-3.5">
          <Pill>Ne znaju da pravo postoji</Pill>
          <Pill>Nemaju osobu koja poznaje proceduru</Pill>
          <Pill>Dokumentacija je razbacana</Pill>
          <Pill>Zahtev traži tačnu evidenciju utroška</Pill>
          <Pill>Kvartalni rokovi se propuste</Pill>
        </div>
        <p className="mt-4 text-muted">
          Upravo tu ulazimo mi i preuzimamo ceo postupak, od provere prava do isplate.
        </p>
        <p className="mt-4">
          <Button href="/postupak/">Pogledaj kako teče postupak →</Button>
        </p>
      </Card>

      <WarnBox title="Važno:">
        Posedovanje kamiona, mašina ili računa za dizel samo po sebi nije dovoljno. Pravo zavisi od
        registrovane delatnosti, konkretne namene goriva, vrste vozila, dokumentacije i drugih
        propisanih uslova. Zato svaku firmu proveravamo pojedinačno.
      </WarnBox>
    </Container>
  );
}
