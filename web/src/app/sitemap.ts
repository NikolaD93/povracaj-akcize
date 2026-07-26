import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllPosts } from "@/lib/blog/posts";

const STATIC_ROUTES = [
  "",
  "povracaj-akcize",
  "ko-ima-pravo",
  "postupak",
  "dokumentacija",
  "kalkulator",
  "o-nama",
  "blog",
  "kontakt",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((slug) => ({
    url: `${SITE.url}/${slug ? `${slug}/` : ""}`,
    lastModified: new Date(),
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}/`,
    lastModified: post.publishedAt,
  }));

  return [...staticEntries, ...postEntries];
}
