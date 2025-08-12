import React from "react";
import { FlipWords } from '../components/ui/flip-words';
import { LiquidGlassButton } from './ui/liquid-glass-button';

export default function Hero() {
   return (
         <section className="relative text-center mt-30 mb-40">
            <div className="container mx-auto">
               <h1 className="text-5xl font-bold mb-6">
                     La Tua Guida <FlipWords words={["al Bodybuilding", "Facile"]} />
               </h1>
               <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                  Benvenuto sul mio sito! Sono Morgan, un bodybuilder professionista. Su questo sito potrai acquistare
                   le mie schede di allenamento oppure richiedere una consulenza personalizzata con me. Avrai la possibilità
                  di ricevere una scheda su misura, che potrà essere adattata e aggiornata nel tempo in base ai tuoi progressi.
               </p>
               <div className="hero-buttons flex gap-5 justify-center">
                  <LiquidGlassButton href="#services" variant="primary">
                     Vedi i pacchetti
                  </LiquidGlassButton>
                  <LiquidGlassButton href="#schedule" variant="secondary">
                     Contattami
                  </LiquidGlassButton>
               </div>
            </div>
         </section>
   );
}
