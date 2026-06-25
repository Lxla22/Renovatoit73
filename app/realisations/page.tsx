import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: "Réalisations — Chantiers toiture en Savoie",
  description:
    "Galerie de réalisations de RENOVA'TOIT 73 : avant/après démoussage, nettoyage et peinture de toiture en Savoie (73). Photos de chantiers réels.",
  alternates: { canonical: 'https://www.renovatoit73.fr/realisations' },
}

// Placeholder gallery — replace with real photos
const gallery = [
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', title: 'Démoussage toiture', location: 'Chambéry', service: 'Démoussage + Hydrofuge' },
  { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80', title: 'Nettoyage haute pression', location: 'Aix-les-Bains', service: 'Nettoyage HP' },
  { src: 'https://images.unsplash.com/photo-1545259742-f4a735d6c5e3?w=800&q=80', title: 'Peinture de toiture', location: 'Albertville', service: 'Peinture complète' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80', title: 'Rénovation complète', location: 'La Motte-Servolex', service: 'Démoussage + Peinture' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', title: 'Traitement hydrofuge', location: 'Montmélian', service: 'Hydrofuge longue durée' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80', title: 'Nettoyage terrasse', location: 'Ugine', service: 'Nettoyage HP terrasse' },
]

export default function RealisationsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <nav className="flex items-center gap-2 text-xs text-white/30 font-inter mb-8">
            <Link href="/" className="hover:text-white/60 transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-white/50">Réalisations</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#FF6A00]" />
            <span className="text-[#FF6A00] text-xs font-semibold uppercase tracking-widest font-inter">
              Galerie
            </span>
          </div>
          <h1 className="font-sora font-bold text-5xl md:text-6xl text-white leading-tight mb-4">
            Nos réalisations
          </h1>
          <p className="text-white/40 font-inter text-lg max-w-xl leading-relaxed">
            Découvrez quelques-uns de nos chantiers réalisés en Savoie.
            <span className="block mt-2 text-sm text-white/20">
              * Photos à remplacer par vos réalisations réelles dans <code className="text-[#FF6A00]/50">public/images/realisations/</code>
            </span>
          </p>
        </div>

        {/* Masonry-like grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-white/5 hover:border-[#FF6A00]/20 transition-all duration-300"
              style={{ height: i % 3 === 1 ? '360px' : '280px' }}
            >
              <Image
                src={item.src}
                alt={`${item.title} — ${item.location}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-sora font-semibold text-base">{item.title}</p>
                <p className="text-[#FF6A00] text-sm font-inter">{item.service}</p>
                <p className="text-white/50 text-xs font-inter mt-1">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-white/40 font-inter mb-6">
            Votre toiture mérite le même soin. Demandez votre devis gratuit.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#E05E00] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 font-inter"
          >
            Demander un devis
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
