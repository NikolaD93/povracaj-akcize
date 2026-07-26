# povracajakcize.rs — Next.js sajt

Next.js (App Router, TypeScript, Tailwind CSS) verzija sajta povracajakcize.rs, sa blogom
pokretanim preko Sanity CMS-a. Pozadina/kontekst projekta: [`../index.md`](../index.md) i
[`../tech-stack.md`](../tech-stack.md) u korenu repozitorijuma.

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000).

Bez ijedne env varijable sajt radi odmah: kontakt forma loguje upit u konzolu (umesto slanja
emaila), a blog prikazuje ugrađeni fallback sadržaj (6 postova) iz
`src/lib/blog/fallback-posts.ts`. Popuni `.env.local` (videti `.env.local.example`) da uključiš
pravi CMS i slanje emaila.

## Sanity setup (CMS za blog)

Sanity projekat je već napravljen i povezan: **`j7g2kzay`**, dataset **`production`**. Studio je
**standalone** (ne embedovan u ovaj Next.js app) i živi u `../studio` — sibling folder pored `web`:

```bash
cd ../studio
npm install   # samo prvi put
npm run dev
```

Otvori [http://localhost:3333](http://localhost:3333) da pišeš/uređuješ blog postove. Detalji
(schema, publish troubleshooting, deploy) su u [`../studio/README.md`](../studio/README.md).

`web/.env.local` (nije u git-u — napravi ga po uzoru na `.env.local.example`) treba da ima:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=j7g2kzay
NEXT_PUBLIC_SANITY_DATASET=production
```

Kada se objavi bar jedan post u Studiju, `/blog/` na sajtu automatski prelazi sa fallback sadržaja
(`src/lib/blog/fallback-posts.ts`) na prave postove iz Sanity-ja — nema potrebe menjati kod. Za
produkciju (Vercel), dodaj iste env varijable u Vercel Project Settings → Environment Variables.

Zašto standalone Studio umesto embedovanog u Next.js: brži `sanity dev`/build (Vite, ne Next.js
kompajlira Studio), auto-update Studio-a bez redeploy-a aplikacije, i TypeGen watch mode. Vidi
`sanity-best-practices` skill / `project-structure.md` referencu za detalje.

> Napomena: Sanity besplatni ("Free") plan je više nego dovoljan za ovaj obim bloga.

## Resend setup (kontakt forma šalje email)

1. Napravi nalog na [resend.com](https://resend.com/).
2. Dashboard → **API Keys** → napravi novi key, kopiraj ga u `.env.local` kao `RESEND_API_KEY`.
3. Za pravu produkciju, verifikuj sopstveni domen (Dashboard → Domains) da bi `CONTACT_FROM_EMAIL`
   mogao da bude npr. `Povraćaj Akcize <upiti@povracajakcize.rs>`. Dok domen nije verifikovan,
   ostavi `onboarding@resend.dev` kao pošiljaoca (radi, ali samo šalje na tvoj Resend nalog).
4. Bez `RESEND_API_KEY`, forma i dalje "radi" (validacija + honeypot rade), samo se upit ispisuje
   u server konzoli umesto da se pošalje mejlom — korisno za lokalni razvoj.

## Struktura projekta

- `src/app/` — stranice (App Router), jedna ruta = jedan URL iz handoff PDF-a
- `src/components/` — Header, Footer, Calculator, ContactForm i deljeni UI komponenti (`ui.tsx`)
- `src/lib/site.ts` — kontakt podaci, nav linkovi, konstante kalkulatora (`CURRENT_YEAR`/`CURRENT_RATE`)
- `src/lib/actions.ts` — Server Action za kontakt formu (Resend + zod validacija + honeypot)
- `src/lib/blog/` — pristup blog podacima (Sanity ili fallback), tipovi, kategorije
- `src/sanity/` — Sanity klijent za čitanje podataka (`client.ts`, `env.ts`, `image.ts`).
  Schema/Studio žive odvojeno u `../studio` (standalone, vidi ispod)

## Build i deploy

```bash
npm run build
npm run start
```

Deploy: poveži repo na [Vercel](https://vercel.com/new), dodaj env varijable iz
`.env.local.example`, deploy. Vercel automatski prepoznaje Next.js projekat.
