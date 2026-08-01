import type { BlogPost } from "./types";

type FallbackBlogPost = Omit<BlogPost, "coverImageUrl" | "coverImageAlt"> &
  Partial<Pick<BlogPost, "coverImageUrl" | "coverImageAlt">>;

// Sadržaj prikazan dok klijent ne poveže Sanity nalog (vidi tech-stack.md) i doda prave
// postove kroz Sanity Studio (/studio). Čim je NEXT_PUBLIC_SANITY_PROJECT_ID podešen,
// `getAllPosts`/`getPostBySlug` (src/lib/blog/posts.ts) automatski prelaze na Sanity podatke.
export const FALLBACK_POSTS: FallbackBlogPost[] = [
  {
    slug: "gradjevinska-firma-kiperi-povracaj-akcize",
    title: "Da li građevinska firma sa kiperima ima pravo na povraćaj akcize?",
    category: "Građevinske firme",
    emoji: "🏗️",
    excerpt: "Kada prevoz peska i materijala ispunjava uslove, a kada ne.",
    publishedAt: "2026-01-12",
    body: [
      "Građevinske firme nemaju automatsko pravo na povraćaj akcize samo zato što poseduju kipere ili teretna vozila. Pravo zavisi od toga da li firma ima registrovan prevoz tereta kao delatnost — bilo za sopstvene potrebe, bilo kao javni prevoz.",
      "Ako firma kiperima prevozi sopstveni građevinski materijal (pesak, šljunak, beton) na gradilišta, i taj prevoz je evidentiran kroz vozni park i internu dokumentaciju o utrošku goriva, uslovi za refakciju su po pravilu ispunjeni.",
      "Ono što najčešće nedostaje nije pravo, već dokumentacija: izveštaji o pređenoj kilometraži, otpremnice i evidencija koja jasno povezuje utrošeno gorivo sa transportnom aktivnošću. To je deo posla koji preuzimamo kada vodimo postupak za klijenta.",
    ],
  },
  {
    slug: "spedicija-sopstvena-vozila-kvartalni-rok",
    title: "Špedicija sa sopstvenim vozilima: kako da ne propustite kvartalni rok",
    category: "Transport / Špediteri",
    emoji: "🚛",
    excerpt: "Kalendar podnošenja i najčešće greške koje koštaju povraćaja.",
    publishedAt: "2026-02-03",
    body: [
      "Zahtev za povraćaj akcize (obrazac REF-T) podnosi se elektronski, najranije 20 dana po isteku kvartala u kojem je gorivo kupljeno i utrošeno u transportne svrhe. Firme koje ovaj rok prate ručno, bez sistema podsetnika, često ga propuste za jedan ili više kvartala.",
      "Najčešće greške: čekanje da se sakupe svi računi pre podnošenja (umesto kontinuiranog vođenja evidencije tokom kvartala), nepotpuna evidencija pređene kilometraže, i mešanje goriva kupljenog za sopstvene kamione sa gorivom trećih lica na istoj kartici.",
      "Rešenje je jednostavno: kvartalni kalendar podnošenja i jedna osoba (interna ili spoljni saradnik) zadužena isključivo za sređivanje dokumentacije čim kvartal istekne — tako da zahtev ode Poreskoj upravi odmah po otvaranju roka, a ne poslednjeg dana.",
    ],
  },
  {
    slug: "nova-pravila-1-oktobar-2025",
    title: "Nova pravila od 1. oktobra 2025 — šta se menja za prevoznike",
    category: "Promene zakona",
    emoji: "⚖️",
    excerpt: "Stopa 37,02 din/l, registar korisnika i elektronsko podnošenje.",
    publishedAt: "2026-01-05",
    body: [
      "Aktuelna stopa povraćaja akcize za dizel gorivo iznosi 37,02 din po litru. Ovaj iznos se usklađuje početkom godine ili u slučaju poremećaja na tržištu nafte, pa je važno pratiti važeću stopu pre svakog obračuna.",
      "Zahtevi se podnose isključivo elektronski, preko portala Poreske uprave. Prvi zahtev koji firma podnese automatski znači i upis u registar korisnika prava na refakciju — nakon toga se svaki naredni kvartalni zahtev nadovezuje na taj registar.",
      "Za firme koje do sada nisu koristile ovo pravo, važna informacija je da se zahtev može podneti retroaktivno za nabavke goriva u poslednjih 5 godina, pod uslovom da su računi plaćeni i da postoji odgovarajuća dokumentacija o utrošku.",
    ],
  },
  {
    slug: "koliko-vraca-firma-sa-5-kamiona",
    title: "Koliko vraća firma sa 5 kamiona: konkretan obračun",
    category: "Primeri obračuna",
    emoji: "🧮",
    excerpt: "Od litara po kvartalu do iznosa na računu, korak po korak.",
    publishedAt: "2026-02-18",
    body: [
      "Uzmimo tipičnu transportnu firmu sa pet kamiona u domaćem i međunarodnom saobraćaju. Evo kako izgleda obračun povraćaja akcize.",
      "Pretpostavimo da svaki kamion pređe oko 8.000 km mesečno uz prosečnu potrošnju od 28 l/100 km. To je oko 2.240 litara po vozilu, odnosno 11.200 litara mesečno za ceo vozni park.",
      "Mesečni povraćaj: 11.200 l × 37,02 din = 414.624 din mesečno. Na kvartalnom nivou to je preko 1,24 miliona dinara, a godišnje blizu 5 miliona dinara. Napomena: stopa se s vremenom usklađuje, pa se stvarni obračun radi po važećim periodima.",
      "Ako firma do sada nije podnosila zahteve, pravo na povraćaj za prethodne periode (do 5 godina, uz odgovarajuću dokumentaciju) predstavlja značajan jednokratni priliv sredstava, ne samo tekući kvartalni prihod.",
      "Iznos je ilustrativan — konačan povraćaj zavisi od stvarne potrošnje, ispunjenosti uslova i priložene dokumentacije za konkretnu firmu.",
    ],
  },
  {
    slug: "autobuske-firme-refakcija-licenca-vozila",
    title: "Autobuske firme i refakcija: licenca, vozila i dokazi utroška",
    category: "Transport / Putnici",
    emoji: "🚌",
    excerpt: "Šta autobuski prevoznici treba da pripreme za zahtev.",
    publishedAt: "2026-01-27",
    body: [
      "Autobuske i turističke firme, kao i firme koje organizuju prevoz zaposlenih, spadaju u prevoznike putnika — jednu od dve glavne ciljne grupe za povraćaj akcize na dizel.",
      "Osnovni uslov je važeća licenca za javni prevoz putnika (ili odgovarajuće odobrenje lokalne samouprave za prevoz zaposlenih), vozila registrovana u Srbiji, i gorivo kupljeno na domaćem tržištu.",
      "Uz zahtev je potrebno priložiti saobraćajne dozvole vozila, izveštaj o utrošku goriva i pređenoj kilometraži, kao i račune ili kopije korporativnih kartica za gorivo kao dokaz nabavke.",
      "Kombi-prevoznici i lokalni/međugradski prevoznici putnika prolaze kroz istu proceduru — razlika je samo u obimu voznog parka i, samim tim, u iznosu koji se povraćajem ostvaruje.",
    ],
  },
  {
    slug: "najcesca-pitanja-o-povracaju-akcize",
    title: "Najčešća pitanja o povraćaju akcize",
    category: "FAQ",
    emoji: "❓",
    excerpt: "Rokovi, dokumentacija, retroaktivno pravo i isplata.",
    publishedAt: "2026-02-10",
    body: [
      "Koliko iznosi povraćaj po litru? Aktuelni povraćaj je 37,02 din po litru. Iznos akcize se usklađuje početkom godine ili prilikom poremećaja na tržištu nafte, pa se stopa povraćaja može menjati.",
      "Mogu li da tražim povraćaj za ranije godine? Da. Zahtev se može podneti za nabavke goriva u poslednjih 5 godina, pod uslovom da su računi plaćeni i da postoji potrebna dokumentacija.",
      "Kada podnosim zahtev? Elektronski, najranije 20 dana po isteku kvartala u kojem je gorivo kupljeno i utrošeno u transportne svrhe.",
      "Kada dobijam novac? Poreska uprava treba da donese rešenje u roku od 30 dana, a isplata se vrši u roku od 2 radna dana od dostavljanja rešenja.",
      "Da li posedovanje kamiona automatski znači da imam pravo? Ne. Pravo zavisi od registrovane delatnosti, namene goriva, vrste vozila i dokumentacije. Zato svaki slučaj proveravamo pojedinačno.",
    ],
  },
];
