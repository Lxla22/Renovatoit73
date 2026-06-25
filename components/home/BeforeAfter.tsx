'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface BeforeAfterItem {
  before: string
  after: string
  location: string
  service: string
}

const items: BeforeAfterItem[] = [
  {
    before: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    location: 'Chambéry',
    service: 'Démoussage + Hydrofuge',
  },
  {
    before: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1545259742-f4a735d6c5e3?w=800&q=80',
    location: 'Aix-les-Bains',
    service: 'Nettoyage HP + Peinture',
  },
  {
    before: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    location: 'Albertville',
    service: 'Démoussage complet',
  },
]

function SliderCard({ item }: { item: BeforeAfterItem }) {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const pct = Math.min(Math.max((x / rect.width) * 100, 2), 98)
      setPosition(pct)
    },
    []
  )

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    const onMove = (ev: MouseEvent) => updatePosition(ev.clientX)
    const onUp = () => {
      setIsDragging(false)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const handleTouchStart = () => setIsDragging(true)
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
  }
  const handleTouchEnd = () => setIsDragging(false)

  return (
    <div className="relative rounded-xl overflow-hidden group">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-ew-resize select-none overflow-hidden"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* AFTER image (full) */}
        <Image
          src={item.after}
          alt={`Après ${item.service} — ${item.location}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* BEFORE image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={item.before}
            alt={`Avant ${item.service} — ${item.location}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-xs font-semibold text-white font-inter z-10">
          AVANT
        </div>
        <div className="absolute top-4 right-4 bg-[#FF6A00]/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white font-inter z-10">
          APRÈS
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-px h-full bg-white/60" />
          <div
            className={`absolute w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center transition-transform duration-150 ${isDragging ? 'scale-110' : 'scale-100'}`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 8L2 5M2 5L5 2M2 5H14M11 8L14 11M14 11L11 14M14 11H2" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 z-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-semibold text-sm font-sora">{item.service}</p>
            <p className="text-white/50 text-xs font-inter mt-0.5">{item.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section className="bg-[#161616] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#FF6A00]" />
            <span className="text-[#FF6A00] text-xs font-semibold uppercase tracking-widest font-inter">
              Réalisations
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-sora font-bold text-4xl md:text-5xl text-white leading-tight max-w-xl">
              Avant / Après :<br />le résultat parle de lui-même
            </h2>
            <p className="text-white/40 font-inter text-sm max-w-xs">
              Faites glisser le curseur pour comparer l&apos;état avant et après nos interventions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={item.location} delay={i * 0.15}>
              <SliderCard item={item} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="mt-12 text-center">
          <p className="text-white/30 text-sm font-inter">
            Photos illustratives — Remplacez par vos propres réalisations dans{' '}
            <code className="text-[#FF6A00]/60 text-xs">public/images/realisations/</code>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
