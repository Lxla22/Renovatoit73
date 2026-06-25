import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react'
import { blogPosts, getPostBySlug } from '@/lib/blog'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `https://www.renovatoit73.fr/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [{ url: post.image }],
      type: 'article',
      publishedTime: post.date,
    },
  }
}

function stripBold(text: string): string {
  return text.replace(/\*\*/g, '')
}

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="font-sora font-bold text-2xl text-white mt-10 mb-4">
          {stripBold(line.replace('## ', ''))}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="font-sora font-semibold text-xl text-white mt-8 mb-3">
          {stripBold(line.replace('### ', ''))}
        </h3>
      )
    } else if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(stripBold(lines[i].replace('- ', '')))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-white/60 font-inter text-base">
              <span className="text-[#FF6A00] mt-1.5 flex-shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      )
      continue
    } else if (line.startsWith('1. ')) {
      const items: string[] = []
      let num = 1
      while (i < lines.length && lines[i].startsWith(`${num}. `)) {
        items.push(stripBold(lines[i].replace(`${num}. `, '')))
        i++
        num++
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-3 my-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-4 text-white/60 font-inter text-base">
              <span className="w-7 h-7 rounded-full bg-[#FF6A00]/10 text-[#FF6A00] text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {j + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      )
      continue
    } else if (line.trim() === '') {
      // skip empty lines
    } else {
      elements.push(
        <p key={i} className="text-white/60 font-inter text-base leading-relaxed my-3">
          {stripBold(line)}
        </p>
      )
    }
    i++
  }

  return elements
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: "RENOVA'TOIT 73",
      url: 'https://www.renovatoit73.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: "RENOVA'TOIT 73",
      url: 'https://www.renovatoit73.fr',
    },
    keywords: post.keywords.join(', '),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="min-h-screen bg-[#0A0A0A]">
        {/* Hero image */}
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="mb-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm font-inter transition-colors mb-6"
                >
                  <ArrowLeft size={14} />
                  Retour au blog
                </Link>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-semibold text-[#FF6A00] bg-[#FF6A00]/10 border border-[#FF6A00]/20 rounded-full px-3 py-1 font-inter">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-white/30 text-xs font-inter">
                    <Clock size={12} />
                    {post.readTime} de lecture
                  </div>
                  <span className="text-white/20 text-xs font-inter">
                    {new Date(post.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                <h1 className="font-sora font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
                  {post.title}
                </h1>
                <p className="text-white/50 font-inter text-lg leading-relaxed border-l-2 border-[#FF6A00] pl-5">
                  {post.excerpt}
                </p>
              </div>

              {/* Article body */}
              <div className="prose-custom">
                {renderContent(post.content)}
              </div>

              {/* CTA */}
              <div className="mt-12 bg-[#161616] rounded-xl border border-[#FF6A00]/10 p-8">
                <h3 className="font-sora font-semibold text-xl text-white mb-3">
                  Besoin d&apos;une intervention ?
                </h3>
                <p className="text-white/40 font-inter text-sm mb-5">
                  RENOVA&apos;TOIT 73 intervient sur toute la Savoie. Devis gratuit sous 24h.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#E05E00] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 font-inter text-sm"
                >
                  Demander un devis gratuit
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:pt-0 pt-6">
              <div className="bg-[#161616] rounded-xl border border-white/5 p-6 sticky top-28">
                <h3 className="font-sora font-semibold text-lg text-white mb-6">
                  Articles similaires
                </h3>
                <div className="space-y-5">
                  {relatedPosts.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex gap-4">
                      <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <p className="text-white/70 text-sm font-inter leading-snug group-hover:text-[#FF6A00] transition-colors line-clamp-2">
                          {p.title}
                        </p>
                        <p className="text-white/30 text-xs font-inter mt-1">{p.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <h4 className="text-white/50 text-xs uppercase tracking-wider font-inter mb-3">
                    Contact
                  </h4>
                  <a href="tel:0753361880" className="text-[#FF6A00] font-semibold font-sora">
                    07 53 36 18 80
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="h-24" />
      </div>
    </>
  )
}
