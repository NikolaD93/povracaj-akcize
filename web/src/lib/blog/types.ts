export type BlogPostSummary = {
  slug: string;
  title: string;
  category: string;
  emoji: string;
  excerpt: string;
  publishedAt: string;
  coverImageUrl: string;
  coverImageAlt: string;
};

export type BlogPost = BlogPostSummary & {
  // Sanity postovi: niz Portable Text blokova. Fallback postovi: niz stringova (pasusa).
  body: unknown[];
  seoTitle?: string;
  seoDescription?: string;
};

export function isPlainTextBody(body: unknown[]): body is string[] {
  return body.length === 0 || typeof body[0] === "string";
}
