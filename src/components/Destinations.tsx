import { useNavigate } from 'react-router-dom';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { slugify } from '../lib/utils';

interface Destination {
  name: string;
  location: string;
  image: string;
  rating: number;
  price: string;
  description: string;
}

const destinations: Destination[] = [
  {
    name: 'Maldives',
    location: 'Indian Ocean',
    image: 'https://images.unsplash.com/photo-1531386450450-969f935bd522?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMG9jZWFufGVufDB8fHx0ZWFsfDE3NjEwNDI0MDB8MA&ixlib=rb-4.1.0&q=85',
    rating: 4.9,
    price: 'From ₹2,07,400',
    description: 'Crystal-clear turquoise waters and pristine white sand beaches'
  },
  {
    name: 'Bahamas',
    location: 'Caribbean Sea',
    image: 'https://images.unsplash.com/photo-1662460873952-78a8211ccecc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHw0fHxiZWFjaCUyMGRlc3RpbmF0aW9ufGVufDB8fHxibHVlfDE3NjEwNDIzOTV8MA&ixlib=rb-4.1.0&q=85',
    rating: 4.8,
    price: 'From ₹1,57,600',
    description: 'Paradise hammocks between swaying palms with azure ocean views'
  },
  {
    name: 'Emerald Shores',
    location: 'Destin, Florida',
    image: 'https://images.unsplash.com/photo-1647797013933-c53ac86cb997?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxiZWFjaCUyMGRlc3RpbmF0aW9ufGVufDB8fHxibHVlfDE3NjEwNDIzOTV8MA&ixlib=rb-4.1.0&q=85',
    rating: 4.7,
    price: 'From ₹1,07,800',
    description: 'Luxury beachfront resort with emerald-green waters'
  },
  {
    name: 'Raja Ampat',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1650509010045-70888b02ffa8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHx0cm9waWNhbCUyMG9jZWFufGVufDB8fHx0ZWFsfDE3NjEwNDI0MDB8MA&ixlib=rb-4.1.0&q=85',
    rating: 5.0,
    price: 'From ₹2,32,300',
    description: 'Untouched tropical islands with vibrant marine life'
  },
  {
    name: 'Tropical Paradise',
    location: 'Caribbean Islands',
    image: 'https://images.unsplash.com/photo-1579034888257-3ed9df835cf4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGRlc3RpbmF0aW9ufGVufDB8fHxibHVlfDE3NjEwNDIzOTV8MA&ixlib=rb-4.1.0&q=85',
    rating: 4.9,
    price: 'From ₹1,41,000',
    description: 'Palm-lined beaches perfect for relaxation and adventure'
  },
  {
    name: 'Sandy Shores',
    location: 'Pacific Coast',
    image: 'https://images.unsplash.com/photo-1604348557271-2185f9825a00?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxiZWFjaCUyMGRlc3RpbmF0aW9ufGVufDB8fHxibHVlfDE3NjEwNDIzOTV8MA&ixlib=rb-4.1.0&q=85',
    rating: 4.6,
    price: 'From ₹82,900',
    description: 'Serene coastal escape with golden sands and gentle waves'
  }
];

const Destinations: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="destinations" className="py-32 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full text-teal-700 text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            <span>Popular Destinations</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-light text-slate-800" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Where Will You Go?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: "'Manrope', sans-serif" }}>
            Explore our handpicked collection of the world's most stunning coastal destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-semibold text-slate-700">{destination.rating}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
                    {destination.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-teal-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm" style={{ fontFamily: "'Manrope', sans-serif" }}>{destination.location}</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  {destination.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xl font-bold text-teal-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    {destination.price}
                  </span>
                  <button
                    onClick={() => navigate(`/destinations/${slugify(destination.name)}`)}
                    className="flex items-center gap-2 text-teal-600 font-semibold hover:gap-3 transition-all"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/destinations')}
            className="px-10 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
