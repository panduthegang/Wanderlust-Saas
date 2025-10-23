import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, ArrowRight, SlidersHorizontal, ChevronDown, Search } from 'lucide-react';
import { allDestinations, Destination } from '../data/destinations';
import { slugify } from '../lib/utils';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DestinationsCatalogue = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Luxury', 'Beach', 'Adventure', 'Budget'];
  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const filteredAndSortedDestinations = useMemo(() => {
    let filtered = selectedCategory === 'All'
      ? allDestinations
      : allDestinations.filter(dest => dest.category === selectedCategory);

    if (searchQuery) {
      filtered = filtered.filter(dest =>
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.priceValue - b.priceValue;
        case 'price-high':
          return b.priceValue - a.priceValue;
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
        default:
          return b.rating - a.rating;
      }
    });

    return sorted;
  }, [selectedCategory, sortBy, searchQuery]);

  const handleViewDetails = (destination: Destination) => {
    navigate(`/destinations/${slugify(destination.name)}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative z-20 pt-32 pb-24 px-6 overflow-visible">
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-teal-900/10" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-white text-sm font-semibold border border-white/30">
              <MapPin className="w-4 h-4" />
              <span>All Destinations</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white drop-shadow-lg" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Explore The World
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Discover {allDestinations.length} stunning destinations around the globe
            </p>

            <div className="mt-10">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-6">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
                    <Search className="w-5 h-5 text-slate-500" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search destinations, locations, or experiences..."
                    className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-white/70 focus:border-white focus:outline-none focus:ring-4 focus:ring-white/30 text-slate-700 placeholder-slate-400 text-base shadow-xl transition-all"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  />
                </div>

                <div className="flex items-center gap-3 lg:gap-4 self-stretch lg:self-auto">
                  <div className="hidden lg:flex items-center gap-2 text-white/90">
                    <SlidersHorizontal className="w-5 h-5" />
                    <span className="font-semibold" style={{ fontFamily: "'Manrope', sans-serif" }}>Filter & Sort</span>
                  </div>

                  <div className="relative flex-1 lg:flex-initial">
                    <button
                      onClick={() => {
                        setShowCategoryMenu(!showCategoryMenu);
                        setShowSortMenu(false);
                      }}
                      className="w-full lg:w-auto px-5 py-3 bg-white/95 backdrop-blur-md rounded-xl border border-white/70 hover:border-white hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      <span className="font-semibold text-slate-700 text-sm sm:text-base">Category: {selectedCategory}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-600 transition-transform ${showCategoryMenu ? 'rotate-180' : ''}`} />
                    </button>
                    {showCategoryMenu && (
                      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 min-w-[200px] max-w-[90vw] z-20">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => {
                              setSelectedCategory(category);
                              setShowCategoryMenu(false);
                            }}
                            className={`w-full px-6 py-2.5 text-left hover:bg-teal-50 transition-colors ${
                              selectedCategory === category ? 'bg-teal-50 text-teal-700 font-semibold' : 'text-slate-700'
                            }`}
                            style={{ fontFamily: "'Manrope', sans-serif" }}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative flex-1 lg:flex-initial">
                    <button
                      onClick={() => {
                        setShowSortMenu(!showSortMenu);
                        setShowCategoryMenu(false);
                      }}
                      className="w-full lg:w-auto px-5 py-3 bg-white/95 backdrop-blur-md rounded-xl border border-white/70 hover:border-white hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      <span className="font-semibold text-slate-700 text-sm sm:text-base">
                        {sortOptions.find(opt => opt.value === sortBy)?.label}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-600 transition-transform ${showSortMenu ? 'rotate-180' : ''}`} />
                    </button>
                    {showSortMenu && (
                      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 min-w-[220px] max-w-[90vw] z-20">
                        {sortOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSortBy(option.value);
                              setShowSortMenu(false);
                            }}
                            className={`w-full px-6 py-2.5 text-left hover:bg-teal-50 transition-colors ${
                              sortBy === option.value ? 'bg-teal-50 text-teal-700 font-semibold' : 'text-slate-700'
                            }`}
                            style={{ fontFamily: "'Manrope', sans-serif" }}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-slate-600 text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
              Showing <span className="font-bold text-teal-600">{filteredAndSortedDestinations.length}</span> destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedDestinations.map((destination: Destination, index: number) => (
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
                    <div className="flex flex-wrap items-center gap-2 text-teal-700">
                      <span className="inline-flex items-center gap-1.5 text-teal-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm" style={{ fontFamily: "'Manrope', sans-serif" }}>{destination.location}</span>
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100" style={{ fontFamily: "'Manrope', sans-serif" }}>
                        {destination.category}
                      </span>
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
                      onClick={() => handleViewDetails(destination)}
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

          {filteredAndSortedDestinations.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-slate-600" style={{ fontFamily: "'Manrope', sans-serif" }}>
                No destinations found. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DestinationsCatalogue;
