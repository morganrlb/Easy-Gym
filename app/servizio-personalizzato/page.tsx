import { LiquidGlassButton } from "../../components/ui/liquid-glass-button";
import { ClipboardCheck, MessageCircle, RefreshCw, TrendingUp, BookOpen, Utensils, Check, Dumbbell } from "lucide-react";

// Dati dei servizi per evitare ripetizioni
const services = [
  {
    id: 'personalizzata',
    icon: ClipboardCheck,
    title: 'Scheda Personalizzata',
    description: 'Ricevi una scheda di allenamento creata specificamente per te, considerando i tuoi obiettivi, livello di esperienza e disponibilità settimanale.'
  },
  {
    id: 'supporto',
    icon: MessageCircle,
    title: 'Supporto Costante',
    description: 'Hai accesso diretto a me via WhatsApp per domande, dubbi o chiarimenti durante tutto il periodo. Rispondo in giornata.'
  },
  {
    id: 'aggiustamenti',
    icon: RefreshCw,
    title: 'Aggiustamenti Settimanali',
    description: 'La scheda viene modificata e ottimizzata in base ai tuoi feedback e progressi settimanali per massimizzare i risultati.'
  },
  {
    id: 'monitoraggio',
    icon: TrendingUp,
    title: 'Monitoraggio Progressi',
    description: 'Tracking settimanale dei tuoi progressi con aggiustamenti del programma in base ai risultati ottenuti.'
  },
  {
    id: 'consigli',
    icon: BookOpen,
    title: 'Consigli pratici',
    description: 'In aggiunta alla scheda riceverai anche dei PDF contenenti consigli pratici e spiegazioni sull\'esecuzione degli esercizi.'
  },
  {
    id: 'alimentazione',
    icon: Utensils,
    title: 'Consigli sull\'Alimentazione',
    description: 'PDF con consigli generali su come alimentarsi correttamente per supportare i tuoi obiettivi di bodybuilding, sia che tu voglia aumentare la massa muscolare o definire il fisico.'
  }
];

// Dati della lista di benefici
const benefits = [
  '4 settimane di supporto dedicato',
  'Scheda personalizzata in base al tuo livello, alle tue preferenze e obiettivi',
  'Supporto diretto via WhatsApp',
  'Raccolta di feedback così da aggiornare la scheda durante tutto il percorso',
  'PDF con consigli e tecniche sull\'esecuzione degli esercizi',
  'PDF con consigli generali sull\'alimentazione'
];

export default function ServizioPersonalizzatoPage() {
  return (
    <div className="text-neutral-100 min-h-screen font-sans">

      <section className="hero mt-20 mb-10 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Servizio Personalizzato 4 Settimane
          </h1>
          <p className="text-base md:text-lg text-neutral-400 mb-8">
            Il pacchetto completo per chi vuole risultati reali con supporto
            costante e personalizzazione al 100%
          </p>
        </div>
      </section>

      {/* Tips List Section */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow">
                <h3 className="flex items-center gap-2 text-[var(--primary)] text-lg font-semibold mb-2">
                  <IconComponent /> {service.title}
                </h3>
                <p className="text-neutral-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="cta-section bg-neutral-900 rounded-2xl border border-neutral-800 mt-16 p-10 text-center shadow">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">
            Inizia Ora il Tuo Percorso Personalizzato
          </h2>
          <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <Check className="text-[var(--primary)] mr-2" size={16} />
                {benefit}
              </li>
            ))}
          </ul>
          <p className="price text-white text-3xl font-bold mb-4">49€</p>
          <LiquidGlassButton
            href="https://forms.gle/d1mjhvwUostCJjS98"
            target="_blank"
            variant="primary"
          >
            Compila il Modulo<sup>*</sup>
          </LiquidGlassButton>
          <p className="text-neutral-400 text-sm mt-4">
            <sup>*</sup> Nessun obbligo di pagamento immediato. Il pagamento verrà
            richiesto via email dopo la compilazione del modulo.
          </p>
        </div>
      </section>
    </div>
  );
}