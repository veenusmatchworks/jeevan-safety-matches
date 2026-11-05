export interface MatchProduct {
  id: string;
  name: string;
  code: string;
  category: 'Veneer Safety Matches' | 'Cardboard Safety Matches' | 'Wax Matches' | 'Match Splints & Sticks' | 'Wholesale & Export Cartons';
  unit: string;
  priceEstimate: string;
  sticksPerBox: number;
  description: string;
  image: string;
  highlight: string;
}

export interface TransportVehicle {
  id: string;
  title: string;
  category: 'Mini Vans & Omni' | 'Heavy Lorries & Trucks' | 'Tourist Buses & Coaches';
  capacity: string;
  idealFor: string;
  description: string;
  image: string;
  highlight: string;
}

export const VEENUS_MATCH_PRODUCTS: MatchProduct[] = [
  {
    id: 'vm-01',
    name: 'JEEVAN Safety Matches (₹1.00)',
    code: 'VMW-JEV-01',
    category: 'Cardboard Safety Matches',
    unit: '100 Boxes / Pack • Master Bales Available',
    priceEstimate: 'M.R.P. ₹ 1.00 (Wholesale Bales Available)',
    sticksPerBox: 27,
    description: 'Authentic flagship safety matches manufactured by Veenus Match Works (Regd No. 3481060). Features the iconic Three Fruits artwork (Orange, Apple, Pear) with reverse skier illustration. Engineered with carbonized wooden splints, moisture-resistant friction strip, and reliable single-strike ignition.',
    image: '/products/jeevan-1rs-matches.jpg',
    highlight: 'Regd No. 3481060 • Avg. 27 Sticks • Three Fruits Brand'
  },
  {
    id: 'vm-02',
    name: 'JEEVAN Safety Matches (₹2.00)',
    code: 'VMW-JEV-02',
    category: 'Cardboard Safety Matches',
    unit: '100 Boxes / Pack • Master Bales Available',
    priceEstimate: 'M.R.P. ₹ 2.00 (Wholesale Bales Available)',
    sticksPerBox: 50,
    description: 'High-capacity family and commercial safety matches pack (Regd No. 3481060) containing an average of 50 long-burning carbonized wooden matchsticks. Extra-sturdy duplex board casing with precision side friction surface for smooth spark-free strikes.',
    image: '/products/jeevan-2rs-matches.jpg',
    highlight: 'Regd No. 3481060 • Avg. 50 Sticks • Extended Family Pack'
  },
  {
    id: 'vm-03',
    name: 'TEHLA Safety Matches (₹1.00)',
    code: 'VMW-THL-03',
    category: 'Cardboard Safety Matches',
    unit: '100 Boxes / Pack • Wholesale Cartons Available',
    priceEstimate: 'M.R.P. ₹ 1.00 (Wholesale Bales Available)',
    sticksPerBox: 30,
    description: 'Trademark owned by Veenus Match Works (Regd No. 1395866) and manufactured in coordination with sister concern United Match Industries. Renowned regional brand featuring the classic Handcart motif with 30 uniform carbonized matchsticks. Delivers instant single-strike flame and damp-proof performance across all climatic conditions.',
    image: '/products/tehla-matches.jpg',
    highlight: 'Regd No. 1395866 • Avg. 30 Sticks • Classic Handcart Brand'
  }
];

