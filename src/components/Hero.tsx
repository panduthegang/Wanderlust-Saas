import WarpShaderHero from './ui/warp-shader';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <WarpShaderHero />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-6xl w-full text-center space-y-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-white/90 text-sm font-medium animate-fade-in">
            <MapPin className="w-4 h-4" />
            <span>Discover Paradise Worldwide</span>
          </div>

          <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight leading-none animate-slide-up" style={{ fontFamily: "'Instrument Serif', serif" }}>
            La Dolce Vita
          </h1>

          <h2 className="text-white text-3xl md:text-5xl font-light leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Experience the <span className="italic">sweet life</span> of endless ocean horizons
          </h2>

          <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Embark on unforgettable journeys to the world's most breathtaking coastal destinations.
            Where azure waters meet golden sands, your dream vacation awaits.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6">
            <a
              href="#destinations"
              className="group px-10 py-5 bg-white rounded-full text-slate-800 font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Explore Destinations
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              View Services
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                150+
              </div>
              <div className="text-white/80 text-sm md:text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Destinations
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                50K+
              </div>
              <div className="text-white/80 text-sm md:text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Happy Travelers
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                25
              </div>
              <div className="text-white/80 text-sm md:text-base" style={{ fontFamily: "'Manrope', sans-serif" }}>
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
