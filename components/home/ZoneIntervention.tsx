'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { cities } from '@/lib/cities'
import { ArrowRight, MapPin } from 'lucide-react'

// Load Leaflet map dynamically (no SSR)
const MapComponent = dynamic(() => import('@/components/ui/LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#161616] rounded-xl flex items-center justify-center">
      <div className="text-white/30 text-sm font-inter">Chargement de la carte...</div>
    </div>
  ),
})

export default function ZoneIntervention() {
  return (
    <section className="bg-[#0A0A0A] py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#FF6A00]" />
            <span className="text-[#FF6A00] text-xs font-semibold uppercase tracking-widest font-inter">
              Zone d&apos;intervention
            </span>
          </div>
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-white leading-tight max-w-xl">
            Toute la Rhône-Alpes,
            <br />
            <span className="text-white/40">à votre service</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Cities list */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-white/50 font-inter text-base leading-relaxed mb-10">
                RENOVA&apos;TOIT 73 intervient sur l&apos;ensemble de la région Rhône-Alpes.
                Que vous soyez à Chambéry, Annecy, Lyon, Grenoble, Thonon-les-Bains ou Annemasse,
                nous nous déplaçons chez vous rapidement.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {cities.map((city, i) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    className="group flex items-center gap-3 p-4 rounded-xl border border-white/5 hover:border-[#FF6A00]/20 hover:bg-white/2 transition-all duration-300"
                  >
                    <MapPin size={14} className="text-[#FF6A00] flex-shrink-0" />
                    <span className="text-white/60 text-sm font-inter group-hover:text-white transition-colors duration-200">
                      {city.name}
                    </span>
                    <ArrowRight
                      size={12}
                      className="ml-auto text-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </Link>
                ))}
                <div className="col-span-2 p-4 rounded-xl border border-dashed border-white/10 text-center">
                  <span className="text-white/30 text-sm font-inter">
                    + toutes les communes de Savoie
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="h-[480px] rounded-xl overflow-hidden border border-white/5">
              <MapComponent />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
