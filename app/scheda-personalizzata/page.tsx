import Link from "next/link";
import {
  FaClipboardCheck,
  FaDumbbell,
  FaChartLine,
  FaBookOpen,
  FaUtensils,
  FaCheck,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function SchedaPersonalizzataPage() {
  return (
    <div className="bg-black text-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header>
        <div className="container">
          <nav className="navbar">
            <Link href="/" className="logo">
              <i className="fas fa-dumbbell" style={{ marginRight: "8px" }}></i>
              Easy <span>Gym</span>
            </Link>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="#services">Pacchetti</Link>
              <Link href="tips.html">Consigli</Link>
              <Link href="#schedule">Contattami</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero bg-black py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-white">
            Scheda Personalizzata
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Ottieni un programma di allenamento su misura creato specificamente per
            te e i tuoi obiettivi. Che tu sia all’inizio del tuo percorso o già
            esperto in sala pesi, una scheda personalizzata ti permette di
            massimizzare i risultati rispettando le tue esigenze, i tuoi obiettivi
            e la tua disponibilità settimanale.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid gap-8 tips-list">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow">
            <h3 className="flex items-center gap-2 text-orange-500 text-lg font-semibold mb-2">
              <FaClipboardCheck /> Scheda Personalizzata
            </h3>
            <p className="text-gray-300">
              Ricevi una scheda di allenamento creata specificamente per te,
              considerando i tuoi obiettivi, livello di esperienza e disponibilità
              settimanale.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow">
            <h3 className="flex items-center gap-2 text-orange-500 text-lg font-semibold mb-2">
              <FaDumbbell /> Esercizi su misura
            </h3>
            <p className="text-gray-300">
              Esercizi scelti in base al tuo livello e attrezzatura disponibile,
              che tu ti alleni a casa o in palestra.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow">
            <h3 className="flex items-center gap-2 text-orange-500 text-lg font-semibold mb-2">
              <FaChartLine /> Progressione Graduale
            </h3>
            <p className="text-gray-300">
              Scheda creata apposta per aumentare gradualmente l'intensità degli
              allenamenti, la forza e la massa muscolare.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow">
            <h3 className="flex items-center gap-2 text-orange-500 text-lg font-semibold mb-2">
              <FaBookOpen /> Consigli pratici
            </h3>
            <p className="text-gray-300">
              In aggiunta alla scheda riceverai anche dei PDF contenenti consigli
              pratici e spiegazioni sull'esecuzione degli esercizi.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow">
            <h3 className="flex items-center gap-2 text-orange-500 text-lg font-semibold mb-2">
              <FaUtensils /> Consigli sull'Alimentazione
            </h3>
            <p className="text-gray-300">
              PDF con consigli generali su come alimentarsi correttamente per
              supportare i tuoi obiettivi di bodybuilding, sia che tu voglia
              aumentare la massa muscolare o definire il fisico.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section bg-gray-900 rounded-2xl border border-gray-800 mt-16 p-10 text-center shadow">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Pronto per iniziare?
          </h2>
          <p className="text-gray-300 mb-4">La scheda personalizzata include:</p>
          <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
            <li className="flex items-center">
              <FaCheck className="text-orange-500 mr-2" />
              Programma completo di allenamento settimanale
            </li>
            <li className="flex items-center">
              <FaCheck className="text-orange-500 mr-2" />
              Esercizi scelti in base al tuo livello e attrezzatura disponibile
              (casa o palestra)
            </li>
            <li className="flex items-center">
              <FaCheck className="text-orange-500 mr-2" />
              Consigli personalizzati per la progressione
            </li>
            <li className="flex items-center">
              <FaCheck className="text-orange-500 mr-2" />
              Supporto via email per domande e chiarimenti
            </li>
            <li className="flex items-center">
              <FaCheck className="text-orange-500 mr-2" />
              PDF con consigli e tecniche sull'esecuzione degli esercizi
            </li>
            <li className="flex items-center">
              <FaCheck className="text-orange-500 mr-2" />
              PDF con consigli generali sull'alimentazione
            </li>
          </ul>
          <p className="price text-white text-3xl font-bold mb-4">35€</p>
          <a
            href="https://forms.gle/fg74t4RAQsnmNyCGA"
            target="_blank"
            className="primary-button bg-orange-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition inline-block"
          >
            Compila il Modulo<sup>*</sup>
          </a>
          <p className="text-gray-400 text-sm mt-4">
            <sup>*</sup> Nessun obbligo di pagamento immediato. Il pagamento verrà
            richiesto via email dopo la compilazione del modulo.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>
                Easy <span>Gym</span>
              </h3>
              <p>
                Servizi di coaching professionale per aiutarti a raggiungere il
                tuo pieno potenziale in palestra.
              </p>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/_morganrealbuto_/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@_morganrealbuto_"
                  target="_blank"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Link Utili</h3>
              <ul className="footer-links">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="#services">Pacchetti</Link>
                </li>
                <li>
                  <Link href="#schedule">Contattami</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Servizi</h3>
              <ul className="footer-links">
                <li>
                  <Link href="tips.html">Consigli</Link>
                </li>
                <li>
                  <Link href="#">About</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Contatti</h3>
              <p>Torino</p>
              <p>
                {" "}
                <a href="mailto:morganrealbuto@gmail.com">
                  morganrealbuto@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="bottom-bar">
            <p>&copy; 2025 Easy Gym. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}