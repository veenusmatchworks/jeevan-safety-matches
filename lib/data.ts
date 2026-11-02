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
    description: 'Trademark owned by Veenus Match Works (Regd No. 1395866). Renowned regional brand featuring the classic Handcart motif with 30 uniform carbonized matchsticks. Delivers instant single-strike flame and damp-proof performance across all climatic conditions.',
    image: '/products/tehla-matches.jpg',
    highlight: 'Regd No. 1395866 • Avg. 30 Sticks • Classic Handcart Brand'
  }
];

export const VEENUS_TRANSPORT_FLEET: TransportVehicle[] = [
  {
    id: 'vt-01',
    title: 'Cavery Travels — 30+ Luxury Tourist Buses & Coaches',
    category: 'Tourist Buses & Coaches',
    capacity: '32 to 54 Seater (AC & Non-AC Luxury Coaches) • Fleet of 30 Buses',
    idealFor: 'Pilgrimage temple tours (Rameswaram, Madurai, Tirupati, Palani), grand family weddings, institutional & college tours, all-South India travel.',
    description: 'Premier passenger division of Veenus Group operating an active fleet of 30+ luxury buses. Features push-back recliner seats, individual AC vents, premium surround sound system, spacious under-luggage bays, and highly experienced highway drivers.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
    highlight: 'Fleet of 30+ Buses • Push-Back Recliners • 24x7 South India Permits'
  },
  {
    id: 'vt-02',
    title: 'Commercial Heavy Freight Lorries (6 & 10 Wheeler)',
    category: 'Heavy Lorries & Trucks',
    capacity: '8 to 16 Tons Heavy Cargo',
    idealFor: 'Interstate factory logistics, bulk matchbox bales transport, industrial raw materials, wholesale dispatches.',
    description: 'Heavy-duty commercial freight lorries equipped with all-India national permits and weather-tight heavy tarpaulin covers, ensuring zero-damage cargo transit across state borders.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800',
    highlight: 'All-India National Permits • 16-Ton Heavy Haulage'
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
  name: 'VEENUS GROUP',
  brandName: 'Veenus Match Works & Cavery Travels',
  flagshipBrand: 'JEEVAN Safety Matches & TEHLA Matches',
  matchDivision: 'Veenus Match Works (3 Manufacturing Units)',
  transportDivision: 'Cavery Travels & Commercial Freight Fleet (30+ Buses)',
  busFleetName: 'Cavery Travels',
  busFleetCount: '30+ Luxury Buses',
  manufacturingUnitsCount: '3 Manufacturing Units',
  establishedYear: '1979',
  founder: 'Established in 1979 in Srivilliputhur (Started with 1 Unit, grown to 3 Units)',
  managingDirector: 'Mr. S. Hariharan',
  managingPartners: 'Mr. S. Hariharan (Managing Director)',
  management: 'Mr. S. Hariharan (Managing Director)',
  tagline: 'Makers of JEEVAN Safety Matches (3 Units) & Cavery Travels (30+ Buses)',
  phoneDisplay: '+91 4563 266277',
  phoneCall: '+914563266277',
  mobileDisplay: '+91 98421 56789',
  mobileCall: '+919842156789',
  whatsappNumber: '919842156789',
  whatsappDisplay: '+91 98421 56789',
  email: 'veenusmatchworks@gmail.com',
  address: '3/19/A, Venkateswarpuram, Perumalpatti Road, Aladipatti, Srivilliputhur, Virudhunagar, Tamil Nadu - 626125',
  shortAddress: 'Aladipatti, Srivilliputhur, Virudhunagar, Tamil Nadu - 626125',
  hours: 'Monday to Saturday: 8:00 AM - 8:30 PM (Cavery Travels & Fleet 24/7 Available)'
};

export interface AdminInquiry {
  id: string;
  customerName: string;
  companyName: string;
  phone: string;
  location: string;
  type: 'Match Wholesale' | 'Fleet Booking';
  productOrVehicle: string;
  quantity: string;
  date: string;
  status: 'Pending' | 'Quoted' | 'Dispatched' | 'Delivered';
  notes: string;
}

export interface AdminInventoryItem {
  id: string;
  name: string;
  code: string;
  brand: 'JEEVAN' | 'TEHLA';
  balesInStock: number;
  boxesPerBale: number;
  dailyProductionBales: number;
  reorderLevel: number;
  status: 'In Stock' | 'Low Stock' | 'High Demand';
}

export interface AdminFleetItem {
  id: string;
  vehicleNumber: string;
  title: string;
  driverName: string;
  driverPhone: string;
  currentLocation: string;
  destination: string;
  status: 'On Trip' | 'Available' | 'Loading' | 'Service';
}

export const INITIAL_ADMIN_INQUIRIES: AdminInquiry[] = [
  {
    id: 'INQ-1081',
    customerName: 'K. Rajasekaran',
    companyName: 'Sri Murugan Traders',
    phone: '+91 98421 12345',
    location: 'Madurai, TN',
    type: 'Match Wholesale',
    productOrVehicle: 'JEEVAN Safety Matches (₹1.00)',
    quantity: '50 Master Bales (50,000 Boxes)',
    date: '2026-11-02',
    status: 'Pending',
    notes: 'Urgent wholesale delivery required before Diwali season.'
  },
  {
    id: 'INQ-1080',
    customerName: 'P. Shanmugavel',
    companyName: 'Shanmuga Wholesale Bazaars',
    phone: '+91 94432 78901',
    location: 'Tirunelveli, TN',
    type: 'Match Wholesale',
    productOrVehicle: 'JEEVAN Safety Matches (₹2.00)',
    quantity: '25 Master Bales (25,000 Boxes)',
    date: '2026-11-01',
    status: 'Quoted',
    notes: 'Quotation sent via WhatsApp. Awaiting purchase order.'
  },
  {
    id: 'INQ-1079',
    customerName: 'G. Ramanathan',
    companyName: 'Sri Ramajayam Agencies',
    phone: '+91 98943 45678',
    location: 'Coimbatore, TN',
    type: 'Match Wholesale',
    productOrVehicle: 'TEHLA Safety Matches (₹1.00)',
    quantity: '40 Master Bales (40,000 Boxes)',
    date: '2026-10-31',
    status: 'Dispatched',
    notes: 'Dispatched via Veenus 10-Wheeler Lorry (TN 67 AB 2345).'
  },
  {
    id: 'INQ-1078',
    customerName: 'Dr. R. Jayakumar',
    companyName: 'Annai Medical Foundation',
    phone: '+91 94421 34567',
    location: 'Srivilliputhur to Rameswaram',
    type: 'Fleet Booking',
    productOrVehicle: 'Tourist Passenger Coach (32 Seater AC)',
    quantity: '3 Days Round Trip',
    date: '2026-10-30',
    status: 'Delivered',
    notes: 'Trip completed safely with passenger praise for captain driver.'
  },
  {
    id: 'INQ-1077',
    customerName: 'M. Senthilkumar',
    companyName: 'Vijaya Cargo Movers',
    phone: '+91 97865 67890',
    location: 'Rajapalayam to Chennai',
    type: 'Fleet Booking',
    productOrVehicle: 'Commercial Heavy Freight Lorry (10 Wheeler)',
    quantity: '14 Tons Industrial Bulk Freight',
    date: '2026-10-29',
    status: 'Delivered',
    notes: 'Factory-to-warehouse delivery verified with signed consignment note.'
  }
];

export const INITIAL_ADMIN_INVENTORY: AdminInventoryItem[] = [
  {
    id: 'INV-01',
    name: 'JEEVAN Safety Matches (₹1.00 - 27 Sticks)',
    code: 'VMW-JEV-01',
    brand: 'JEEVAN',
    balesInStock: 340,
    boxesPerBale: 1000,
    dailyProductionBales: 45,
    reorderLevel: 100,
    status: 'In Stock'
  },
  {
    id: 'INV-02',
    name: 'JEEVAN Safety Matches (₹2.00 - 50 Sticks)',
    code: 'VMW-JEV-02',
    brand: 'JEEVAN',
    balesInStock: 215,
    boxesPerBale: 1000,
    dailyProductionBales: 30,
    reorderLevel: 80,
    status: 'In Stock'
  },
  {
    id: 'INV-03',
    name: 'TEHLA Safety Matches (₹1.00 - 30 Sticks)',
    code: 'VMW-THL-03',
    brand: 'TEHLA',
    balesInStock: 95,
    boxesPerBale: 1000,
    dailyProductionBales: 25,
    reorderLevel: 90,
    status: 'High Demand'
  }
];

export const INITIAL_ADMIN_FLEET: AdminFleetItem[] = [
  {
    id: 'FLT-01',
    vehicleNumber: 'TN 67 AB 2345',
    title: '10-Wheeler Heavy Freight Lorry (16 Ton)',
    driverName: 'S. Karuppasamy',
    driverPhone: '+91 98421 98765',
    currentLocation: 'Trichy Highway NH-45',
    destination: 'Chennai Koyambedu Terminal',
    status: 'On Trip'
  },
  {
    id: 'FLT-02',
    vehicleNumber: 'TN 67 BC 6789',
    title: '6-Wheeler Freight Truck (8 Ton)',
    driverName: 'M. Muniyandi',
    driverPhone: '+91 98422 87654',
    currentLocation: 'Srivilliputhur Plant Depot',
    destination: 'Local Factory Standby',
    status: 'Available'
  },
  {
    id: 'FLT-03',
    vehicleNumber: 'TN 67 CD 1122',
    title: 'Tata Ace Mini Lorry (1.5 Ton)',
    driverName: 'R. Ganesan',
    driverPhone: '+91 98423 76543',
    currentLocation: 'Aladipatti Loading Bay',
    destination: 'Virudhunagar Wholesale Market',
    status: 'Loading'
  },
  {
    id: 'FLT-04',
    vehicleNumber: 'TN 67 EF 4455',
    title: 'Maruti Omni Mini Delivery Van',
    driverName: 'P. Selvam',
    driverPhone: '+91 98424 65432',
    currentLocation: 'Srivilliputhur Town',
    destination: 'Express Retail Parcels',
    status: 'Available'
  },
  {
    id: 'FLT-05',
    vehicleNumber: 'TN 67 GH 9988',
    title: 'Cavery Travels — 54-Seater AC Luxury Coach (30-Bus Fleet)',
    driverName: 'V. Sundaram',
    driverPhone: '+91 98425 54321',
    currentLocation: 'Madurai Ring Road',
    destination: 'Kodaikanal Tour Return',
    status: 'On Trip'
  },
  {
    id: 'FLT-06',
    vehicleNumber: 'TN 67 JK 5544',
    title: 'Cavery Travels — 32-Seater Pushback Tourist Coach',
    driverName: 'K. Muthuraman',
    driverPhone: '+91 98426 65432',
    currentLocation: 'Srivilliputhur Cavery Travels Depot',
    destination: 'Rameswaram Temple Pilgrimage',
    status: 'Available'
  }
];
