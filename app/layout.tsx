import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.renovatoit73.fr'),
  title: {
    default: "RENOVA'TOIT 73 — Nettoyage & Rénovation de Toiture en Savoie",
    template: "%s | RENOVA'TOIT 73",
  },
  description:
    "Spécialiste du nettoyage, démoussage, traitement hydrofuge et peinture de toiture en Savoie (73). Intervient à Chambéry, Aix-les-Bains, Albertville et toute la Savoie. Devis gratuit.",
  keywords: [
    'nettoyage toiture Savoie',
    'démoussage toiture 73',
    'rénovation toiture Chambéry',
    'traitement hydrofuge toiture',
    'peinture toiture Savoie',
    'nettoyage gouttières Aix-les-Bains',
    'entretien toiture Albertville',
    "RENOVA'TOIT 73",
  ],
  authors: [{ name: "RENOVA'TOIT 73" }],
  creator: "RENOVA'TOIT 73",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.renovatoit73.fr',
    siteName: "RENOVA'TOIT 73",
    title: "RENOVA'TOIT 73 — Nettoyage & Rénovation de Toiture en Savoie",
    description:
      "Spécialiste du nettoyage, démoussage, traitement et peinture de toiture en Savoie. Devis gratuit sur toute la Savoie (73).",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "RENOVA'TOIT 73 — Rénovation de Toiture en Savoie",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "RENOVA'TOIT 73 — Nettoyage & Rénovation de Toiture en Savoie",
    description: 'Spécialiste toiture en Savoie. Démoussage, hydrofuge, peinture. Devis gratuit.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'VOTRE_CODE_GOOGLE_SEARCH_CONSOLE',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.renovatoit73.fr',
  name: "RENOVA'TOIT 73",
  description:
    "Entreprise spécialisée dans le nettoyage, démoussage, traitement et rénovation de toiture en Savoie (73).",
  url: 'https://www.renovatoit73.fr',
  telephone: '+33753361880',
  email: 'renovatoit73@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Savoie',
    addressCountry: 'FR',
    postalCode: '73000',
  },
  areaServed: [
    'Chambéry',
    'Aix-les-Bains',
    'Albertville',
    'La Motte-Servolex',
    'Saint-Jean-de-Maurienne',
    'Bourg-Saint-Maurice',
    'Ugine',
    'Montmélian',
    'Moûtiers',
    'Pont-de-Beauvoisin',
    'Savoie',
  ],
  serviceType: [
    'Nettoyage de toiture',
    'Démoussage de toiture',
    'Traitement hydrofuge',
    'Peinture de toiture',
    'Nettoyage de gouttières',
  ],
  priceRange: '€€',
  openingHours: 'Mo-Fr 08:00-18:00',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://www.renovatoit73.fr" />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-[#0A0A0A] text-white overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
