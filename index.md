# povracajakcize.rs — Next.js rebuild

## Pregled projekta

Prevodimo postojeći statički prototip (`povracaj-akcize-prototip.html`) u produkcioni **Next.js**
sajt za klijenta (poreski savetnik, 33 god. iskustva u poreskoj materiji, 22 u Poreskoj upravi).
Sajt je lead-generation alat za prevoznike, autobuske i građevinske firme koje mogu da povrate
akcizu na dizel.

Glavni razlozi za prelazak sa jedne HTML stranice na Next.js:
- **SEO** — svaka "sekcija" iz prototipa mora postati zasebna stranica sa svojim URL-om, `<title>`,
  meta description i jednim H1 (eksplicitan zahtev iz handoff PDF-a, sekcija 1 i 7).
- **Blog sa pravim CMS-om** — klijent (netehnička osoba) treba sam da piše i uređuje blog postove,
  bez potrebe da menja kod.

### Izvorni materijali
- `povracaj-akcize-prototip.html` — živi prototip, sav sadržaj i JS logika (kalkulator, navigacija)
- `Handoff-povracajakcize.pdf` — dizajn specifikacija (boje, tipografija, dugmad/linkovi, SEO tabela,
  responsive prelomne tačke, checklist za developera)
- `ikonica.svg` — zvaničan logo (zamenjuje tekstualni "₽" placeholder u headeru/footeru)

### Struktura repozitorijuma

```
povracaj-akcize/
├── web/       # Next.js frontend (sajt)
└── studio/    # Standalone Sanity Studio (CMS za blog)
```

## Mapa stranica / URL struktura

Direktno iz handoff PDF-a (sekcija 7), svaka stranica dobija svoj `<title>` i meta description:

| Stranica | URL (slug) | `<title>` / H1 |
|---|---|---|
| Home | `/` | Povraćaj akcize na gorivo \| Vratite novac koji ste platili državi |
| Povraćaj akcize | `/povracaj-akcize/` | Šta je povraćaj (refakcija) akcize na gorivo |
| Ko ima pravo | `/ko-ima-pravo/` | Ko ima pravo na povraćaj akcize – prevoznici |
| Postupak | `/postupak/` | Postupak povraćaja akcize korak po korak |
| Dokumentacija | `/dokumentacija/` | Dokumentacija za povraćaj akcize (REF-T) |
| Kalkulator | `/kalkulator/` | Kalkulator povraćaja akcize |
| O nama | `/o-nama/` | O nama – povraćaj akcize |
| Blog | `/blog/` | Blog – vodič kroz povraćaj akcize |
| Blog članak | `/blog/{slug}/` | (naslov članka, iz CMS-a) |
| Kontakt | `/kontakt/` | Kontakt – proverite pravo na povraćaj |

## Funkcionalnosti koje se prenose 1:1 iz prototipa

- **Header** — sticky (76px), logo (`ikonica.svg`), nav linkovi, CTA dugme, hamburger meni ≤1040px
- **Hero** — badge, H1, lead tekst, CTA dugmad (primary/ghost), trust red sa statistikom
- **Kartice / grid layout** — `.card`, `cols-2/3/4`, ikonice, pill/eyebrow stilovi
- **Steps sekcija** — numerisani koraci postupka (Postupak stranica)
- **FAQ** — `<details>/<summary>` akordeon (Blog stranica)
- **Kalkulator** — logika iz `<script>` bloka (linije 614–648 u prototipu):
  - `CURRENT_YEAR` / `CURRENT_RATE` konstante (trenutno `"2026"` / `37.02`)
  - Tekuća godina: mesečno = litri × stopa, kvartalno = mesečno × 3
  - Ranije godine: poruka "Za ovaj period radimo poseban obračun" (namerno, stope su se menjale)
  - Portovano u React client component (state umesto direktne DOM manipulacije)
- **Kontakt forma** — isti field-ovi (ime, firma, telefon, email, delatnost, broj vozila, poruka),
  ali sa realnim slanjem (Server Action + Resend) umesto trenutnog `alert()` demo-a, plus
  honeypot/anti-spam zaštita
- **Klikabilni kontakti** — `tel:+381658253253`, `mailto:povracajakcize@gmail.com`
- **Eksterni link** — "Pročitajte sve o nama →" ka `https://www.poresko-savetovanje-asteri.com/`
  (`target="_blank" rel="noopener"`)
- **Footer** — 4 kolone (o firmi, stranice, alati, CTA), copyright

## Blog / CMS zahtevi

- **CMS:** Sanity.io, **standalone Studio** u `studio/` (sibling folder pored `web/`, ne embedovan
  u Next.js) — projekat `j7g2kzay`, dataset `production`. Pokretanje: `cd studio && npm run dev`
  (localhost:3333). Detalji: `studio/README.md`, `tech-stack.md`
- **Schema bloga:** naslov, slug, kategorija (badge: 🏗️ Građevinske firme, 🚛 Transport/Špediteri,
  ⚖️ Promene zakona, 🧮 Primeri obračuna, 🚌 Transport/Putnici, ❓ FAQ), cover/thumb, sadržaj
  (rich text), datum objave, SEO meta polja (title/description override)
- **Listing** (`/blog/`) — grid kartica kao u prototipu (linije 464–471)
- **Detalj članka** (`/blog/{slug}/`) — format kao primer u prototipu (linije 486–504), sadržaj iz
  Sanity-ja, ISR revalidate

## Ne-funkcionalni zahtevi

- **SEO:** `generateMetadata` po stranici, `sitemap.xml`, `robots.txt`, JSON-LD (LocalBusiness na
  Home/O nama, Article na blog postovima), Open Graph slike
- **Responsive prelomne tačke:** ≤1040px (meni → hamburger), ≤900px (grid → 1 kolona)
- **Design tokeni:** tačno po `Handoff-povracajakcize.pdf` sekcija 2–3 (boje, tipografija) —
  detaljno u `tech-stack.md`

## Odloženo za kasniju fazu

- Tačan retroaktivni obračun kalkulatora sa kompletnom tabelom stopa 2014–2026 (PDF sekcija 6,
  eksplicitno pomenuto kao "buduća faza")
- Eventualna CRM integracija umesto/pored email obaveštenja
- Analitika (GA4/GTM) — čeka potvrdu klijenta

## Faze izrade

1. Scaffold Next.js + Tailwind (design tokeni iz handoff-a)
2. Shared komponente (Header, Footer, dugmad, kartice)
3. Statičke stranice (Home, Povraćaj akcize, Ko ima pravo, Postupak, Dokumentacija, O nama)
4. Kalkulator (client component)
5. Kontakt forma (Server Action + Resend)
6. Sanity CMS setup + blog stranice
7. SEO polish (sitemap, robots, JSON-LD, OG slike)
8. Deploy na Vercel

Detaljan tech stack: vidi [`tech-stack.md`](./tech-stack.md).
