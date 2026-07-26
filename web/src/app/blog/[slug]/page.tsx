import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from 'next-sanity'
import { Container, CtaBand } from '@/components/ui'
import { getAllPosts, getPostBySlug } from '@/lib/blog/posts'
import { isPlainTextBody } from '@/lib/blog/types'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
  }

  return (
    <Container className="max-w-[780px] py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <Link href="/blog/" className="font-bold text-accent-dark no-underline">
        ← Nazad na blog
      </Link>
      <span className="mt-5 block text-[0.8rem] font-bold uppercase tracking-wide text-accent-dark">
        {post.category}
      </span>
      <h1 className="mb-4 mt-2 text-[clamp(2rem,4.5vw,3.3rem)] font-extrabold text-navy">
        {post.title}
      </h1>
      <p className="text-[1.15rem] text-muted">{post.excerpt}</p>

      {post.coverImageUrl ? (
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          width={1200}
          height={630}
          className="my-6 h-[220px] w-full rounded-[14px] object-cover"
        />
      ) : (
        <div className="my-6 grid h-[220px] place-items-center rounded-[14px] bg-[linear-gradient(135deg,#0e2a47,#16a34a)] text-[3rem] text-white">
          {post.emoji}
        </div>
      )}

      <div className="prose prose-neutral max-w-none prose-headings:text-navy prose-p:text-ink prose-li:text-ink prose-a:text-accent-dark [&_h2]:mt-6 [&_h2]:mb-2 [&_h3]:mt-5 [&_h3]:mb-2">
        {isPlainTextBody(post.body) ? (
          post.body.map((paragraph, i) => <p key={i}>{paragraph}</p>)
        ) : (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <PortableText value={post.body as any} />
        )}
      </div>

      <CtaBand
        title="Želite obračun za svoju firmu?"
        text="Pošaljite broj vozila i potrošnju — vraćamo vam konkretnu procenu."
        buttonLabel="Otvori kalkulator"
        buttonHref="/kalkulator/"
      />
    </Container>
  )
}
