import Link from 'next/link';
import { Instagram, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20 py-12">
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-bold text-lg mb-2 text-white">
            Easy <span className="text-[var(--primary)]">Gym</span>
          </h3>
          <p className="text-neutral-400 mb-4">
            Servizi di coaching professionale per aiutarti a raggiungere il tuo
            pieno potenziale in palestra.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="https://www.instagram.com/_morganrealbuto_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-neutral-900 border border-neutral-800 rounded-full p-2 hover:bg-[var(--primary)] hover:text-black transition"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@_morganrealbuto_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="bg-neutral-900 border border-neutral-800 rounded-full p-2 hover:bg-[var(--primary)] hover:text-black transition"
            >
              <Music size={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2 text-white">Link Utili</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-neutral-400 hover:text-[var(--primary)] transition">
                Home
              </Link>
            </li>
            <li>
              <a
                href="/#services"
                className="text-neutral-400 hover:text-[var(--primary)] transition"
              >
                Pacchetti
              </a>
            </li>
            <li>
              <a
                href="/#schedule"
                className="text-neutral-400 hover:text-[var(--primary)] transition"
              >
                Contattami
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2 text-white">Servizi</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/tips"
                className="text-neutral-400 hover:text-[var(--primary)] transition"
              >
                Consigli
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-neutral-400 hover:text-[var(--primary)] transition"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2 text-white">Contatti</h3>
          <p className="text-neutral-400">Torino</p>
          <p>
            <a
              href="mailto:morganrealbuto@gmail.com"
              className="text-neutral-400 hover:text-[var(--primary)] transition"
            >
              morganrealbuto@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-neutral-800 mt-10 pt-6 text-center text-neutral-400">
        <p>&copy; 2025 Easy Gym. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}
