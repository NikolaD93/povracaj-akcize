import type { Metadata } from "next";
import Link from "next/link";
import { Container, Card, IconBadge, Grid, SectionHead, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Povraćaj akcize na gorivo | Vratite novac koji ste platili državi",
  description:
    "Prevoznici, autobuske i građevinske firme sa sopstvenim voznim parkom mogu da povrate 37,02 din/l dizela — do 5 godina unazad. Proverite pravo za 2 minuta.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(160deg,#0e2a47_0%,#143a5f_60%,#0b2138_100%)] py-[70px] pb-20 text-white">
        <div className="pointer-events-none absolute -right-[120px] -top-[120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(22,163,74,0.35),transparent_65%)]" />
        <Container className="relative">
          <div className="mb-6 flex max-w-max flex-col items-start gap-1 rounded-xl border border-white/16 bg-white/8 px-[18px] py-3.5 md:flex-row md:items-center md:gap-2.5">
            <span className="whitespace-nowrap text-[clamp(1.35rem,6vw,1.8rem)] font-extrabold text-accent-light">
              Od 14 do 37 din
            </span>
            <span>povraćaja po svakom litru dizela — do 5 godina unazad</span>
          </div>
          <h1 className="max-w-[820px] text-[clamp(2rem,4.5vw,3.3rem)] font-extrabold text-white">
            Vaši kamioni troše gorivo. Deo tog novca država vam duguje nazad.
          </h1>
          <p className="my-5 max-w-[720px] text-[1.15rem] text-[#c9d6e4]">
            Prevoznici, autobuske kompanije i firme sa sopstvenim voznim parkom mogu da povrate
            značajan deo plaćene akcize na dizel. Većina firmi to nikada ne iskoristi, jer nema ko
            da završi postupak. Mi to radimo umesto vas.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/kalkulator/"
              className="inline-block rounded-[10px] bg-accent px-7 py-[15px] text-center font-bold text-white shadow-[0_6px_18px_rgba(22,163,74,0.35)] no-underline hover:bg-accent-dark"
            >
              Izračunajte svoj povraćaj za 2 minuta
            </Link>
            <Link
              href="/ko-ima-pravo/"
              className="inline-block rounded-[10px] border-2 border-white/55 bg-transparent px-7 py-[15px] text-center font-bold text-white no-underline hover:bg-white/12"
            >
              Da li imam pravo?
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-[0.92rem] text-[#a9bccf]">
            <span>
              <b className="text-white">37,02 din/l</b> aktuelna stopa za prevoznike
            </span>
            <span>
              <b className="text-white">5 godina</b> retroaktivno pravo
            </span>
            <span>
              <b className="text-white">REF-T</b> zahtev preko Poreske uprave
            </span>
          </div>
        </Container>
      </section>

      <Container className="pt-14">
        <SectionHead
          eyebrow="Zašto ovo gubite"
          title="Firma sa 5 kamiona ostavlja državi i preko 1.500.000 din godišnje"
          lead={
            <>
              Nije reč o subvenciji ni o „rupi u zakonu&rdquo;. To je zakonsko pravo iz Zakona o
              akcizama. Problem je samo što zahtev traži tačnu dokumentaciju, kvartalno podnošenje
              i poznavanje procedure.
            </>
          }
          center
          className="mx-auto mb-10"
        />

        <Grid cols={3}>
          <Card>
            <IconBadge>⛽</IconBadge>
            <h3>Trošite gorivo svakog dana</h3>
            <p className="text-muted">
              Svaki litar dizela nosi akcizu. Ako se koristi za registrovan prevoz, deo se vraća.
            </p>
          </Card>
          <Card>
            <IconBadge>📄</IconBadge>
            <h3>Dokumentacijom već raspolažete</h3>
            <p className="text-muted">
              Računi, fiskalni računi, CMR, tovarni listovi, licence a mi ih sređujemo u ispravan
              REF-T.
            </p>
          </Card>
          <Card>
            <IconBadge>💸</IconBadge>
            <h3>Novac stiže na račun</h3>
            <p className="text-muted">
              Poreska donosi rešenje u roku od 30 dana, isplata na račun u roku od 2 radna dana od
              rešenja.
            </p>
          </Card>
        </Grid>

        <Card dark className="mt-10">
          <Grid cols={4} className="text-center">
            <div>
              <div className="text-[2.2rem] font-extrabold text-accent-light">37,02 din</div>
              <p className="text-[#c9d6e4]">po litru dizela</p>
            </div>
            <div>
              <div className="text-[2.2rem] font-extrabold text-accent-light">5 god</div>
              <p className="text-[#c9d6e4]">unazad možete da tražite</p>
            </div>
            <div>
              <div className="text-[2.2rem] font-extrabold text-accent-light">kvartalno</div>
              <p className="text-[#c9d6e4]">redovno podnošenje zahteva</p>
            </div>
            <div>
              <div className="text-[2.2rem] font-extrabold text-accent-light">0 din</div>
              <p className="text-[#c9d6e4]">ako ne dobijete povraćaj</p>
            </div>
          </Grid>
        </Card>

        <SectionHead
          eyebrow="Za koga je ovo"
          title="Imate vozni park? Verovatno imate i pravo."
          center
          className="mx-auto mt-14 mb-8"
        />
        <Grid cols={3}>
          <Card className="text-center">
            <IconBadge center>🚛</IconBadge>
            <h3>Prevoznici robe</h3>
            <p className="text-[0.95rem] text-muted">Javni prevoz i prevoz za sopstvene potrebe</p>
          </Card>
          <Card className="text-center">
            <IconBadge center>🚌</IconBadge>
            <h3>Prevoznici putnika</h3>
            <p className="text-[0.95rem] text-muted">
              Autobuske i turističke firme, prevoz zaposlenih, kombi-prevoz
            </p>
          </Card>
          <Card className="text-center">
            <IconBadge center>❄️</IconBadge>
            <h3>Specijalni prevoz</h3>
            <p className="text-[0.95rem] text-muted">
              Hladnjače, rashladni kamioni, kurirske i dostavne službe
            </p>
          </Card>
        </Grid>
        <p className="mt-5 text-center">
          <Link
            href="/ko-ima-pravo/"
            className="inline-block rounded-[10px] border-2 border-line bg-white px-7 py-[15px] text-center font-bold text-navy no-underline hover:border-accent"
          >
            Detaljno: ko ima pravo →
          </Link>
        </p>

        <SectionHead
          eyebrow="Kako izgleda saradnja"
          title="Vi dostavljate dokumentaciju, mi podnosimo zahtev."
          center
          className="mx-auto mt-14 mb-8"
        />
        <Grid cols={4} className="text-center">
          <div>
            <IconBadge center>1</IconBadge>
            <h3>Provera prava</h3>
            <p className="text-[0.95rem] text-muted">Analiziramo delatnost, vozila i namenu goriva</p>
          </div>
          <div>
            <IconBadge center>2</IconBadge>
            <h3>Prikupljanje dokaza</h3>
            <p className="text-[0.95rem] text-muted">Računi, licence, otpremnice, evidencija utroška</p>
          </div>
          <div>
            <IconBadge center>3</IconBadge>
            <h3>Podnošenje REF-T</h3>
            <p className="text-[0.95rem] text-muted">Elektronski, preko portala Poreske uprave</p>
          </div>
          <div>
            <IconBadge center>4</IconBadge>
            <h3>Isplata na račun</h3>
            <p className="text-[0.95rem] text-muted">Pratimo rešenje do uplate na vaš račun</p>
          </div>
        </Grid>

        <CtaBand
          title="Ne znate da li imate pravo? Saznajte besplatno."
          text="Pošaljite osnovne podatke o firmi i voznom parku. Za 2 minuta vam kažemo procenu povraćaja, bez obaveze."
          buttonLabel="Izračunaj povraćaj"
          buttonHref="/kalkulator/"
          className="mb-14"
        />
      </Container>
    </>
  );
}
