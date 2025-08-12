import Link from "next/link";
import { LiquidGlassButton } from "../../components/ui/liquid-glass-button";
import { Dumbbell, Utensils, Bed, RotateCcw, TrendingUp } from "lucide-react";

const tips = [
	{
		id: "piano",
		icon: Dumbbell,
		title: "Errore #1: Allenarsi senza un piano",
		description:
			"Molti iniziano in palestra senza una direzione chiara. Una scheda strutturata e progressiva è fondamentale per ottenere risultati nel tempo.",
	},
	{
		id: "alimentazione",
		icon: Utensils,
		title: "Errore #2: Sottovalutare l'alimentazione",
		description:
			"L'allenamento è solo metà dell'equazione. Senza un'alimentazione adeguata ai tuoi obiettivi (massa o definizione), limiterai i tuoi progressi.",
	},
	{
		id: "sonno",
		icon: Bed,
		title: "Errore #3: Non dormire abbastanza",
		description:
			"Il recupero è fondamentale. Dormire almeno 7-8 ore a notte migliora la crescita muscolare, il focus e la performance in palestra.",
	},
	{
		id: "varieta",
		icon: RotateCcw,
		title: "Errore #4: Fare sempre gli stessi esercizi",
		description:
			"Il corpo si adatta rapidamente. Alternare esercizi, schede e stimoli evita stalli e favorisce una crescita continua.",
	},
	{
		id: "monitoraggio",
		icon: TrendingUp,
		title: "Errore #5: Non monitorare i progressi",
		description:
			"Registrare pesi, ripetizioni e misure ti permette di capire se stai migliorando o se devi modificare qualcosa nel tuo approccio.",
	},
];

export default function TipsPage() {
	return (
		<div className="bg-black text-neutral-100 min-h-screen font-sans">

			{/* Hero Section */}
			<section className="hero bg-black mt-20 mb-10 text-center">
				<div className="max-w-3xl mx-auto px-4">
					<h1 className="text-4xl font-bold mb-6 text-white">
						Consigli sul Bodybuilding
					</h1>
					<p className="text-lg text-neutral-400 mb-8">
						Scopri gli errori più comuni che molti principianti (e non solo)
						commettono e come evitarli per ottenere risultati reali.
					</p>
				</div>
			</section>

			{/* Main Section */}
			<main className="max-w-3xl mx-auto px-4 py-10">
				<div className="grid gap-8">
					{tips.map((tip) => {
						const IconComponent = tip.icon;
						return (
							<div
								key={tip.id}
								className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 shadow"
							>
								<h3 className="flex items-center gap-2 text-[var(--primary)] text-lg font-semibold mb-2">
									<IconComponent /> {tip.title}
								</h3>
								<p className="text-neutral-300">{tip.description}</p>
							</div>
						);
					})}
				</div>

				{/* CTA Section */}
				<div className="bg-neutral-900 rounded-2xl border border-neutral-800 mt-16 p-10 text-center shadow">
					<h2 className="text-2xl font-bold mb-4 text-white">
						Vuoi una guida personalizzata per evitare questi errori?
					</h2>
					<p className="text-neutral-300 mb-6">
						Acquista una scheda adatta al tuo livello o prenota una consulenza
						con me per avere un piano su misura.
					</p>
					<LiquidGlassButton href="/#services" variant="primary">
						Scopri i Pacchetti
					</LiquidGlassButton>
				</div>
			</main>
		</div>
	);
}
