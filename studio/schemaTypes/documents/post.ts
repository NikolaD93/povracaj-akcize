import { defineField, defineType } from "sanity";

// Napomena: ova lista mora ostati u sinhronizaciji sa
// web/src/lib/blog/categories.ts (frontend prikazuje title/emoji za svaku
// vrednost). Studio i web su odvojeni projekti (bez workspace alata), pa se
// namerno duplira umesto deljenog paketa.
const CATEGORIES = [
  { title: "Građevinske firme", value: "gradjevinske-firme" },
  { title: "Transport / Špediteri", value: "transport-spediteri" },
  { title: "Promene zakona", value: "promene-zakona" },
  { title: "Primeri obračuna", value: "primeri-obracuna" },
  { title: "Transport / Putnici", value: "transport-putnici" },
  { title: "FAQ", value: "faq" },
];

export const postType = defineType({
  name: "post",
  title: "Blog članak",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Naslov",
      type: "string",
      validation: (rule) => rule.required().min(12),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategorija",
      type: "string",
      options: {
        list: CATEGORIES.map((c) => ({ title: c.title, value: c.value })),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Kratak opis (za listing karticu)",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().min(30).max(220),
    }),
    defineField({
      name: "coverImage",
      title: "Naslovna slika",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternativni tekst",
          type: "string",
          validation: (rule) => rule.required().warning("Alt tekst je važan za SEO."),
        }),
      ],
      validation: (rule) => rule.required().warning("Dodajte sliku za blog karticu."),
    }),
    defineField({
      name: "body",
      title: "Sadržaj članka",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Datum objave",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO naslov (opciono, override <title>)",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO opis (opciono, override meta description)",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});
