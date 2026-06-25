'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Démoussage de toiture', href: '/services/demoussage-toiture' },
      { label: 'Nettoyage de toiture', href: '/services/nettoyage-toiture' },
      { label: 'Traitement hydrofuge', href: '/services/hydrofuge-toiture' },
      { label: 'Peinture de toiture', href: '/services/peinture-toiture' },
      { label: 'Nettoyage gouttières', href: '/services/nettoyage-gouttieres' },
      { label: 'Nettoyage terrasses', href: '/services/nettoyage-terrasses' },
    ],
  },
  // { label: 'Réalisations', href: '/realisations' }, // À réactiver quand les réalisations seront disponibles
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="RENOVA'TOIT 73"
              width={280}
              height={90}
              className="h-20 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-base font-inter font-medium text-white/70 hover:text-white transition-colors duration-200 underline-orange whitespace-nowrap"
                >
                  <span>{item.label}</span>
                  {item.children && (
                    <ChevronDown
                      size={13}
                      className={`flex-shrink-0 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-[#161616] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/60"
                      >
                        <div className="py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-150 font-inter"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                        <div className="h-px bg-white/5" />
                        <Link
                          href="/services"
                          className="block px-5 py-3 text-sm text-[#FF6A00] hover:text-[#FF8533] font-medium transition-colors font-inter"
                        >
                          Voir tous les services →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:0753361880"
              className="flex items-center gap-2 text-base text-white/70 hover:text-white transition-colors font-inter"
            >
              <Phone size={16} className="text-[#FF6A00]" />
              07 53 36 18 80
            </a>
            <Link
              href="/#contact"
              className="bg-[#FF6A00] hover:bg-[#E05E00] text-white text-base font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 font-inter"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col pt-24 pb-10 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-1 flex-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-sora font-semibold text-white/90 hover:text-[#FF6A00] transition-colors border-b border-white/5"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 mt-1 mb-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-white/50 hover:text-white/80 transition-colors font-inter"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-8">
              <a
                href="tel:0753361880"
                className="flex items-center justify-center gap-2 border border-white/10 rounded-full py-3 text-white font-inter text-sm"
              >
                <Phone size={16} className="text-[#FF6A00]" />
                07 53 36 18 80
              </a>
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-[#FF6A00] text-white font-semibold text-center py-3 rounded-full font-inter"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
