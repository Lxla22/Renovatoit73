'use client'

import { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface FormData {
  name: string
  phone: string
  email: string
  ville: string
  adresse: string
  codePostal: string
  services: string[]
  message: string
}

const serviceOptions = [
  { value: 'nettoyage-hp', label: 'Nettoyage haute pression' },
  { value: 'demoussage-simple', label: 'Démoussage de toiture simple' },
  { value: 'demoussage-complet', label: 'Démoussage de toiture (biocide et traitement préventif inclus)' },
  { value: 'hydrofuge-incolore', label: 'Traitement hydrofuge incolore' },
  { value: 'hydrofuge-colore', label: 'Traitement hydrofuge coloré' },
  { value: 'peinture', label: 'Peinture de toiture' },
  { value: 'resine', label: 'Résine' },
  { value: 'gouttieres', label: 'Nettoyage de gouttières' },
  { value: 'terrasses', label: 'Nettoyage de terrasses / allées' },
  { value: 'autre', label: 'Autre / Je ne sais pas' },
]

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { services: [] } })

  const selectedServices = watch('services') || []

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const formData = new window.FormData()
      formData.append('name', data.name)
      formData.append('phone', data.phone)
      formData.append('email', data.email)
      formData.append('ville', data.ville)
      formData.append('adresse', data.adresse || '')
      formData.append('codePostal', data.codePostal || '')
      formData.append('message', data.message || '')
      const servicesArray = Array.isArray(data.services) ? data.services : (data.services ? [data.services] : [])
      servicesArray.forEach((s: string) => formData.append('services', s))
      if (fileInputRef.current?.files) {
        Array.from(fileInputRef.current.files).forEach((file) => {
          formData.append('photos', file)
        })
      }
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })
      if (res.ok) {
        setStatus('success')
        reset()
        if (fileInputRef.current) fileInputRef.current.value = ''
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="bg-[#161616] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Info */}
          <ScrollReveal direction="right">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-[#FF6A00]" />
                <span className="text-[#FF6A00] text-xs font-semibold uppercase tracking-widest font-inter">
                  Contact
                </span>
              </div>
              <h2 className="font-sora font-bold text-4xl md:text-5xl text-white leading-tight mb-8">
                Demandez votre
                <br />
                <span className="text-[#FF6A00]">devis gratuit</span>
              </h2>
              <p className="text-white/50 font-inter text-base leading-relaxed mb-12">
                Remplissez le formulaire et nous vous recontactons rapidement avec un devis
                personnalisé et sans engagement.
              </p>

              {/* Contact details */}
              <div className="space-y-6">
                <a
                  href="tel:0753361880"
                  className="group flex items-center gap-5 p-5 rounded-xl border border-white/5 hover:border-[#FF6A00]/20 hover:bg-[#FF6A00]/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/10 flex items-center justify-center group-hover:bg-[#FF6A00]/20 transition-colors">
                    <Phone size={20} className="text-[#FF6A00]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/30 font-inter uppercase tracking-wider mb-1">
                      Téléphone
                    </div>
                    <div className="text-white font-semibold font-sora text-lg">
                      07 53 36 18 80
                    </div>
                  </div>
                </a>
                <a
                  href="mailto:renovatoit73@gmail.com"
                  className="group flex items-center gap-5 p-5 rounded-xl border border-white/5 hover:border-[#FF6A00]/20 hover:bg-[#FF6A00]/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF6A00]/10 flex items-center justify-center group-hover:bg-[#FF6A00]/20 transition-colors">
                    <Mail size={20} className="text-[#FF6A00]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/30 font-inter uppercase tracking-wider mb-1">
                      Email
                    </div>
                    <div className="text-white font-semibold font-sora">
                      renovatoit73@gmail.com
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="bg-[#0A0A0A] rounded-2xl border border-white/5 p-8 md:p-10">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                      <CheckCircle size={32} className="text-green-400" />
                    </div>
                    <h3 className="font-sora font-semibold text-xl text-white mb-3">
                      Message envoyé !
                    </h3>
                    <p className="text-white/50 font-inter text-sm">
                      Nous vous recontacterons rapidement avec votre devis personnalisé.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-white/40 font-inter uppercase tracking-wider mb-2">
                          Nom & Prénom *
                        </label>
                        <input
                          {...register('name', { required: true })}
                          placeholder="Jean Dupont"
                          className={`w-full bg-[#161616] border rounded-xl px-4 py-3.5 text-white placeholder-white/20 font-inter text-sm focus:outline-none focus:border-[#FF6A00]/50 transition-colors ${errors.name ? 'border-red-500/50' : 'border-white/10'}`}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 font-inter uppercase tracking-wider mb-2">
                          Téléphone *
                        </label>
                        <input
                          {...register('phone', { required: true })}
                          placeholder="06 XX XX XX XX"
                          type="tel"
                          className={`w-full bg-[#161616] border rounded-xl px-4 py-3.5 text-white placeholder-white/20 font-inter text-sm focus:outline-none focus:border-[#FF6A00]/50 transition-colors ${errors.phone ? 'border-red-500/50' : 'border-white/10'}`}
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-white/40 font-inter uppercase tracking-wider mb-2">
                          Email *
                        </label>
                        <input
                          {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                          placeholder="jean@exemple.fr"
                          type="email"
                          className={`w-full bg-[#161616] border rounded-xl px-4 py-3.5 text-white placeholder-white/20 font-inter text-sm focus:outline-none focus:border-[#FF6A00]/50 transition-colors ${errors.email ? 'border-red-500/50' : 'border-white/10'}`}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 font-inter uppercase tracking-wider mb-2">
                          Ville *
                        </label>
                        <input
                          {...register('ville', { required: true })}
                          placeholder="Chambéry"
                          className={`w-full bg-[#161616] border rounded-xl px-4 py-3.5 text-white placeholder-white/20 font-inter text-sm focus:outline-none focus:border-[#FF6A00]/50 transition-colors ${errors.ville ? 'border-red-500/50' : 'border-white/10'}`}
                        />
                      </div>
                    </div>

                    {/* Row 3 - Adresse & Code postal */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-white/40 font-inter uppercase tracking-wider mb-2">
                          Adresse *
                        </label>
                        <input
                          {...register('adresse', { required: true })}
                          placeholder="12 rue des Alpes"
                          className={`w-full bg-[#161616] border rounded-xl px-4 py-3.5 text-white placeholder-white/20 font-inter text-sm focus:outline-none focus:border-[#FF6A00]/50 transition-colors ${errors.adresse ? 'border-red-500/50' : 'border-white/10'}`}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 font-inter uppercase tracking-wider mb-2">
                          Code postal *
                        </label>
                        <input
                          {...register('codePostal', { required: true })}
                          placeholder="73000"
                          className={`w-full bg-[#161616] border rounded-xl px-4 py-3.5 text-white placeholder-white/20 font-inter text-sm focus:outline-none focus:border-[#FF6A00]/50 transition-colors ${errors.codePostal ? 'border-red-500/50' : 'border-white/10'}`}
                        />
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <label className="block text-xs text-white/40 font-inter uppercase tracking-wider mb-3">
                        Service(s) souhaité(s)
                        <span className="ml-2 text-[#FF6A00]/60 normal-case tracking-normal text-[10px]">Plusieurs choix possibles</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {serviceOptions.map((opt) => {
                          const checked = selectedServices.includes(opt.value)
                          return (
                            <label
                              key={opt.value}
                              className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                                checked
                                  ? 'border-[#FF6A00]/50 bg-[#FF6A00]/8'
                                  : 'border-white/10 bg-[#161616] hover:border-white/20'
                              }`}
                            >
                              <input
                                type="checkbox"
                                value={opt.value}
                                {...register('services')}
                                className="sr-only"
                              />
                              <span
                                className={`w-4 h-4 rounded flex-shrink-0 flex items-center justify-center border transition-all duration-200 ${
                                  checked
                                    ? 'bg-[#FF6A00] border-[#FF6A00]'
                                    : 'border-white/30 bg-transparent'
                                }`}
                              >
                                {checked && (
                                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                                    <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                )}
                              </span>
                              <span className={`text-sm font-inter transition-colors duration-200 ${checked ? 'text-white' : 'text-white/50'}`}>
                                {opt.label}
                              </span>
                            </label>
                          )
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs text-white/40 font-inter uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register('message', { required: true })}
                        placeholder="Décrivez votre toiture : superficie approximative, état, et matériau (tuiles terre cuite, béton, ardoise, bac acier...)..."
                        rows={4}
                        className={`w-full bg-[#161616] border rounded-xl px-4 py-3.5 text-white placeholder-white/20 font-inter text-sm focus:outline-none focus:border-[#FF6A00]/50 transition-colors resize-none ${errors.message ? 'border-red-500/50' : 'border-white/10'}`}
                      />
                    </div>

                    {/* Photos */}
                    <div>
                      <label className="block text-xs text-white/40 font-inter uppercase tracking-wider mb-2">
                        Photos de votre toiture
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        ref={fileInputRef}
                        className="w-full bg-[#161616] border border-white/10 rounded-xl px-4 py-3.5 text-white/50 font-inter text-sm focus:outline-none focus:border-[#FF6A00]/50 transition-colors file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-[#FF6A00]/10 file:text-[#FF6A00] hover:file:bg-[#FF6A00]/20 cursor-pointer"
                      />
                      <p className="text-white/20 text-xs font-inter mt-1.5">Transmettez des photos pour un devis plus précis (optionnel)</p>
                    </div>

                    {/* Error */}
                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-400 text-sm font-inter">
                        <AlertCircle size={16} />
                        Une erreur est survenue. Appelez-nous au 07 53 36 18 80.
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-3 bg-[#FF6A00] hover:bg-[#E05E00] disabled:opacity-50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 font-inter text-base"
                    >
                      {status === 'loading' ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer ma demande de devis
                          <Send size={16} />
                        </>
                      )}
                    </button>

                    <p className="text-white/20 text-xs font-inter text-center">
                      Devis gratuit, sans engagement
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
