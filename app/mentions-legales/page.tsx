import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Mentions légales — RENOVA'TOIT 73",
  description: "Mentions légales de RENOVA'TOIT 73, entreprise de rénovation et nettoyage de toiture en Savoie.",
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="text-[#FF6A00] text-sm font-inter hover:underline mb-8 inline-block">
          ← Retour à l&apos;accueil
        </Link>
        <h1 className="font-sora font-bold text-4xl text-white mb-10">Mentions légales</h1>

        <div className="space-y-10 font-inter text-white/60 text-sm leading-relaxed">
          <section>
            <h2 className="font-sora font-semibold text-white text-lg mb-4">Éditeur du site</h2>
            <p>RENOVA&apos;TOIT 73<br />
            Micro-entreprise<br />
            Savoie (73), France<br />
            Téléphone : 07 53 36 18 80<br />
            Email : renovatoit73@gmail.com</p>
          </section>

          <section>
            <h2 className="font-sora font-semibold text-white text-lg mb-4">Hébergement</h2>
            <p>Le site est hébergé par Netlify Inc.</p>
          </section>

          <section>
            <h2 className="font-sora font-semibold text-white text-lg mb-4">Propriété intellectuelle</h2>
            <p>L&apos;ensemble du contenu de ce site (textes, images, design) est la propriété de RENOVA&apos;TOIT 73 ou de ses fournisseurs de contenu. Toute reproduction sans autorisation est interdite.</p>
          </section>

          <section>
            <h2 className="font-sora font-semibold text-white text-lg mb-4">Données personnelles</h2>
            <p>Les données collectées via le formulaire de contact (nom, téléphone, email, ville) sont utilisées uniquement pour répondre à vos demandes de devis. Elles ne sont pas transmises à des tiers. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression en contactant renovatoit73@gmail.com.</p>
          </section>

          <section>
            <h2 className="font-sora font-semibold text-white text-lg mb-4">Cookies</h2>
            <p>Ce site utilise des cookies techniques nécessaires à son fonctionnement. Aucun cookie de tracking commercial n&apos;est utilisé sans votre consentement.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
