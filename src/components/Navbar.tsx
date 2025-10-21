import { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'w-[95%] md:w-[80%] bg-white/95 backdrop-blur-xl shadow-2xl'
          : 'w-[90%] md:w-[85%] bg-white/80 backdrop-blur-md shadow-lg'
      } rounded-full px-6 md:px-8 py-4 md:py-5`}
    >
      <div className="flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <Compass className={`transition-all duration-300 ${scrolled ? 'w-7 h-7' : 'w-8 h-8'} text-cyan-600 group-hover:rotate-180`} />
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl group-hover:bg-cyan-400/40 transition-all"></div>
          </div>
          <span className={`font-serif italic font-semibold transition-all duration-300 ${scrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} text-slate-800`}>
            Wanderlust
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-2.5 text-slate-700 hover:text-cyan-600 font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-3/4 transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-cyan-600 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden mt-6 pt-6 border-t border-slate-200 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-slate-700 hover:text-cyan-600 hover:bg-cyan-50 rounded-full font-medium transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-center font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
