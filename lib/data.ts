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
  isHidden?: boolean;
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

export interface ManufacturingPhoto {
  id: string;
  title: string;
  category: 'Unit 1: Chemical & Splints' | 'Unit 2: Box Making & Duplex' | 'Unit 3: Packaging & Warehouse' | 'Quality & Loading Bay';
  unitTag: string;
  image: string;
  caption: string;
  isHidden?: boolean;
}

export const MANUFACTURING_15_PHOTOS: ManufacturingPhoto[] = [
  // Unit 1 (Photos 1 to 5): Mother Plant & Chemical Splints Facility
  {
    id: 'm-01',
    title: 'Unit 1 — Mother Plant Industrial Facility (Est. 1979)',
    category: 'Unit 1: Chemical & Splints',
    unitTag: 'Unit 1 • Mother Plant',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000',
    caption: 'Original industrial facility established in 1979 in Srivilliputhur housing central chemical synthesis and engineering workshops.'
  },
  {
    id: 'm-02',
    title: 'Unit 1 — Chemical Compounding & Friction Deck',
    category: 'Unit 1: Chemical & Splints',
    unitTag: 'Unit 1 • Chemical Lab',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000',
    caption: 'Precision formulation deck preparing damp-resistant red phosphorus compositions and instantaneous single-strike ignition chemical slurry.'
  },
  {
    id: 'm-03',
    title: 'Unit 1 — Precision Automated Head Dipping Carousel',
    category: 'Unit 1: Chemical & Splints',
    unitTag: 'Unit 1 • Head Dipping',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1000',
    caption: 'Continuous temperature-regulated dipping carousel forming uniform match heads with smooth ignition and zero sparks.'
  },
  {
    id: 'm-04',
    title: 'Unit 1 — Wooden Splint Carbonization Chambers',
    category: 'Unit 1: Chemical & Splints',
    unitTag: 'Unit 1 • Carbonization',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000',
    caption: 'High-grade carbonization vacuum chambers treating natural wooden splints to eliminate post-combustion afterglow.'
  },
  {
    id: 'm-05',
    title: 'Unit 1 — Splint Sorting & Climate-Controlled Curing Line',
    category: 'Unit 1: Chemical & Splints',
    unitTag: 'Unit 1 • Curing Tunnel',
    image: 'https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?w=1000',
    caption: 'Moisture-evaporating ventilation conveyors stabilizing treated splints to meet all-weather ignition standards.'
  },

  // Unit 2 (Photos 6 to 10): Box Making, Duplex Shells & Inner Trays
  {
    id: 'm-06',
    title: 'Unit 2 — Duplex Board High-Speed Rotary Cutter',
    category: 'Unit 2: Box Making & Duplex',
    unitTag: 'Unit 2 • Board Cutting',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1000',
    caption: 'Industrial cutting and creasing machinery transforming virgin duplex paperboard into outer sleeves and inner matchbox trays.'
  },
  {
    id: 'm-07',
    title: 'Unit 2 — Automated Outer Box Folding & Pasting Line',
    category: 'Unit 2: Box Making & Duplex',
    unitTag: 'Unit 2 • Shell Folding',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000',
    caption: 'High-speed automated folder-gluers manufacturing sturdy, moisture-resistant outer matchbox shells.'
  },
  {
    id: 'm-08',
    title: 'Unit 2 — Precision Inner Match Tray Assembly Machine',
    category: 'Unit 2: Box Making & Duplex',
    unitTag: 'Unit 2 • Tray Forming',
    image: 'https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?w=1000',
    caption: 'Precision tray-forming line ensuring smooth sliding movement without jamming or loose matchstick spillage.'
  },
  {
    id: 'm-09',
    title: 'Unit 2 — Trademark Label Offset Printing & Curing Press',
    category: 'Unit 2: Box Making & Duplex',
    unitTag: 'Unit 2 • Printing Press',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1000',
    caption: 'Multi-color industrial press printing certified trademark artworks for JEEVAN and TEHLA brand safety matches.'
  },
  {
    id: 'm-10',
    title: 'Unit 2 — Side Friction Coating Applicator Line',
    category: 'Unit 2: Box Making & Duplex',
    unitTag: 'Unit 2 • Friction Roller',
    image: 'https://images.unsplash.com/photo-1581093806997-124204d9fa9d?w=1000',
    caption: 'Automated roller coater applying specialized red phosphorus striking compound along the box side edges.'
  },

  // Unit 3 (Photos 11 to 13): Automated Packaging, Bundling & Warehouse
  {
    id: 'm-11',
    title: 'Unit 3 — High-Speed Automated Stick Filling Machine',
    category: 'Unit 3: Packaging & Warehouse',
    unitTag: 'Unit 3 • Match Filling',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1000',
    caption: 'Optical counting sensors dispensing accurate stick quantities (27s, 30s, 50s) and inserting trays into shells.'
  },
  {
    id: 'm-12',
    title: 'Unit 3 — 10-Box Retail Cellophane Wrapping Carousel',
    category: 'Unit 3: Packaging & Warehouse',
    unitTag: 'Unit 3 • Cellophane Wrap',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1000',
    caption: 'High-speed bundling machinery sealing 10 matchboxes in airtight moisture-barrier cellophane film for trade resale.'
  },
  {
    id: 'm-13',
    title: 'Unit 3 — Finished Goods Warehouse & Master Bales Bay',
    category: 'Unit 3: Packaging & Warehouse',
    unitTag: 'Unit 3 • Bulk Warehouse',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000',
    caption: 'Expansive warehouse holding 1,000-box master export bales and corrugated wholesale cartons ready for wholesale dispatch.'
  },

  // Quality Lab & Loading Bay (Photos 14 to 15)
  {
    id: 'm-14',
    title: 'Plant Quality Control & Single-Strike Testing Lab',
    category: 'Quality & Loading Bay',
    unitTag: 'QC Laboratory',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1000',
    caption: 'Batch-testing laboratory evaluating single-strike flame sensitivity, wood bending modulus, and humidity resistance.'
  },
  {
    id: 'm-15',
    title: 'Factory Staging Bay & Wholesale Dispatch Dock',
    category: 'Quality & Loading Bay',
    unitTag: 'Dispatch Dock',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1000',
    caption: 'Dedicated covered loading dock where wholesale match consignments and master bales are staged for all-India dealer distribution.'
  }
];

