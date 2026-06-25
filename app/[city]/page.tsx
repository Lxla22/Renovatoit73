import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { cities, getCityBySlug } from '@/lib/cities'
import { services } from '@/lib/services'
import ContactForm from '@/components/home/ContactForm'

interface Props {
  params: Promise<{ city: string }>
}

// Only match city slugs, not other routes
const citySlugs = cities.map((c) => c.slug)

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = getCityBySlug(citySlug)
  if (!city) return {}
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `https://www.renovatoit73.fr/${citySlug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
    },
  }
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params

  // Guard: only render for known city slugs
  if (!citySlugs.includes(citySlug)) notFound()

  const city = getCityBySlug(citySlug)
  if (!city) notFound()

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.renovatoit73.fr' },
      { '@type': 'ListItem', position: 2, name: city.name, item: `https://www.renovatoit73.fr/${citySlug}` },
    ],
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `RENOVA'TOIT 73 — ${city.name}`,
    description: city.description,
    url: `https://www.renovatoit73.fr/${citySlug}`,
    telephone: '+33753361880',
    areaServed: {
      '@type': 'City',
      name: city.name,
      addressRegion: city.department,
      addressCountry: 'FR',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />

      <div className="min-h-screen bg-[#0A0A0A]">
        {/* Hero */}
        <div className="pt-32 pb-20 bg-[#161616] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="flex items-center gap-2 text-xs text-white/30 font-inter mb-8">
              <Link href="/" className="hover:text-white/60 transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-white/50">{city.name}</span>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <MapPin size={18} className="text-[#FF6A00]" />
              <span className="text-[#FF6A00] text-sm font-semibold font-inter">
                {city.name} — {city.department} ({city.deptCode})
              </span>
            </div>

            <h1 className="font-sora font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
              Toiture à {city.name}
              <br />
              <span className="text-white/30">Devis gratuit</span>
            </h1>
            <p className="text-white/50 font-inter text-lg max-w-2xl leading-relaxed mb-10 text-justify">
              {city.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="flex items-center gap-2 bg-[#FF6A00] hover:bg-[#E05E00] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 font-inter"
              >
                Devis gratuit à {city.name}
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:0753361880"
                className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 font-inter"
              >
                <Phone size={16} className="text-[#FF6A00]" />
                07 53 36 18 80
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="font-sora font-bold text-3xl text-white mb-10">
            Nos services à {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-start gap-4 p-6 bg-[#161616] rounded-xl border border-white/5 hover:border-[#FF6A00]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF6A00]/20 transition-colors">
                  <ArrowRight size={16} className="text-[#FF6A00]" />
                </div>
                <div>
                  <h3 className="font-sora font-semibold text-white text-base mb-1 group-hover:text-[#FF6A00] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/40 text-sm font-inter leading-snug">{service.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Local SEO content */}
        <div className="bg-[#161616] py-16 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="font-sora font-bold text-2xl text-white mb-4">
                Entretien de toiture à {city.name} : pourquoi agir maintenant ?
              </h2>
              <p className="text-white/50 font-inter leading-relaxed text-justify">
                {city.whyActNow ??
                  `Les toitures en Savoie sont soumises à un climat particulièrement exigeant : précipitations abondantes, cycles gel/dégel en altitude, forte humidité. À ${city.name}, ces conditions favorisent le développement de mousses, lichens et algues qui dégradent progressivement votre couverture. Un entretien régulier (tous les 3 à 5 ans) est indispensable pour préserver l'étanchéité de votre toit et éviter des réparations coûteuses.`
                }
              </p>
            </div>
          </div>
        </div>

        {/* Nearby cities */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="font-sora font-semibold text-xl text-white mb-6">
            Aussi disponible dans les communes proches
          </h2>
          <div className="flex flex-wrap gap-3">
            {cities
              .filter((c) => c.slug !== citySlug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-[#FF6A00]/30 text-white/50 hover:text-white text-sm font-inter transition-all duration-200"
                >
                  <MapPin size={12} className="text-[#FF6A00]" />
                  {c.name}
                </Link>
              ))}
          </div>
        </div>

        {/* Contact form */}
        <ContactForm />
      </div>
    </>
  )
}
