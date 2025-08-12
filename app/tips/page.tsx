import Link from "next/link";
import { Dumbbell, Utensils, Bed, RotateCcw, TrendingUp } from "lucide-react";

const tips = [
  {
    id: 'piano',
    icon: Dumbbell,
    title: 'Errore #1: Allenarsi senza un piano',
    description: 'Molti iniziano in palestra senza una direzione chiara. Una scheda strutturata e progressiva è fondamentale per ottenere risultati nel tempo.'
  },
  {
    id: 'alimentazione',
    icon: Utensils,
    title: 'Errore #2: Sottovalutare l\'alimentazione',
    description: 'L\'allenamento è solo metà dell\'equazione. Senza un\'alimentazione adeguata ai tuoi obiettivi (massa o definizione), limiterai i tuoi progressi.'
  },
  {
    id: 'sonno',
    icon: Bed,
    title: 'Errore #3: Non dormire abbastanza',
    description: 'Il recupero è fondamentale. Dormire almeno 7-8 ore a notte migliora la crescita muscolare, il focus e la performance in palestra.'
  },
  {
    id: 'varieta',
    icon: RotateCcw,
    title: 'Errore #4: Fare sempre gli stessi esercizi',
    description: 'Il corpo si adatta rapidamente. Alternare esercizi, schede e stimoli evita stalli e favorisce una crescita continua.'
  },
  {
    id: 'monitoraggio',
    icon: TrendingUp,
    title: 'Errore #5: Non monitorare i progressi',
    description: 'Registrare pesi, ripetizioni e misure ti permette di capire se stai migliorando o se devi modificare qualcosa nel tuo approccio.'
  }
];

export default function TipsPage() {
  return (
    <div className="bg-dark text-light min-h-screen font-sans">
      {/* Main Section */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        <section id="tips" className="container mx-auto px-5">
          <div className="section-title advice text-center mt-12">
            <h2 className="text-3xl font-bold mb-2 text-white">Consigli sul Bodybuilding</h2>
            <p className="text-lightneutral max-w-xl mx-auto">
              Scopri gli errori più comuni che molti principianti (e non solo) commettono e come evitarli per ottenere risultati reali.
            </p>
          </div>
          <div className="tips-list grid gap-8 mt-10">
            {tips.map((tip) => {
              const IconComponent = tip.icon;
              return (
                <div key={tip.id} className="tip">
                  <h3 className="flex items-center gap-2 text-orange-500 text-lg font-semibold mb-2">
                    <IconComponent /> {tip.title}
                  </h3>
                  <p className="text-lightneutral">
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section container mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-white">Vuoi una guida personalizzata per evitare questi errori?</h2>
          <p className="text-light mb-6">
            Acquista una scheda adatta al tuo livello o prenota una consulenza con me per avere un piano su misura.
          </p>
          <Link href="/#services" className="primary-button bg-primary text-dark font-bold py-3 px-8 rounded-lg hover:bg-accent transition inline-block">
            Scopri i Pacchetti
          </Link>
        </section>
      </main>
    </div>
  );
}
