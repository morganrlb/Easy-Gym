import { Shield, Eye, Lock, Mail, User, FileText } from "lucide-react";

const privacyPoints = [
  {
    id: 'raccolta',
    icon: User,
    title: 'Raccolta Dati',
    description: 'Raccogliamo solo i dati strettamente necessari per fornire i nostri servizi di coaching e schede personalizzate.'
  },
  {
    id: 'utilizzo',
    icon: FileText,
    title: 'Utilizzo delle Informazioni',
    description: 'I tuoi dati vengono utilizzati esclusivamente per creare schede personalizzate e fornire supporto via Telegram.'
  },
  {
    id: 'protezione',
    icon: Lock,
    title: 'Protezione Dati',
    description: 'Tutti i dati sono protetti con misure di sicurezza avanzate e non vengono mai condivisi con terze parti.'
  },
  {
    id: 'trasparenza',
    icon: Eye,
    title: 'Trasparenza Totale',
    description: 'Hai sempre il diritto di sapere quali dati abbiamo su di te e come li utilizziamo.'
  },
  {
    id: 'controllo',
    icon: Shield,
    title: 'Il Tuo Controllo',
    description: 'Puoi richiedere la modifica o cancellazione dei tuoi dati in qualsiasi momento contattandoci direttamente.'
  },
  {
    id: 'comunicazione',
    icon: Mail,
    title: 'Comunicazioni',
    description: 'Ti contattiamo solo per questioni relative ai servizi acquistati o per supporto tecnico quando richiesto.'
  }
];

export default function AboutPage() {
  return (
    <div className="bg-black text-neutral-100 min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="hero bg-black mt-20 mb-10 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-white">
            Privacy e Trasparenza
          </h1>
          <p className="text-lg text-neutral-400 mb-8">
            La tua privacy è fondamentale per noi. Scopri come proteggiamo i tuoi dati 
            e garantiamo la massima trasparenza nei nostri servizi.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <main className="max-w-3xl mx-auto px-4 py-10">
        
        {/* Chi Siamo */}
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow mb-8">
          <h3 className="flex items-center gap-2 text-[var(--primary)] text-lg font-semibold mb-4">
            <User />Chi Siamo
          </h3>
          <div className="space-y-4 text-neutral-300">
            <p>
              Easy Gym è un progetto personale di Morgan Realbuto, bodybuilder professionista 
              con sede a Torino. Offriamo servizi di coaching personalizzato, schede di allenamento 
              e formazione completa nel campo del bodybuilding.
            </p>
            <p>
              Il nostro obiettivo è aiutare ogni persona a raggiungere i propri obiettivi fisici 
              attraverso un approccio scientifico, personalizzato e professionale.
            </p>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow mb-8">
          <h3 className="flex items-center gap-2 text-[var(--primary)] text-lg font-semibold mb-4">
            <Shield />La Nostra Politica sulla Privacy
          </h3>
          <div className="grid gap-6">
            {privacyPoints.map((point) => {
              const IconComponent = point.icon;
              return (
                <div key={point.id} className="flex items-start gap-4">
                  <div className="bg-[var(--primary)]/10 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-[var(--primary)]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{point.title}</h4>
                    <p className="text-neutral-400 text-sm">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cookie Policy */}
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow mb-8">
          <h3 className="flex items-center gap-2 text-[var(--primary)] text-lg font-semibold mb-4">
            <FileText />Cookie e Tecnologie
          </h3>
          <div className="space-y-4 text-neutral-300">
            <p>
              Il nostro sito utilizza cookie tecnici necessari per il corretto funzionamento 
              della piattaforma. Non utilizziamo cookie di profilazione o di tracciamento.
            </p>
            <p>
              I dati di navigazione vengono utilizzati solo per migliorare l'esperienza utente 
              e per scopi di sicurezza del sito web.
            </p>
          </div>
        </div>

        {/* Diritti dell'Utente */}
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow mb-8">
          <h3 className="flex items-center gap-2 text-[var(--primary)] text-lg font-semibold mb-4">
            <Lock />I Tuoi Diritti
          </h3>
          <div className="space-y-3 text-neutral-300">
            <div className="flex items-center gap-3">
              <div className="bg-[var(--primary)]/20 rounded-full p-1">
                <Eye className="text-[var(--primary)]" size={16} />
              </div>
              <span>Diritto di accesso ai tuoi dati personali</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[var(--primary)]/20 rounded-full p-1">
                <FileText className="text-[var(--primary)]" size={16} />
              </div>
              <span>Diritto di rettifica e aggiornamento</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[var(--primary)]/20 rounded-full p-1">
                <Shield className="text-[var(--primary)]" size={16} />
              </div>
              <span>Diritto di cancellazione (diritto all'oblio)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[var(--primary)]/20 rounded-full p-1">
                <Lock className="text-[var(--primary)]" size={16} />
              </div>
              <span>Diritto di limitazione del trattamento</span>
            </div>
          </div>
        </div>

        {/* Contatti */}
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow">
          <h3 className="flex items-center gap-2 text-[var(--primary)] text-lg font-semibold mb-4">
            <Mail />Contattaci per la Privacy
          </h3>
          <div className="space-y-4 text-neutral-300">
            <p>
              Per qualsiasi domanda riguardante la privacy, il trattamento dei dati o 
              per esercitare i tuoi diritti, puoi contattarci direttamente:
            </p>
            <div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700">
              <p className="font-semibold text-white mb-2">Morgan Realbuto</p>
              <p>Email: <a href="mailto:morganrealbuto@gmail.com" className="text-[var(--primary)] hover:underline">morganrealbuto@gmail.com</a></p>
              <p>Sede: Torino, Italia</p>
            </div>
            <p className="text-sm text-neutral-400">
              Risponderemo a tutte le richieste entro 72 ore lavorative.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
