import { FaDumbbell } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-black/30 backdrop-blur">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 text-white font-bold text-2xl">
            <FaDumbbell className="text-[var(--primary)]" />
            Easy <span className="text-[var(--primary)]">Gym</span>
          </a>
          <div className="nav-links flex gap-8 text-neutral-300 font-semibold *:hover:text-[var(--primary)] *:duration-200">
            <a href="/">Home</a>
            <a href="/#services">Pacchetti</a>
            <a href="/tips">Consigli</a>
            <a href="/#schedule">Contattami</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
