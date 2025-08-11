import Link from "next/link";
import {
  FaDumbbell,
  FaChartBar,
  FaBookOpen,
  FaUtensils,
  FaCheck,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function SchedaBasePage() {
  return (
    <div className="bg-black text-gray-100 min-h-screen font-sans">
      <header className="sticky top-0 z-50 bg-black/60 backdrop-blur">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-white flex items-center gap-2">
            <FaDumbbell className="text-orange-500" />
            Easy<span className="text-orange-500">Gym</span>
          </Link>
          <nav className="space-x-4">
            <Link href="/" className="text-white hover:text-orange-500 transition">Home</Link>
            <Link href="#services" className="text-white hover:text-orange-500 transition">Pacchetti</Link>
            <Link href="tips.html" className="text-white hover:text-orange-500 transition">Consigli</Link>
            <Link href="#schedule" className="text-white hover:text-orange-500 transition">Contattami</Link>
          </nav>
        </div>
      </header>

      <section className="hero bg-black py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-white">Scheda Base</h1>
          <p className="text-lg text-gray-400 mb-8">
            Inizia il tuo percorso nel bodybuilding con una scheda semplice ma efficace, pensata per chi muove i primi passi in palestra o vuole riprendere dopo una lunga pausa
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid gap-8 tips-list">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow">
            <h3 className="flex items-center gap-2 text-orange-500 text-lg font-semibold mb-2">
              <FaDumbbell /> Programma Completo
            </h3>
            <p className="text-gray-300">
              Un programma di allenamento strutturato e semplice, adattabile a tutti, con esercizi base fondamentali per costruire una solida base di forza e massa muscolare.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow">
            <h3 className="flex items-center gap-2 text-orange-500 text-lg font-semibold mb-2">
              <FaChartBar /> Progressione Graduale
            </h3>
            <p className="text-gray-300">
              Scheda semplice per aumentare gradualmente l'intensità degli allenamenti in modo sicuro ed efficace, sia per chi è alle prime armi che per chi ha già esperienza.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow">
            <h3 className="flex items-center gap-2 text-orange-500 text-lg font-semibold mb-2">
              <FaBookOpen /> Consigli Pratici
            </h3>
            <p className="text-gray-300">
              In aggiunta alla scheda riceverai anche dei PDF contenenti consigli pratici e spiegazioni sull'esecuzione degli esercizi.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow">
            <h3 className="flex items-center gap-2 text-orange-500 text-lg font-semibold mb-2">
              <FaUtensils /> Consigli sull'Alimentazione
            </h3>
            <p className="text-gray-300">
              PDF con consigli generali su come alimentarsi correttamente per supportare i tuoi obiettivi di bodybuilding, sia che tu voglia aumentare la massa muscolare o definire il fisico.
            </p>
          </div>
        </div>

        <div className="cta-section bg-gray-900 rounded-2xl border border-gray-800 mt-16 p-10 text-center shadow">
          <h2 className="text-2xl font-bold mb-4 text-white">Pronto per iniziare?</h2>
          <p className="text-gray-300 mb-4">La scheda base include:</p>
          <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
            <li className="flex items-center"><FaCheck className="text-orange-500 mr-2" />Programma di allenamento semplice completo</li>
            <li className="flex items-center"><FaCheck className="text-orange-500 mr-2" />Scheda semplice e strutturata per cominciare con il bodybuilding adattabile a tutti</li>
            <li className="flex items-center"><FaCheck className="text-orange-500 mr-2" />PDF con consigli e tecniche sull'esecuzione degli esercizi</li>
            <li className="flex items-center"><FaCheck className="text-orange-500 mr-2" />PDF con consigli generali sull'alimentazione</li>
          </ul>
          <p className="price text-white text-3xl font-bold mb-4">24€</p>
          <a href="https://forms.gle/your-base-form-link" target="_blank" className="primary-button bg-orange-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition inline-block">Compila il Modulo<sup>*</sup></a>
          <p className="text-gray-400 text-sm mt-4"><sup>*</sup> Nessun obbligo di pagamento immediato. Il pagamento verrà richiesto via email dopo la compilazione del modulo.</p>
        </div>
      </section>

      <footer id="contact" className="bg-black py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="footer-column">
              <h3 className="text-xl font-bold text-white mb-4">Easy <span className="text-orange-500">Gym</span></h3>
              <p className="text-gray-400 mb-4">Servizi di coaching professionale per aiutarti a raggiungere il tuo pieno potenziale in palestra.</p>
              <div className="social-links flex gap-4">
                <a href="https://www.instagram.com/_morganrealbuto_/" target="_blank" aria-label="Instagram" className="text-gray-400 hover:text-orange-500 transition"><FaInstagram className="h-6 w-6" /></a>
                <a href="https://www.tiktok.com/@_morganrealbuto_" target="_blank" aria-label="TikTok" className="text-gray-400 hover:text-orange-500 transition"><FaTiktok className="h-6 w-6" /></a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="text-lg font-semibold text-white mb-3">Link Utili</h3>
              <ul className="footer-links space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-orange-500 transition">Home</Link></li>
                <li><Link href="#services" className="text-gray-400 hover:text-orange-500 transition">Pacchetti</Link></li>
                <li><Link href="#schedule" className="text-gray-400 hover:text-orange-500 transition">Contattami</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="text-lg font-semibold text-white mb-3">Servizi</h3>
              <ul className="footer-links space-y-2">
                <li><Link href="tips.html" className="text-gray-400 hover:text-orange-500 transition">Consigli</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-orange-500 transition">About</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="text-lg font-semibold text-white mb-3">Contatti</h3>
              <p className="text-gray-400 mb-2">Torino</p>
              <p><a href="mailto:morganrealbuto@gmail.com" className="text-gray-400 hover:text-orange-500 transition">morganrealbuto@gmail.com</a></p>
            </div>
          </div>

          <div className="bottom-bar mt-10 border-t border-gray-800 pt-4 text-center">
            <p className="text-gray-400 text-sm">&copy; 2025 Easy Gym. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}