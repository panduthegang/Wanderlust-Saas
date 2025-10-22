import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Compass, Menu, X } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Destinations', href: isHomePage ? '#destinations' : '/destinations', isRoute: !isHomePage },
    { name: 'Services', href: '/#services', isRoute: false },
    { name: 'Testimonials', href: '/#testimonials', isRoute: false },
    { name: 'Contact', href: '/#contact', isRoute: false },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.isRoute) {
      e.preventDefault();
      navigate(link.href);
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'w-[96%] sm:w-[95%] md:w-[90%] lg:w-[80%] bg-white/95 backdrop-blur-xl shadow-2xl'
            : 'w-[96%] sm:w-[92%] md:w-[88%] lg:w-[85%] bg-white/80 backdrop-blur-md shadow-lg'
        } rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-5`}
      >
        <div className="flex items-center justify-between gap-2">
          <button onClick={() => navigate('/')} className="flex items-center gap-1.5 sm:gap-2 md:gap-3 group flex-shrink-0">
            <div className="relative">
              <Compass className={`transition-all duration-300 ${scrolled ? 'w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7' : 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8'} text-cyan-600 group-hover:rotate-180`} />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl group-hover:bg-cyan-400/40 transition-all"></div>
            </div>
            <span className={`font-serif italic font-semibold transition-all duration-300 whitespace-nowrap ${scrolled ? 'text-base sm:text-lg md:text-xl lg:text-2xl' : 'text-lg sm:text-xl md:text-2xl lg:text-3xl'} text-slate-800`}>
              Wanderlust
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="px-4 xl:px-6 py-2.5 text-slate-700 hover:text-cyan-600 font-medium transition-all duration-300 hover:scale-105 relative group whitespace-nowrap"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:block flex-shrink-0">
            <a
              href="#contact"
              className="px-4 xl:px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm xl:text-base"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-slate-700 hover:text-cyan-600 transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 z-50 transform transition-transform duration-500 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="relative h-full flex flex-col">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.2) 0%, transparent 50%)'
          }}></div>

          <div className="relative flex items-center justify-between p-6 pt-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Compass className="w-8 h-8 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 bg-cyan-400/40 rounded-full blur-xl"></div>
              </div>
              <span className="text-2xl font-serif italic font-semibold text-white">
                Wanderlust
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex-1 flex flex-col justify-center px-6 py-8 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="group relative block px-8 py-5 text-white font-semibold text-xl rounded-[2rem] overflow-hidden transition-all duration-500 transform hover:scale-105"
                style={{
                  animationDelay: `${index * 80}ms`,
                  animation: mobileMenuOpen ? 'slideInRight 0.5s ease-out forwards' : 'none',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 8px 32px 0 rgba(6, 182, 212, 0.2)'
                }}
              >
                <span className="relative z-10 flex items-center justify-between">
                  {link.name}
                  <span className="text-cyan-400 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.3), transparent 70%)'
                }}></div>
              </a>
            ))}
          </div>

          <div className="relative p-6 pb-8">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="group relative block w-full px-8 py-5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-center font-bold text-xl rounded-[2rem] overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              style={{
                boxShadow: '0 10px 40px rgba(6, 182, 212, 0.4)'
              }}
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 animate-pulse opacity-30">
                <div className="absolute inset-0 bg-white rounded-full blur-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500"></div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
