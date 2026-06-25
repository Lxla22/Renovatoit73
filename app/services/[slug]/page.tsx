import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'
import { services, getServiceBySlug } from '@/lib/services'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://www.renovatoit73.fr/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.image }],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: "RENOVA'TOIT 73",
      telephone: '+33753361880',
      url: 'https://www.renovatoit73.fr',
    },
    areaServed: { '@type': 'State', name: 'Savoie' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.renovatoit73.fr' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.renovatoit73.fr/services' },
      { '@type': 'ListItem', position: 3, name: service.title, item: `https://www.renovatoit73.fr/services/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="min-h-screen bg-[#0A0A0A]">
        {/* Hero */}
        <div className="relative h-[60vh] min-h-[480px] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 w-full pb-16">
              <nav className="flex items-center gap-2 text-xs text-white/40 font-inter mb-6">
                <Link href="/" className="hover:text-white/70 transition-colors">Accueil</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-white/70 transition-colors">Services</Link>
                <span>/</span>
                <span className="text-white/60">{service.title}</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-[#FF6A00]/10 border border-[#FF6A00]/20 rounded-full px-3 py-1 mb-4">
                <span className="text-[#FF6A00] text-xs font-semibold uppercase tracking-widest font-inter">
                  {service.category === 'nettoyage' ? 'Nettoyage' : service.category === 'traitement' ? 'Traitement' : 'Peinture'}
                </span>
              </div>
              <h1 className="font-sora font-bold text-4xl md:text-6xl text-white leading-tight mb-4">
                {service.title}
              </h1>
              <p className="text-white/60 font-inter text-lg max-w-xl">{service.tagline}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Description */}
              <div>
                <h2 className="font-sora font-semibold text-2xl text-white mb-6">
                  À propos de ce service
                </h2>
                <p className="text-white/60 font-inter text-base leading-relaxed text-justify">
                  {service.longDescription}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-sora font-semibold text-2xl text-white mb-6">
                  Les avantages
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-start gap-3 p-4 bg-[#161616] rounded-xl border border-white/5">
                      <CheckCircle size={18} className="text-[#FF6A00] mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-sm font-inter">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="font-sora font-semibold text-2xl text-white mb-6">
                  Notre processus d&apos;intervention
                </h2>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={step.step} className="flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/20 flex items-center justify-center flex-shrink-0 font-sora font-bold text-[#FF6A00] text-sm">
                        {i + 1}
                      </div>
                      <div className="pt-1">
                        <div className="font-sora font-semibold text-white text-base mb-1">{step.step}</div>
                        <div className="text-white/40 text-sm font-inter text-justify">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-sora font-semibold text-2xl text-white mb-6">
                  Questions fréquentes
                </h2>
                <div className="space-y-4">
                  {service.faq.map((item) => (
                    <div key={item.q} className="bg-[#161616] rounded-xl border border-white/5 p-6">
                      <h3 className="font-sora font-semibold text-white text-base mb-3">{item.q}</h3>
                      <p className="text-white/50 text-sm font-inter leading-relaxed text-justify">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick CTA */}
              <div className="bg-[#161616] rounded-xl border border-white/5 p-8 sticky top-28">
                <h3 className="font-sora font-semibold text-xl text-white mb-3">
                  Devis gratuit
                </h3>
                <p className="text-white/40 text-sm font-inter mb-6 leading-relaxed">
                  Obtenez un devis personnalisé pour {service.title.toLowerCase()} sous 24h.
                </p>
                <Link
                  href="/#contact"
                  className="flex items-center justify-center gap-2 bg-[#FF6A00] hover:bg-[#E05E00] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 font-inter text-sm w-full mb-4"
                >
                  Demander un devis
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:0753361880"
                  className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 text-white/70 hover:text-white font-medium px-6 py-3.5 rounded-xl transition-all duration-300 font-inter text-sm w-full"
                >
                  <Phone size={14} className="text-[#FF6A00]" />
                  07 53 36 18 80
                </a>
              </div>

              {/* Other services */}
              <div className="bg-[#161616] rounded-xl border border-white/5 p-8">
                <h3 className="font-sora font-semibold text-base text-white mb-4">
                  Autres services
                </h3>
                <div className="space-y-2">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 4)
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 py-2 text-white/40 hover:text-[#FF6A00] transition-colors text-sm font-inter group"
                      >
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                        {s.shortTitle}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
