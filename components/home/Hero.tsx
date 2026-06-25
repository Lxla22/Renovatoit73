'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowRight, Phone, ChevronDown } from 'lucide-react'

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 1.2, delay: 1.2, ease: 'expo.out' }
      )
    }
    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.6, ease: 'expo.out' }
      )
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-end pb-24 overflow-hidden pt-28">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Toiture en Savoie — RENOVA'TOIT 73"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/50 to-transparent" />

        {/* Subtle zoom animation */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
        >
          <Image
            src="/hero.jpg"
            alt="Toiture Savoie"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/50 to-transparent" />
        </motion.div>
      </div>

      {/* Orange accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF6A00] via-[#FF6A00]/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-[#FF6A00]/10 border border-[#FF6A00]/20 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] pulse-orange" />
            <span className="text-[#FF6A00] text-xs font-semibold uppercase tracking-widest font-inter">
              Rhône-Alpes — Devis gratuit
            </span>
          </motion.div>

          {/* Main title */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-sora font-bold text-5xl md:text-7xl text-white leading-[1.05] tracking-tight"
            >
              Rénovation,
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="font-sora font-bold text-5xl md:text-7xl leading-[1.05] tracking-tight"
            >
              <span className="text-[#FF6A00]">nettoyage</span>{' '}
              <span className="text-white">&</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-sora font-bold text-5xl md:text-7xl text-white leading-[1.05] tracking-tight"
            >
              protection de toiture
            </motion.h1>
          </div>

          {/* Orange line */}
          <div
            ref={lineRef}
            className="h-[2px] w-24 bg-[#FF6A00] mb-8"
            style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 text-lg md:text-xl font-inter leading-relaxed max-w-xl mb-12"
          >
            Votre spécialiste de la toiture en Rhône-Alpes. Démoussage, nettoyage, traitements hydrofuges, peinture de toiture et nettoyage haute pression pour protéger et valoriser votre habitat.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Link
              href="/#contact"
              className="group flex items-center gap-3 bg-[#FF6A00] hover:bg-[#E05E00] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:gap-4 hover:shadow-2xl hover:shadow-orange-500/30 font-inter text-base"
            >
              Demander un devis gratuit
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            {/* Bouton réalisations — à réactiver quand les photos seront disponibles */}
            {/* <Link
              href="/realisations"
              className="flex items-center gap-3 border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5 font-inter text-base"
            >
              Voir les réalisations
            </Link> */}
          </motion.div>

          {/* Phone CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex items-center gap-3 mt-8"
          >
            <div className="w-8 h-8 rounded-full bg-[#FF6A00]/15 flex items-center justify-center">
              <Phone size={14} className="text-[#FF6A00]" />
            </div>
            <a
              href="tel:0753361880"
              className="text-white/50 hover:text-white transition-colors font-inter text-sm"
            >
              Appelez-nous :&nbsp;
              <span className="text-white/80 font-medium">07 53 36 18 80</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-inter uppercase tracking-widest">
          Découvrir
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
