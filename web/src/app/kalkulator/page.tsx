import type { Metadata } from "next";
import { Container, SectionHead } from "@/components/ui";
import { Calculator } from "@/components/Calculator";

export const metadata: Metadata = {
  title: "Kalkulator povraćaja akcize",
  description:
    "Izračunajte za 2 minuta procenu mesečnog i kvartalnog povraćaja akcize na dizel, po aktuelnoj stopi od 37,02 din/l.",
  alternates: { canonical: "/kalkulator/" },
};

export default function KalkulatorPage() {
  return (
    <Container className="py-14">
      <SectionHead
        eyebrow="Kalkulator"
        as="h1"
        title="Procenite svoj povraćaj za 2 minuta"
        lead="Izaberite godinu i unesite mesečnu potrošnju goriva. Kalkulator primenjuje stopu koja je važila za taj period, da procena bude realna, a ne da vas dovodimo u zabludu."
      />
      <Calculator />
    </Container>
  );
}
