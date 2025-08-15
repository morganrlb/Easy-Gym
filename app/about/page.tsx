import { Shield, Eye, Lock, Mail, User, FileText, ShoppingCart, Download, Clock, CheckCircle } from "lucide-react";
import { LiquidGlassButton } from "../../components/ui/liquid-glass-button";

const privacyPoints = [
	{
		id: "raccolta",
		icon: User,
		title: "Raccolta Dati",
		description:
			"Il sito raccoglie solo i dati strettamente necessari per fornire i servizi di coaching e schede personalizzate.",
	},
	{
		id: "utilizzo",
		icon: FileText,
		title: "Utilizzo delle Informazioni",
		description:
			"I tuoi dati vengono utilizzati esclusivamente per creare schede personalizzate e fornire supporto via email quando necessario.",
	},
	{
		id: "protezione",
		icon: Lock,
		title: "Protezione Dati",
		description:
			"Tutti i dati sono protetti con misure di sicurezza avanzate e non vengono mai condivisi con terze parti.",
	},
	{
		id: "trasparenza",
		icon: Eye,
		title: "Trasparenza Totale",
		description:
			"Hai sempre il diritto di sapere quali dati abbiamo su di te e come li utilizziamo.",
	},
	{
		id: "controllo",
		icon: Shield,
		title: "Il Tuo Controllo",
		description:
			"Puoi richiedere la modifica o cancellazione dei tuoi dati in qualsiasi momento contattandomi direttamente.",
	},
	{
		id: "comunicazione",
		icon: Mail,
		title: "Comunicazioni",
		description:
			"Riceverai comunicazioni solo per questioni relative ai servizi acquistati o per supporto tecnico quando richiesto.",
	},
];

const purchaseSteps = [
	{
		id: "scheda-base",
		icon: Download,
		title: "Scheda Base",
		process: "Processo Immediato",
		description:
			"Acquisto diretto con accesso istantaneo. Dopo il pagamento ricevi subito la scheda e i PDF con consigli su esercizi e alimentazione.",
		steps: [
			'Clicca su "Acquista Ora"',
			"Completa il pagamento",
			"Download immediato della scheda",
		],
		timeframe: "Immediato",
	},
	{
		id: "scheda-personalizzata",
		icon: FileText,
		title: "Scheda Personalizzata",
		process: "Modulo + Pagamento",
		description:
			"Prima compili il modulo con le tue informazioni, poi effettui il pagamento e ricevi la scheda personalizzata.",
		steps: [
			"Compila il modulo informativo",
			"Ricevi email per il pagamento",
			"Consegna in 3-5 giorni lavorativi",
		],
		timeframe: "3-5 giorni",
	},
	{
		id: "servizio-personalizzato",
		icon: Clock,
		title: "Servizio Personalizzato",
		process: "Modulo + Pagamento",
		description:
			"Stesso processo della scheda personalizzata, ma con supporto continuo per 4 settimane.",
		steps: [
			"Compila il modulo dettagliato",
			"Ricevi email per il pagamento",
			"Inizio servizio in 3-5 giorni lavorativi",
		],
		timeframe: "3-5 giorni",
	},
];

