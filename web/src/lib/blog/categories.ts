// Plain data, bez zavisnosti od "sanity" paketa — koristi se i u schema definiciji
// (src/sanity/schemaTypes/post.ts, samo za Studio) i u data-fetching sloju
// (src/lib/blog/posts.ts, koji se izvršava na svakoj stranici sajta pa NE sme da povuče
// ceo "sanity" studio bundle).
export const CATEGORIES = [
  { title: "Građevinske firme", value: "gradjevinske-firme", emoji: "🏗️" },
  { title: "Transport / Špediteri", value: "transport-spediteri", emoji: "🚛" },
  { title: "Promene zakona", value: "promene-zakona", emoji: "⚖️" },
  { title: "Primeri obračuna", value: "primeri-obracuna", emoji: "🧮" },
  { title: "Transport / Putnici", value: "transport-putnici", emoji: "🚌" },
  { title: "FAQ", value: "faq", emoji: "❓" },
] as const;