export const COMPANY_CONTACT = {
  name: 'JEEVAN SAFETY MATCHES',
  groupName: 'Veenus Group',
  brandName: 'Jeevan Safety Matches',
  flagshipBrand: 'Jeevan Safety Matches (Regd. No.: 3481060)',
  matchDivision: 'Jeevan Safety Matches (3 Manufacturing Units)',
  sisterConcerns: [
    'Veenus Match Works (Largest Manufacturing Unit)',
    'United Match Industries',
    'The Cauveri Matches'
  ],
  sisterConcernsDisplay: 'Veenus Match Works, United Match Industries & The Cauveri Matches',
  largestUnit: 'Veenus Match Works',
  manufacturingUnitsCount: '3 Manufacturing Units',
  infrastructureSummary: '3 Industrial Manufacturing Plants',
  distributionNetwork: 'All-India Wholesale Network',
  monthlyProduction: '50,000+ Bundles',
  monthlyProductionDisplay: '50,000+ Bundles / Month (50K Sales)',
  monthlyProductionDescription: 'Consistent wholesale production capacity of approximately 50,000 bundles across our manufacturing plants.',
  cauveriTravelsFleet: '10+ Omni Buses',
  cauveriTravelsSummary: 'Entered the omni bus transportation sector under the name Sri Cauveri Travels, operating a modern fleet of more than 10 omni buses.',
  establishedYear: '1979',
  founder: 'Mr. M. Subburam (Established 1979)',
  founderName: 'Mr. M. Subburam',
  founderRole: 'Founder & Visionary (Established 1979)',
  founderPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
  founderBio: 'Established Jeevan Safety Matches (Regd. No.: 3481060) in 1979 in Srivilliputhur. Instilled the foundational standard that the quality of even a single matchstick reflects the honor and reputation of the brand.',
  managingDirector: 'Mr. S. Hariharan (Son of Mr. M. Subburam)',
  managingDirectorName: 'Mr. S. Hariharan',
  managingDirectorRole: 'Managing Director (Son of Mr. M. Subburam)',
  managingDirectorPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
  managingDirectorBio: 'Guiding the company through ongoing technological modernization, high-speed automated machinery expansion across all 3 sister units, and nationwide wholesale distribution.',
  managingPartners: 'Mr. S. Hariharan (Managing Director)',
  management: 'Mr. S. Hariharan (Managing Director)',
  tagline: 'Jeevan Safety Matches (Regd. No.: 3481060)',
  phoneDisplay: '04563 262657',
  phoneCall: '+914563262657',
  mobileDisplay: '+91 99524 11077',
  mobileCall: '+919952411077',
  whatsappNumber: '919952411077',
  whatsappDisplay: '+91 99524 11077',
  email: 'veenusmatchworks@gmail.com',
  address: '3/19/A, Venkateswarpuram, Perumalpatti Road, Aladipatti, Srivilliputhur, Virudhunagar, Tamil Nadu - 626125',
  shortAddress: 'Aladipatti, Srivilliputhur, Virudhunagar, Tamil Nadu - 626125',
  hours: 'Monday to Saturday: 8:00 AM - 8:30 PM',
  aboutHeroTitle: 'About Us — Jeevan Safety Matches',
  aboutHeroSubtitle: 'Established in 1979 by Mr. M. Subburam, Jeevan Safety Matches carries a legacy of quality, trust and dedication.',
  aboutHeroDescription: 'Today, under the leadership of his son, Mr. S. Hariharan, the company continues its journey with the same commitment to excellence, achieving wholesale sales and production of approximately 50,000+ Bundles.',
  aboutQualityPhilosophy: 'At Jeevan Safety Matches, quality is our identity. We believe that the quality of even a single matchstick reflects the reputation of our brand. With decades of experience and a strong commitment to consistency, we strive to maintain the trust of our customers across every wholesale market and retail dealership.',
  aboutSisterConcernsText: 'Our manufacturing strength is supported by three sister concerns: Veenus Match Works, United Match Industries, and The Cauveri Matches. Among these, Veenus Match Works is our largest manufacturing unit. All three manufacturing units are equipped with advanced high-speed machinery and modern industrial infrastructure.',
  aboutCauveriTravelsHeading: 'Expanding Beyond Matches — Sri Cauveri Travels',
  aboutCauveriTravelsText: 'Expanding beyond the matches industry under the leadership of Mr. S. Hariharan, we entered the omni bus transportation sector under the name Sri Cauveri Travels, which currently operates an active fleet of more than 10 omni buses. Through our commitment to quality, advanced infrastructure, and continuous expansion into new industries, we remain dedicated to building a strong legacy for the future.'
};

