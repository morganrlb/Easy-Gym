import { LiquidGlassButton } from "../../components/ui/liquid-glass-button";
import { ClipboardCheck, TrendingUp, BookOpen, Utensils, Check, Dumbbell } from "lucide-react";


// Dati dei benefici per evitare ripetizioni
const benefits = [
  {
    id: 'personalizzata',
    icon: ClipboardCheck,
    title: 'Scheda Personalizzata',
    description: 'Ricevi una scheda di allenamento creata specificamente per te, considerando i tuoi obiettivi, livello di esperienza e disponibilità settimanale.'
  },
  {
    id: 'esercizi',
    icon: Dumbbell,
    title: 'Esercizi su misura',
    description: 'Esercizi scelti in base al tuo livello e attrezzatura disponibile, che tu ti alleni a casa o in palestra.'
  },
  {
    id: 'progressione',
    icon: TrendingUp,
    title: 'Progressione Graduale',
    description: 'Scheda creata apposta per aumentare gradualmente l\'intensità degli allenamenti, la forza e la massa muscolare.'
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

// Dati della lista di inclusioni
const inclusions = [
  'Programma completo di allenamento settimanale',
  'Esercizi scelti in base al tuo livello e attrezzatura disponibile (casa o palestra)',
  'Consigli personalizzati per la progressione',
  'Supporto via email per domande e chiarimenti',
  'PDF con consigli e tecniche sull\'esecuzione degli esercizi',
  'PDF con consigli generali sull\'alimentazione'
];

export default function SchedaPersonalizzataPage() {
  return (
    <div className="text-neutral-100 min-h-screen font-sans">

      {/* Hero Section */}
      <section className="hero mt-20 mb-10 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-white">
            Scheda Personalizzata
          </h1>
          <p className="text-lg text-neutral-400 mb-8">
            Ottieni un programma di allenamento su misura creato specificamente per
            te e i tuoi obiettivi. Che tu sia all’inizio del tuo percorso o già
            esperto in sala pesi, una scheda personalizzata ti permette di
            massimizzare i risultati rispettando le tue esigenze, i tuoi obiettivi
            e la tua disponibilità settimanale.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div key={benefit.id} className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow">
                <h3 className="flex items-center gap-2 text-[var(--primary)] text-lg font-semibold mb-2">
                  <IconComponent /> {benefit.title}
                </h3>
                <p className="text-neutral-300">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="cta-section bg-neutral-900 rounded-2xl border border-neutral-800 mt-16 p-10 text-center shadow">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Pronto per iniziare?
          </h2>
          <p className="text-neutral-300 mb-4">La scheda personalizzata include:</p>
          <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
            {inclusions.map((inclusion, index) => (
              <li key={index} className="flex items-center">
                <Check className="text-[var(--primary)] mr-2" size={16} />
                {inclusion}
              </li>
            ))}
          </ul>
          <p className="price text-white text-3xl font-bold mb-4">35€</p>
          <LiquidGlassButton
            href="https://forms.gle/fg74t4RAQsnmNyCGA"
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