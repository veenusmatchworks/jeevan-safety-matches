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
  wholesaleSales: '45,000 Bundles',
  wholesaleSalesDisplay: 'Approx. 45,000 Bundles',
  establishedYear: '1979',
  founder: 'Mr. M. Subburam (Established 1979)',
  managingDirector: 'Mr. S. Hariharan (Son of Mr. M. Subburam)',
  managingPartners: 'Mr. S. Hariharan (Managing Director)',
  management: 'Mr. S. Hariharan (Managing Director)',
  tagline: 'Jeevan Safety Matches (Regd. No.: 3481060)',
  phoneDisplay: '04563 262657',
  phoneCall: '+914563262657',
  mobileDisplay: '+91 98421 56789',
  mobileCall: '+919842156789',
  whatsappNumber: '919842156789',
  whatsappDisplay: '+91 98421 56789',
  email: 'veenusmatchworks@gmail.com',
  address: '3/19/A, Venkateswarpuram, Perumalpatti Road, Aladipatti, Srivilliputhur, Virudhunagar, Tamil Nadu - 626125',
  shortAddress: 'Aladipatti, Srivilliputhur, Virudhunagar, Tamil Nadu - 626125',
  hours: 'Monday to Saturday: 8:00 AM - 8:30 PM'
};
