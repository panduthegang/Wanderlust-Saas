import { MapPin, Phone, Mail, Send, Compass, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-light" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Subscribe to Our Newsletter
              </h3>
              <p className="text-white/80 text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Get exclusive travel deals, destination guides, and inspiration delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal-400"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              />
              <button className="px-8 py-4 bg-teal-500 hover:bg-teal-600 rounded-full font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Compass className="w-8 h-8 text-teal-400" />
              <span className="text-2xl font-bold font-serif">Wanderlust</span>
            </div>
            <p className="text-white/70 leading-relaxed" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Your trusted partner in creating unforgettable travel experiences to the world's most beautiful destinations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal-500 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal-500 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal-500 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal-500 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-3" style={{ fontFamily: "'Manrope', sans-serif" }}>
              <li>
                <a href="#destinations" className="text-white/70 hover:text-teal-400 transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-teal-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-teal-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Support
            </h4>
            <ul className="space-y-3" style={{ fontFamily: "'Manrope', sans-serif" }}>
              <li>
                <a href="#" className="text-white/70 hover:text-teal-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal-400 transition-colors">
                  Booking Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal-400 transition-colors">
                  Cancellation Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Contact Us
            </h4>
            <ul className="space-y-4" style={{ fontFamily: "'Manrope', sans-serif" }}>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>123 Paradise Avenue, Miami Beach, FL 33139</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-teal-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:hello@wanderlust.com" className="hover:text-teal-400 transition-colors">
                  hello@wanderlust.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }}>
            © {currentYear} Wanderlust Travel Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm" style={{ fontFamily: "'Manrope', sans-serif" }}>
            <a href="#" className="text-white/60 hover:text-teal-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-teal-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/60 hover:text-teal-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
