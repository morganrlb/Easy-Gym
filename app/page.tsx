import Link from "next/link";
import { FaDumbbell, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-dark text-light min-h-screen font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-dark/40 backdrop-blur">
        <div className="container mx-auto px-5">
          <nav className="navbar flex justify-between items-center py-5">
            <Link
              href="/"
              className="logo flex items-center gap-2 text-white font-bold text-2xl"
            >
              <FaDumbbell className="text-primary text-3xl" />
              Easy <span className="text-primary">Gym</span>
            </Link>
            <div className="nav-links flex gap-8 text-lightgray font-medium">
              <Link href="/">Home</Link>
              <a href="#services">Pacchetti</a>
              <Link href="/tips">Consigli</Link>
              <a href="#schedule">Contattami</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero bg-dark text-white py-24 text-center mb-16">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            La Tua Guida al Bodybuilding
          </h1>
          <p className="text-xl text-lightgray mb-8 max-w-2xl mx-auto">
            Benvenuto sul mio sito! Sono Morgan, un bodybuilder professionista. Su
            questo sito potrai acquistare le mie schede di allenamento oppure
            richiedere una consulenza personalizzata con me. Avrai la possibilità
            di ricevere una scheda su misura, che potrà essere adattata e
            aggiornata nel tempo in base ai tuoi progressi.
          </p>
          <div className="hero-buttons flex gap-5 justify-center">
            <a
              href="#services"
              className="primary-button bg-primary text-dark px-8 py-4"
            >
              Vedi i pacchetti
            </a>
            <a
              href="#schedule"
              className="secondary-button border-2 border-primary text-primary px-8 py-4"
            >
              Contattami
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-white">
            I Miei Servizi di Coaching
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Scegli tra una gamma di pacchetti pensati per aiutarti a progredire
            nel mondo del bodybuilding, che tu sia un neofita o che abbia già
            esperienza in palestra.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="service-card bg-gray-900 rounded-2xl overflow-hidden shadow border border-gray-800">
            <div
              className="service-img h-52 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/image1.webp')",
              }}
            />
            <div className="service-content p-6">
              <h3 className="text-white font-bold text-xl mb-2">Scheda Base</h3>
              <p className="text-gray-400 mb-4">
                Scheda base pensata per chi inizia con il bodybuilding o desidera
                un programma semplice ed efficace. Perfetta per costruire una
                solida base, migliorare la forma fisica e acquisire conoscenza
                degli esercizi.
              </p>
              <span className="price text-orange-500 font-bold text-2xl mb-4 block">
                24€
              </span>
              <Link
                href="/scheda-base"
                className="book-button bg-gray-800 text-white rounded-lg py-2 px-4 hover:bg-orange-500 hover:text-black transition block text-center font-medium"
              >
                Scopri di più
              </Link>
            </div>
          </div>
          <div className="service-card bg-gray-900 rounded-2xl overflow-hidden shadow border border-gray-800">
            <div
              className="service-img h-52 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/image2.webp')",
              }}
            />
            <div className="service-content p-6">
              <h3 className="text-white font-bold text-xl mb-2">
                Scheda Personalizzata
              </h3>
              <p className="text-gray-400 mb-4">
                Scheda di allenamento personalizzata creata su misura in base ai
                tuoi obiettivi, livello e caratteristiche fisiche. Adatta a ogni
                esigenza: dimagrimento, massa muscolare o ricomposizione corporea.
              </p>
              <span className="price text-orange-500 font-bold text-2xl mb-4 block">
                35€
              </span>
              <Link
                href="/scheda-personalizzata"
                className="book-button bg-gray-800 text-white rounded-lg py-2 px-4 hover:bg-orange-500 hover:text-black transition block text-center font-medium"
              >
                Scopri di più
              </Link>
            </div>
          </div>
          <div className="service-card bg-gray-900 rounded-2xl overflow-hidden shadow border border-gray-800">
            <div
              className="service-img h-52 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/image3.webp')",
              }}
            />
            <div className="service-content p-6">
              <h3 className="text-white font-bold text-xl mb-2">
                Scheda + Servizio Personalizzato
              </h3>
              <p className="text-gray-400 mb-4">
                Pacchetto completo di 4 settimane con scheda personalizzata e
                supporto diretto. Verrai seguito da me con la possibilità di
                modificare la scheda nel tempo e contattarmi per consigli o
                adattamenti.
              </p>
              <span className="price text-orange-500 font-bold text-2xl mb-4 block">
                49€
              </span>
              <Link
                href="/servizio-personalizzato"
                className="book-button bg-gray-800 text-white rounded-lg py-2 px-4 hover:bg-orange-500 hover:text-black transition block text-center font-medium"
              >
                Scopri di più
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="schedule" className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2 text-white">Contattami</h2>
          <p className="text-gray-400 mb-6">
            Compila il form sottostante per ricevere maggiori informazioni o
            chiarimenti sui servizi offerti.
          </p>
        </div>
        <form
          action="https://formspree.io/f/mgvzngjl"
          method="POST"
          className="bg-gray-900 rounded-2xl p-8 border border-gray-800"
        >
          <div className="mb-4">
            <input
              type="text"
              name="Nome e cognome"
              placeholder="Nome e cognome"
              required
              className="w-full p-4 rounded-lg bg-gray-800 text-white mb-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="Email"
              placeholder="user@example.com"
              required
              className="w-full p-4 rounded-lg bg-gray-800 text-white mb-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="Messaggio"
              placeholder="Il tuo messaggio"
              required
              className="w-full p-4 rounded-lg bg-gray-800 text-white mb-2 focus:outline-none focus:ring-2 focus:ring-orange-500 h-32 resize-vertical"
            />
          </div>
          <button
            type="submit"
            className="submit-button w-full py-4 bg-orange-500 text-black rounded-lg font-bold hover:bg-orange-600 transition"
          >
            Invia Messaggio
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white mt-20 py-12">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-bold text-lg mb-2">
              Easy{" "}
              <span className="text-orange-500">Gym</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Servizi di coaching professionale per aiutarti a raggiungere il tuo
              pieno potenziale in palestra.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.instagram.com/_morganrealbuto_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-gray-900 border border-gray-800 rounded-full p-2 hover:bg-orange-500 hover:text-black transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@_morganrealbuto_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="bg-gray-900 border border-gray-800 rounded-full p-2 hover:bg-orange-500 hover:text-black transition"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Link Utili</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-orange-500"
                >
                  Pacchetti
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="hover:text-orange-500"
                >
                  Contattami
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Servizi</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tips"
                  className="hover:text-orange-500"
                >
                  Consigli
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-500"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Contatti</h3>
            <p className="text-gray-400">Torino</p>
            <p>
              <a
                href="mailto:morganrealbuto@gmail.com"
                className="hover:text-orange-500"
              >
                morganrealbuto@gmail.com
              </a>
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
