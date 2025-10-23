export interface DestinationGallery {
  main: string;
  gallery: string[];
}

export interface Review {
  name: string;
  origin: string;
  text: string;
  rating: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  desc: string;
}

export interface DestinationDetail {
  name: string;
  gallery: DestinationGallery;
  reviews: Review[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
}

export const destinationDetails: Record<string, DestinationDetail> = {
  maldives: {
    name: 'Maldives',
    gallery: {
      main: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
      gallery: [
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1503125210483-8b1d12bccdbe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        'https://images.unsplash.com/photo-1576158831003-d41033ec31fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      ],
    },
    reviews: [
      {
        name: 'Aarav Mehta',
        origin: 'Mumbai, India',
        text: 'Wanderlust transformed our Maldives escape into a seamless, luxurious experience. The sunset cruise and private beachfront dinner were beyond anything we imagined.',
        rating: 5,
      },
      {
        name: 'Sophia Nguyen',
        origin: 'Singapore',
        text: 'Impeccable planning and heartfelt touches everywhere. We loved the curated reef snorkelling and the spa day—pure bliss.',
        rating: 5,
      },
      {
        name: 'James Carter',
        origin: 'London, UK',
        text: 'A refined blend of adventure and comfort. The team anticipated our needs before we even voiced them. We will be back.',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Oceanside Welcome', desc: 'Private seaplane transfer to your overwater villa. Unwind with turquoise views and enjoy a welcome dinner under the stars.' },
      { day: 2, title: 'Island Discovery', desc: 'Guided exploration of sandbanks and local islands, with time to relax at pristine beaches and snorkel in crystal waters.' },
      { day: 3, title: 'Marine Adventure', desc: 'Snorkel or dive in vibrant coral gardens teeming with manta rays, sea turtles, and colorful fish.' },
      { day: 4, title: 'Leisure & Spa', desc: 'A day at leisure - indulge in spa rituals, enjoy water sports, or relax in your private infinity pool.' },
      { day: 5, title: 'Sunset Dhoni Cruise', desc: 'Sail on a traditional Maldivian boat at golden hour followed by a chef\'s seafood tasting menu.' },
      { day: 6, title: 'Departure', desc: 'Sunrise yoga session and hearty breakfast before your private seaplane transfer back.' },
    ],
    included: ['Round-trip seaplane transfers', 'Overwater villa accommodation', 'Daily breakfast & two signature seafood dinners', 'Sunset dhoni cruise', 'Complimentary snorkeling gear & reef tour'],
    excluded: ['Personal expenses & shopping', 'Travel insurance (available on request)', 'Scuba diving certifications', 'Alcoholic beverages'],
  },
  dubai: {
    name: 'Dubai',
    gallery: {
      main: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=1400&q=80&auto=format&fit=crop',
      ],
    },
    reviews: [
      {
        name: 'Priya Sharma',
        origin: 'Delhi, India',
        text: 'Dubai exceeded all expectations! From the Burj Khalifa views to desert safari under the stars, every moment was magical.',
        rating: 5,
      },
      {
        name: 'Michael Brown',
        origin: 'New York, USA',
        text: 'The perfect blend of luxury and adventure. Shopping at Dubai Mall, dining at Atlantis, and the gold souk tour were highlights.',
        rating: 5,
      },
      {
        name: 'Fatima Al-Rashid',
        origin: 'Riyadh, Saudi Arabia',
        text: 'Exceptional service throughout. The private yacht experience and helicopter tour gave us breathtaking perspectives of the city.',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Marina Lights', desc: 'Luxury hotel check-in at Dubai Marina. Evening stroll along JBR beach followed by dinner at a rooftop restaurant.' },
      { day: 2, title: 'Iconic Dubai', desc: 'Visit Burj Khalifa observation deck, explore Dubai Mall, witness the fountain show, and enjoy high tea at Burj Al Arab.' },
      { day: 3, title: 'Desert Safari Adventure', desc: 'Thrilling dune bashing, camel riding, sandboarding, and a traditional Bedouin camp experience with BBQ dinner and entertainment.' },
      { day: 4, title: 'Cultural Heritage', desc: 'Explore old Dubai - Bastakiya Quarter, Dubai Museum, gold and spice souks, and abra ride across Dubai Creek.' },
      { day: 5, title: 'Leisure & Shopping', desc: 'Day at leisure for luxury shopping, spa treatments, or optional activities like skydiving or water parks.' },
      { day: 6, title: 'Departure', desc: 'Leisurely breakfast and airport transfer with memories of an extraordinary Dubai experience.' },
    ],
    included: ['Round-trip airport transfers', '5-star hotel accommodation', 'Daily breakfast & welcome dinner', 'Desert safari with BBQ dinner', 'Burj Khalifa entrance ticket'],
    excluded: ['Personal expenses & shopping', 'Travel insurance', 'Alcoholic beverages', 'Optional activities not mentioned'],
  },
  bali: {
    name: 'Bali',
    gallery: {
      main: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1400&q=80&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1400&q=80&auto=format&fit=crop',
      ],
    },
    reviews: [
      {
        name: 'Emma Wilson',
        origin: 'Sydney, Australia',
        text: 'Bali stole our hearts! The rice terraces, temple visits, and traditional cooking class made this trip unforgettable.',
        rating: 5,
      },
      {
        name: 'Rahul Verma',
        origin: 'Bangalore, India',
        text: 'Perfect combination of culture, nature, and relaxation. The villa with rice field views and daily yoga sessions were incredible.',
        rating: 5,
      },
      {
        name: 'Olivia Martinez',
        origin: 'Barcelona, Spain',
        text: 'The warmth of Balinese hospitality made us feel at home. Waterfall adventures and beach clubs in Seminyak were amazing.',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Welcome to Bali', desc: 'Airport pickup and transfer to your private villa in Ubud. Welcome massage and traditional Balinese dinner.' },
      { day: 2, title: 'Cultural Immersion', desc: 'Visit ancient temples - Tanah Lot and Uluwatu, watch traditional Kecak dance at sunset, and enjoy seafood dinner on the beach.' },
      { day: 3, title: 'Rice Terraces & Waterfalls', desc: 'Explore Tegalalang rice terraces, visit hidden waterfalls, jungle swing experience, and coffee plantation tour.' },
      { day: 4, title: 'Cooking & Crafts', desc: 'Traditional Balinese cooking class at local home, visit art markets in Ubud, and optional silver-making workshop.' },
      { day: 5, title: 'Beach Day in Seminyak', desc: 'Transfer to beachfront resort, relax at beach clubs, enjoy water sports, and sunset cocktails by the ocean.' },
      { day: 6, title: 'Farewell Bali', desc: 'Morning yoga session, final spa treatment, and airport transfer with memories of paradise.' },
    ],
    included: ['Round-trip airport transfers', 'Private villa & beachfront resort accommodation', 'Daily breakfast & 2 traditional dinners', 'Temple entrance fees', 'Balinese cooking class'],
    excluded: ['Personal expenses', 'Travel insurance', 'Tips for guides and drivers', 'Optional water sports'],
  },
  santorini: {
    name: 'Santorini',
    gallery: {
      main: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1400&q=80&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1601581987805-c0a1246302e0?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1548013146-72479768bada?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1571406252241-db0280229c59?w=1400&q=80&auto=format&fit=crop',
      ],
    },
    reviews: [
      {
        name: 'Isabella Romano',
        origin: 'Rome, Italy',
        text: 'Santorini is pure magic! The cave hotel with caldera views, wine tasting tours, and sunset in Oia made this our dream honeymoon.',
        rating: 5,
      },
      {
        name: 'David Kim',
        origin: 'Seoul, South Korea',
        text: 'Beyond beautiful! The white-washed buildings against blue domes, volcanic beaches, and Greek cuisine were phenomenal.',
        rating: 5,
      },
      {
        name: 'Sophie Anderson',
        origin: 'Toronto, Canada',
        text: 'Every corner is Instagram-perfect, but the real magic is in the peaceful atmosphere and warm Greek hospitality.',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Paradise', desc: 'Ferry or flight arrival, transfer to luxury cave hotel in Fira or Oia with infinity pool and caldera views.' },
      { day: 2, title: 'Wine & Villages', desc: 'Visit traditional villages - Pyrgos and Megalochori, wine tasting at volcanic vineyards, and dinner at cliffside restaurant.' },
      { day: 3, title: 'Volcanic Adventures', desc: 'Boat tour to volcanic islands, swim in hot springs, visit red and black sand beaches, and fresh seafood lunch.' },
      { day: 4, title: 'Ancient History', desc: 'Explore Akrotiri archaeological site, visit Perissa beach, enjoy water sports, and traditional Greek taverna dinner.' },
      { day: 5, title: 'Sunset & Romance', desc: 'Leisure morning, sunset catamaran cruise with BBQ dinner, and evening stroll through Oia\'s marble streets.' },
      { day: 6, title: 'Farewell to Aegean', desc: 'Final breakfast with caldera views, last-minute shopping in Fira, and departure transfer.' },
    ],
    included: ['Round-trip port/airport transfers', 'Luxury cave hotel with caldera view', 'Daily breakfast & 2 sunset dinners', 'Wine tasting tour', 'Volcanic islands boat tour'],
    excluded: ['International flights', 'Travel insurance', 'Personal shopping', 'Optional activities'],
  },
  bahamas: {
    name: 'Bahamas',
    gallery: {
      main: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1264',
      gallery: [
        'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1589213795515-c0f87bce6957?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1610041321420-9498a2d76fe4?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1552933529-e359b2477252?w=1400&q=80&auto=format&fit=crop',
      ],
    },
    reviews: [
      {
        name: 'Marcus Johnson',
        origin: 'Miami, USA',
        text: 'Swimming with pigs at Exuma was a bucket list experience! The clear waters and laid-back island vibes were exactly what we needed.',
        rating: 5,
      },
      {
        name: 'Lucia Santos',
        origin: 'Rio de Janeiro, Brazil',
        text: 'Paradise on earth! The pink sand beaches, reef snorkeling, and fresh conch salad made this trip extraordinary.',
        rating: 5,
      },
      {
        name: 'Thomas Wright',
        origin: 'Manchester, UK',
        text: 'Crystal-clear waters, friendly locals, and amazing seafood. The island hopping adventure was absolutely perfect.',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Nassau Welcome', desc: 'Arrival at Nassau, transfer to beachfront resort, welcome cocktail, and beachside dinner with live Junkanoo music.' },
      { day: 2, title: 'Island Exploration', desc: 'Visit historic downtown Nassau, Queen\'s Staircase, Fort Fincastle, and straw market shopping.' },
      { day: 3, title: 'Swimming Pigs Adventure', desc: 'Day trip to Exuma - swim with famous pigs, snorkel with nurse sharks and stingrays, and beach BBQ lunch.' },
      { day: 4, title: 'Marine Paradise', desc: 'Snorkeling at Thunderball Grotto, visit blue holes, kayaking through mangroves, and sunset beach bonfire.' },
      { day: 5, title: 'Beach & Spa Day', desc: 'Leisure day at pink sand beach, spa treatments, optional jet skiing or paddleboarding, and seafood feast.' },
      { day: 6, title: 'Departure', desc: 'Final beach walk, resort breakfast, and airport transfer with Caribbean memories.' },
    ],
    included: ['Round-trip airport transfers', 'Beachfront resort accommodation', 'Daily breakfast & 2 seafood dinners', 'Exuma pig island tour', 'Snorkeling equipment & reef tour'],
    excluded: ['Personal expenses', 'Travel insurance', 'Water sports rentals', 'Alcoholic beverages'],
  },
  seychelles: {
    name: 'Seychelles',
    gallery: {
      main: 'https://images.unsplash.com/photo-1636065441314-619af7a2dd8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
      gallery: [
        'https://images.unsplash.com/photo-1636065441314-619af7a2dd8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
        'https://images.unsplash.com/photo-1670577528957-9114b37c8080?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
        'https://images.unsplash.com/photo-1617362985992-d0b6814cacef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1284',
        'https://images.unsplash.com/photo-1670577528957-9114b37c8080?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
        'https://images.unsplash.com/photo-1577353716826-9151912dcdd1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
        'https://images.unsplash.com/photo-1668800477268-021d1ed8564e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171p',
        'https://images.unsplash.com/photo-1623857587031-f79f53808d7a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
      ],
    },
    reviews: [
      {
        name: 'Charlotte Dubois',
        origin: 'Paris, France',
        text: 'The most pristine beaches we\'ve ever seen! Anse Source d\'Argent with its granite boulders is like a dream come true.',
        rating: 5,
      },
      {
        name: 'Akira Tanaka',
        origin: 'Tokyo, Japan',
        text: 'Untouched nature, rare wildlife, and stunning coral reefs. Seychelles offers tranquility that\'s hard to find anywhere else.',
        rating: 5,
      },
      {
        name: 'Alexandra Petrov',
        origin: 'Moscow, Russia',
        text: 'Island hopping between Mahé, Praslin, and La Digue was magical. Each island has its unique charm and beauty.',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Mahé Arrival', desc: 'Arrival at Seychelles International Airport, transfer to luxury resort, welcome Creole dinner by the beach.' },
      { day: 2, title: 'Mahé Exploration', desc: 'Visit Victoria market, botanical gardens, Morne Seychellois National Park, and sunset at Beau Vallon beach.' },
      { day: 3, title: 'Praslin Paradise', desc: 'Ferry to Praslin, explore Vallée de Mai nature reserve (home of coco de mer), relax at Anse Lazio beach.' },
      { day: 4, title: 'La Digue Discovery', desc: 'Bicycle tour of La Digue, visit iconic Anse Source d\'Argent beach with granite formations, and snorkeling adventure.' },
      { day: 5, title: 'Marine Wonders', desc: 'Catamaran cruise to outer islands, snorkeling with sea turtles, beach BBQ, and dolphin watching.' },
      { day: 6, title: 'Farewell Paradise', desc: 'Final morning swim, spa treatment, and departure transfer with memories of pristine island beauty.' },
    ],
    included: ['Round-trip airport transfers', 'Luxury beachfront accommodation', 'Daily breakfast & 2 Creole dinners', 'Inter-island ferry tickets', 'Vallée de Mai entrance'],
    excluded: ['International flights', 'Travel insurance', 'Personal expenses', 'Optional water sports'],
  },
  'bora-bora': {
    name: 'Bora Bora',
    gallery: {
      main: 'https://images.unsplash.com/photo-1738762932370-468a90e0ff68?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      gallery: [
        'https://images.unsplash.com/photo-1738762932370-468a90e0ff68?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        'https://images.unsplash.com/photo-1532408840957-031d8034aeef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
        'https://images.unsplash.com/photo-1532408840957-031d8034aeef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
        'https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        'https://images.unsplash.com/photo-1597254512641-c0141c25f32c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
        'https://images.unsplash.com/photo-1518232197542-9325c59ecac9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        'https://images.unsplash.com/photo-1706461168423-d1a591eb4936?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1309',
      ],
    },
    reviews: [
      {
        name: 'Jennifer Lee',
        origin: 'Los Angeles, USA',
        text: 'Our overwater bungalow was pure luxury! Waking up to turquoise lagoon views and feeding tropical fish from our deck was surreal.',
        rating: 5,
      },
      {
        name: 'Pierre Rousseau',
        origin: 'Paris, France',
        text: 'The most romantic destination imaginable. Shark and ray feeding, sunset cruises, and Polynesian culture made this unforgettable.',
        rating: 5,
      },
      {
        name: 'Yuki Yamamoto',
        origin: 'Osaka, Japan',
        text: 'Mount Otemanu backdrop, crystal lagoon, and luxury service exceeded all expectations. Worth every penny!',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Polynesian Welcome', desc: 'Arrive in Tahiti, connect to Bora Bora, boat transfer to overwater bungalow resort, traditional Tahitian welcome ceremony.' },
      { day: 2, title: 'Lagoon Discovery', desc: 'Private lagoon tour, swim with stingrays and reef sharks, snorkel in coral gardens, and motu picnic lunch.' },
      { day: 3, title: 'Mount Otemanu Adventure', desc: 'Island tour by 4x4, visit WWII relics, explore local villages, and panoramic viewpoint photography.' },
      { day: 4, title: 'Water Sports Paradise', desc: 'Jet skiing around the lagoon, paddleboarding, kayaking to secluded beaches, and sunset champagne toast.' },
      { day: 5, title: 'Romantic Luxury', desc: 'Couples spa treatment, private beach dinner setup, stargazing from your overwater deck, and Polynesian dance show.' },
      { day: 6, title: 'Au Revoir Bora Bora', desc: 'Sunrise yoga on the water, farewell breakfast, and boat transfer to airport with memories of paradise.' },
    ],
    included: ['Inter-island flights Tahiti-Bora Bora', 'Overwater bungalow accommodation', 'Daily breakfast & 2 romantic dinners', 'Lagoon tour with shark/ray feeding', 'Private motu picnic'],
    excluded: ['International flights to Tahiti', 'Travel insurance', 'Water sports equipment rentals', 'Personal expenses'],
  },
  phuket: {
    name: 'Phuket',
    gallery: {
      main: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1400&q=80&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1528181304800-259b08848526?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=1400&q=80&auto=format&fit=crop',
      ],
    },
    reviews: [
      {
        name: 'Sarah Mitchell',
        origin: 'London, UK',
        text: 'Phuket has it all! Beautiful beaches, vibrant night markets, incredible Thai food, and friendly locals everywhere.',
        rating: 5,
      },
      {
        name: 'Carlos Rodriguez',
        origin: 'Madrid, Spain',
        text: 'The island hopping to Phi Phi and James Bond Island was spectacular. Great value for money compared to other tropical destinations.',
        rating: 5,
      },
      {
        name: 'Mei Chen',
        origin: 'Shanghai, China',
        text: 'Perfect mix of relaxation and activities. Thai massage, street food tours, and Patong nightlife made this trip memorable.',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Beach Welcome', desc: 'Airport pickup, check-in at beachfront resort in Patong or Kata, welcome drink, and beachside Thai dinner.' },
      { day: 2, title: 'Phi Phi Islands', desc: 'Speedboat tour to Phi Phi islands, Maya Bay visit, snorkeling at Bamboo Island, and lunch on the beach.' },
      { day: 3, title: 'James Bond Island', desc: 'Phang Nga Bay tour by longtail boat, visit James Bond Island, sea canoe through caves, and floating village.' },
      { day: 4, title: 'Old Town & Culture', desc: 'Explore Phuket Old Town\'s Sino-Portuguese architecture, visit Wat Chalong temple, Big Buddha, and sunset at Promthep Cape.' },
      { day: 5, title: 'Leisure & Nightlife', desc: 'Beach day with water sports, traditional Thai massage, evening street food tour, and optional Patong nightlife experience.' },
      { day: 6, title: 'Departure', desc: 'Morning free for last-minute shopping or beach time, and airport transfer.' },
    ],
    included: ['Round-trip airport transfers', 'Beachfront resort accommodation', 'Daily breakfast & 1 Thai dinner', 'Phi Phi Islands speedboat tour', 'Phang Nga Bay tour'],
    excluded: ['Personal expenses', 'Travel insurance', 'Nightlife drinks and entertainment', 'Optional spa treatments'],
  },
  'amalfi-coast': {
    name: 'Amalfi Coast',
    gallery: {
      main: 'https://images.unsplash.com/photo-1533651101600-b1a5499cd1e7?w=1400&q=80&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1533651101600-b1a5499cd1e7?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1582282439708-c6e57e8be97d?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1520198932969-f80fb2f8fc4c?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1570789210967-cac24afeb00?w=1400&q=80&auto=format&fit=crop',
      ],
    },
    reviews: [
      {
        name: 'Giovanni Rossi',
        origin: 'Milan, Italy',
        text: 'The winding coastal roads, lemon groves, and cliffside villages are breathtaking! Best Italian summer holiday destination.',
        rating: 5,
      },
      {
        name: 'Emily Davis',
        origin: 'San Francisco, USA',
        text: 'Positano exceeded expectations! The colorful houses cascading down to the sea, fresh seafood, and limoncello were divine.',
        rating: 5,
      },
      {
        name: 'Hans Mueller',
        origin: 'Berlin, Germany',
        text: 'Capri boat tour, Ravello gardens, and authentic Italian trattorias made this a cultural and culinary delight.',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Sorrento', desc: 'Transfer from Naples to Sorrento, check-in at boutique hotel, evening stroll and welcome dinner with sea views.' },
      { day: 2, title: 'Positano & Praiano', desc: 'Scenic drive along the coast, explore Positano\'s colorful streets, beach time, and cliffside restaurant lunch.' },
      { day: 3, title: 'Capri Island Escape', desc: 'Ferry to Capri, visit Blue Grotto, explore Capri town, chairlift to Monte Solaro, and return sunset cruise.' },
      { day: 4, title: 'Amalfi & Ravello', desc: 'Visit Amalfi Cathedral, paper museum, drive up to Ravello for Villa Rufolo gardens and breathtaking views.' },
      { day: 5, title: 'Cooking & Leisure', desc: 'Italian cooking class with local chef, lemon grove tour, afternoon at leisure, and farewell dinner in Sorrento.' },
      { day: 6, title: 'Arrivederci', desc: 'Morning cappuccino with view, last-minute souvenir shopping, and transfer to Naples airport.' },
    ],
    included: ['Round-trip transfers Naples-Sorrento', 'Boutique hotel accommodation', 'Daily breakfast & 2 Italian dinners', 'Capri ferry and Blue Grotto entrance', 'Italian cooking class'],
    excluded: ['International flights', 'Travel insurance', 'Personal expenses and shopping', 'Alcoholic beverages'],
  },
  cancun: {
    name: 'Cancun',
    gallery: {
      main: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1400&q=80&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1512813498716-3e640fed3f39?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1584345604476-8ec5f5341e07?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1569165003085-e8a1066f1cb8?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=1400&q=80&auto=format&fit=crop',
      ],
    },
    reviews: [
      {
        name: 'Maria Gonzalez',
        origin: 'Mexico City, Mexico',
        text: 'Cancun\'s turquoise waters and white sand beaches are stunning! Chichen Itza day trip was the highlight of our vacation.',
        rating: 5,
      },
      {
        name: 'Robert Taylor',
        origin: 'Dallas, USA',
        text: 'All-inclusive resort made everything easy. Cenote diving, tequila tasting, and Mayan ruins exceeded our expectations.',
        rating: 5,
      },
      {
        name: 'Ana Silva',
        origin: 'São Paulo, Brazil',
        text: 'Perfect beach destination with culture! Tulum ruins by the sea, Xcaret park, and vibrant nightlife were amazing.',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Caribbean Welcome', desc: 'Airport arrival, transfer to all-inclusive resort in hotel zone, welcome margarita, and beachside dinner.' },
      { day: 2, title: 'Chichen Itza Wonder', desc: 'Full-day tour to Chichen Itza archaeological site, cenote swim, buffet lunch, and visit to colonial town of Valladolid.' },
      { day: 3, title: 'Tulum & Beach', desc: 'Morning visit to Tulum ruins overlooking Caribbean, afternoon at Playa del Carmen, and quinta avenida shopping.' },
      { day: 4, title: 'Xcaret Park Adventure', desc: 'All-day Xcaret eco-park experience - underground rivers, snorkeling, cultural shows, and traditional Mexican dinner.' },
      { day: 5, title: 'Water Activities', desc: 'Catamaran cruise to Isla Mujeres, snorkeling at Garrafon reef, beach club lunch, and golf cart island tour.' },
      { day: 6, title: 'Adios Cancun', desc: 'Final beach morning, resort farewell breakfast, and airport transfer with Caribbean memories.' },
    ],
    included: ['Round-trip airport transfers', 'All-inclusive resort accommodation', 'All meals and drinks at resort', 'Chichen Itza tour', 'Xcaret park entrance'],
    excluded: ['Personal expenses', 'Travel insurance', 'Tips for guides', 'Spa treatments'],
  },
  maui: {
    name: 'Maui',
    gallery: {
      main: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1400&q=80&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1583259328892-a7b6f85d8e8e?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1505881502353-a1986add3762?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1606317331033-e0757a0e0ba3?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1584380931214-dbb5b72e7fd0?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1400&q=80&auto=format&fit=crop',
      ],
    },
    reviews: [
      {
        name: 'Jessica Parker',
        origin: 'Seattle, USA',
        text: 'Maui is pure aloha spirit! Sunrise at Haleakala volcano, Road to Hana adventure, and snorkeling at Molokini crater were unforgettable.',
        rating: 5,
      },
      {
        name: 'Kenji Nakamura',
        origin: 'Tokyo, Japan',
        text: 'The most beautiful Hawaiian island! Luau experience, whale watching, and black sand beaches exceeded all expectations.',
        rating: 5,
      },
      {
        name: 'Amanda Foster',
        origin: 'Vancouver, Canada',
        text: 'Perfect blend of adventure and relaxation. Surfing lessons, waterfall hikes, and Hawaiian cuisine made this magical.',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Aloha Maui', desc: 'Airport arrival with lei greeting, transfer to beachfront resort in Wailea or Ka\'anapali, sunset Mai Tai on the beach.' },
      { day: 2, title: 'Haleakala Sunrise', desc: 'Pre-dawn drive to summit for sunrise above the clouds, breakfast, and bike or hike down the volcanic crater.' },
      { day: 3, title: 'Road to Hana', desc: 'Epic coastal drive with stops at waterfalls, black sand beaches, bamboo forest, and tropical fruit stands.' },
      { day: 4, title: 'Molokini Snorkel', desc: 'Morning catamaran to Molokini crater for world-class snorkeling, turtle bay swim, and BBQ lunch onboard.' },
      { day: 5, title: 'Hawaiian Culture', desc: 'Visit Iao Valley, lahaina historic town, sunset luau with hula show, traditional kalua pig feast, and fire dancers.' },
      { day: 6, title: 'Mahalo Maui', desc: 'Final beach morning, optional whale watching (winter) or surf lesson, and airport transfer with aloha in your heart.' },
    ],
    included: ['Round-trip airport transfers with lei greeting', 'Beachfront resort accommodation', 'Daily breakfast & luau dinner', 'Molokini snorkel cruise', 'Road to Hana tour'],
    excluded: ['International flights', 'Travel insurance', 'Personal expenses', 'Optional activities'],
  },
  'raja-ampat': {
    name: 'Raja Ampat',
    gallery: {
      main: 'https://images.unsplash.com/photo-1650445332429-75ceee3f3226?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
      gallery: [
        'https://images.unsplash.com/photo-1650445332429-75ceee3f3226?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
        'https://images.unsplash.com/photo-1703769605328-01120ea51ee0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1180',
        'https://images.unsplash.com/photo-1724258194584-a233d8d70846?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        'https://images.unsplash.com/photo-1724258317008-7ebabd28648f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
        'https://images.unsplash.com/photo-1653404786584-2166b81a5b3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1703769605297-b77c79f7e2b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1180',
      ],
    },
    reviews: [
      {
        name: 'Lars Eriksson',
        origin: 'Stockholm, Sweden',
        text: 'The most biodiverse marine environment on Earth! Diving in Raja Ampat was like swimming in an aquarium - simply breathtaking.',
        rating: 5,
      },
      {
        name: 'Priya Sharma',
        origin: 'Mumbai, India',
        text: 'Untouched paradise! The karst islands, hidden lagoons, and vibrant coral reefs make Raja Ampat truly special.',
        rating: 5,
      },
      {
        name: 'Marco Bianchi',
        origin: 'Venice, Italy',
        text: 'Remote and spectacular. Piaynemo viewpoint, manta ray encounters, and pristine beaches were worth the journey.',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Journey to Paradise', desc: 'Fly to Sorong, transfer to traditional phinisi boat or island resort, welcome dinner with local fish BBQ.' },
      { day: 2, title: 'Diving Paradise', desc: 'Multiple dive sites including Cape Kri and Sardine Reef, witness incredible marine biodiversity, and beach exploration.' },
      { day: 3, title: 'Wayag Islands', desc: 'Visit iconic Wayag lagoon, hike to panoramic viewpoint, kayak through karst islands, and swim in turquoise waters.' },
      { day: 4, title: 'Manta Encounters', desc: 'Dive or snorkel with manta rays at Manta Sandy, visit Arborek village to meet locals, and sunset at hidden beach.' },
      { day: 5, title: 'Piaynemo Beauty', desc: 'Early morning climb to Piaynemo viewpoint for stunning karst landscape photos, island hopping, and reef exploration.' },
      { day: 6, title: 'Farewell to Paradise', desc: 'Final morning snorkel, transfer back to Sorong, and departure with memories of pristine wilderness.' },
    ],
    included: ['Sorong transfers', 'Liveaboard boat or resort accommodation', 'All meals including fresh seafood', 'Diving/snorkeling equipment', 'Raja Ampat marine park fee'],
    excluded: ['International flights to Sorong', 'Travel insurance', 'Alcoholic beverages', 'Dive certifications'],
  },
  'emerald-shores': {
    name: 'Emerald Shores',
    gallery: {
      main: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=80&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80&auto=format&fit=crop',
      ],
    },
    reviews: [
      {
        name: 'Jennifer Davis',
        origin: 'Atlanta, USA',
        text: 'Destin\'s beaches are incredible! The sugar-white sand and emerald waters lived up to the hype. Perfect family vacation.',
        rating: 5,
      },
      {
        name: 'Michael Thompson',
        origin: 'Chicago, USA',
        text: 'Great value beach destination! Fresh seafood, water sports, and beautiful sunsets made this a memorable trip.',
        rating: 5,
      },
      {
        name: 'Lisa Martinez',
        origin: 'Houston, USA',
        text: 'Relaxing and fun! The beachfront resort was excellent, and HarborWalk Village had great restaurants and entertainment.',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Welcome to Emerald Coast', desc: 'Arrival at Destin-Fort Walton Beach Airport, check-in at beachfront resort, sunset beach walk.' },
      { day: 2, title: 'Beach & Water Sports', desc: 'Dolphin cruise in morning, paddleboarding or jet skiing, beach volleyball, and fresh seafood dinner at HarborWalk.' },
      { day: 3, title: 'Coastal Adventure', desc: 'Fishing charter or snorkeling trip, visit Crab Island sandbar party spot, and explore local shops.' },
      { day: 4, title: 'Family Fun Day', desc: 'Visit Big Kahuna\'s Water Park or Gulfarium Marine Adventure Park, mini golf, and beachside bonfire.' },
      { day: 5, title: 'Leisure & Relaxation', desc: 'Spa day at resort, beach lounging, optional parasailing, and farewell seafood boil on the beach.' },
      { day: 6, title: 'Departure', desc: 'Final morning beach walk, breakfast with view, and airport transfer.' },
    ],
    included: ['Round-trip airport transfers', 'Beachfront resort accommodation', 'Daily breakfast & 1 seafood dinner', 'Dolphin cruise', 'Water sports equipment rental'],
    excluded: ['Personal expenses', 'Travel insurance', 'Theme park tickets', 'Fishing charter'],
  },
  'tropical-paradise': {
    name: 'Tropical Paradise',
    gallery: {
      main: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1400&q=80&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1400&q=80&auto=format&fit=crop',
      ],
    },
    reviews: [
      {
        name: 'Nicole Anderson',
        origin: 'Miami, USA',
        text: 'Perfect Caribbean getaway! The palm-lined beaches, clear waters, and laid-back island vibe were exactly what we needed.',
        rating: 5,
      },
      {
        name: 'Daniel Green',
        origin: 'Toronto, Canada',
        text: 'Great mix of relaxation and adventure. Sailing, snorkeling, beach bars, and fresh seafood made this trip fantastic.',
        rating: 5,
      },
      {
        name: 'Isabella Costa',
        origin: 'Lisbon, Portugal',
        text: 'Tropical paradise indeed! The sunsets, reggae music, and friendly locals created unforgettable island memories.',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Island Arrival', desc: 'Airport welcome with tropical drink, transfer to beachfront resort, sunset cocktail on the beach.' },
      { day: 2, title: 'Beach & Snorkel', desc: 'Morning beach yoga, snorkeling at coral reef, paddleboarding, and beachside Caribbean lunch.' },
      { day: 3, title: 'Sailing Adventure', desc: 'Full-day catamaran cruise, visit secluded coves, swim stop, tropical BBQ on board, and sunset sailing.' },
      { day: 4, title: 'Island Exploration', desc: 'Visit local markets, explore rainforest trails, waterfall swim, and authentic island cuisine dinner.' },
      { day: 5, title: 'Water Sports & Spa', desc: 'Jet skiing, kayaking, beach volleyball, afternoon spa massage, and beach bonfire with live music.' },
      { day: 6, title: 'Farewell Paradise', desc: 'Final beach morning, farewell brunch, and airport transfer with island memories.' },
    ],
    included: ['Round-trip airport transfers', 'Beachfront resort accommodation', 'Daily breakfast & 2 Caribbean dinners', 'Catamaran cruise', 'Snorkeling equipment'],
    excluded: ['Personal expenses', 'Travel insurance', 'Spa treatments', 'Water sports not included'],
  },
  'sandy-shores': {
    name: 'Sandy Shores',
    gallery: {
      main: 'https://images.unsplash.com/photo-1470214203634-e436a8848e23?w=1400&q=80&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1470214203634-e436a8848e23?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1400&q=80&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400&q=80&auto=format&fit=crop',
      ],
    },
    reviews: [
      {
        name: 'Rachel Moore',
        origin: 'Portland, USA',
        text: 'Peaceful and beautiful! The Pacific Coast sunsets, tide pools, and coastal walks were so refreshing and rejuvenating.',
        rating: 5,
      },
      {
        name: 'Kevin White',
        origin: 'San Diego, USA',
        text: 'Great budget-friendly beach escape! Clean beaches, good seafood restaurants, and friendly atmosphere.',
        rating: 5,
      },
      {
        name: 'Angela Turner',
        origin: 'Phoenix, USA',
        text: 'Perfect for a quiet getaway. Beach bonfires, morning walks collecting shells, and fresh fish tacos were highlights.',
        rating: 5,
      },
    ],
    itinerary: [
      { day: 1, title: 'Coastal Arrival', desc: 'Check-in at beachfront inn, evening beach walk at sunset, and casual seafood dinner at local favorite spot.' },
      { day: 2, title: 'Beach Day', desc: 'Full day on golden sands - swimming, beach games, tide pool exploration, and picnic lunch on the beach.' },
      { day: 3, title: 'Coastal Drive', desc: 'Scenic drive along Pacific Coast Highway, visit lighthouses, stop at viewpoints, and explore coastal towns.' },
      { day: 4, title: 'Water Activities', desc: 'Surfing or boogie boarding lessons, kayaking, beach volleyball, and clam bake dinner on the beach.' },
      { day: 5, title: 'Relaxation Day', desc: 'Morning yoga on beach, spa time, read by the ocean, sunset cocktails, and farewell seafood feast.' },
      { day: 6, title: 'Departure', desc: 'Final sunrise walk, hearty breakfast, and check-out with renewed energy from the ocean.' },
    ],
    included: ['Beachfront accommodation', 'Daily breakfast', 'Surfing lesson', 'Beach bonfire setup', 'Bike rentals'],
    excluded: ['Transportation to destination', 'Travel insurance', 'Most meals', 'Personal expenses'],
  },
};
