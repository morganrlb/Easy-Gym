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
      image: image1,
      href: '/scheda-base'
   },
   {
      title: 'Scheda Personalizzata',
      description: 'Scheda di allenamento personalizzata creata su misura in base ai tuoi obiettivi, livello e caratteristiche fisiche. Adatta a ogni esigenza: dimagrimento, massa muscolare o ricomposizione corporea.',
      price: '35€',
      image: image2,
      href: '/scheda-personalizzata'
   },
   {
      title: 'Scheda + Servizio Personalizzato',
      description: 'Pacchetto completo di 4 settimane con scheda personalizzata e supporto diretto. Verrai seguito da me con la possibilità di modificare la scheda nel tempo e contattarmi per consigli o adattamenti.',
      price: '49€',
      image: image3,
      href: '/servizio-personalizzato'
   }
];

export default function Services() {
   return (
      <section id="services" className="max-w-6xl mx-auto mb-40">
         <div className="text-center mb-12">
            <h2 className="text-[40px] font-bold mb-4 text-white">
               I Miei Servizi di Coaching
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto">
               Scegli tra una gamma di pacchetti pensati per aiutarti a progredire nel mondo del bodybuilding,
               che tu sia un neofita o che abbia già esperienza in palestra.
            </p>
         </div>
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
               <div key={index} className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:-translate-y-2 duration-300">
                  <div className='relative h-52'>
                     <Image
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                     />
                  </div>
                  <div className="flex flex-col gap-4 p-6">
                     <h3 className="text-white font-bold text-lg ">{service.title}</h3>
                     <p className="text-[15px] text-neutral-400">
                        {service.description}
                     </p>
                     <span className="text-[var(--primary)] font-bold text-2xl">{service.price}</span>
                     <LiquidGlassButton href={service.href} variant="primary">
                        Scopri di più
                     </LiquidGlassButton>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}