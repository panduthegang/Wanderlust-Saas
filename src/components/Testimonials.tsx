import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'New York, USA',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    text: 'Wanderlust made our honeymoon in Santorini absolutely magical. Every detail was perfectly planned, from the boutique hotel with stunning caldera views to the private sunset cruise. Highly recommend!',
    trip: 'Greece Honeymoon'
  },
  {
    name: 'James Chen',
    location: 'Singapore',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    text: 'The attention to detail and personalized service exceeded all expectations. Our Bali family vacation was stress-free and filled with incredible experiences. The kids are already asking when we can go back!',
    trip: 'Bali Family Adventure'
  },
  {
    name: 'Emma Rodriguez',
    location: 'Madrid, Spain',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    text: 'As a solo traveler, I felt completely safe and supported throughout my Maldives trip. The curated experiences and local connections made it unforgettable. Thank you for making my dream vacation a reality!',
    trip: 'Maldives Solo Trip'
  },
  {
    name: 'Michael Brown',
    location: 'London, UK',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    text: 'Professional, responsive, and genuinely caring about our experience. The Dubai itinerary was perfect - a great mix of luxury, adventure, and cultural immersion. Will definitely book again!',
    trip: 'Dubai Luxury Escape'
  },
  {
    name: 'Lisa Anderson',
    location: 'Toronto, Canada',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    text: 'The Amalfi Coast tour was beyond our wildest dreams. From the cooking classes to the private boat tours, every moment was extraordinary. Wanderlust truly understands luxury travel.',
    trip: 'Italian Coastal Journey'
  },
  {
    name: 'David Park',
    location: 'Seoul, Korea',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
    rating: 5,
    text: 'Exceptional service from start to finish. The team handled everything seamlessly, and their local partnerships meant we got exclusive access to amazing experiences. Worth every penny!',
    trip: 'Hawaiian Islands Tour'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-gradient-to-b from-white via-cyan-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl font-serif italic text-slate-800 mb-4">
            Traveler <span className="text-cyan-600">Stories</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-sans max-w-3xl mx-auto">
            Hear from adventurers who trusted us with their dream vacations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-20 h-20 text-cyan-500" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-cyan-100"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">{testimonial.name}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-600 font-sans leading-relaxed mb-4 text-base">
                  "{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-cyan-600 font-semibold text-sm italic">
                    {testimonial.trip}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-full px-10 py-6 shadow-xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600">4.9</div>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-12 w-px bg-slate-200"></div>
            <div className="text-left">
              <div className="text-2xl font-bold text-slate-800">10,000+</div>
              <div className="text-slate-600 font-sans">Happy Travelers</div>
            </div>
            <div className="h-12 w-px bg-slate-200"></div>
            <div className="text-left">
              <div className="text-2xl font-bold text-slate-800">200+</div>
              <div className="text-slate-600 font-sans">Destinations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
