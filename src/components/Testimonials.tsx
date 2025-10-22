import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  trip: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    rating: 5,
    text: 'Our Maldives vacation was absolutely magical! Every detail was perfectly planned, from the overwater villa to the sunset cruises. Wanderlust made our dream honeymoon come true.',
    trip: 'Maldives Honeymoon Package'
  },
  {
    name: 'Michael Chen',
    location: 'San Francisco, USA',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'The attention to detail and personalized service exceeded all expectations. Our family trip to the Bahamas was stress-free and unforgettable. Highly recommend!',
    trip: 'Bahamas Family Adventure'
  },
  {
    name: 'Emma Rodriguez',
    location: 'Miami, USA',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    rating: 5,
    text: 'I have traveled with many agencies, but Wanderlust stands out. The curated experiences and local insights made our Indonesian adventure truly authentic and special.',
    trip: 'Raja Ampat Expedition'
  },
  {
    name: 'David Thompson',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    rating: 5,
    text: 'From booking to return, everything was seamless. The Caribbean cruise package was excellent value, and the customer service was outstanding throughout our journey.',
    trip: 'Caribbean Cruise Package'
  },
  {
    name: 'Lisa Anderson',
    location: 'Sydney, Australia',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    rating: 5,
    text: 'As a solo traveler, I felt safe and well-cared for. The guided tours were insightful, and I made wonderful memories. Thank you for an incredible experience!',
    trip: 'Solo Traveler Florida Getaway'
  },
  {
    name: 'James Wilson',
    location: 'Toronto, Canada',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    rating: 5,
    text: 'The best travel investment we have ever made. Every destination was breathtaking, and the accommodations were luxurious. We are already planning our next trip!',
    trip: 'Multi-Destination Island Hopping'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 px-6 bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full text-teal-700 text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-teal-700" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-slate-800" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Storie dei nostri viaggiatori
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Real stories from travelers who discovered paradise with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-2xl flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
                "{testimonial.text}"
              </p>

              <div className="text-sm text-teal-600 font-medium mb-6" style={{ fontFamily: "'Manrope', sans-serif" }}>
                {testimonial.trip}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-teal-100"
                />
                <div>
                  <div className="font-semibold text-slate-800" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-teal-600" style={{ fontFamily: "'Instrument Serif', serif" }}>
              4.9/5
            </div>
            <div className="text-sm text-slate-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Average Rating
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-teal-600" style={{ fontFamily: "'Instrument Serif', serif" }}>
              15K+
            </div>
            <div className="text-sm text-slate-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Reviews
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-teal-600" style={{ fontFamily: "'Instrument Serif', serif" }}>
              98%
            </div>
            <div className="text-sm text-slate-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Satisfaction Rate
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-teal-600" style={{ fontFamily: "'Instrument Serif', serif" }}>
              85%
            </div>
            <div className="text-sm text-slate-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Return Customers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
