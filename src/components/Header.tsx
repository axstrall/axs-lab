import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servizi', label: 'Servizi' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#chi-siamo', label: 'Chi Siamo' },
    { href: '#contatti', label: 'Contatti' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/AXS_LAKE_DARKER_VISIBLE_TREES.png"
              alt="AXS LAB"
              className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors duration-300 ${
                  isScrolled
                    ? 'text-teal-900 hover:text-teal-600'
                    : 'text-white hover:text-teal-300'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contatti"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Richiedi Preventivo
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-teal-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-teal-900 hover:text-teal-600 font-semibold py-2 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contatti"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-300"
            >
              Richiedi Preventivo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
