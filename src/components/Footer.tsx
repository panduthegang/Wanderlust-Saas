import { Compass, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ['About Us', 'Our Team', 'Careers', 'Press'],
    Destinations: ['Europe', 'Asia', 'Americas', 'Africa', 'Oceania'],
    Support: ['Help Center', 'Safety', 'Cancellation', 'FAQs'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility']
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Compass className="w-10 h-10 text-cyan-400" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl"></div>
              </div>
              <span className="font-serif italic font-semibold text-3xl">Wanderlust</span>
            </div>
            <p className="text-slate-400 font-sans leading-relaxed mb-6 text-lg">
              Creating extraordinary travel experiences and unforgettable memories since 2010. Your journey begins here.
            </p>
            <div className="flex items-center gap-2 text-slate-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              <span>for travelers worldwide</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-lg mb-4 text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-cyan-400 transition-colors font-sans"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 font-sans text-center md:text-left">
              © {currentYear} Wanderlust Travels. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors font-sans">
                Privacy
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors font-sans">
                Terms
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors font-sans">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
