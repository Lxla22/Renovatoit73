import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import Prestations from '@/components/home/Prestations'
// import BeforeAfter from '@/components/home/BeforeAfter' // À réactiver quand les réalisations seront disponibles
import ServicesGrid from '@/components/home/ServicesGrid'
import WhyUs from '@/components/home/WhyUs'
import ZoneIntervention from '@/components/home/ZoneIntervention'
import ContactForm from '@/components/home/ContactForm'
import CTAFinal from '@/components/home/CTAFinal'

export const metadata: Metadata = {
  title: "RENOVA'TOIT 73 — Nettoyage & Rénovation de Toiture en Savoie",
  description:
    "Spécialiste du nettoyage, démoussage, traitement hydrofuge et peinture de toiture en Savoie (73). Chambéry, Aix-les-Bains, Albertville. Devis gratuit sous 24h.",
  alternates: {
    canonical: 'https://www.renovatoit73.fr',
  },
}

export default function HomePage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quelle zone géographique couvrez-vous ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "RENOVA'TOIT 73 intervient sur tout le département de la Savoie (73) : Chambéry, Aix-les-Bains, Albertville, La Motte-Servolex, Saint-Jean-de-Maurienne, Bourg-Saint-Maurice, Ugine, Montmélian, Moûtiers, Pont-de-Beauvoisin et toutes les communes environnantes.",
        },
      },
      {
        '@type': 'Question',
        name: 'Le devis est-il vraiment gratuit ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, le devis est entièrement gratuit et sans engagement. Nous nous déplaçons pour évaluer votre toiture et vous remettre une estimation détaillée.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quels services proposez-vous ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "RENOVA'TOIT 73 propose : démoussage de toiture, nettoyage haute pression, traitement hydrofuge, traitement anti-mousse, peinture de toiture, nettoyage de gouttières et nettoyage de terrasses et dallages.",
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de temps faut-il pour traiter une toiture ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La durée dépend de la superficie et du type d'intervention. Un nettoyage simple peut prendre 2 à 4 heures. Un chantier complet (nettoyage + démoussage + hydrofuge) nécessite généralement une journée.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Prestations />
      {/* <BeforeAfter /> */}{/* À réactiver quand les réalisations seront disponibles */}
      <ServicesGrid />
      <WhyUs />
      <ZoneIntervention />
      <ContactForm />
      <CTAFinal />
    </>
  )
}
