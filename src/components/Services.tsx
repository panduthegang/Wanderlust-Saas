import { Hotel, Plane, Camera, Shield, Utensils, Compass } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Best prices on international and domestic flights with flexible booking options',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Hotel,
    title: 'Hotel Reservations',
    description: 'Handpicked accommodations from luxury resorts to cozy boutique hotels',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Camera,
    title: 'Guided Tours',
    description: 'Expert local guides to help you discover hidden gems and cultural treasures',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage to protect your journey from unexpected events',
    color: 'from-cyan-600 to-teal-600'
  },
  {
    icon: Utensils,
    title: 'Culinary Experiences',
    description: 'Authentic food tours and cooking classes with local chefs',
    color: 'from-teal-500 to-emerald-500'
  },
  {
    icon: Compass,
    title: 'Custom Itineraries',
    description: 'Personalized travel plans tailored to your interests and preferences',
    color: 'from-cyan-500 to-teal-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl font-serif italic text-slate-800 mb-4">
            Our <span className="text-cyan-600">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-sans max-w-3xl mx-auto">
            Everything you need for a seamless and unforgettable travel experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-serif italic text-slate-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 font-sans leading-relaxed text-lg">
                  {service.description}
                </p>

                <div className="mt-6">
                  <button className="text-cyan-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Learn More
                    <span className="text-xl">→</span>
                  </button>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100/0 to-cyan-100/50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-500 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

          <div className="relative z-10 space-y-6">
            <h3 className="text-4xl md:text-5xl font-serif italic">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl md:text-2xl font-sans font-light max-w-2xl mx-auto">
              Let our travel experts create the perfect itinerary for your dream vacation
            </p>
            <button className="px-12 py-5 bg-white text-cyan-600 font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
