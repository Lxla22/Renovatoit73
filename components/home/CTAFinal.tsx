'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function CTAFinal() {
  return (
    <section className="bg-[#0A0A0A] py-32 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-[#FF6A00]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 bg-[#FF6A00]/10 border border-[#FF6A00]/20 rounded-full px-4 py-1.5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
            <span className="text-[#FF6A00] text-xs font-semibold uppercase tracking-widest font-inter">
              Devis gratuit · Rhône-Alpes
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 className="font-sora font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-8">
            Votre toiture mérite
            <br />
            le{' '}
            <span className="text-[#FF6A00]">meilleur</span>{' '}
            entretien
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="text-white/40 font-inter text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Contactez RENOVA&apos;TOIT 73 pour un devis gratuit et personnalisé. Nous intervenons
            rapidement sur toute la région Rhône-Alpes.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="group flex items-center gap-3 bg-[#FF6A00] hover:bg-[#E05E00] text-white font-semibold px-10 py-5 rounded-full transition-all duration-300 hover:gap-4 hover:shadow-2xl hover:shadow-orange-500/30 font-inter text-base"
            >
              Demander un devis gratuit
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:0753361880"
              className="flex items-center gap-3 border border-white/10 hover:border-white/30 text-white/80 hover:text-white font-medium px-8 py-5 rounded-full transition-all duration-300 hover:bg-white/5 font-inter"
            >
              <Phone size={18} className="text-[#FF6A00]" />
              07 53 36 18 80
            </a>
          </div>
        </ScrollReveal>

        {/* Decorative lines */}
        <div className="mt-24 flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-white/10" />
          <div className="w-2 h-2 rounded-full bg-[#FF6A00]/30" />
          <div className="w-2 h-2 rounded-full bg-[#FF6A00]" />
          <div className="w-2 h-2 rounded-full bg-[#FF6A00]/30" />
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-white/10" />
        </div>
      </div>
    </section>
  )
}
