import { Instagram } from 'lucide-react';
import { FaTiktok } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://www.instagram.com/_morganrealbuto_/",
    label: "Instagram",
    icon: Instagram
  },
  {
    href: "https://www.tiktok.com/@_morganrealbuto_",
    label: "TikTok", 
    icon: FaTiktok
  }
];

const usefulLinks = [
  { href: "/", label: "Home" },
  { href: "/corso-bodybuilding", label: "Corso Completo" },
  { href: "/#services", label: "Schede" },
  { href: "/tips", label: "Consigli" }
];

const services = [
  { href: "/#schedule", label: "Contattami" },
  { href: "/about", label: "About" }
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-black py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">
            Easy <span className="text-[var(--primary)]">Gym</span>
          </h3>
          <p className="mb-6 text-neutral-400">
            Servizi di coaching professionale per aiutarti a raggiungere il tuo
            pieno potenziale in palestra.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded-full border border-neutral-800 bg-neutral-900 p-2 transition hover:bg-[var(--primary)] hover:text-black transition-color duration-200"
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Link Utili</h3>
          <ul className="space-y-3">
            {usefulLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="text-neutral-400 transition hover:text-[var(--primary)] *:duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Servizi</h3>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.label}>
                <a
                  href={service.href}
                  className="text-neutral-400 transition hover:text-[var(--primary)] transition-color duration-200"
                >
                  {service.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Contatti</h3>
          <div className="space-y-2">
            <p className="text-neutral-400">Torino</p>
            <p>
              <a
                href="mailto:morganrealbuto@gmail.com"
                className="text-neutral-400 transition hover:text-[var(--primary)] transition-color duration-200"
              >
                morganrealbuto@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-neutral-800 pt-6 text-center text-neutral-400">
        <p>&copy; 2025 Easy Gym. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}
