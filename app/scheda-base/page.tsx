import { LiquidGlassButton } from "../../components/ui/liquid-glass-button";
import { BarChart3, BookOpen, Utensils, Check, Dumbbell } from "lucide-react";


// Dati dei benefici per evitare ripetizioni
const benefits = [
  {
    id: 'programma',
    icon: Dumbbell,
    title: 'Programma Completo',
    description: 'Un programma di allenamento strutturato e semplice, adattabile a tutti, con esercizi base fondamentali per costruire una solida base di forza e massa muscolare.'
  },
  {
    id: 'progressione',
    icon: BarChart3,
    title: 'Progressione Graduale',
    description: 'Scheda semplice per aumentare gradualmente l\'intensità degli allenamenti in modo sicuro ed efficace, sia per chi è alle prime armi che per chi ha già esperienza.'
  },
  {
    id: 'consigli',
    icon: BookOpen,
    title: 'Consigli Pratici',
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
  'Programma di allenamento semplice completo',
  'Scheda semplice e strutturata per cominciare con il bodybuilding adattabile a tutti',
  'PDF con consigli e tecniche sull\'esecuzione degli esercizi',
  'PDF con consigli generali sull\'alimentazione'
];

export default function SchedaBasePage() {
  return (
    <div className="text-neutral-100 min-h-screen font-sans">      
      <section className="hero mt-20 mb-10 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-white">Scheda Base</h1>
          <p className="text-lg text-neutral-400 mb-8">
            Inizia il tuo percorso nel bodybuilding con una scheda semplice ma efficace, pensata per chi muove i primi passi in palestra o vuole riprendere dopo una lunga pausa
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 gap-8">
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

        <div className="cta-section bg-neutral-900 rounded-2xl border border-neutral-800 mt-16 p-10 text-center shadow">
          <h2 className="text-2xl font-bold mb-4 text-white">Pronto per iniziare?</h2>
          <p className="text-neutral-300 mb-4">La scheda base include:</p>
          <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
            {inclusions.map((inclusion, index) => (
              <li key={index} className="flex items-center">
                <Check className="text-[var(--primary)] mr-2" size={16} />
                {inclusion}
              </li>
            ))}
          </ul>
          <p className="price text-white text-3xl font-bold mb-4">24€</p>
          <LiquidGlassButton 
            href="https://forms.gle/your-base-form-link" 
            target="_blank" 
            variant="primary"
          >
            Compila il Modulo<sup>*</sup>
          </LiquidGlassButton>
          <p className="text-neutral-400 text-sm mt-4"><sup>*</sup> Nessun obbligo di pagamento immediato. Il pagamento verrà richiesto via email dopo la compilazione del modulo.</p>
        </div>
      </section>
    </div>
  );
}