import { LiquidGlassButton } from "../../components/ui/liquid-glass-button";
import { BookOpen, Target, Brain, Trophy, Star, Download, FileText, Utensils, Dumbbell, Zap, Shield } from "lucide-react";

const courseModules = [
	{
		id: 'introduzione',
		icon: BookOpen,
		title: 'Introduzione al Bodybuilding',
		description: 'Panoramica completa sui principi fondamentali, storia e filosofia del bodybuilding moderno.'
	},
	{
		id: 'anatomia',
		icon: Target,
		title: 'Anatomia Muscolare Applicata',
		description: 'Studio dettagliato dei principali gruppi muscolari e delle loro funzioni nell\'allenamento.'
	},
	{
		id: 'esecuzione',
		icon: Dumbbell,
		title: 'Tecniche di Esecuzione',
		description: 'Analisi dettagliata della corretta esecuzione di ogni esercizio per massimizzare i risultati.'
	},
	{
		id: 'nutrizione',
		icon: Utensils,
		title: 'Principi di Nutrizione',
		description: 'Fondamenti di nutrizione applicata al bodybuilding per ottimizzare la composizione corporea.'
	},
	{
		id: 'recupero',
		icon: Shield,
		title: 'Recupero e Riposo',
		description: 'L\'importanza del recupero nella crescita muscolare e prevenzione degli infortuni.'
	},
	{
		id: 'metodologie',
		icon: Zap,
		title: 'Metodologie Avanzate',
		description: 'Tecniche specializzate di allenamento per atleti di livello intermedio e avanzato.'
	},
	{
		id: 'schede',
		icon: FileText,
		title: 'Creazione Schede Personalizzate',
		description: 'Principi e metodologie per creare programmi di allenamento efficaci e personalizzati.'
	},
	{
		id: 'supplementazione',
		icon: Star,
		title: 'Supplementazione Efficace',
		description: 'Analisi evidence-based degli integratori più efficaci nel bodybuilding.'
	},
	{
		id: 'psicologia',
		icon: Brain,
		title: 'Psicologia del Bodybuilding',
		description: 'Aspetti psicologici, motivazione e mentalità vincente nell\'allenamento.'
	},
	{
		id: 'biomeccanica',
		icon: Trophy,
		title: 'Biomeccanica Applicata',
		description: 'Principi avanzati di biomeccanica per ottimizzare l\'efficacia dell\'allenamento.'
	}
];

