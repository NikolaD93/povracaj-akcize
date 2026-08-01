import { sanityClient } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import { defineQuery } from "next-sanity";
import { CATEGORIES } from "./categories";
import { FALLBACK_POSTS } from "./fallback-posts";
import type { BlogPost, BlogPostSummary } from "./types";

type SanityImage = {
  asset?: { _ref: string; _type: string };
  alt?: string;
} & Record<string, unknown>;

function categoryMeta(value: string) {
  const found = CATEGORIES.find((category) => category.value === value || category.title === value);
  return found
    ? {
        title: found.title,
        emoji: found.emoji,
        coverImageUrl: found.coverImageUrl,
      }
    : { title: value, emoji: "📰", coverImageUrl: "/blog/vodic.svg" };
}

type RawSummary = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: SanityImage;
};

type RawPost = RawSummary & {
  body: unknown[];
  seoTitle?: string;
  seoDescription?: string;
};

const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc, _updatedAt desc) {
    "slug": slug.current,
    title,
    category,
    excerpt,
    publishedAt,
    coverImage { asset, alt, hotspot, crop }
  }
`);

const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    category,
    excerpt,
    publishedAt,
    body,
    coverImage { asset, alt, hotspot, crop },
    seoTitle,
    seoDescription
  }
`);

function presentSummary(post: RawSummary): BlogPostSummary {
  const meta = categoryMeta(post.category);
  return {
    slug: post.slug,
    title: post.title,
    category: meta.title,
    emoji: meta.emoji,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    coverImageUrl: post.coverImage
      ? urlForImage(post.coverImage).width(800).height(450).fit("crop").url()
      : meta.coverImageUrl,
    coverImageAlt: post.coverImage?.alt?.trim() || post.title,
  };
}

function presentFallbackPost(post: (typeof FALLBACK_POSTS)[number]): BlogPost {
  const meta = categoryMeta(post.category);
  return {
    ...post,
    coverImageUrl: post.coverImageUrl || meta.coverImageUrl,
    coverImageAlt: post.coverImageAlt || post.title,
  };
}

function fallbackSummaries() {
  return [...FALLBACK_POSTS]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map(presentFallbackPost);
}

export async function getAllPosts(): Promise<BlogPostSummary[]> {
  if (!sanityClient) {
    return fallbackSummaries();
  }

  const posts = await sanityClient.withConfig({ useCdn: false }).fetch<RawSummary[]>(
    POSTS_QUERY,
    {},
    { cache: "no-store", perspective: "published" }
  );

  return posts.map(presentSummary);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!sanityClient) {
    const fallbackPost = FALLBACK_POSTS.find((post) => post.slug === slug);
    return fallbackPost ? presentFallbackPost(fallbackPost) : null;
  }

  const post = await sanityClient.withConfig({ useCdn: false }).fetch<RawPost | null>(
    POST_QUERY,
    { slug },
    { cache: "no-store", perspective: "published" }
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
      : meta.coverImageUrl,
    coverImageAlt: post.coverImage?.alt?.trim() || post.title,
    seoTitle: post.seoTitle,
    seoDescription: post.seoDescription,
  };
}