export const VEENUS_TRANSPORT_FLEET: TransportVehicle[] = [
  {
    id: 'vt-01',
    title: 'Cauveri Travels — Luxury Omni Buses (Fleet of 10+ Buses)',
    category: 'Tourist Buses & Coaches',
    capacity: 'Luxury Omni Buses (AC & Non-AC) • Fleet of 10+ Buses',
    idealFor: 'Pilgrimage temple tours (Rameswaram, Madurai, Tirupati, Palani), grand family weddings, institutional tours, all-South India passenger travel.',
    description: 'Entered the omni bus transportation sector in 2026 under the name Cauveri Travels. Currently operating an active fleet of more than 10 luxury omni buses with push-back recliner seats, AC, premium sound systems, and experienced highway captains.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
    highlight: 'Fleet of 10+ Omni Buses • Est. 2026 • 24x7 South India Service'
  },
  {
    id: 'vt-02',
    title: 'Commercial Freight Fleet (15+ Lorries)',
    category: 'Heavy Lorries & Trucks',
    capacity: 'Fleet of 15+ Heavy Lorries (8 to 16 Tons Cargo)',
    idealFor: 'Interstate factory logistics, bulk matchbox bales transport, industrial raw materials, wholesale dispatches.',
    description: 'Entered the transportation sector in 2015 under the leadership of Mr. S. Hariharan, beginning with a single lorry. Through continuous growth, expanded to a fleet of more than 15 commercial freight lorries equipped with all-India permits and weather-tight tarpaulins.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800',
    highlight: 'Fleet of 15+ Lorries • Est. 2015 • All-India National Permits'
  },
  {
    id: 'vt-03',
    title: 'Tata Ace & Dost (Mini Lorries)',
    category: 'Heavy Lorries & Trucks',
    capacity: '1 to 2.5 Tons Payload',
    idealFor: 'Matchbox carton dispatch, retail warehouse replenishment, regional market distribution across Tamil Nadu.',
    description: 'Versatile mini freight trucks designed for fast dispatches, local warehouse connections, and safe parcel transport.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800',
    highlight: 'Weather-Proof Tarpaulin • Express Regional Dispatch'
  },
  {
    id: 'vt-04',
    title: 'Maruti Omni & Eeco Mini Delivery Vans',
    category: 'Mini Vans & Omni',
    capacity: '5 to 8 Passengers / 500 kg Cargo',
    idealFor: 'Intra-city express parcel delivery, shop replenishment, airport and railway family drops.',
    description: 'Agile commercial and passenger vans available around the clock for rapid point-to-point urban transit and local retail matchbox delivery.',
    image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?w=800',
    highlight: 'Available 24x7 • Point-to-Point Booking'
  }
];

export const COMPANY_CONTACT = {
  name: 'JEEVAN SAFETY MATCHES',
  groupName: 'Veenus Group',
  brandName: 'Jeevan Safety Matches & Cauveri Travels',
  flagshipBrand: 'Jeevan Safety Matches (Regd. No.: 3481060)',
  matchDivision: 'Jeevan Safety Matches (3 Manufacturing Units)',
  sisterConcerns: [
    'Veenus Match Works (Largest Manufacturing Unit)',
    'United Match Industries',
    'The Cauveri Matches'
  ],
  sisterConcernsDisplay: 'Veenus Match Works, United Match Industries & The Cauveri Matches',
  largestUnit: 'Veenus Match Works',
  transportDivision: 'Cauveri Travels (10+ Omni Buses) & Freight Fleet (15+ Lorries)',
  busFleetName: 'Cauveri Travels',
  busFleetCount: '10+ Omni Buses',
  lorryFleetCount: '15+ Lorries',
  manufacturingUnitsCount: '3 Manufacturing Units',
  wholesaleSales: '45,000 Bundles',
  wholesaleSalesDisplay: 'Approx. 45,000 Bundles',
  establishedYear: '1979',
  transportEstYear: '2015',
  busEstYear: '2026',
  founder: 'Mr. M. Subburam (Established 1979)',
  managingDirector: 'Mr. S. Hariharan (Son of Mr. M. Subburam)',
  managingPartners: 'Mr. S. Hariharan (Managing Director)',
  management: 'Mr. S. Hariharan (Managing Director)',
  tagline: 'Jeevan Safety Matches (Regd. No.: 3481060) & Cauveri Travels',
  phoneDisplay: '+91 4563 266277',
  phoneCall: '+914563266277',
  mobileDisplay: '+91 98421 56789',
  mobileCall: '+919842156789',
  whatsappNumber: '919842156789',
  whatsappDisplay: '+91 98421 56789',
  email: 'veenusmatchworks@gmail.com',
  address: '3/19/A, Venkateswarpuram, Perumalpatti Road, Aladipatti, Srivilliputhur, Virudhunagar, Tamil Nadu - 626125',
  shortAddress: 'Aladipatti, Srivilliputhur, Virudhunagar, Tamil Nadu - 626125',
  hours: 'Monday to Saturday: 8:00 AM - 8:30 PM (Cauveri Travels & Fleet 24/7 Available)'
};