// ============================================================================
// ADMIN PANEL DATA STRUCTURES & INITIAL MOCK DATA
// ============================================================================

export interface AdminInquiry {
  id: string;
  customerName: string;
  companyName: string;
  phone: string;
  location: string;
  type: 'Wholesale Safety Matches' | 'Dealership Inquiry' | 'Contract Supply';
  product: string;
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

export interface MachineryLineStatus {
  id: string;
  name: string;
  unit: 'Unit 1: Veenus Match Works' | 'Unit 2: United Match Industries' | 'Unit 3: The Cauveri Matches';
  type: string;
  speed: string;
  status: 'Operational' | 'Maintenance' | 'Standby';
  operator: string;
}

export const INITIAL_ADMIN_INQUIRIES: AdminInquiry[] = [];

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
    balesInStock: 120,
    boxesPerBale: 1000,
    dailyProductionBales: 25,
    reorderLevel: 90,
    status: 'High Demand'
  }
];

export const INITIAL_MACHINERY_LINES: MachineryLineStatus[] = [
  {
    id: 'MCH-01',
    name: 'Continuous Match-Frame Machine & Splint Infeed',
    unit: 'Unit 1: Veenus Match Works',
    type: 'High-Speed Automated Frame Infeed',
    speed: '1,200 frames / hour',
    status: 'Operational',
    operator: 'M. Palanichamy (Lead Technician)'
  },
  {
    id: 'MCH-02',
    name: 'Precision Chemical Head Dipping Carousel',
    unit: 'Unit 1: Veenus Match Works',
    type: 'Temperature-Regulated Dipping Tank',
    speed: 'Uniform Head Deposition',
    status: 'Operational',
    operator: 'R. Ganesan (Chemical Deck)'
  },
  {
    id: 'MCH-03',
    name: 'Continuous Industrial Drying Tunnel System',
    unit: 'Unit 1: Veenus Match Works',
    type: 'Multi-Zone Moisture Extraction',
    speed: 'Continuous Belt Conveyor',
    status: 'Operational',
    operator: 'S. Karuppasamy'
  },
  {
    id: 'MCH-04',
    name: 'High-Grade Wooden Splint Carbonization Chambers',
    unit: 'Unit 1: Veenus Match Works',
    type: 'Vacuum Impregnation Autoclave',
    speed: 'Anti-Afterglow Treatment',
    status: 'Operational',
    operator: 'V. Sundaram'
  },
  {
    id: 'MCH-05',
    name: 'Vibratory Splint Sorting & Quality Screening Line',
    unit: 'Unit 2: United Match Industries',
    type: 'Dual-Deck Vibratory Screen',
    speed: '100% Defect-Free Splints',
    status: 'Operational',
    operator: 'K. Muthuraman'
  },
  {
    id: 'MCH-06',
    name: 'Precision Duplex Cardboard Outer Box Folding Line',
    unit: 'Unit 2: United Match Industries',
    type: 'Automated Rotary Folder-Gluer',
    speed: '450 shells / min',
    status: 'Operational',
    operator: 'P. Selvam'
  },
  {
    id: 'MCH-07',
    name: 'Inner Match Tray Assembly & Creasing Machine',
    unit: 'Unit 2: United Match Industries',
    type: 'Automated Tray Form-Paster',
    speed: '420 trays / min',
    status: 'Operational',
    operator: 'A. Murugesan'
  },
  {
    id: 'MCH-08',
    name: 'Automated Matchbox Filling & Tray Insertion Carousel',
    unit: 'Unit 3: The Cauveri Matches',
    type: 'Optical Counting & Box Pusher',
    speed: '380 boxes / min',
    status: 'Operational',
    operator: 'T. Arumugam'
  },
  {
    id: 'MCH-09',
    name: 'Multi-Color Trademark Label Offset Printing & Curing',
    unit: 'Unit 3: The Cauveri Matches',
    type: 'UV Offset Press (Jeevan / Tehla)',
    speed: 'High-Definition Registration',
    status: 'Operational',
    operator: 'M. Senthilkumar'
  },
  {
    id: 'MCH-10',
    name: 'Quality-Inspection Vision Cameras & Carton Packing',
    unit: 'Unit 3: The Cauveri Matches',
    type: 'Automated Vision QC & Baling Machine',
    speed: '1,000-Box Master Bales',
    status: 'Operational',
    operator: 'N. Radhakrishnan (QC Incharge)'
  }
];
