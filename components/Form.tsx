import { Send } from "lucide-react"

export default function Form() {
  return (
         <section id="schedule" className="max-w-4xl mx-auto px-8">
            <form
               action="https://formspree.io/f/mgvzngjl"
               method="POST"
               className="space-y-8"
            >
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                     <h2 className="text-4xl lg:text-5xl font-light text-white">
                        Il tuo Nome:
                     </h2>
                  </div>
                  <div>
                     <input
                        type="text"
                        name="Nome e cognome"
                        placeholder="Nome e Cognome"
                        required
                        className="w-full p-4 bg-transparent text-white border-b-2 border-neutral-600 focus:outline-none focus:border-white/90 placeholder-neutral-400 transition-colors duration-300"
                     />
                  </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                     <h2 className="text-4xl lg:text-5xl font-light text-white">
                        La tua Email:
                     </h2>
                  </div>
                  <div>
                     <input
                        type="email"
                        name="Email"
                        placeholder="example@email.com"
                        required
                        className="w-full p-4 bg-transparent text-white border-b-2 border-neutral-600 focus:outline-none focus:border-white/90 placeholder-neutral-400 transition-colors duration-300"
                     />
                  </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                     <h2 className="text-4xl lg:text-5xl font-light text-white">
                        Il messaggio:
                     </h2>
                  </div>
                  <div>
                     <textarea
                        name="Messaggio"
                        placeholder="Scrivi qui"
                        required
                        className="w-full p-4 bg-transparent text-white border-b-2 border-neutral-600 focus:outline-none focus:border-white/90 placeholder-neutral-400 resize-vertical transition-colors duration-300"
                     />
                  </div>
               </div>

               <button type="submit" className="flex items-center justify-center mt-12 w-full text-white border-2 border-white/95 px-16 py-6 rounded-[2rem] text-2xl font-medium hover:bg-white/95 hover:text-black duration-200 gap-2 cursor-pointer">
                  <div>
                     Invia
                  </div>
                     <Send size={20}/>
               </button>
            </form>
         </section>

  )
}
