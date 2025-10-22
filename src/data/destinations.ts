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
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    rating: 4.9,
    price: 'From ₹2,07,400',
    priceValue: 207400,
    description: 'Crystal-clear turquoise waters and pristine white sand beaches',
    category: 'Luxury'
  },
  {
    name: 'Bahamas',
    location: 'Caribbean Sea',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1264',
    rating: 4.8,
    price: 'From ₹1,57,600',
    priceValue: 157600,
    description: 'Paradise hammocks between swaying palms with azure ocean views',
    category: 'Beach'
  },
  {
    name: 'Emerald Shores',
    location: 'Destin, Florida',
    image: 'https://images.unsplash.com/photo-1626448957413-ff3da1ee8eb8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    rating: 4.7,
    price: 'From ₹1,07,800',
    priceValue: 107800,
    description: 'Luxury beachfront resort with emerald-green waters',
    category: 'Beach'
  },
  {
    name: 'Raja Ampat',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1650445332429-75ceee3f3226?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332',
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
    image: 'https://images.unsplash.com/photo-1636065441314-619af7a2dd8d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
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
    image: 'https://images.unsplash.com/photo-1738762932370-468a90e0ff68?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    rating: 5.0,
    price: 'From ₹2,49,000',
    priceValue: 249000,
    description: 'Overwater bungalows in crystal-clear lagoons',
    category: 'Luxury'
  },
  {
    name: 'Amalfi Coast',
    location: 'Italy',
    image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
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
