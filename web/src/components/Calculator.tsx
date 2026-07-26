"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CURRENT_RATE, CURRENT_YEAR } from "@/lib/site";

const YEARS = ["2026", "2025", "2024", "2023", "2022", "2021"];

function formatDin(n: number) {
  return `${Math.round(n).toLocaleString("sr-RS")} din`;
}

export function Calculator() {
  const [year, setYear] = useState(CURRENT_YEAR);
  const [liters, setLiters] = useState(11200);

  const isCurrentYear = year === CURRENT_YEAR;

  const { month, quarter } = useMemo(() => {
    if (!isCurrentYear) return { month: 0, quarter: 0 };
    const m = liters * CURRENT_RATE;
    return { month: m, quarter: m * 3 };
  }, [isCurrentYear, liters]);

  return (
    <div className="grid grid-cols-1 items-start gap-6 stack:grid-cols-2">
      <div className="rounded-[14px] border border-line bg-white p-[26px] shadow-card">
        <label className="mb-1.5 mt-3.5 block text-[0.95rem] font-bold text-navy">
          Godina (period nabavke goriva)
        </label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full rounded-[10px] border-[1.5px] border-line bg-white px-3.5 py-[13px] text-base focus:border-accent focus:outline-none"
        >
          {YEARS.map((y) => (
            <option key={y} value={y}>
              {y === CURRENT_YEAR ? `${y} — tekuća godina` : y}
            </option>
          ))}
        </select>

        <label className="mb-1.5 mt-3.5 block text-[0.95rem] font-bold text-navy">
          Mesečna potrošnja goriva — ukupno (litara)
        </label>
        <input
          type="number"
          min={0}
          value={liters}
          onChange={(e) => setLiters(Number(e.target.value) || 0)}
          className="w-full rounded-[10px] border-[1.5px] border-line bg-white px-3.5 py-[13px] text-base focus:border-accent focus:outline-none"
        />

        <p className="mt-3.5 text-[0.82rem] text-muted">
          *Procena za tekući period, po aktuelnoj stopi od {CURRENT_RATE.toLocaleString("sr-RS")}{" "}
          din/l. Za ranije periode primenjuju se druge stope — radimo poseban obračun.
        </p>
      </div>

      <div className="rounded-[14px] bg-[linear-gradient(160deg,#0e2a47,#143a5f)] p-[30px] text-white">
        <p className="text-[#c9d6e4]">Procenjeni povraćaj</p>
        <div className="flex justify-between border-b border-white/14 py-3">
          <span>Mesečno</span>
          <b>{isCurrentYear ? formatDin(month) : "—"}</b>
        </div>
        <div className="flex justify-between py-3">
          <span>
            Kvartalno <small className="text-[#8ba9c4]">(mesečno × 3)</small>
          </span>
          <b>{isCurrentYear ? formatDin(quarter) : "—"}</b>
        </div>

        {isCurrentYear ? (
          <p className="mt-2.5 text-[0.85rem] text-[#8ba9c4]">
            Primenjena stopa: {CURRENT_RATE.toLocaleString("sr-RS")} din/l (tekuća godina)
          </p>
        ) : (
          <div className="my-4 rounded-xl border border-accent-light/40 bg-accent/18 p-[18px] text-center">
            <p className="mb-1 font-bold text-[#eafff2]">
              Za ovaj period radimo poseban obračun
            </p>
            <p className="text-[0.9rem] text-[#c9d6e4]">
              Stope za ranije periode se razlikuju. Pošaljite upit — izračunaćemo tačan iznos za
              izabranu godinu.
            </p>
          </div>
        )}

        <p className="mt-1.5 text-[0.85rem] text-[#c9d6e4]">
          Procenjena potrošnja: {Math.round(liters).toLocaleString("sr-RS")} l/mesečno
        </p>

        <Link
          href="/kontakt/"
          className="mt-4 block w-full rounded-[10px] bg-accent px-7 py-[15px] text-center font-bold text-white no-underline hover:bg-accent-dark"
        >
          Želim tačnu procenu za svoju firmu →
        </Link>
        <p className="mt-3.5 text-[0.82rem] text-[#8ba9c4]">
          Orijentaciona procena — ne predstavlja obavezujući iznos.
        </p>
      </div>
    </div>
  );
}
