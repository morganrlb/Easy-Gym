"use client"
import { LiquidGlassButton } from './ui/liquid-glass-button'
import { useState, useRef } from 'react'

export default function Form() {
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const validateForm = (formData: FormData) => {
    const newErrors: {[key: string]: string} = {}
    
    const name = formData.get('Nome e cognome') as string
    const email = formData.get('Email') as string
    const message = formData.get('Messaggio') as string

    if (!name?.trim()) {
      newErrors['Nome e cognome'] = 'Il nome è obbligatorio'
    }

    if (!email?.trim()) {
      newErrors['Email'] = 'L\'email è obbligatoria'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors['Email'] = 'Inserisci un\'email valida'
    }

    if (!message?.trim()) {
      newErrors['Messaggio'] = 'Il messaggio è obbligatorio'
    }

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    
    const formData = new FormData(e.currentTarget)
    const validationErrors = validateForm(formData)
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsSubmitting(false)
      return
    }

    setErrors({})
    
    try {
      const response = await fetch('https://formspree.io/f/mgvzngjl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        // Reset form on success
        formRef.current?.reset()
        setSubmitSuccess(true)
        setTimeout(() => setSubmitSuccess(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
    
    setIsSubmitting(false)
  }

  return (
         <section id="schedule" className="max-w-5xl mx-auto px-4 sm:px-8 mb-20 sm:mb-40">
            <div className="text-center mb-8 sm:mb-16">
               <h2 className="text-3xl sm:text-[40px] font-bold text-white mb-4">
                  Contattami
               </h2>
               <p className="text-neutral-300 text-base sm:text-lg">
                  Scrivimi per iniziare il tuo percorso
               </p>
            </div>
            
            <div className="bg-neutral-900/60 backdrop-blur-sm rounded-3xl border border-neutral-800/50 p-6 sm:p-8 md:p-12">
               {submitSuccess && (
                 <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-2xl">
                   <div className="flex items-center gap-2 text-green-400">
                     <div className="w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center">
                       <span className="text-green-400 font-bold text-xs">✓</span>
                     </div>
                     Messaggio inviato con successo!
                   </div>
                 </div>
               )}
               
               <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6 sm:space-y-8"
               >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                     <div className="space-y-3">
                        <label className="block text-white font-medium">
                           Nome e Cognome
                        </label>
                        <input
                           type="text"
                           name="Nome e cognome"
                           placeholder="Il tuo nome completo"
                           className={`w-full p-4 bg-neutral-800/40 text-white border rounded-2xl focus:outline-none placeholder-neutral-400 transition-all duration-300 ${
                             errors['Nome e cognome'] 
                               ? 'border-red-500/70 focus:border-red-500 focus:bg-neutral-800/60' 
                               : 'border-neutral-700/50 focus:border-[var(--primary)]/70 focus:bg-neutral-800/60'
                           }`}
                        />
                        {errors['Nome e cognome'] && (
                          <div className="flex items-center gap-2 text-red-400 text-sm">
                            <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                              <span className="text-red-400 font-bold text-xs">!</span>
                            </div>
                            {errors['Nome e cognome']}
                          </div>
                        )}
                     </div>
                     
                     <div className="space-y-3">
                        <label className="block text-white font-medium">
                           Email
                        </label>
                        <input
                           type="email"
                           name="Email"
                           placeholder="tua.email@esempio.com"
                           className={`w-full p-4 bg-neutral-800/40 text-white border rounded-2xl focus:outline-none placeholder-neutral-400 transition-all duration-300 ${
                             errors['Email'] 
                               ? 'border-red-500/70 focus:border-red-500 focus:bg-neutral-800/60' 
                               : 'border-neutral-700/50 focus:border-[var(--primary)]/70 focus:bg-neutral-800/60'
                           }`}
                        />
                        {errors['Email'] && (
                          <div className="flex items-center gap-2 text-red-400 text-sm">
                            <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                              <span className="text-red-400 font-bold text-xs">!</span>
                            </div>
                            {errors['Email']}
                          </div>
                        )}
                     </div>
                  </div>

                  <div className="space-y-3">
                     <label className="block text-white font-medium">
                        Messaggio
                     </label>
                     <textarea
                        name="Messaggio"
                        placeholder="Raccontami i tuoi obiettivi e come posso aiutarti..."
                        rows={5}
                        className={`w-full p-4 bg-neutral-800/40 text-white border rounded-2xl focus:outline-none placeholder-neutral-400 resize-vertical transition-all duration-300 ${
                          errors['Messaggio'] 
                            ? 'border-red-500/70 focus:border-red-500 focus:bg-neutral-800/60' 
                            : 'border-neutral-700/50 focus:border-[var(--primary)]/70 focus:bg-neutral-800/60'
                        }`}
                     />
                     {errors['Messaggio'] && (
                       <div className="flex items-center gap-2 text-red-400 text-sm">
                         <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                           <span className="text-red-400 font-bold text-xs">!</span>
                         </div>
                         {errors['Messaggio']}
                       </div>
                     )}
                  </div>

                  <div className="flex justify-center pt-4 sm:pt-6">
                     <LiquidGlassButton 
                       type="submit" 
                       variant="primary" 
                       className="opacity-70 text-base sm:text-lg w-full sm:w-auto"
                       disabled={isSubmitting}
                     >
                        {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                     </LiquidGlassButton>
                  </div>
               </form>
            </div>
         </section>

  )
}
