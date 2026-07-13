import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Politique de confidentialité — RENOVA'TOIT 73",
  description: "Politique de confidentialité et protection des données personnelles de RENOVA'TOIT 73.",
  robots: { index: false },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="text-[#FF6A00] text-sm font-inter hover:underline mb-8 inline-block">
          ← Retour à l&apos;accueil
        </Link>
        <h1 className="font-sora font-bold text-4xl text-white mb-10">Politique de confidentialité</h1>

        <div className="space-y-10 font-inter text-white/60 text-sm leading-relaxed">
          <section>
            <h2 className="font-sora font-semibold text-white text-lg mb-4">Responsable du traitement</h2>
            <p>RENOVA&apos;TOIT 73 — Micro-entreprise<br />
            Email : renovatoit73@gmail.com<br />
            Téléphone : 07 53 36 18 80</p>
          </section>

          <section>
            <h2 className="font-sora font-semibold text-white text-lg mb-4">Données collectées</h2>
            <p>Les données suivantes sont collectées via le formulaire de contact : nom et prénom, numéro de téléphone, adresse email, adresse, code postal, ville, services souhaités, message et photos éventuelles.</p>
          </section>

          <section>
            <h2 className="font-sora font-semibold text-white text-lg mb-4">Finalité du traitement</h2>
            <p>Ces données sont collectées uniquement dans le but de répondre à vos demandes de devis et d&apos;établir un contact commercial. Elles ne sont pas utilisées à des fins publicitaires ni transmises à des tiers.</p>
          </section>

          <section>
            <h2 className="font-sora font-semibold text-white text-lg mb-4">Durée de conservation</h2>
            <p>Vos données sont conservées pour une durée maximale de 3 ans à compter de votre dernière demande, puis supprimées.</p>
          </section>

          <section>
            <h2 className="font-sora font-semibold text-white text-lg mb-4">Vos droits</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants : droit d&apos;accès, de rectification, de suppression, d&apos;opposition et de portabilité de vos données. Pour exercer ces droits, contactez-nous à renovatoit73@gmail.com.</p>
          </section>

          <section>
            <h2 className="font-sora font-semibold text-white text-lg mb-4">Cookies</h2>
            <p>Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de tracking ou publicitaire n&apos;est utilisé.</p>
          </section>

          <section>
            <h2 className="font-sora font-semibold text-white text-lg mb-4">Contact</h2>
            <p>Pour toute question relative à la protection de vos données, vous pouvez nous contacter à l&apos;adresse : renovatoit73@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  )
}
