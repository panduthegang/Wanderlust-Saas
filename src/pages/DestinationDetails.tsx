import { useMemo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { allDestinations } from '../data/destinations';
import { destinationDetails } from '../data/destinationDetails';
import { slugify, cn } from '../lib/utils';
import {
  ArrowLeft,
  MapPin,
  Star,
  Clock,
  Users,
  Check,
  X as XIcon,
  Plane,
  Hotel,
  Ship,
  Utensils,
  Camera,
  Quote,
} from 'lucide-react';
import { addDays, addMonths, format } from 'date-fns';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '../components/ui/carousel';

export default function DestinationDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const destination = useMemo(() => {
    return allDestinations.find((d) => slugify(d.name) === slug);
  }, [slug]);

  const details = useMemo(() => {
    if (!slug) return null;
    return destinationDetails[slug];
  }, [slug]);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="max-w-lg text-center space-y-6">
          <h1 className="text-3xl font-semibold text-slate-800">Destination not found</h1>
          <p className="text-slate-600">The experience you are looking for may have moved. Please return to the catalogue to explore our curated journeys.</p>
          <button
            onClick={() => navigate('/destinations')}
            className="px-6 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
          >
            Back to Destinations
          </button>
        </div>
      </div>
    );
  }

  const gallery = details?.gallery.gallery || [destination.image];

  const [embla, setEmbla] = useState<CarouselApi | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const updateSelected = () => setSelectedIndex(embla.selectedScrollSnap());
    updateSelected();
    embla.on('select', updateSelected);
    embla.on('reInit', updateSelected);
    return () => {
      embla.off('select', updateSelected);
      embla.off('reInit', updateSelected);
    };
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (!isHovering) embla.scrollNext();
      timer = setTimeout(tick, 4500);
    };
    timer = setTimeout(tick, 4500);
    return () => clearTimeout(timer);
  }, [embla, isHovering]);

  const base = destination.priceValue;
  const packages = [
    { name: 'Solo Explorer', people: 1, perks: ['Private transfers', 'Daily breakfast', 'Guided welcome walk'], price: Math.round(base * 1.0) },
    { name: 'Couple Retreat', people: 2, perks: ['Ocean-view upgrade', 'Romantic dinner', 'Late checkout'], price: Math.round(base * 1.8) },
    { name: 'Family Escape', people: 4, perks: ['Family suite', 'Kids activities', 'Airport assistance'], price: Math.round(base * 3.2) },
    { name: 'Friends Getaway', people: 6, perks: ['Villa stay', 'Private catamaran', 'Concierge service'], price: Math.round(base * 4.5) },
  ];

  const includedIcons = [Plane, Hotel, Utensils, Ship, Camera];
  const included = details?.included.map((item, idx) => ({
    icon: includedIcons[idx % includedIcons.length],
    label: item,
  })) || [
    { icon: Plane, label: 'Round-trip flights' },
    { icon: Hotel, label: 'Premium accommodation' },
    { icon: Utensils, label: 'Daily breakfast & two signature dinners' },
    { icon: Ship, label: 'Sunset cruise experience' },
    { icon: Camera, label: 'Professional photoshoot session' },
  ];

  const excluded = details?.excluded || [
    'Personal expenses & shopping',
    'Travel insurance (available on request)',
    'Optional excursions not listed in the itinerary',
    'Visa fees (if applicable)'
  ];

  const itinerary = details?.itinerary || [
    { day: 1, title: 'Arrival & Oceanside Welcome', desc: 'Private transfer to your resort. Unwind by the turquoise waters and enjoy a welcome dinner under the stars.' },
    { day: 2, title: 'Island Discovery', desc: 'Guided exploration of hidden coves and local markets, with time to relax at pristine beaches.' },
    { day: 3, title: 'Adventure & Marine Life', desc: 'Snorkel or dive in crystal-clear lagoons teeming with vibrant reefs and tropical fish.' },
    { day: 4, title: 'Leisure & Spa', desc: 'A day at leisure - optional spa rituals, private yacht charter, or culinary masterclass.' },
    { day: 5, title: 'Sunset Cruise & Fine Dining', desc: 'Sail at golden hour followed by a chef\'s tasting menu highlighting regional flavors.' },
    { day: 6, title: 'Departure', desc: 'Breakfast with a view and private transfer to the airport.' },
  ];

  const batches = Array.from({ length: 6 }).map((_, i) => {
    const date = addDays(addMonths(new Date(), i), 7);
    const seats = [6, 8, 10, 12][i % 4];
    return {
      id: i,
      date: format(date, 'EEE, dd MMM yyyy'),
      duration: '6 days - 5 nights',
      available: seats,
      status: seats > 0 ? 'Available' : 'Waitlist',
    } as const;
  });

  const priceFormatted = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(destination.priceValue);

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-3">
          <button onClick={() => navigate('/destinations')} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition">
            <ArrowLeft className="w-4 h-4" /> Back to Destinations
          </button>
          <div className="ml-auto flex items-center gap-3 text-slate-600">
            <MapPin className="w-4 h-4 text-teal-600" />
            <span className="text-sm">{destination.location}</span>
            <span className="inline-flex items-center gap-1 text-sm text-amber-600 ml-4">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {destination.rating}
            </span>
          </div>
        </div>
      </div>

      <section className="px-6 pt-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              <Carousel setApi={setEmbla} opts={{ align: 'start', loop: true }} className="relative">
                <CarouselContent>
                  {gallery.map((src, idx) => (
                    <CarouselItem key={idx} className="md:basis-3/4 lg:basis-full">
                      <div className="relative">
                        <img src={src} alt={`${destination.name} ${idx + 1}`} className="w-full h-[420px] md:h-[520px] object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                <h1 className="text-white text-4xl md:text-5xl font-light drop-shadow" style={{ fontFamily: '"Instrument Serif", serif' }}>{destination.name}</h1>
                <span className="px-3 py-1.5 rounded-full bg-white/90 text-slate-800 text-sm font-semibold border border-white">{destination.category}</span>
              </div>
            </div>
            <div className="mt-4 overflow-x-auto pb-2">
              <div className="flex items-center gap-3 min-w-max">
                {gallery.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => embla?.scrollTo(i)}
                    className={cn(
                      'relative rounded-xl overflow-hidden transition-all flex-shrink-0 aspect-[4/3]',
                      selectedIndex === i
                        ? 'ring-4 ring-teal-500 ring-offset-2'
                        : 'ring-2 ring-slate-200 hover:ring-teal-300'
                    )}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt={`${destination.name} thumbnail ${i + 1}`}
                      className="w-24 h-20 sm:w-28 sm:h-[84px] md:w-32 md:h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:h-full">
            <div className="sticky top-24 rounded-3xl border border-slate-200 shadow-xl p-6 bg-white">
              <div className="space-y-3">
                <div className="text-slate-500 text-sm">Starting from</div>
                <div className="text-3xl font-bold text-teal-700" style={{ fontFamily: 'Manrope, sans-serif' }}>{priceFormatted}</div>
                <div className="text-sm text-slate-500">per person, inclusive of taxes</div>
              </div>
              <button className="mt-6 w-full px-6 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold transition">Reserve Your Journey</button>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> Flexible rescheduling</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> 24/7 concierge support</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> Best price guarantee</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-6 py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-light text-slate-800" style={{ fontFamily: '"Instrument Serif", serif' }}>Overview</h2>
            <p className="text-lg leading-relaxed text-slate-700" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Crafted for discerning travelers, our {destination.name} experience blends effortless elegance with authentic discovery.
              Expect considered comforts, intimate encounters with nature, and moments designed to become your most treasured memories.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">What's Included</h3>
                <ul className="space-y-3">
                  {included.map((it, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <it.icon className="w-5 h-5 text-teal-600" /> {it.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-slate-800">What's Not Included</h3>
                <ul className="space-y-3">
                  {excluded.map((label, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <XIcon className="w-5 h-5 text-slate-400" /> {label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Signature Itinerary</h3>
              <ol className="relative border-l-2 border-teal-100 pl-6 space-y-6">
                {itinerary.map((d) => (
                  <li key={d.day} className="relative">
                    <span className="absolute -left-[1.6rem] top-1 w-2.5 h-2.5 rounded-full bg-teal-500" />
                    <div className="font-semibold text-slate-800">Day {d.day}: {d.title}</div>
                    <div className="text-slate-600">{d.desc}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-800">Upcoming Departures</h3>
            <div className="space-y-4">
              {batches.map((b) => (
                <div key={b.id} className="rounded-2xl border border-slate-200 bg-white p-4 flex items-center justify-between shadow-sm">
                  <div>
                    <div className="font-semibold text-slate-800">{b.date}</div>
                    <div className="text-sm text-slate-500 flex items-center gap-3 mt-1">
                      <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />{b.duration}</span>
                      <span className="inline-flex items-center gap-1"><Users className="w-4 h-4" />{b.available} seats</span>
                    </div>
                  </div>
                  <button className={cn('px-4 py-2 rounded-full text-sm font-semibold', b.available > 0 ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-slate-200 text-slate-600')}
                    disabled={b.available === 0}
                  >
                    {b.available > 0 ? 'Select' : 'Waitlist'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-10" style={{ fontFamily: '"Instrument Serif", serif' }}>Tailored Packages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((p, idx) => (
              <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl hover:shadow-2xl transition">
                <div className="text-sm text-slate-500">For up to {p.people} {p.people === 1 ? 'guest' : 'guests'}</div>
                <div className="text-xl font-semibold text-slate-800 mt-2">{p.name}</div>
                <div className="text-teal-700 text-2xl font-bold mt-4">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(p.price)}</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {p.perks.map((perk, i) => (
                    <li key={i} className="flex items-center gap-2"><Check className="w-4 h-4 text-teal-600" /> {perk}</li>
                  ))}
                </ul>
                <button className="mt-6 w-full px-5 py-3 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition">Enquire</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 bg-gradient-to-br from-teal-50 via-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-10" style={{ fontFamily: '"Instrument Serif", serif' }}>Guest Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {(details?.reviews || [
              {
                name: 'Aarav Mehta',
                origin: 'Mumbai, India',
                text: `Wanderlust transformed our experience into a seamless, luxurious journey. The sunset cruise and private dinner were beyond anything we imagined.`,
                rating: 5,
              },
              {
                name: 'Sophia Nguyen',
                origin: 'Singapore',
                text: `Impeccable planning and heartfelt touches everywhere. We loved every moment of this curated experience—pure bliss.`,
                rating: 5,
              },
              {
                name: 'James Carter',
                origin: 'London, UK',
                text: `A refined blend of adventure and comfort. The team anticipated our needs before we even voiced them. We'll be back.`,
                rating: 5,
              },
            ]).map((t, idx) => (
              <div key={idx} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-400 rounded-2xl flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  "{t.text}"
                </p>
                <div className="text-sm text-slate-500" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {t.name} • {t.origin}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
