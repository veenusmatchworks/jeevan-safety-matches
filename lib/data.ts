export interface MatchProduct {
  id: string;
  name: string;
  code: string;
  category: 'Veneer Safety Matches' | 'Cardboard Safety Matches' | 'Wax Matches' | 'Wholesale & Export Cartons';
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
    name: 'Veneer Safety Matches',
    code: 'VMW-VEN-01',
    category: 'Veneer Safety Matches',
    unit: '100 Boxes / Pack',
    priceEstimate: 'Wholesale Tier Rate',
    sticksPerBox: 45,
    description: 'Rigid natural wood veneer outer shell built to resist high humidity, damp fields, and tough transit without collapsing. Smooth single-strike ignition.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    highlight: 'Damp Proof Veneer • Single Strike Glow'
  },
  {
    id: 'vm-02',
    name: 'Cardboard Safety Matches',
    code: 'VMW-CRD-02',
    category: 'Cardboard Safety Matches',
    unit: '100 Boxes / Pack',
    priceEstimate: 'Factory Direct Price',
    sticksPerBox: 45,
    description: 'High-grade duplex board box with carbonized splints and safe chemical friction coating. Smooth spark-free ignition with zero afterglow.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800',
    highlight: 'Carbonized Splints • Zero Afterglow'
  },
  {
    id: 'vm-03',
    name: 'Moisture-Proof Wax Matches',
    code: 'VMW-WAX-03',
    category: 'Wax Matches',
    unit: '100 Boxes / Pack',
    priceEstimate: 'Commercial Bulk Rate',
    sticksPerBox: 40,
    description: 'Weatherproof wax coated matchsticks specifically formulated for windy coastal weather, agricultural fields, and outdoor conditions.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
    highlight: 'Weatherproof Wax • Extended Burn Time'
  },
  {
    id: 'vm-04',
    name: 'Jumbo Kitchen & Catering Box',
    code: 'VMW-JMB-04',
    category: 'Cardboard Safety Matches',
    unit: '20 Jumbo Boxes / Bundle',
    priceEstimate: 'Commercial Pack Rate',
    sticksPerBox: 250,
    description: 'Large commercial format matchbox holding 250 sturdy wooden matchsticks, ideal for commercial kitchens, catering, and industrial operations.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800',
    highlight: '250 Extra Long Sticks • Heavy Duty Box'
  },
  {
    id: 'vm-05',
    name: 'Retail Ready Display Carton',
    code: 'VMW-RTL-05',
    category: 'Wholesale & Export Cartons',
    unit: '500 Boxes / Inner Carton',
    priceEstimate: 'Super Stockist Tier',
    sticksPerBox: 45,
    description: 'Pre-bundled and shrink-wrapped inner master cartons ready for immediate display in convenience stores, grocers, and supermarkets.',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800',
    highlight: 'Counter Ready • Safe Transit Wrap'
  },
  {
    id: 'vm-06',
    name: 'Distributor Master Export Bale',
    code: 'VMW-EXP-06',
    category: 'Wholesale & Export Cartons',
    unit: '1,000 Boxes / Heavy Corrugated Bale',
    priceEstimate: 'High Volume Bulk Rate',
    sticksPerBox: 48,
    description: '7-ply corrugated export-grade bales protected with moisture-seal lining for interstate freight trucks and international export shipping.',
    image: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=800',
    highlight: '7-Ply Corrugated • Export Moisture Barrier'
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
  matchDivision: 'Veenus Match Works',
  transportDivision: 'Veenus Transports & Logistics',
  establishedYear: '1979',
  tagline: 'Matchbox Manufacturing & Transport Fleet Logistics',
  phoneDisplay: '+91 98421 56789',
  phoneCall: '+919842156789',
  whatsappNumber: '919842156789',
  whatsappDisplay: '+91 98421 56789',
  email: 'veenusmatchworks@gmail.com',
  address: 'Kollam - Thirumangalam Road, Srivilliputhur, Virudhunagar District, Tamil Nadu - 626125, India',
  hours: 'Monday to Saturday: 8:00 AM - 8:30 PM (Fleet Transport 24/7 Available)'
};
