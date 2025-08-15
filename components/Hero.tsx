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
               <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto px-4 md:px-0">
                  Sono Morgan, bodybuilder professionista. Trasforma il tuo fisico con schede 
                  personalizzate e coaching dedicato. Il tuo percorso verso la migliore versione 
                  di te stesso inizia qui.
               </p>
               <div className="hero-buttons flex gap-5 justify-center">
                  <LiquidGlassButton href="/corso-bodybuilding" variant="primary">
                     Corso Completo
                  </LiquidGlassButton>
                  <LiquidGlassButton href="/#services" variant="secondary">
                     Vedi le schede
                  </LiquidGlassButton>
               </div>
            </div>
         </section>
   );
}
