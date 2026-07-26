# Sanity Studio — povracajakcize.rs

Standalone Sanity Studio za CMS blog. Živi pored `../web` (Next.js frontend) — vidi
[`../index.md`](../index.md) i [`../tech-stack.md`](../tech-stack.md) za širi kontekst projekta.

- Projekat: `j7g2kzay`, dataset: `production` (vidi `sanity.cli.ts`)
- Schema: `schemaTypes/documents/post.ts` — mora ostati u sinhronizaciji sa kategorijama u
  `../web/src/lib/blog/categories.ts` (studio i web su odvojeni paketi, bez shared workspace-a)

## Pokretanje lokalno

```bash
npm install
npm run dev
```

Otvori [http://localhost:3333](http://localhost:3333).

## Objavljivanje posta (Publish)

Draft se snima automatski, ali **Publish dugme ostaje neaktivno** dok sva obavezna polja
(naslov, slug — klikni "Generate", kategorija, kratak opis, sadržaj) nisu popunjena.

Ako se pri publish-u pojavi dijalog **"Cannot create a published document. Choose a destination"**
(Sanity Content Releases) — izaberi **"Published"** kao odredište, ne neki poseban release/bundle.

Takođe proveri da nije uključena **"Published" perspektiva** (dropdown gore u Studio-u) dok
uređuješ draft — u toj perspektivi editor akcije (Publish/Unpublish) se ne prikazuju za dokumente
koji još nemaju objavljenu verziju. Prebaci na "Drafts"/"Editing" perspektivu za normalno uređivanje.

## Deploy (produkcija)

```bash
npx sanity deploy
```

Ovo hostuje Studio na `https://<project-name>.sanity.studio` — klijent može da mu pristupi bez
lokalnog pokretanja. CORS origin za `web` produkcijski URL (kad se odredi domen) treba dodati:

```bash
npx sanity cors add https://povracajakcize.rs --credentials
```

(`http://localhost:3000` je već dodat kao CORS origin za lokalni razvoj.)
