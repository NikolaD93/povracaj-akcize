import { sanityClient } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import { CATEGORIES } from "./categories";
import { FALLBACK_POSTS } from "./fallback-posts";
import type { BlogPost, BlogPostSummary } from "./types";

type SanityImage = { asset?: { _ref: string; _type: string } } & Record<string, unknown>;

function categoryMeta(value: string) {
  const found = CATEGORIES.find((c) => c.value === value);
  return found ? { title: found.title, emoji: found.emoji } : { title: value, emoji: "📰" };
}

type RawSummary = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
};

type RawPost = RawSummary & {
  body: unknown[];
  coverImage?: SanityImage;
  seoTitle?: string;
  seoDescription?: string;
};

export async function getAllPosts(): Promise<BlogPostSummary[]> {
  if (!sanityClient) {
    return [...FALLBACK_POSTS]
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
      .map(({ slug, title, category, emoji, excerpt, publishedAt }) => ({
        slug,
        title,
        category,
        emoji,
        excerpt,
        publishedAt,
      }));
  }

  const posts = await sanityClient.fetch<RawSummary[]>(
    `*[_type == "post"] | order(publishedAt desc) {
      "slug": slug.current,
      title,
      category,
      excerpt,
      publishedAt
    }`
  );

  return posts.map((post) => {
    const meta = categoryMeta(post.category);
    return {
      slug: post.slug,
      title: post.title,
      category: meta.title,
      emoji: meta.emoji,
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
    };
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!sanityClient) {
    return FALLBACK_POSTS.find((post) => post.slug === slug) ?? null;
  }

  const post = await sanityClient.fetch<RawPost | null>(
    `*[_type == "post" && slug.current == $slug][0]{
      "slug": slug.current,
      title,
      category,
      excerpt,
      publishedAt,
      body,
      coverImage,
      seoTitle,
      seoDescription
    }`,
    { slug }
  );

  if (!post) return null;

  const meta = categoryMeta(post.category);

  return {
    slug: post.slug,
    title: post.title,
    category: meta.title,
    emoji: meta.emoji,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    body: post.body,
    coverImageUrl: post.coverImage
      ? urlForImage(post.coverImage).width(1200).height(630).url()
      : undefined,
    seoTitle: post.seoTitle,
    seoDescription: post.seoDescription,
  };
}
