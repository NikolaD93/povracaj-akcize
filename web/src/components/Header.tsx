"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/96 backdrop-blur-[8px]">
      <div className="mx-auto flex h-[76px] w-full max-w-[1150px] items-center gap-[22px] px-[22px]">
        <Link
          href="/"
          className="flex flex-shrink-0 items-center gap-2.5 whitespace-nowrap text-[1.12rem] font-extrabold text-navy no-underline"
          onClick={() => setOpen(false)}
        >
          <Image src="/ikonica.svg" alt="Povraćaj Akcize logo" width={34} height={34} className="rounded-[9px]" />
          Povraćaj&nbsp;Akcize<span className="text-accent">.rs</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto text-[1.6rem] text-navy nav:hidden"
          aria-label="Meni"
          aria-expanded={open}
        >
          ☰
        </button>

        <nav
          className={`${
            open
              ? "absolute left-0 right-0 top-[76px] flex flex-col gap-0.5 border-b border-line bg-white p-3"
              : "hidden"
          } ml-auto flex-nowrap items-center gap-0.5 nav:flex nav:static nav:border-none nav:p-0`}
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`whitespace-nowrap rounded-lg px-[11px] py-2 text-[0.92rem] font-semibold no-underline ${
                  active
                    ? "bg-accent/10 text-accent-dark"
                    : "text-ink hover:bg-bg hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <span className="hidden flex-shrink-0 nav:inline">
          <Link
            href="/kalkulator/"
            className="whitespace-nowrap rounded-[9px] bg-navy px-4 py-2.5 text-[0.9rem] font-bold text-white no-underline"
          >
            Izračunaj povraćaj →
          </Link>
        </span>
      </div>
    </header>
  );
}
