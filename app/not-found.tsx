import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-6 text-center">
      <div className="text-[#FF6A00] font-sora font-bold text-8xl mb-4 opacity-20">404</div>
      <h1 className="font-sora font-bold text-3xl text-white mb-4">Page introuvable</h1>
      <p className="text-white/40 font-inter mb-8 max-w-md">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 bg-[#FF6A00] hover:bg-[#E05E00] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 font-inter"
      >
        Retour à l&apos;accueil
        <ArrowRight size={16} />
      </Link>
    </div>
  )
}
