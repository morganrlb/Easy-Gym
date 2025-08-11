import Link from "next/link";
import {
  FaDumbbell,
  FaUtensils,
  FaBed,
  FaRedo,
  FaChartLine,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function TipsPage() {
  return (
    <div className="bg-dark text-light min-h-screen font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/60 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-2xl">
              <FaDumbbell className="text-orange-500 text-3xl" />
              Easy <span className="text-orange-500">Gym</span>
            </Link>
            <div className="flex gap-6 text-gray-300 font-medium">
              <Link href="/">Home</Link>
              <Link href="/#services">Pacchetti</Link>
              <Link href="/tips">Consigli</Link>
              <Link href="/#schedule">Contattami</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        <section id="tips" className="container mx-auto px-5">
          <div className="section-title advice text-center mt-12">
            <h2 className="text-3xl font-bold mb-2 text-white">Consigli sul Bodybuilding</h2>
            <p className="text-lightgray max-w-xl mx-auto">
              Scopri gli errori più comuni che molti principianti (e non solo) commettono e come evitarli per ottenere risultati reali.
            </p>
          </div>
          <div className="tips-list grid gap-8 mt-10">
            <div className="tip">
              <h3 className="flex items-center gap-2 text-primary text-lg font-semibold mb-2">
                <FaDumbbell /> Errore #1: Allenarsi senza un piano
              </h3>
              <p className="text-lightgray">
                Molti iniziano in palestra senza una direzione chiara. Una scheda strutturata e progressiva è fondamentale per ottenere risultati nel tempo.
              </p>
            </div>
            <div className="tip">
              <h3 className="flex items-center gap-2 text-primary text-lg font-semibold mb-2">
                <FaUtensils /> Errore #2: Sottovalutare l'alimentazione
              </h3>
              <p className="text-lightgray">
                L’allenamento è solo metà dell’equazione. Senza un’alimentazione adeguata ai tuoi obiettivi (massa o definizione), limiterai i tuoi progressi.
              </p>
            </div>
            <div className="tip">
              <h3 className="flex items-center gap-2 text-primary text-lg font-semibold mb-2">
                <FaBed /> Errore #3: Non dormire abbastanza
              </h3>
              <p className="text-lightgray">
                Il recupero è fondamentale. Dormire almeno 7-8 ore a notte migliora la crescita muscolare, il focus e la performance in palestra.
              </p>
            </div>
            <div className="tip">
              <h3 className="flex items-center gap-2 text-primary text-lg font-semibold mb-2">
                <FaRedo /> Errore #4: Fare sempre gli stessi esercizi
              </h3>
              <p className="text-lightgray">
                Il corpo si adatta rapidamente. Alternare esercizi, schede e stimoli evita stalli e favorisce una crescita continua.
              </p>
            </div>
            <div className="tip">
              <h3 className="flex items-center gap-2 text-primary text-lg font-semibold mb-2">
                <FaChartLine /> Errore #5: Non monitorare i progressi
              </h3>
              <p className="text-lightgray">
                Registrare pesi, ripetizioni e misure ti permette di capire se stai migliorando o se devi modificare qualcosa nel tuo approccio.
              </p>
            </div>
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

      {/* Footer */}
      <footer className="bg-black text-white mt-20 py-12">
        <div className="max-w-5xl mx-auto px-4 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-bold text-lg mb-2">Easy <span className="text-orange-500">Gym</span></h3>
            <p className="text-gray-400 mb-4">
              Servizi di coaching professionale per aiutarti a raggiungere il tuo pieno potenziale in palestra.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="https://www.instagram.com/_morganrealbuto_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gray-900 border border-gray-800 rounded-full p-2 hover:bg-orange-500 hover:text-black transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@_morganrealbuto_" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="bg-gray-900 border border-gray-800 rounded-full p-2 hover:bg-orange-500 hover:text-black transition">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Link Utili</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
              <li><Link href="/#services" className="hover:text-orange-500">Pacchetti</Link></li>
              <li><Link href="/#schedule" className="hover:text-orange-500">Contattami</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Servizi</h3>
            <ul className="space-y-2">
              <li><Link href="/tips" className="hover:text-orange-500">Consigli</Link></li>
              <li><Link href="#" className="hover:text-orange-500">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Contatti</h3>
            <p className="text-gray-400">Torino</p>
            <p>
              <a href="mailto:morganrealbuto@gmail.com" className="hover:text-orange-500">morganrealbuto@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          &copy; 2025 Easy Gym. Tutti i diritti riservati.
        </div>
      </footer>
    </div>
  );
}