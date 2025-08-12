export default function Hero() {
   return (
         <section className="relative text-center mt-30 mb-40">
            <div className="container mx-auto">
               <h1 className="text-5xl font-bold mb-6">
                  La Tua Guida al <span className='text-[var(--primary)]'>Bodybuilding</span>
               </h1>
               <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                  Benvenuto sul mio sito! Sono Morgan, un bodybuilder professionista. Su questo sito potrai acquistare
                   le mie schede di allenamento oppure richiedere una consulenza personalizzata con me. Avrai la possibilità
                  di ricevere una scheda su misura, che potrà essere adattata e aggiornata nel tempo in base ai tuoi progressi.
               </p>
               <div className="hero-buttons flex gap-5 justify-center *:hover:-translate-y-1 *:hover:text-white *:duration-200">
                  <a href="#services" className="bg-[var(--primary)] text-black font-semibold rounded-2xl px-8 py-4">
                     Vedi i pacchetti
                  </a>
                  <a href="#schedule" className="border-2 border-[var(--primary)] text-[var(--primary)] font-semibold rounded-2xl px-8 py-4 hover:bg-[var(--primary)]">
                     Contattami
                  </a>
               </div>
            </div>
         </section>
   );
}
