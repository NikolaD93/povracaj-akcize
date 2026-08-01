// Plain data, bez zavisnosti od "sanity" paketa — koristi se i u schema definiciji
// (src/sanity/schemaTypes/post.ts, samo za Studio) i u data-fetching sloju
// (src/lib/blog/posts.ts, koji se izvršava na svakoj stranici sajta pa NE sme da povuče
// ceo "sanity" studio bundle).
export const CATEGORIES = [
  {
    title: "Građevinske firme",
    value: "gradjevinske-firme",
    emoji: "🏗️",
    coverImageUrl: "/blog/gradjevina.svg",
  },
  {
    title: "Transport / Špediteri",
    value: "transport-spediteri",
    emoji: "🚛",
    coverImageUrl: "/blog/transport.svg",
  },
  {
    title: "Promene zakona",
    value: "promene-zakona",
    emoji: "⚖️",
    coverImageUrl: "/blog/vodic.svg",
  },
  {
    title: "Primeri obračuna",
    value: "primeri-obracuna",
    emoji: "🧮",
    coverImageUrl: "/blog/obracun.svg",
  },
  {
    title: "Transport / Putnici",
    value: "transport-putnici",
    emoji: "🚌",
    coverImageUrl: "/blog/transport.svg",
  },
  { title: "FAQ", value: "faq", emoji: "❓", coverImageUrl: "/blog/vodic.svg" },
] as const;
