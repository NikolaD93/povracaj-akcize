import { sanityClient } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import { CATEGORIES } from "./categories";
import { FALLBACK_POSTS } from "./fallback-posts";
import type { BlogPost, BlogPostSummary, FallbackBlogPost } from "./types";

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

function isPublishableSummary(post: RawSummary) {
  return (
    post.slug?.trim().length >= 8 &&
    post.title?.trim().length >= 12 &&
    post.excerpt?.trim().length >= 30 &&
    Boolean(post.publishedAt)
  );
}

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

function presentFallbackPost(post: FallbackBlogPost): BlogPost {
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

  const posts = await sanityClient.fetch<RawSummary[]>(
    `*[_type == "post" && defined(slug.current) && defined(title) && defined(excerpt) && defined(publishedAt)] | order(publishedAt desc) {
      "slug": slug.current,
      title,
      category,
      excerpt,
      publishedAt,
      coverImage { asset, alt, hotspot, crop }
    }`
  );

  const livePosts = posts.filter(isPublishableSummary).map(presentSummary);
  if (livePosts.length >= 2) return livePosts;

  const liveSlugs = new Set(livePosts.map((post) => post.slug));
  return [
    ...livePosts,
    ...fallbackSummaries().filter((post) => !liveSlugs.has(post.slug)),
  ].slice(0, 2);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!sanityClient) {
    const fallbackPost = FALLBACK_POSTS.find((post) => post.slug === slug);
    return fallbackPost ? presentFallbackPost(fallbackPost) : null;
  }

  const post = await sanityClient.fetch<RawPost | null>(
    `*[_type == "post" && slug.current == $slug][0]{
      "slug": slug.current,
      title,
      category,
      excerpt,
      publishedAt,
      body,
      coverImage { asset, alt, hotspot, crop },
      seoTitle,
      seoDescription
    }`,
    { slug }
  );

  if (!post) {
    const fallbackPost = FALLBACK_POSTS.find((entry) => entry.slug === slug);
    return fallbackPost ? presentFallbackPost(fallbackPost) : null;
  }

  if (!isPublishableSummary(post) || !Array.isArray(post.body) || post.body.length === 0) {
    return null;
  }

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
