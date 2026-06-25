import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { cities } from '@/lib/cities'

const services = [
  { label: 'Démoussage de toiture', href: '/services/demoussage-toiture' },
  { label: 'Nettoyage de toiture', href: '/services/nettoyage-toiture' },
  { label: 'Traitement hydrofuge', href: '/services/hydrofuge-toiture' },
  { label: 'Peinture de toiture', href: '/services/peinture-toiture' },
  { label: 'Nettoyage gouttières', href: '/services/nettoyage-gouttieres' },
  { label: 'Nettoyage terrasses', href: '/services/nettoyage-terrasses' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="RENOVA'TOIT 73"
                width={160}
                height={52}
                className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-white/50 text-sm font-inter leading-relaxed mb-6">
              Spécialiste du nettoyage, démoussage, traitement et rénovation de toiture en Rhône-Alpes.
            </p>
            <div className="space-y-3">
              <a
                href="tel:0753361880"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm font-inter group"
              >
                <div className="w-8 h-8 rounded-full bg-[#FF6A00]/10 flex items-center justify-center group-hover:bg-[#FF6A00]/20 transition-colors">
                  <Phone size={13} className="text-[#FF6A00]" />
                </div>
                07 53 36 18 80
              </a>
              <a
                href="mailto:renovatoit73@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm font-inter group"
              >
                <div className="w-8 h-8 rounded-full bg-[#FF6A00]/10 flex items-center justify-center group-hover:bg-[#FF6A00]/20 transition-colors">
                  <Mail size={13} className="text-[#FF6A00]" />
                </div>
                renovatoit73@gmail.com
              </a>
              <div className="flex items-center gap-3 text-white/50 text-sm font-inter">
                <div className="w-8 h-8 rounded-full bg-[#FF6A00]/10 flex items-center justify-center">
                  <MapPin size={13} className="text-[#FF6A00]" />
                </div>
                Rhône-Alpes — Toute la région
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sora font-semibold text-white text-sm uppercase tracking-widest mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/50 hover:text-[#FF6A00] transition-colors text-sm font-inter flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div className="lg:col-span-2">
            <h3 className="font-sora font-semibold text-white text-sm uppercase tracking-widest mb-6">
              Zones d&apos;intervention
            </h3>
            <ul className="grid grid-cols-2 gap-x-1 gap-y-2.5">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/${c.slug}`}
                    className="text-white/50 hover:text-[#FF6A00] transition-colors text-sm font-inter flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      size={11}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0"
                    />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-sora font-semibold text-white text-sm uppercase tracking-widest mb-6">
              Devis gratuit
            </h3>
            <p className="text-white/50 text-sm font-inter leading-relaxed mb-6">
              Votre toiture mérite le meilleur entretien. Contactez-nous pour un devis sans engagement.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#FF6A00] hover:bg-[#E05E00] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:gap-3 font-inter"
            >
              Demander un devis
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-inter">
            © {new Date().getFullYear()} RENOVA&apos;TOIT 73 — Tous droits réservés
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="text-white/30 hover:text-white/60 text-xs font-inter transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-white/30 hover:text-white/60 text-xs font-inter transition-colors">
              Confidentialité
            </Link>
            <Link href="/sitemap.xml" className="text-white/30 hover:text-white/60 text-xs font-inter transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
