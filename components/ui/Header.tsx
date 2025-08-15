"use client";

import { FaDumbbell } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Evita problemi di idratazione
  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 backdrop-blur bg-black/80">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <a href="/" className="flex items-center gap-2 text-white font-bold text-xl md:text-2xl">
              <FaDumbbell className="text-[var(--primary)]" />
              Easy <span className="text-[var(--primary)]">Gym</span>
            </a>
            <div className="hidden md:flex nav-links gap-8 text-neutral-300 font-semibold *:hover:text-[var(--primary)] *:duration-200">
              <a href="/">Home</a>
              <a href="/#services">Schede</a>
              <a href="/corso-bodybuilding">Corso Bodybuilding</a>
              <a href="/tips">Consigli</a>
            </div>
            <button className="md:hidden text-white p-2 rounded-lg">
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/80">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 text-white font-bold text-xl md:text-2xl">
            <FaDumbbell className="text-[var(--primary)]" />
            Easy <span className="text-[var(--primary)]">Gym</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex nav-links gap-8 text-neutral-300 font-semibold *:hover:text-[var(--primary)] *:duration-200">
            <a href="/">Home</a>
            <a href="/#services">Schede</a>
            <a href="/corso-bodybuilding">Corso Bodybuilding</a>
            <a href="/tips">Consigli</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white p-2 rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="transition-transform duration-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-4">
            <div className="flex flex-col space-y-3 bg-neutral-900 rounded-xl p-4 border border-neutral-800 transform transition-transform duration-300">
              <a 
                href="/" 
                onClick={closeMenu}
                className="text-neutral-300 font-semibold py-3 px-2 rounded-lg hover:bg-neutral-800 hover:text-[var(--primary)] transition-all duration-200"
              >
                Home
              </a>
              <a 
                href="/#services" 
                onClick={closeMenu}
                className="text-neutral-300 font-semibold py-3 px-2 rounded-lg hover:bg-neutral-800 hover:text-[var(--primary)] transition-all duration-200"
              >
                Schede
              </a>
              <a 
                href="/corso-bodybuilding" 
                onClick={closeMenu}
                className="text-neutral-300 font-semibold py-3 px-2 rounded-lg hover:bg-neutral-800 hover:text-[var(--primary)] transition-all duration-200"
              >
                Corso Bodybuilding
              </a>
              <a 
                href="/tips" 
                onClick={closeMenu}
                className="text-neutral-300 font-semibold py-3 px-2 rounded-lg hover:bg-neutral-800 hover:text-[var(--primary)] transition-all duration-200"
              >
                Consigli
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