export default function CorsoBodybuildingPage() {
	return (
		<div className="text-neutral-100 min-h-screen font-sans">
			{/* Hero Section */}
			<section className="max-w-4xl mx-auto px-4 pt-32 pb-20 text-center">
				<div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 mb-6">
					<Trophy size={16} className="text-[var(--primary)]" />
					<span className="text-[var(--primary)] text-sm font-medium">Corso Professionale</span>
				</div>
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
					Corso Completo di{" "}
					<span className="text-[var(--primary)]">Bodybuilding</span>
				</h1>
				<p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
					Il corso più completo per diventare un esperto di bodybuilding. 
					10 moduli specializzati, risorse pratiche con esempi e materiale scaricabile.
				</p>
				
				{/* Stats rapide */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto mb-8">
					<div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800">
						<div className="text-2xl font-bold text-[var(--primary)] mb-1">10</div>
						<div className="text-xs text-neutral-400">Moduli</div>
					</div>
					<div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800">
						<div className="text-2xl font-bold text-[var(--primary)] mb-1">25+</div>
						<div className="text-xs text-neutral-400">Ore</div>
					</div>
					<div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800">
						<div className="text-2xl font-bold text-[var(--primary)] mb-1">∞</div>
						<div className="text-xs text-neutral-400">Accesso</div>
					</div>
				</div>
				
				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
					<LiquidGlassButton href="#acquista" variant="primary" className="text-lg px-8 py-4">
						Acquista Ora - 79€
					</LiquidGlassButton>
					<LiquidGlassButton href="#dettagli" variant="secondary" className="text-lg px-8 py-4">
						Scopri i Moduli
					</LiquidGlassButton>
				</div>
			</section>

			{/* Programma del Corso - Sezione unificata */}
			<section id="dettagli" className="max-w-6xl mx-auto px-4 py-20">
				<div className="text-center mb-12">
					<h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Programma del Corso</h2>
					<p className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto mb-8">
						Un percorso strutturato che ti guiderà passo dopo passo verso l'eccellenza nel bodybuilding
					</p>
					
					{/* Cosa ottieni integrato */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
						{[
							{ icon: BookOpen, title: "10 Moduli", desc: "Contenuti specializzati" },
							{ icon: FileText, title: "PDF Completi", desc: "Materiale scaricabile" },
							{ icon: Download, title: "Accesso Immediato", desc: "Download istantaneo" },
							{ icon: Star, title: "Accesso a Vita", desc: "Paga una volta, tuo per sempre" }
						].map((item, index) => {
							const IconComponent = item.icon;
							return (
								<div key={index} className="bg-neutral-900 rounded-xl p-4 border border-neutral-800 text-center">
									<div className="bg-[var(--primary)]/10 rounded-lg w-10 h-10 flex items-center justify-center mx-auto mb-2">
										<IconComponent className="text-[var(--primary)]" size={20} />
									</div>
									<h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
									<p className="text-neutral-400 text-xs">{item.desc}</p>
								</div>
							);
						})}
					</div>
				</div>
				
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{courseModules.map((module, index) => {
						const IconComponent = module.icon;
						return (
							<div key={module.id} className="group bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-[var(--primary)]/30 transition-all duration-300">
								<div className="flex items-start gap-4">
									<div className="bg-[var(--primary)]/10 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors">
										<IconComponent className="text-[var(--primary)]" size={24} />
									</div>
									<div className="flex-1">
										<div className="flex items-center gap-2 mb-2">
											<span className="text-xs text-[var(--primary)] font-medium bg-[var(--primary)]/10 px-2 py-1 rounded-full">
												Modulo {index + 1}
											</span>
										</div>
										<h3 className="text-white font-semibold mb-2">{module.title}</h3>
										<p className="text-neutral-400 text-sm leading-relaxed">{module.description}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			{/* CTA Final */}
			<section id="acquista" className="max-w-4xl mx-auto px-4 py-20 text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
					Diventa un Esperto di Bodybuilding
				</h2>
				<p className="text-lg md:text-xl text-neutral-300 mb-12">
					Accedi oggi stesso al corso più completo mai creato in italiano sul bodybuilding. 
					La tua formazione professionale inizia qui.
				</p>
				
				<div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 inline-block mb-8">
					<div className="text-center">
						<p className="text-neutral-400 mb-2">Corso Completo - 10 Moduli Specializzati</p>
						<div className="flex items-center justify-center gap-4 mb-4">
							<span className="text-neutral-500 line-through text-2xl">149€</span>
							<span className="text-[var(--primary)] text-4xl font-bold">79€</span>
						</div>
						<p className="text-sm text-neutral-400 mb-6">Offerta di lancio - Risparmia 70€</p>
						
						<LiquidGlassButton 
							href="https://forms.gle/corso-bodybuilding-completo" 
							target="_blank" 
							variant="primary"
							className="text-lg px-12 py-4 mb-4"
						>
							Accedi al Corso
						</LiquidGlassButton>
						
						<div className="flex items-center justify-center gap-4 text-sm text-neutral-400 mt-4">
							<div className="flex items-center gap-1">
								<FileText size={16} />
								<span>Accesso immediato</span>
							</div>
							<div className="flex items-center gap-1">
								<Download size={16} />
								<span>Download completo</span>
							</div>
							<div className="flex items-center gap-1">
								<Star size={16} />
								<span>Accesso a vita</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}