export default function AboutPage() {
	return (
		<div className="text-neutral-100 min-h-screen font-sans">
			{/* How Purchase Works Section */}
			<section className="max-w-6xl mx-auto px-4 pt-32 pb-20">
				<div className="text-center mb-12">
					<div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 mb-6">
						<ShoppingCart size={16} className="text-[var(--primary)]" />
						<span className="text-[var(--primary)] text-sm font-medium">
							Come Acquistare
						</span>
					</div>
					<h2 className="text-4xl font-bold mb-6 text-white">
						Come Funziona l'Acquisto
					</h2>
					<p className="text-lg text-neutral-300 max-w-3xl mx-auto">
						Processi diversi per servizi diversi. Scopri come ottenere la tua
						scheda in base al tipo di servizio scelto.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8">
					{purchaseSteps.map((item) => {
						const IconComponent = item.icon;
						return (
							<div
								key={item.id}
								className="bg-neutral-900 rounded-2xl p-8 border border-neutral-800 hover:border-[var(--primary)]/30 transition-all duration-300"
							>
								<div className="text-center mb-6">
									<div className="bg-[var(--primary)]/10 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4">
										<IconComponent
											className="text-[var(--primary)]"
											size={28}
										/>
									</div>
									<h3 className="text-xl font-bold text-white mb-2">
										{item.title}
									</h3>
									<span className="text-[var(--primary)] text-sm font-medium bg-[var(--primary)]/10 px-3 py-1 rounded-full">
										{item.process}
									</span>
								</div>

								<p className="text-neutral-300 text-sm mb-6 leading-relaxed">
									{item.description}
								</p>

								<div className="space-y-3 mb-6">
									{item.steps.map((step, index) => (
										<div key={index} className="flex items-center gap-3">
											<div className="bg-[var(--primary)]/20 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
												<span className="text-[var(--primary)] text-xs font-bold">
													{index + 1}
												</span>
											</div>
											<span className="text-neutral-400 text-sm">
												{step}
											</span>
										</div>
									))}
								</div>

								<div className="flex items-center justify-between pt-4 border-t border-neutral-800">
									<span className="text-neutral-400 text-sm">
										Tempo di consegna:
									</span>
									<div className="flex items-center gap-1">
										<CheckCircle
											size={16}
											className="text-[var(--primary)]"
										/>
										<span className="text-[var(--primary)] font-medium text-sm">
											{item.timeframe}
										</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className="bg-neutral-900 rounded-2xl border border-neutral-800 mt-12 p-8 text-center">
					<div className="inline-flex items-center gap-2 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-full px-4 py-2 mb-4">
						<FileText size={16} className="text-[var(--primary)]" />
						<span className="text-[var(--primary)] text-sm font-medium">Corso Bodybuilding</span>
					</div>
					<h3 className="text-xl font-bold mb-4 text-white">
						Corso Completo di Bodybuilding
					</h3>
					<p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
						Il corso è strutturato in 10 moduli completi creati su Notion, accessibili immediatamente dopo il pagamento. 
						Ricevi il link di accesso diretto via email per studiare quando e dove vuoi.
					</p>
					<div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-6">
						<div className="bg-neutral-800 rounded-lg p-3 border border-neutral-700">
							<div className="text-lg font-bold text-[var(--primary)] mb-1">10</div>
							<div className="text-xs text-neutral-400">Moduli</div>
						</div>
						<div className="bg-neutral-800 rounded-lg p-3 border border-neutral-700">
							<div className="text-lg font-bold text-[var(--primary)] mb-1">✓</div>
							<div className="text-xs text-neutral-400">Immediato</div>
						</div>
						<div className="bg-neutral-800 rounded-lg p-3 border border-neutral-700">
							<div className="text-lg font-bold text-[var(--primary)] mb-1">∞</div>
							<div className="text-xs text-neutral-400">Accesso</div>
						</div>
					</div>
					<LiquidGlassButton href="/corso-bodybuilding" variant="primary">
						Scopri il Corso
					</LiquidGlassButton>
				</div>
			</section>

			{/* Hero Section */}
			<section className="hero mt-20 mb-10 text-center">
				<div className="max-w-3xl mx-auto px-4">
					<h1 className="text-4xl font-bold mb-6 text-white">
						Privacy e Trasparenza
					</h1>
					<p className="text-lg text-neutral-400 mb-8">
						La tua privacy è fondamentale per noi. Scopri come proteggiamo i tuoi
						dati e garantiamo la massima trasparenza nei nostri servizi.
					</p>
				</div>
			</section>

			{/* Main Section */}
			<main className="max-w-3xl mx-auto px-4 py-10">
				{/* Chi Siamo */}
				<div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow mb-8">
					<h3 className="flex items-center gap-2 text-[var(--primary)] text-lg font-semibold mb-4">
						<User />
						Chi Siamo
					</h3>
					<div className="space-y-4 text-neutral-300">
						<p>
							Easy Gym è un sito personale di Morgan Realbuto, bodybuilder 
              con sede a Torino. Il sito offre servizi di coaching
							personalizzato, schede di allenamento e formazione completa nel
							campo del bodybuilding.
						</p>
						<p>
							L'obiettivo è aiutare ogni persona a raggiungere i propri
							obiettivi fisici attraverso un approccio scientifico, personalizzato
							e professionale.
						</p>
					</div>
				</div>

				{/* Privacy Policy */}
				<div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow mb-8">
					<h3 className="flex items-center gap-2 text-[var(--primary)] text-lg font-semibold mb-4">
						<Shield />
						La Nostra Politica sulla Privacy
					</h3>
					<div className="grid gap-6">
						{privacyPoints.map((point) => {
							const IconComponent = point.icon;
							return (
								<div key={point.id} className="flex items-start gap-4">
									<div className="bg-[var(--primary)]/10 rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
										<IconComponent
											className="text-[var(--primary)]"
											size={20}
										/>
									</div>
									<div>
										<h4 className="text-white font-semibold mb-2">
											{point.title}
										</h4>
										<p className="text-neutral-400 text-sm">
											{point.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Cookie Policy */}
				<div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow mb-8">
					<h3 className="flex items-center gap-2 text-[var(--primary)] text-lg font-semibold mb-4">
						<FileText />
						Cookie e Tecnologie
					</h3>
					<div className="space-y-4 text-neutral-300">
						<p>
							Il sito utilizza cookie tecnici necessari per il corretto
							funzionamento della piattaforma. Non utilizziamo cookie di
							profilazione o di tracciamento.
						</p>
						<p>
							I dati di navigazione vengono utilizzati solo per migliorare
							l'esperienza utente e per scopi di sicurezza del sito web.
						</p>
					</div>
				</div>

				{/* Diritti dell'Utente */}
				<div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow mb-8">
					<h3 className="flex items-center gap-2 text-[var(--primary)] text-lg font-semibold mb-4">
						<Lock />
						I Tuoi Diritti
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
						<Mail />
						Contattaci per la Privacy
					</h3>
					<div className="space-y-4 text-neutral-300">
						<p>
							Per qualsiasi domanda riguardante la privacy, il trattamento dei dati
							o per esercitare i tuoi diritti, puoi contattarmi direttamente:
						</p>
						<div className="bg-neutral-800 rounded-lg p-4 border border-neutral-700">
							<p className="font-semibold text-white mb-2">
								Morgan Realbuto
							</p>
							<p>
								Email:{" "}
								<a
									href="mailto:morganrealbuto@gmail.com"
									className="text-[var(--primary)] hover:underline"
								>
									morganrealbuto@gmail.com
								</a>
							</p>
							<p>Sede: Torino, Italia</p>
						</div>
						<p className="text-sm text-neutral-400">
							Risposta a tutte le richieste entro 72 ore lavorative.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
