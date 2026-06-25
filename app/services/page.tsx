import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: "Tous nos services toiture en Savoie",
  description:
    "Découvrez tous les services de RENOVA'TOIT 73 : nettoyage, démoussage, traitement hydrofuge, peinture de toiture en Savoie (73). Devis gratuit.",
  alternates: {
    canonical: 'https://www.renovatoit73.fr/services',
  },
}

const categories = [
  { id: 'nettoyage', label: 'Nettoyage & Entretien' },
  { id: 'traitement', label: 'Traitements' },
  { id: 'peinture', label: 'Peinture & Protection' },
] as const

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <nav className="flex items-center gap-2 text-xs text-white/30 font-inter mb-8">
          <Link href="/" className="hover:text-white/60 transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-white/50">Services</span>
        </nav>
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-[#FF6A00]" />
          <span className="text-[#FF6A00] text-xs font-semibold uppercase tracking-widest font-inter">
            Nos services
          </span>
        </div>
        <h1 className="font-sora font-bold text-5xl md:text-6xl text-white leading-tight mb-6">
          Tous nos services
          <br />
          <span className="text-white/30">toiture en Savoie</span>
        </h1>
        <p className="text-white/50 font-inter text-lg max-w-2xl leading-relaxed">
          De l&apos;entretien courant à la rénovation complète, RENOVA&apos;TOIT 73 propose une
          gamme complète de services pour protéger et valoriser votre toiture.
        </p>
      </div>

      {/* Services by category */}
      {categories.map((cat) => {
        const catServices = services.filter((s) => s.category === cat.id)
        return (
          <div key={cat.id} className="max-w-7xl mx-auto px-6 mb-24">
            <h2 className="font-sora font-semibold text-2xl text-white mb-8 flex items-center gap-4">
              <span className="h-px w-8 bg-[#FF6A00]" />
              {cat.label}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {catServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
                  <div className="bg-[#161616] rounded-xl overflow-hidden border border-white/5 hover:border-[#FF6A00]/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-sora font-semibold text-lg text-white mb-2 group-hover:text-[#FF6A00] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/40 text-sm font-inter leading-relaxed mb-4">
                        {service.tagline}
                      </p>
                      <div className="flex items-center gap-2 text-[#FF6A00] text-sm font-medium font-inter">
                        Découvrir
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )
      })}

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#161616] rounded-2xl p-12 text-center border border-white/5">
          <h2 className="font-sora font-bold text-3xl text-white mb-4">
            Vous ne savez pas quel service choisir ?
          </h2>
          <p className="text-white/40 font-inter mb-8 max-w-md mx-auto">
            Contactez-nous, nous évaluerons gratuitement votre toiture et vous recommanderons la
            solution la plus adaptée.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#E05E00] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 font-inter"
          >
            Demander un devis gratuit
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
