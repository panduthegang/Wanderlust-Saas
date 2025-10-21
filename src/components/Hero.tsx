import { Warp } from "@paper-design/shaders-react";
import { Plane, MapPin, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={0.6}
          colors={["hsl(195, 85%, 25%)", "hsl(180, 75%, 45%)", "hsl(170, 80%, 60%)", "hsl(190, 70%, 70%)"]}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-12 pt-28 pb-16">
        <div className="max-w-6xl w-full text-center space-y-12">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-serif italic font-light text-balance leading-tight tracking-tight">
              Discover Your
              <br />
              <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 bg-clip-text text-transparent">
                Next Adventure
              </span>
            </h1>

            <p className="text-white/90 text-xl md:text-2xl lg:text-3xl font-sans font-light leading-relaxed max-w-3xl mx-auto">
              Explore breathtaking destinations and create unforgettable memories with our curated travel experiences
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8">
            <a
              href="#destinations"
              className="group px-10 py-5 bg-white/95 backdrop-blur-sm rounded-full text-cyan-700 font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl flex items-center gap-3"
            >
              <Plane className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Explore Destinations
            </a>
            <a
              href="#contact"
              className="px-10 py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl flex items-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Plan Your Trip
            </a>
          </div>

          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-serif italic text-2xl mb-3">200+ Destinations</h3>
              <p className="text-white/80 font-sans">Handpicked locations across the globe</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-teal-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-serif italic text-2xl mb-3">10,000+ Travelers</h3>
              <p className="text-white/80 font-sans">Happy adventurers worldwide</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-serif italic text-2xl mb-3">24/7 Support</h3>
              <p className="text-white/80 font-sans">Always here for your journey</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
}
