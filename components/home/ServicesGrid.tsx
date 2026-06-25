'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { services } from '@/lib/services'

const featuredServices = services.slice(0, 6)

export default function ServicesGrid() {
  return (
    <section className="bg-[#0A0A0A] py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#FF6A00]" />
                <span className="text-[#FF6A00] text-xs font-semibold uppercase tracking-widest font-inter">
                  Services
                </span>
              </div>
              <h2 className="font-sora font-bold text-4xl md:text-5xl text-white leading-tight">
                Ce que nous faisons,
                <br />
                <span className="text-white/40">nous le faisons bien</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="flex items-center gap-2 text-[#FF6A00] hover:gap-3 transition-all duration-300 font-inter text-sm font-medium"
            >
              Voir tous les services
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.1}>
              <Link href={`/services/${service.slug}`} className="block group h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="relative bg-[#161616] rounded-xl overflow-hidden border border-white/5 hover:border-[#FF6A00]/20 transition-colors duration-300 h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold text-[#FF6A00] bg-[#FF6A00]/10 border border-[#FF6A00]/20 rounded-full px-3 py-1 font-inter">
                        {service.category === 'nettoyage'
                          ? 'Nettoyage'
                          : service.category === 'traitement'
                          ? 'Traitement'
                          : 'Peinture'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-sora font-semibold text-lg text-white mb-3 group-hover:text-[#FF6A00] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-sm font-inter leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 mt-5 text-[#FF6A00] text-sm font-medium font-inter">
                      En savoir plus
                      <ArrowRight
                        size={14}
                        className="-translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="h-[2px] bg-gradient-to-r from-[#FF6A00] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
