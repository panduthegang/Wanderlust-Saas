import { MapPin, Star } from 'lucide-react';

const destinations = [
  {
    name: 'Maldives',
    location: 'Indian Ocean',
    image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.9,
    reviews: 2847,
    price: '$2,499',
    description: 'Pristine beaches and crystal-clear waters'
  },
  {
    name: 'Santorini',
    location: 'Greece',
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.8,
    reviews: 3521,
    price: '$1,899',
    description: 'Iconic white-washed villages and sunset views'
  },
  {
    name: 'Bali',
    location: 'Indonesia',
    image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.7,
    reviews: 4192,
    price: '$1,599',
    description: 'Tropical paradise with rich culture'
  },
  {
    name: 'Dubai',
    location: 'UAE',
    image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.9,
    reviews: 2963,
    price: '$2,199',
    description: 'Modern luxury meets Arabian heritage'
  },
  {
    name: 'Maui',
    location: 'Hawaii',
    image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.8,
    reviews: 3347,
    price: '$2,799',
    description: 'Volcanic landscapes and golden beaches'
  },
  {
    name: 'Amalfi Coast',
    location: 'Italy',
    image: 'https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg?auto=compress&cs=tinysrgb&w=1200',
    rating: 4.9,
    reviews: 2714,
    price: '$2,299',
    description: 'Dramatic cliffs and Mediterranean charm'
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 px-6 md:px-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl font-serif italic text-slate-800 mb-4">
            Popular <span className="text-cyan-600">Destinations</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-sans max-w-3xl mx-auto">
            Handpicked destinations that promise extraordinary experiences and lifelong memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-slate-800">{destination.rating}</span>
                  <span className="text-slate-500 text-sm">({destination.reviews})</span>
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{destination.location}</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-serif italic text-slate-800">{destination.name}</h3>
                  <span className="text-2xl font-bold text-cyan-600">{destination.price}</span>
                </div>

                <p className="text-slate-600 font-sans leading-relaxed">
                  {destination.description}
                </p>

                <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-slate-800 text-white font-bold text-lg rounded-full hover:bg-slate-700 hover:scale-105 transition-all duration-300 shadow-lg">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
