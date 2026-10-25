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
    name: 'Jeevan Veneer Safety Matches',
    code: 'VMW-JEV-01',
    category: 'Veneer Safety Matches',
    unit: '100 Boxes / Pack (Wholesale Bales Available)',
    priceEstimate: 'Ask For Wholesale Price',
    sticksPerBox: 45,
    description: 'Matches specially manufactured for wet fields and humid conditions. The outer shell is made of sturdy wood veneers that are moisture proof and stay rigid without collapsing. Smooth single-strike ignition.',
    image: '/products/jeevan-veneer-matches.jpg',
    highlight: 'Moisture Proof Outer Shell • Built for Wet Fields'
  },
  {
    id: 'vm-02',
    name: 'Jeevan Cardboard Safety Matches',
    code: 'VMW-JEV-02',
    category: 'Cardboard Safety Matches',
    unit: '100 Boxes / Pack',
    priceEstimate: 'Ask For Wholesale Price',
    sticksPerBox: 45,
    description: 'Manufactured with high-grade duplex board and premium carbonized wooden splints. Sealed tightly to prevent dampness, with smooth friction side coating for reliable spark-free ignition.',
    image: '/products/jeevan-cardboard-matches.jpg',
    highlight: 'High Grade Duplex Board • Zero Afterglow Splints'
  },
  {
    id: 'vm-03',
    name: 'Jeevan Wax Safety Matches (10s Pack)',
    code: 'VMW-JEV-03',
    category: 'Wax Matches',
    unit: 'Contains 10 Boxes Retail Bundle',
    priceEstimate: 'MRP Rs. 2.00 / Wholesale Rate Available',
    sticksPerBox: 40,
    description: 'Retail bundled pack containing 10 wax matchboxes. Weatherproof paraffin and wax coated matchsticks specifically formulated to light smoothly even in damp coastal and outdoor weather.',
    image: '/products/jeevan-wax-matches-pack.jpg',
    highlight: 'Weatherproof Wax Formula • 10 Boxes Consumer Bundle'
  },
  {
    id: 'vm-04',
    name: 'Jeevan Veneer Safety Matches (Open Tray)',
    code: 'VMW-JEV-04',
    category: 'Veneer Safety Matches',
    unit: 'Full Inner Tray View',
    priceEstimate: 'Ask For Wholesale Price',
    sticksPerBox: 45,
    description: 'Shows the sturdy inner wooden tray packed with uniform carbonized matchsticks with dark ignition heads. Built for durability, reliable friction, and smooth handling.',
    image: '/products/jeevan-veneer-open.jpg',
    highlight: 'Uniform Machine Packed • Rigid Inner Tray'
  },
  {
    id: 'vm-05',
    name: 'Cardboard Match Sticks & Splints',
    code: 'VMW-SPL-05',
    category: 'Match Splints & Sticks',
    unit: 'Bulk Pack for Matches',
    priceEstimate: 'Bulk Splints Rate',
    sticksPerBox: 50,
    description: 'High-grade carbonized wooden match splints manufactured with uniform length and thickness. Chemically treated to ensure single-strike ignition and instant cessation after flame out.',
    image: '/products/cardboard-match-sticks.jpg',
    highlight: 'Carbonized Splints • Single-Strike Chemistry'
  },
  {
    id: 'vm-06',
    name: 'Weatherproof Wax Match Sticks',
    code: 'VMW-WAX-06',
    category: 'Match Splints & Sticks',
    unit: 'Bulk Wax Splints Supply',
    priceEstimate: 'Commercial Supply Price',
    sticksPerBox: 40,
    description: 'Precision-extruded wax and paraffin matchsticks engineered with strong moisture barriers for outdoor, temple, kitchen, and agricultural ignition requirements.',
    image: '/products/wax-match-sticks.jpg',
    highlight: 'Damp Proof Wax Coated • Extended Burn Flame'
  }
];

export const VEENUS_TRANSPORT_FLEET: TransportVehicle[] = [
  {
    id: 'vt-01',
    title: 'Maruti Omni & Eeco Mini Vans',
    category: 'Mini Vans & Omni',
    capacity: '5 to 8 Passengers / 500 kg Cargo',
    idealFor: 'Intra-city goods supply, express parcel delivery, family railway & airport drops.',
    description: 'Agile commercial and passenger vans for rapid local consignments, shop replenishment, or comfortable small family transit.',
    image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?w=800',
    highlight: 'Available 24x7 • Point-to-Point Booking'
  },
  {
    id: 'vt-02',
    title: 'Tata Ace & Dost (Mini Lorries)',
    category: 'Heavy Lorries & Trucks',
    capacity: '1 to 2.5 Tons Payload',
    idealFor: 'Matchbox carton dispatch, retail warehouse shifting, agricultural goods, regional market transit.',
    description: 'Versatile mini freight trucks equipped with weather-proof tarpaulin covers for prompt transport across city hubs and regional highways.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800',
    highlight: 'Safe Tarpaulin Cover • Fast Dispatch'
  },
  {
    id: 'vt-03',
    title: 'Commercial Heavy Freight Lorries (6 & 10 Wheeler)',
    category: 'Heavy Lorries & Trucks',
    capacity: '8 to 16 Tons Heavy Cargo',
    idealFor: 'Interstate factory logistics, raw material shipments, industrial bulk freight.',
    description: 'Heavy-duty commercial freight lorries with all-India permits, transporting bulk goods safely across all southern and national routes.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800',
    highlight: 'All-India National Permit • Reliable Heavy Haulage'
  },
  {
    id: 'vt-04',
    title: 'Tourist Buses & Passenger Coaches',
    category: 'Tourist Buses & Coaches',
    capacity: '14 to 32 Seater (AC / Non-AC)',
    idealFor: 'Pilgrimage temple tours, family weddings, college & school tours, corporate trips.',
    description: 'Comfortable passenger buses featuring push-back recliner seats, sound system, expansive luggage compartments, and experienced highway drivers.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
    highlight: 'Push-back Reclining Seats • Experienced Highway Drivers'
  }
];

export const COMPANY_CONTACT = {
  name: 'VEENUS GROUP',
  brandName: 'Veenus Match Works & Transports',
  flagshipBrand: 'JEEVAN Safety Matches',
  matchDivision: 'Veenus Match Works',
  transportDivision: 'Veenus Transports & Logistics',
  establishedYear: '1979',
  founder: 'Late Mr. M. Subburam',
  managingDirector: 'Mr. S. Hariharan',
  management: 'Mr. S. Murali & Mr. S. Hariharan',
  tagline: 'Makers of JEEVAN Safety Matches & Commercial Fleet Logistics',
  phoneDisplay: '+91 98421 56789',
  phoneCall: '+919842156789',
  whatsappNumber: '919842156789',
  whatsappDisplay: '+91 98421 56789',
  email: 'veenusmatchworks@gmail.com',
  address: 'Srivilliputhur, Virudhunagar District, Tamil Nadu - 626125, India',
  hours: 'Monday to Saturday: 8:00 AM - 8:30 PM (Fleet Transport 24/7 Available)'
};
