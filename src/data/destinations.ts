export interface Destination {
  name: string;
  location: string;
  image: string;
  rating: number;
  price: string;
  priceValue: number;
  description: string;
  category: string;
}

export const allDestinations: Destination[] = [
  {
    name: 'Maldives',
    location: 'Indian Ocean',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&auto=format&fit=crop',
    rating: 4.9,
    price: 'From ₹2,07,400',
    priceValue: 207400,
    description: 'Crystal-clear turquoise waters and pristine white sand beaches',
    category: 'Luxury'
  },
  {
    name: 'Bahamas',
    location: 'Caribbean Sea',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80&auto=format&fit=crop',
    rating: 4.8,
    price: 'From ₹1,57,600',
    priceValue: 157600,
    description: 'Paradise hammocks between swaying palms with azure ocean views',
    category: 'Beach'
  },
  {
    name: 'Emerald Shores',
    location: 'Destin, Florida',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop',
    rating: 4.7,
    price: 'From ₹1,07,800',
    priceValue: 107800,
    description: 'Luxury beachfront resort with emerald-green waters',
    category: 'Beach'
  },
  {
    name: 'Raja Ampat',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&q=80&auto=format&fit=crop',
    rating: 5.0,
    price: 'From ₹2,32,300',
    priceValue: 232300,
    description: 'Untouched tropical islands with vibrant marine life',
    category: 'Adventure'
  },
  {
    name: 'Tropical Paradise',
    location: 'Caribbean Islands',
    image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200&q=80&auto=format&fit=crop',
    rating: 4.9,
    price: 'From ₹1,41,000',
    priceValue: 141000,
    description: 'Palm-lined beaches perfect for relaxation and adventure',
    category: 'Beach'
  },
  {
    name: 'Sandy Shores',
    location: 'Pacific Coast',
    image: 'https://images.unsplash.com/photo-1470214203634-e436a8848e23?w=1200&q=80&auto=format&fit=crop',
    rating: 4.6,
    price: 'From ₹82,900',
    priceValue: 82900,
    description: 'Serene coastal escape with golden sands and gentle waves',
    category: 'Budget'
  },
  {
    name: 'Santorini',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
    rating: 4.9,
    price: 'From ₹1,24,500',
    priceValue: 124500,
    description: 'Iconic white-washed buildings overlooking the Aegean Sea',
    category: 'Luxury'
  },
  {
    name: 'Bali',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    rating: 4.8,
    price: 'From ₹74,700',
    priceValue: 74700,
    description: 'Tropical haven with lush rice terraces and ancient temples',
    category: 'Budget'
  },
  {
    name: 'Dubai',
    location: 'United Arab Emirates',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    rating: 4.7,
    price: 'From ₹99,600',
    priceValue: 99600,
    description: 'Ultra-modern city with stunning architecture and luxury shopping',
    category: 'Luxury'
  },
  {
    name: 'Seychelles',
    location: 'East Africa',
    image: 'https://images.unsplash.com/photo-1583479399927-1f9df5e04e5a?w=800&q=80',
    rating: 5.0,
    price: 'From ₹1,99,200',
    priceValue: 199200,
    description: 'Pristine beaches with unique granite rock formations',
    category: 'Luxury'
  },
  {
    name: 'Phuket',
    location: 'Thailand',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80',
    rating: 4.6,
    price: 'From ₹66,400',
    priceValue: 66400,
    description: 'Vibrant nightlife and beautiful beaches in Thailand',
    category: 'Budget'
  },
  {
    name: 'Maui',
    location: 'Hawaii, USA',
    image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&q=80',
    rating: 4.9,
    price: 'From ₹1,82,700',
    priceValue: 182700,
    description: 'Volcanic landscapes and world-class surfing beaches',
    category: 'Adventure'
  },
  {
    name: 'Bora Bora',
    location: 'French Polynesia',
    image: 'https://images.unsplash.com/photo-1589279003619-f37a2a553bfa?w=800&q=80',
    rating: 5.0,
    price: 'From ₹2,49,000',
    priceValue: 249000,
    description: 'Overwater bungalows in crystal-clear lagoons',
    category: 'Luxury'
  },
  {
    name: 'Amalfi Coast',
    location: 'Italy',
    image: 'https://images.unsplash.com/photo-1533651101600-b1a5499cd1e7?w=800&q=80',
    rating: 4.8,
    price: 'From ₹1,32,800',
    priceValue: 132800,
    description: 'Dramatic cliffside villages with Mediterranean charm',
    category: 'Beach'
  },
  {
    name: 'Cancun',
    location: 'Mexico',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80',
    rating: 4.7,
    price: 'From ₹91,300',
    priceValue: 91300,
    description: 'Beautiful beaches and ancient Mayan ruins nearby',
    category: 'Beach'
  }
];
