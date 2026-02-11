import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Tratamentos', href: '#services' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-primary-600 text-white p-2 rounded-lg group-hover:bg-primary-700 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2C7.03 2 3 6.03 3 11v9c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9c0-4.97-4.03-9-9-9z" />
              <path d="M9 16c0 1.1.9 2 2 2s2-.9 2-2" />
            </svg>
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
            Lumina<span className="text-primary-500">Odonto</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-primary-500 transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all transform hover:-translate-y-0.5 ${
              isScrolled
                ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/30'
                : 'bg-white text-primary-600 hover:bg-gray-100'
            }`}
          >
            <Phone size={16} />
            Agendar Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-4 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 text-gray-700 font-medium border-b border-gray-50 last:border-0 hover:text-primary-600"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 w-full bg-primary-600 text-white py-3 rounded-xl font-bold text-center shadow-lg shadow-primary-500/20"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;