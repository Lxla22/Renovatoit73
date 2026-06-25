'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

const categories = [
  {
    number: '01',
    title: 'Nettoyage & Entretien',
    items: ['Démoussage', 'Nettoyage HP', 'Gouttières', 'Terrasses'],
    color: '#FF6A00',
  },
  {
    number: '02',
    title: 'Traitements',
    items: ['Hydrofuge', 'Anti-mousse', 'Algicide', 'Préventif'],
    color: '#FF8533',
  },
  {
    number: '03',
    title: 'Peinture & Protection',
    items: ['Peinture toiture', 'Résine', 'Revêtements', 'Hydrofuge coloré'],
    color: '#FF6A00',
  },
]

export default function Prestations() {
  return (
    <section className="bg-[#0A0A0A] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <ScrollReveal className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#FF6A00]" />
            <span className="text-[#FF6A00] text-xs font-semibold uppercase tracking-widest font-inter">
              Nos prestations
            </span>
          </div>
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-white leading-tight max-w-2xl">
            Un savoir-faire complet pour votre toiture
          </h2>
        </ScrollReveal>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.number} delay={i * 0.15} className="h-full">
              <div className="bg-[#0F0F0F] p-10 h-full group hover:bg-[#161616] transition-colors duration-300">
                <div className="text-6xl font-sora font-bold text-white/5 mb-6 select-none">
                  {cat.number}
                </div>
                <h3 className="font-sora font-semibold text-xl text-white mb-6 group-hover:text-[#FF6A00] transition-colors duration-300">
                  {cat.title}
                </h3>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: cat.color }}
                      />
                      <span className="text-white/50 text-sm font-inter group-hover:text-white/70 transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-8 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: cat.color }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom stats row */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Rhône-Alpes', sub: 'Zone d\'intervention' },
              { label: 'Devis gratuit', sub: 'Sans engagement' },
              { label: 'Matériel pro', sub: 'Équipement certifié' },
              { label: 'Réponse rapide', sub: 'Sous 24h' },
            ].map((item) => (
              <div key={item.label} className="border-l border-white/10 pl-6">
                <div className="font-sora font-bold text-xl text-white mb-1">{item.label}</div>
                <div className="text-white/40 text-sm font-inter">{item.sub}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
