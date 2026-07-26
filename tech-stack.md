# Tech stack — povracajakcize.rs

## ✅ Potvrđene odluke

Ovo smo već dogovorili u toku planiranja:

| Oblast            | Izbor                     | Zašto                                                                                                                                                        |
| ----------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Framework**     | Next.js (App Router)      | SEO — svaka stranica zaseban URL/meta/H1, dobra podrška za ISR/ SSR                                                                                          |
| **CMS (blog)**    | Sanity.io + `next-sanity`, **standalone Studio** (`studio/`, ne embedovan u Next.js) | Hostovan, gotov vizuelni editor za klijenta koji nije tehnički potkovan; standalone Studio je brži za razvoj i update-uje se nezavisno od sajta (vidi `studio/README.md`) |
| **Styling**       | Tailwind CSS              | Brže pisanje komponenti; konfigurišemo `tailwind.config` sa tačnim bojama/tipografijom iz handoff PDF-a kao custom theme tokene                              |
| **Kontakt forma** | Server Action + Resend    | Jednostavno i pouzdano slanje emaila na `povracajakcize@gmail.com`, bez potrebe za bazom                                                                     |
| **Hosting**       | Vercel                    | Napravljen za Next.js, besplatan tier dovoljan, native podrška za Server Actions/ISR/Image Optimization                                                      |

## Design tokeni (iz `Handoff-povracajakcize.pdf`)

Ovi se direktno prepisuju u `tailwind.config` kao custom colors:

```
navy:        #0E2A47   (naslovi, header, footer, hero pozadina)
navy-2:      #143A5F   (sredina hero gradijenta, tamne kartice)
navy-end:    #0B2138   (kraj hero gradijenta)
accent:      #16A34A   (primarna dugmad, ikonice, akcenti)
accent-dark: #12833C   (hover, linkovi, eyebrow tekst)
accent-light:#4ADE80   (brojevi/iznosi na tamnoj pozadini)
ink:         #1C2B3A   (osnovni tekst)
muted:       #5B6B7B   (sekundarni tekst)
line:        #E3E9EF   (okviri kartica/inputa)
bg:          #F5F7FA   (pozadina strane)
amber:       #F59E0B   (upozorenja)
warn-bg:     #FFF8EC   (pozadina "Važno" boksa, border #F4D999)
footer-text: #B8C7D6   (tekst u footeru)
```

Font: sistemski stack `'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif` — nema
eksternog web fonta osim ako se naknadno poželi.

## ❓ Otvorena pitanja — molim potvrdi ili promeni

Ovo su manje odluke gde sam stavio razuman default — javi ako želiš drugačije:

- [x] **TypeScript ili plain JavaScript?** → Default: **TypeScript** (standard za Next.js projekte,
      lakše održavanje na duže staze)
- [x] **Paket menadžer:** npm / pnpm / yarn? → Default: **npm**
- [ ] **Analitika:** za sada bez analitike -
      dodati kasnije
- [ ] **Domen:** klijent ima neki domen, ali cemo to kasnije
- [x] **Sanity nalog:** napravljen (projekat `j7g2kzay`, dataset `production`, standalone Studio
      u `studio/` — pokreni sa `cd studio && npm run dev`, detalji u `studio/README.md`)
- [x] **Jezik sajta:** samo srpski (latinica, kao u prototipu) ili treba i ćirilica/druge verzije?
      → Default: **samo latinica**, jedan jezik (kao u prototipu)

Kada potvrdiš ova pitanja (ili kažeš "idi sa default vrednostima"), krećemo sa scaffold-om projekta
po fazama iz [`index.md`](./index.md).
