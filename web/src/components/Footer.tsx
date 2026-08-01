import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="mt-2.5 bg-navy pb-7 pt-[50px] text-footer-text">
      <Container className="grid grid-cols-1 gap-[30px] stack:grid-cols-[2fr_1fr_1fr_1.4fr]">
        <div>
          <div className="mb-3 flex items-center gap-2.5 font-extrabold text-white">
            <Image src="/ikonica.svg" alt="Povraćaj Akcize logo" width={30} height={30} className="rounded-lg" />
            Povraćaj Akcize
          </div>
          <p className="text-[0.92rem] text-footer-muted">
            Refakcija akcize na dizel gorivo za prevoznike, autobuske i građevinske firme sa
            sopstvenim voznim parkom. Vodimo ceo postupak umesto vas na teritoriji cele Srbije.
          </p>
        </div>
        <div>
          <h4 className="mb-3.5 text-base font-extrabold text-white">Stranice</h4>
          <Link href="/povracaj-akcize/" className="block py-1 text-footer-text hover:text-white">
            Povraćaj akcize
          </Link>
          <Link href="/ko-ima-pravo/" className="block py-1 text-footer-text hover:text-white">
            Ko ima pravo
          </Link>
          <Link href="/postupak/" className="block py-1 text-footer-text hover:text-white">
            Postupak
          </Link>
          <Link href="/dokumentacija/" className="block py-1 text-footer-text hover:text-white">
            Dokumentacija
          </Link>
        </div>
        <div>
          <h4 className="mb-3.5 text-base font-extrabold text-white">Alati</h4>
          <Link href="/kalkulator/" className="block py-1 text-footer-text hover:text-white">
            Kalkulator
          </Link>
          <Link href="/o-nama/" className="block py-1 text-footer-text hover:text-white">
            O nama
          </Link>
          <Link href="/blog/" className="block py-1 text-footer-text hover:text-white">
            Blog
          </Link>
          <Link href="/kontakt/" className="block py-1 text-footer-text hover:text-white">
            Kontakt
          </Link>
        </div>
        <div>
          <h4 className="mb-3.5 text-base font-extrabold text-white">Proverite pravo besplatno</h4>
          <p className="mb-3 text-[0.92rem] text-footer-muted">
            Za 2 minuta saznajte koliko biste vratili.
          </p>
          <Link
            href="/kalkulator/"
            className="inline-block rounded-[10px] bg-accent px-7 py-[15px] text-center font-bold text-white no-underline hover:bg-accent-dark"
          >
            Izračunaj povraćaj
          </Link>
        </div>
      </Container>
      <Container className="mt-[34px] border-t border-white/12 pt-5 text-[0.85rem] text-footer-muted">
        © {new Date().getFullYear()} {SITE.domain} — Informacije o stopama i rokovima zasnovane na
        propisima važećim u 2025/2026.
      </Container>
    </footer>
  );
}
