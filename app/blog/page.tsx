import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'
import { blogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: "Blog — Conseils toiture en Savoie",
  description:
    "Conseils d'experts pour l'entretien et la rénovation de vos toitures en Savoie. Démoussage, hydrofuge, peinture : tous nos guides pratiques.",
  alternates: { canonical: 'https://www.renovatoit73.fr/blog' },
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#FF6A00]" />
            <span className="text-[#FF6A00] text-xs font-semibold uppercase tracking-widest font-inter">
              Blog
            </span>
          </div>
          <h1 className="font-sora font-bold text-5xl md:text-6xl text-white leading-tight mb-4">
            Conseils & Guides
          </h1>
          <p className="text-white/40 font-inter text-lg max-w-xl leading-relaxed">
            Tout ce que vous devez savoir sur l&apos;entretien et la rénovation de votre toiture en
            Savoie.
          </p>
        </div>

        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="block group mb-12">
          <div className="bg-[#161616] rounded-2xl overflow-hidden border border-white/5 hover:border-[#FF6A00]/20 transition-all duration-300 grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#161616] hidden lg:block" />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold text-[#FF6A00] bg-[#FF6A00]/10 border border-[#FF6A00]/20 rounded-full px-3 py-1 font-inter">
                  {featured.category}
                </span>
                <div className="flex items-center gap-1 text-white/30 text-xs font-inter">
                  <Clock size={12} />
                  {featured.readTime}
                </div>
              </div>
              <h2 className="font-sora font-bold text-2xl md:text-3xl text-white leading-tight mb-4 group-hover:text-[#FF6A00] transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="text-white/40 font-inter text-sm leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-2 text-[#FF6A00] text-sm font-medium font-inter">
                Lire l&apos;article
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>

        {/* Other posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="bg-[#161616] rounded-xl overflow-hidden border border-white/5 hover:border-[#FF6A00]/20 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-[#FF6A00] bg-[#FF6A00]/10 border border-[#FF6A00]/20 rounded-full px-3 py-1 font-inter">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-white/30 text-xs font-inter">
                      <Clock size={11} />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="font-sora font-semibold text-lg text-white leading-snug mb-3 group-hover:text-[#FF6A00] transition-colors flex-1">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-2 text-[#FF6A00] text-sm font-medium font-inter mt-2">
                    Lire
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
