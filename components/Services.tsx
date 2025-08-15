import Image from 'next/image';
import { LiquidGlassButton } from './ui/liquid-glass-button';
import image1 from '@/public/image1.webp';
import image2 from '@/public/image2.webp';
import image3 from '@/public/image3.webp';

const services = [
   {
      title: 'Scheda Base',
      description: 'Scheda base pensata per chi inizia con il bodybuilding o desidera un programma semplice ed efficace. Perfetta per costruire una solida base, migliorare la forma fisica e acquisire conoscenza degli esercizi.',
      price: '24€',
      originalPrice: null,
      image: image1,
      href: '/scheda-base'
   },
   {
      title: 'Scheda Personalizzata',
      description: 'Scheda di allenamento personalizzata creata su misura in base ai tuoi obiettivi, livello e caratteristiche fisiche. Adatta a ogni esigenza: dimagrimento, massa muscolare o ricomposizione corporea.',
      price: '35€',
      originalPrice: '45€',
      image: image2,
      href: '/scheda-personalizzata'
   },
   {
      title: 'Scheda + Servizio Personalizzato',
      description: 'Pacchetto completo di 4 settimane con scheda personalizzata e supporto diretto. Verrai seguito da me con la possibilità di modificare la scheda nel tempo e contattarmi per consigli o adattamenti.',
      price: '49€',
      originalPrice: '65€',
      image: image3,
      href: '/servizio-personalizzato'
   }
];

export default function Services() {
   return (
      <section id="services" className="max-w-6xl mx-auto mb-40 px-4 md:px-0">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[40px] font-bold mb-4 text-white">
               I Miei Servizi di Coaching
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
               Scegli tra una gamma di pacchetti pensati per aiutarti a progredire nel mondo del bodybuilding,
               che tu sia un neofita o che abbia già esperienza in palestra.
            </p>
         </div>
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
               <div key={index} className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:-translate-y-4 duration-300">
                  <div className='relative h-52 mt-1 scale-95'>
                     <Image
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        className='rounded-2xl'
                     />
                  </div>
                  <div className="flex flex-col gap-4 p-6 -mt-1">
                     <h3 className="text-white font-bold text-lg ">{service.title}</h3>
                     <p className="text-[15px] text-neutral-400">
                        {service.description}
                     </p>
                     <div className="flex items-center gap-3">
                        <span className="text-[var(--primary)] font-bold text-2xl">{service.price}</span>
                        {service.originalPrice && (
                           <>
                              <span className="text-neutral-500 line-through text-lg">{service.originalPrice}</span>
                           </>
                        )}
                     </div>
                     <LiquidGlassButton href={service.href} variant="primary">
                        Scopri di più
                     </LiquidGlassButton>
                  </div>
               </div>
            ))}
         </div>
         
         <div className="text-center mt-8">
            <p className="text-sm text-neutral-400">
               Consulta la{" "}
               <a 
                  href="/about" 
                  className="text-[var(--primary)] hover:underline"
               >
                  guida all'acquisto
               </a>
               {" "}per tutti i chiarimenti su come svolgere l'acquisto
            </p>
         </div>
      </section>
   )
}