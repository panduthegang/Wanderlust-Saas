import { Plane, Hotel, Ship, Compass, Camera, Utensils } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: Plane,
    title: 'Flight Bookings',
    description: 'Secure the best flight deals with our global airline partnerships and flexible scheduling options.',
    color: 'from-blue-400 to-cyan-400'
  },
  {
    icon: Hotel,
    title: 'Luxury Accommodations',
    description: 'Stay in handpicked resorts and hotels that offer unparalleled comfort and breathtaking ocean views.',
    color: 'from-teal-400 to-emerald-400'
  },
  {
    icon: Ship,
    title: 'Cruise Packages',
    description: 'Explore multiple destinations in style aboard premium cruise liners with all-inclusive amenities.',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Compass,
    title: 'Guided Tours',
    description: 'Expert local guides lead you through hidden gems and cultural experiences unique to each destination.',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    icon: Camera,
    title: 'Photo Expeditions',
    description: 'Capture stunning memories with professional photography tours to the most picturesque locations.',
    color: 'from-blue-500 to-indigo-400'
  },
  {
    icon: Utensils,
    title: 'Culinary Experiences',
    description: 'Savor authentic local cuisine with curated dining experiences and cooking classes.',
    color: 'from-teal-500 to-cyan-500'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-700 text-sm font-semibold mb-4">
            <Compass className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-slate-800" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Tutto per la tua vacanza
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Everything for your perfect vacation, curated with care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-100 hover:border-teal-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-slate-800 mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed" style={{ fontFamily: "'Manrope', sans-serif" }}>
                {service.description}
              </p>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 rounded-3xl p-12 text-center space-y-6">
          <h3 className="text-4xl md:text-5xl font-light text-slate-800" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Need a Custom Package?
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Our travel experts will create a personalized itinerary tailored to your dreams, preferences, and budget.
          </p>
          <button className="px-10 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Speak with an Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
