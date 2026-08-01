import type { Metadata } from "next";
import { Container, Card, Grid, SectionHead, WarnBox, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Ko ima pravo na povraćaj akcize – prevoznici",
  description:
    "Pravo na refakciju akcize imaju prevoznici robe i putnika, kao i građevinske firme sa registrovanim prevozom tereta. Proverite da li ispunjavate uslove.",
  alternates: { canonical: "/ko-ima-pravo/" },
};

export default function KoImaPravoPage() {
  return (
    <Container className="py-14">
      <SectionHead
        eyebrow="Ko ima pravo"
        as="h1"
        title="Da li vaša firma ispunjava uslove?"
        lead="Pravo na refakciju imaju prvenstveno prevoznici tereta i putnika koji posluju u skladu sa zakonima o drumskom prevozu, kao i firme koje gorivo koriste za sopstvene transportne potrebe."
      />

      <Grid cols={2}>
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[11px] bg-accent/12 text-[1.4rem] text-accent-dark">
              🚛
            </div>
            <div>
              <h3>1. Prevoznici robe</h3>
              <p className="mt-1.5 text-muted">
                Glavna ciljna grupa. Kamionske transportne firme, špedicije sa sopstvenim
                vozilima, distributeri robe, kurirske i dostavne službe, firme koje prevoze
                građevinski materijal, hladnjače i rashladni kamioni, međunarodni i domaći drumski
                transport.
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[11px] bg-accent/12 text-[1.4rem] text-accent-dark">
              🚌
            </div>
            <div>
              <h3>2. Prevoznici putnika</h3>
              <p className="mt-1.5 text-muted">
                Autobuske kompanije, turistički prevoznici, firme koje organizuju prevoz
                zaposlenih, kombi-prevoznici, lokalni i međugradski prevoznici.
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[11px] bg-accent/12 text-[1.4rem] text-accent-dark">
              🏗️
            </div>
            <div>
              <h3>3. Građevinske firme</h3>
              <p className="mt-1.5 text-muted">
                Ne automatski svaka firma — već one koje imaju <b>registrovan prevoz tereta</b>:
                prevoze pesak, šljunak, beton ili materijal, imaju kipere i teretna vozila, ili
                sopstvenu transportnu jedinicu koja ispunjava uslove.
              </p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[11px] bg-accent/12 text-[1.4rem] text-accent-dark">
              ✅
            </div>
            <div>
              <h3>Zajednički uslovi</h3>
              <p className="mt-1.5 text-muted">
                Važeća licenca za javni prevoz (ili odobrenje lokalne samouprave), vozila
                registrovana u Srbiji, gorivo kupljeno na domaćem tržištu i dokumentacija o
                utrošku goriva.
              </p>
            </div>
          </div>
        </Card>
      </Grid>

      <Card className="mt-6 border-l-4 border-accent">
        <h3>Najbolji kandidati za značajan povraćaj</h3>
        <p className="my-2.5 text-muted">
          Firme koje: troše mnogo goriva, imaju redovne račune, mogu da ostvare ozbiljan iznos,
          često nemaju osobu koja zna da završi postupak, i imaju dovoljno veliki finansijski
          interes da isplati angažovanje.
        </p>
      </Card>

      <WarnBox title="Napomena:">
        Posedovanje kamiona, mašina ili računa za dizel samo po sebi nije dovoljno. Pravo zavisi od
        registrovane delatnosti, konkretne namene goriva, vrste vozila i dokumentacije. Pošaljite
        nam podatke i proverićemo tačno vaš slučaj.
      </WarnBox>

      <CtaBand
        title="Niste sigurni u koju grupu spadate?"
        text="Pošaljite delatnost i broj vozila, javimo vam da li imate pravo i koliko biste otprilike vratili."
        buttonLabel="Proveri moje pravo"
        buttonHref="/kontakt/"
      />
    </Container>
  );
}
