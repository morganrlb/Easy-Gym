import { LiquidGlassButton } from './ui/liquid-glass-button'

export default function Form() {
  return (
         <section id="schedule" className="max-w-5xl mx-auto px-8 mb-40">
            <div className="text-center mb-16">
               <h2 className="text-[40px] font-bold text-white mb-4">
                  Contattami
               </h2>
               <p className="text-neutral-300 text-lg">
                  Scrivimi per iniziare il tuo percorso
               </p>
            </div>
            
            <div className="bg-neutral-900/60 backdrop-blur-sm rounded-3xl border border-neutral-800/50 p-8 md:p-12">
               <form
                  action="https://formspree.io/f/mgvzngjl"
                  method="POST"
                  className="space-y-8"
               >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-3">
                        <label className="block text-white font-medium">
                           Nome e Cognome
                        </label>
                        <input
                           type="text"
                           name="Nome e cognome"
                           placeholder="Il tuo nome completo"
                           required
                           className="w-full p-4 bg-neutral-800/40 text-white border border-neutral-700/50 rounded-2xl focus:outline-none focus:border-[var(--primary)]/70 focus:bg-neutral-800/60 placeholder-neutral-400 transition-all duration-300"
                        />
                     </div>
                     
                     <div className="space-y-3">
                        <label className="block text-white font-medium">
                           Email
                        </label>
                        <input
                           type="email"
                           name="Email"
                           placeholder="tua.email@esempio.com"
                           required
                           className="w-full p-4 bg-neutral-800/40 text-white border border-neutral-700/50 rounded-2xl focus:outline-none focus:border-[var(--primary)]/70 focus:bg-neutral-800/60 placeholder-neutral-400 transition-all duration-300"
                        />
                     </div>
                  </div>

                  <div className="space-y-3">
                     <label className="block text-white font-medium">
                        Messaggio
                     </label>
                     <textarea
                        name="Messaggio"
                        placeholder="Raccontami i tuoi obiettivi e come posso aiutarti..."
                        required
                        rows={5}
                        className="w-full p-4 bg-neutral-800/40 text-white border border-neutral-700/50 rounded-2xl focus:outline-none focus:border-[var(--primary)]/70 focus:bg-neutral-800/60 placeholder-neutral-400 resize-vertical transition-all duration-300"
                     />
                  </div>

                  <div className="flex justify-center pt-6">
                     <LiquidGlassButton type="submit" variant="primary" className="opacity-70 text-lg">
                        Invia Messaggio
                     </LiquidGlassButton>
                  </div>
               </form>
            </div>
         </section>

  )
}
