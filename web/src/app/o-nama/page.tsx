import type { Metadata } from "next";
import { Container, Card, Grid, SectionHead, CtaBand } from "@/components/ui";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "O nama – povraćaj akcize",
  description:
    "33 godine iskustva u poreskoj materiji, 22 u Poreskoj upravi Srbije. Postupak povraćaja akcize vodi neko ko poznaje proceduru iznutra.",
  alternates: { canonical: "/o-nama/" },
};

export default function ONamaPage() {
  return (
    <Container className="py-14">
      <SectionHead
        eyebrow="O nama"
        as="h1"
        title="33 godine u poreskoj materiji — 22 u Poreskoj upravi Srbije"
        lead="Mi se refakcijom ne bavimo kao usputni posao. Praksu vodi stručnjak sa tri decenije iskustva upravo u poreskoj oblasti."
      />

      <div className="grid grid-cols-1 items-start gap-6 stack:grid-cols-2">
        <Card className="border-l-4 border-accent">
          <h3>Ko vodi praksu</h3>
          <p className="mt-3 text-muted">
            Osoba koja vodi ovu praksu ima <b>33 godine iskustva u poreskoj materiji</b>, od čega{" "}
            <b>22 godine u Poreskoj upravi Srbije</b>. Poslednjih <b>10 godina</b> vodi privatnu
            poresko-savetodavnu praksu.
          </p>
          <p className="mt-3 text-muted">
            To znači da postupak povraćaja akcize gledamo iz ugla onoga ko je godinama bio sa druge
            strane šaltera — znamo tačno šta Poreska uprava traži, gde zahtevi „padaju&rdquo; i kako
            da se odobre iz prvog puta.
          </p>
          <p className="mt-4">
            <a
              href={SITE.asteriUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-[10px] border-2 border-line bg-white px-7 py-[15px] text-center font-bold text-navy no-underline hover:border-accent"
            >
              Pročitajte sve o nama →
            </a>
          </p>
        </Card>

        <div>
          <Card dark className="mb-5">
            <Grid cols={2} className="gap-4 text-center">
              <div>
                <div className="text-[2.2rem] font-extrabold text-accent-light">33</div>
                <p className="text-[0.9rem] text-[#c9d6e4]">godine u poreskoj materiji</p>
              </div>
              <div>
                <div className="text-[2.2rem] font-extrabold text-accent-light">22</div>
                <p className="text-[0.9rem] text-[#c9d6e4]">godine u Poreskoj upravi</p>
              </div>
              <div>
                <div className="text-[2.2rem] font-extrabold text-accent-light">10</div>
                <p className="text-[0.9rem] text-[#c9d6e4]">godina privatne prakse</p>
              </div>
              <div>
                <div className="text-[2.2rem] font-extrabold text-accent-light">🇷🇸</div>
                <p className="text-[0.9rem] text-[#c9d6e4]">cela teritorija Srbije</p>
              </div>
            </Grid>
          </Card>
          <Card>
            <div className="mb-3.5 grid h-12 w-12 place-items-center rounded-[11px] bg-accent/12 text-[1.4rem] text-accent-dark">
              🗺️
            </div>
            <h3>Radimo na teritoriji cele Srbije</h3>
            <p className="mt-2 text-muted">
              Postupak se vodi elektronski preko portala Poreske uprave, pa saradnja ne zavisi od
              vaše lokacije — klijente vodimo u celoj Srbiji.
            </p>
          </Card>
          <Card className="mt-5">
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
        </div>
      </div>

      <CtaBand
        title="Vaš postupak vodi neko ko poznaje Poresku upravu iznutra"
        text="Pošaljite podatke o firmi — proverićemo pravo i pokrenuti povraćaj."
        buttonLabel="Proveri moje pravo"
        buttonHref="/kontakt/"
      />
    </Container>
  );
}
