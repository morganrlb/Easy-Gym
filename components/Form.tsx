export default function Form() {
  return (
         <section id="schedule" className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
               <h2 className="text-2xl font-bold mb-2 text-white">Contattami</h2>
               <p className="text-neutral-400 mb-6">
                  Compila il form sottostante per ricevere maggiori informazioni o
                  chiarimenti sui servizi offerti.
               </p>
            </div>
            <form
               action="https://formspree.io/f/mgvzngjl"
               method="POST"
               className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800"
            >
               <div className="mb-4">
                  <input
                     type="text"
                     name="Nome e cognome"
                     placeholder="Nome e cognome"
                     required
                     className="w-full p-4 rounded-lg bg-neutral-800 text-white mb-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
               </div>
               <div className="mb-4">
                  <input
                     type="email"
                     name="Email"
                     placeholder="user@example.com"
                     required
                     className="w-full p-4 rounded-lg bg-neutral-800 text-white mb-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
               </div>
               <div className="mb-4">
                  <textarea
                     name="Messaggio"
                     placeholder="Il tuo messaggio"
                     required
                     className="w-full p-4 rounded-lg bg-neutral-800 text-white mb-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] h-32 resize-vertical"
                  />
               </div>
               <button
                  type="submit"
                  className="submit-button w-full py-4 bg-[var(--primary)] text-black rounded-lg font-bold hover:bg-orange-600 transition"
               >
                  Invia Messaggio
               </button>
            </form>
         </section>

  )
}
