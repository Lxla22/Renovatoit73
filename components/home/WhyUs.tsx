'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from '@/components/ui/ScrollReveal'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L17.09 9.26L25 10.27L19.5 15.64L20.91 23.5L14 19.77L7.09 23.5L8.5 15.64L3 10.27L10.91 9.26L14 2Z" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Matériel professionnel',
    desc: 'Équipements haute pression, nacelles et matériel de sécurité adaptés à chaque chantier.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="#FF6A00" strokeWidth="1.5" />
        <path d="M14 8V14L18 17" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Réponse rapide',
    desc: 'Devis gratuit sous 24h et intervention planifiée rapidement selon vos disponibilités.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L5 7V13C5 18.5 8.8 23.7 14 25C19.2 23.7 23 18.5 23 13V7L14 3Z" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 14L13 17L18 11" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Produits de qualité',
    desc: 'Produits professionnels biocides et hydrofuges longue durée, respectueux des matériaux.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 21L10 15L14 19L20 11L24 15" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="7" r="3" stroke="#FF6A00" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Résultats durables',
    desc: 'Traitements longue durée pour une protection maximale de votre toiture.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C8 3 3 8 3 14C3 20 8 25 14 25C20 25 25 20 25 14" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 3L25 8M25 3L20 8" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Devis transparent',
    desc: 'Devis détaillé et gratuit, sans surprise. Prix clairs avant toute intervention.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M21 10C21 10 19 6 14 6C9 6 7 10 7 10" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 14C5 19.5 9 24 14 24C19 24 23 19.5 23 14" stroke="#FF6A00" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="14" r="3" stroke="#FF6A00" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Intervention rapide',
    desc: 'Toute la région Rhône-Alpes : Chambéry, Annecy, Lyon, Grenoble et bien plus.',
  },
]

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.why-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.why-grid',
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#161616] py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#FF6A00]" />
            <span className="text-[#FF6A00] text-xs font-semibold uppercase tracking-widest font-inter">
              Pourquoi nous
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sora font-bold text-4xl md:text-5xl text-white leading-tight max-w-lg">
              Les raisons de nous faire confiance
            </h2>
            <p className="text-white/40 font-inter text-sm max-w-sm leading-relaxed">
              Chez RENOVA&apos;TOIT 73, la qualité de service et la satisfaction client sont au cœur de chaque intervention.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="why-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="why-card group bg-[#0A0A0A] border border-white/5 rounded-xl p-8 hover:border-[#FF6A00]/20 hover:bg-[#0F0F0F] transition-all duration-300 opacity-0"
            >
              <div className="w-14 h-14 rounded-xl bg-[#FF6A00]/10 flex items-center justify-center mb-6 group-hover:bg-[#FF6A00]/20 transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="font-sora font-semibold text-lg text-white mb-3 group-hover:text-[#FF6A00] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-white/40 text-sm font-inter leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
