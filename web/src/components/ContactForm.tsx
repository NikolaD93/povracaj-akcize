"use client";

import { useActionState } from "react";
import { initialContactState, submitContact } from "@/lib/actions";

const inputClass =
  "w-full rounded-[10px] border-[1.5px] border-line px-3.5 py-[13px] font-sans text-base focus:border-accent focus:outline-none";
const labelClass = "mb-1.5 block text-[0.93rem] font-bold text-navy";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialContactState);

  if (state.status === "success") {
    return (
      <div className="rounded-[14px] border border-line bg-white p-[26px] shadow-card">
        <h3>Hvala! Upit je poslat.</h3>
        <p className="mt-2.5 text-muted">
          Javićemo vam se u roku od 24h sa procenom prava na povraćaj akcize.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="rounded-[14px] border border-line bg-white p-[26px] shadow-card">
      <div className="grid grid-cols-1 gap-4 stack:grid-cols-2">
        <div>
          <label className={labelClass}>Ime i prezime</label>
          <input name="name" required placeholder="Vaše ime" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Naziv firme</label>
          <input name="company" required placeholder="Naziv privrednog subjekta" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Telefon</label>
          <input name="phone" required placeholder="06x xxx xxxx" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input type="email" name="email" required placeholder="email@firma.rs" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Delatnost</label>
          <select name="activity" className={inputClass} defaultValue="Prevoz robe">
            <option>Prevoz robe</option>
            <option>Prevoz putnika</option>
            <option>Građevina sa prevozom</option>
            <option>Distribucija</option>
            <option>Drugo</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Broj vozila</label>
          <input type="number" name="vehicles" placeholder="npr. 5" className={inputClass} />
        </div>
        <div className="stack:col-span-2">
          <label className={labelClass}>Poruka (opciono)</label>
          <textarea
            name="message"
            rows={3}
            placeholder="Ukratko o voznom parku i potrošnji goriva"
            className={inputClass}
          />
        </div>
      </div>

      {/* Honeypot — nevidljivo za ljude, boti ga popune */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" ? (
        <p className="mt-3 rounded-lg bg-amber/10 px-3 py-2 text-sm text-warn-title">
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-[18px] w-full rounded-[10px] bg-accent px-7 py-[15px] text-center font-bold text-white shadow-[0_6px_18px_rgba(22,163,74,0.35)] transition hover:bg-accent-dark disabled:opacity-60"
      >
        {pending ? "Šaljemo..." : "Pošalji upit — javimo se u roku od 24h"}
      </button>
      <p className="mt-3.5 text-[0.82rem] text-muted">
        Podaci se koriste isključivo za procenu prava na povraćaj. Bez obaveze.
      </p>
    </form>
  );
}
