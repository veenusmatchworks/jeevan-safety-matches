export interface Product {
  id: string;
  slug: string;
  name: string;
  code: string;
  category: 'Regular' | 'Premium' | 'Custom Printed' | 'Wholesale Packs';
  price: number; // in INR
  mrp: number;
  unit: string;
  description: string;
  longDescription: string;
  packaging: string;
  matchsticksPerBox: number;
  splintType: string;
  strikeSurface: string;
  available: boolean;
  featured: boolean;
  rating: number;
  reviewsCount: number;
  accentColor: string;
  tags: string[];
  specs: { label: string; value: string }[];
  minOrder: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  highlight: string;
  color: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Product Packaging' | 'Matchbox Collections' | 'Manufacturing' | 'Factory Equipment' | 'Custom Branding';
  description: string;
  image: string;
  aspect: 'square' | 'wide' | 'tall';
}

export interface SampleOrder {
  id: string;
  customerName: string;
  companyName: string;
  date: string;
  items: string;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Pending Verification';
  type: 'Wholesale' | 'Retail' | 'Sample Order';
}

export interface SampleEnquiry {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  enquiryType: string;
  category: string;
  quantity: string;
  date: string;
  status: 'New' | 'Responded' | 'Quoted' | 'In Progress';
  message: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    name: 'Regular Matchboxes',
    slug: 'regular',
    tagline: 'High-Volume Everyday Household Reliability',
    description: 'Dependable, moisture-resistant safety matches crafted for domestic kitchens, retail distribution, and bulk commercial utility.',
    highlight: 'Standard 40-50 Matchsticks • Carbonized Splints',
    color: '#C62828'
  },
  {
    id: 'cat-2',
    name: 'Premium Matchboxes',
    slug: 'premium',
    tagline: 'Luxury Finishing, Extended Stems & Long Burn',
    description: 'Specially engineered elongated Aspen splints with sulfur-free safety heads, housed in embossed, gold-foiled outer sleeves.',
    highlight: 'Aspen Wood Splints • Damp-Proof Formulation',
    color: '#C7A56B'
  },
  {
    id: 'cat-3',
    name: 'Custom Printed Matchboxes',
    slug: 'custom-printed',
    tagline: 'Branded Hospitality, Cigar Lounges & Events',
    description: 'Bespoke corporate identity and promotional matchbooks with 4-color offset printing, spot UV, and distinctive striking edges.',
    highlight: 'Full CMYK Offset • Custom Box Dimensions',
    color: '#2C2C2C'
  },
  {
    id: 'cat-4',
    name: 'Wholesale Matchbox Packs',
    slug: 'wholesale-packs',
    tagline: 'Master Corrugated Cartons for Distributors',
    description: 'Palletized bulk packaging designed for distributors, super-stockists, and export consignments with tamper-proof bundling.',
    highlight: '500 to 1,000 Boxes / Carton • Moisture Barrier',
    color: '#8B0000'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'pmi-001',
    slug: 'classic-red-safety-matchbox',
    name: 'Classic Red Safety Matchbox',
    code: 'PMI-CRS-001',
    category: 'Regular',
    price: 180,
    mrp: 220,
    unit: 'Bundle of 100 boxes',
    description: 'The industry-standard red safety matchbox featuring uniform carbonized splints and rapid friction ignition.',
    longDescription: 'Our flagship Classic Red Safety Matchbox is engineered for domestic, culinary, and general commercial lighting. Every splint is chemically carbonized to eradicate afterglow, preventing post-extinguish ignition hazards. Packed in sturdy recycled duplex cardboard with moisture-repellent outer varnish.',
    packaging: '10 Shrink-wrapped packs of 10 boxes (100 total)',
    matchsticksPerBox: 48,
    splintType: 'Malabar White Wood / Carbonized Pine',
    strikeSurface: 'Honeycomb Red Phosphorus Stripe',
    available: true,
    featured: true,
    rating: 4.8,
    reviewsCount: 142,
    accentColor: '#C62828',
    tags: ['Best Seller', 'Everyday Use', 'Safety Certified'],
    specs: [
      { label: 'Box Dimensions', value: '51mm x 36mm x 14mm' },
      { label: 'Stick Length', value: '42mm ± 0.5mm' },
      { label: 'Head Composition', value: 'Potassium Chlorate + Safe Binder' },
      { label: 'Average Burn Time', value: '6 - 8 Seconds' },
      { label: 'Shelf Life', value: '36 Months (Dry Storage)' },
      { label: 'Standard Compliance', value: 'IS 2653:1998 (Safety Matches)' }
    ],
    minOrder: '5 Bundles (500 Boxes)'
  },
  {
    id: 'pmi-002',
    slug: 'premium-aspen-long-matchbox',
    name: 'Premium Aspen Long Matchbox',
    code: 'PMI-PLM-002',
    category: 'Premium',
    price: 340,
    mrp: 420,
    unit: 'Pack of 50 luxury boxes',
    description: 'Extra-long imported Aspen splints crafted for scented candles, fireplaces, and luxury hospitality settings.',
    longDescription: 'Elevate ignition ceremonies with our flagship Aspen long-stem matches. Specially selected European Aspen wood yields a clean, odorless flame without smoke or resin residue. The matte-touch charcoal exterior with metallic gold foil stamping presents an exquisite impression for high-end boutique properties.',
    packaging: '5 Rigid drawer-slide gift cartons of 10 boxes',
    matchsticksPerBox: 45,
    splintType: 'Grade-A Select European Aspen Wood',
    strikeSurface: 'High-Density Fine Red Phosphorus Matrix',
    available: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 98,
    accentColor: '#C7A56B',
    tags: ['Luxury Grade', 'Candle & Fireplace', 'Odorless Burn'],
    specs: [
      { label: 'Box Dimensions', value: '75mm x 42mm x 16mm' },
      { label: 'Stick Length', value: '65mm ± 0.5mm' },
      { label: 'Outer Sleeve', value: '350 GSM Matte Card with Gold Foil' },
      { label: 'Head Color', value: 'Sovereign Black / Amber Gold' },
      { label: 'Flame Stability', value: 'Wind-Resistant Head Compound' },
      { label: 'Standard Compliance', value: 'CE / ISO 9001 Certified QA' }
    ],
    minOrder: '2 Packs (100 Boxes)'
  },
  {
    id: 'pmi-003',
    slug: 'everyday-household-economy-pack',
    name: 'Everyday Household Economy Pack',
    code: 'PMI-EHM-003',
    category: 'Regular',
    price: 125,
    mrp: 150,
    unit: 'Bundle of 100 boxes',
    description: 'Value-optimized reliable safety matchboxes designed for retail convenience stores and kirana distribution networks.',
    longDescription: 'Engineered for FMCG high-velocity turnaround, the Everyday Household series delivers unmatched unit economics without sacrificing ignition reliability. Strict quality controls ensure 99.4% first-strike ignition even in humid subtropical weather conditions.',
    packaging: 'Poly-bag sealed bundle of 100 inner boxes',
    matchsticksPerBox: 40,
    splintType: 'Veneer Wood Carbonized Splints',
    strikeSurface: 'Screen-printed Red Phosphorus Stripe',
    available: true,
    featured: false,
    rating: 4.6,
    reviewsCount: 230,
    accentColor: '#171717',
    tags: ['Economy Pick', 'FMCG Wholesale', 'High Volume'],
    specs: [
      { label: 'Box Dimensions', value: '49mm x 35mm x 12mm' },
      { label: 'Stick Length', value: '40mm' },
      { label: 'Box Material', value: 'Recycled Greyback Duplex Board' },
      { label: 'Ignition Guarantee', value: '> 99% Strike Rate' },
      { label: 'Packing Ratio', value: '100 Boxes per Master Polythene' }
    ],
    minOrder: '10 Bundles (1,000 Boxes)'
  },
  {
    id: 'pmi-004',
    slug: 'custom-branded-hospitality-matchbox',
    name: 'Custom Branded Hospitality Matchbox',
    code: 'PMI-CPB-004',
    category: 'Custom Printed',
    price: 490,
    mrp: 650,
    unit: 'Set of 100 custom printed boxes',
    description: 'Full-color bespoke matchboxes tailored for restaurants, boutique hotels, bar lounges, and promotional campaigns.',
    longDescription: 'Transform matchboxes into memorable tactile brand collateral. We provide edge-to-edge CMYK offset printing with customizable match head colors (Crimson, Black, Royal Blue, Forest Green). Spot UV gloss varnishes, tactile embossings, and foil accents available upon request.',
    packaging: 'Protected master sleeve cartons of 100 units',
    matchsticksPerBox: 25,
    splintType: 'Polished Poplar Wood Stem',
    strikeSurface: 'Continuous Side Striking Band',
    available: true,
    featured: true,
    rating: 5.0,
    reviewsCount: 84,
    accentColor: '#C62828',
    tags: ['Custom Logo', 'Hotels & Cafes', 'Pantone Matched'],
    specs: [
      { label: 'Box Dimensions', value: '56mm x 24mm x 8mm (Slimline)' },
      { label: 'Printing Tech', value: 'Heidelberg 4-Color Offset + Spot UV' },
      { label: 'Paper Stock', value: '300 GSM Virgin SBS Board' },
      { label: 'Head Colors', value: 'Red, Black, Blue, Emerald, White' },
      { label: 'Lead Time', value: '7 - 10 Business Days post approval' }
    ],
    minOrder: '5 Sets (500 Boxes)'
  },
  {
    id: 'pmi-005',
    slug: 'cigar-lounge-extra-long-matchbox',
    name: 'Cigar Lounge Extra-Long Matchbox',
    code: 'PMI-CPP-005',
    category: 'Custom Printed',
    price: 890,
    mrp: 1150,
    unit: 'Pack of 50 collector drawer boxes',
    description: 'Extra-long 90mm sulfur-free wooden matches formulated for slow, pure cedar aroma ignition of fine cigars.',
    longDescription: 'Specially created for premium tobacconists and private cigar clubs. The long stem allows complete combustion of initial ignition compounds before bringing the match to the cigar foot, safeguarding the tobacco’s natural terroir and delicate bouquet.',
    packaging: 'Rigid sliding drawer presentation box',
    matchsticksPerBox: 30,
    splintType: 'Slow-Cured Canadian Cedar / Aspen',
    strikeSurface: 'Concealed Underbelly Striking Strip',
    available: true,
    featured: false,
    rating: 4.9,
    reviewsCount: 47,
    accentColor: '#C7A56B',
    tags: ['Cigar Connoisseur', '90mm Extra Long', 'Sulfur Free'],
    specs: [
      { label: 'Box Dimensions', value: '95mm x 55mm x 18mm' },
      { label: 'Match Length', value: '90mm' },
      { label: 'Finish', value: 'Velvet Soft-Touch Lamination' },
      { label: 'Burn Duration', value: '25 - 30 Seconds continuous flame' },
      { label: 'Aroma', value: 'Natural cedar wood note' }
    ],
    minOrder: '2 Packs (100 Boxes)'
  },
  {
    id: 'pmi-006',
    slug: 'retailer-bulk-master-carton',
    name: 'Retailer Supply Pack (500 Boxes)',
    code: 'PMI-RSP-006',
    category: 'Wholesale Packs',
    price: 780,
    mrp: 950,
    unit: 'Master Corrugated Carton (500 Boxes)',
    description: 'Retailer-ready display master box containing 50 shrink-wrapped retail counter displays of 10 boxes each.',
    longDescription: 'Streamlined for mid-sized wholesalers and supermarket chains. This pack includes pre-perforated counter display trays that pop up directly on checkout counters, driving impulse consumer purchases with zero store-prep downtime.',
    packaging: '5-Ply Heavy-Duty Corrugated Master Carton',
    matchsticksPerBox: 45,
    splintType: 'Veneer Poplar Splints',
    strikeSurface: 'Standard Red Phosphorus Side Stripes',
    available: true,
    featured: true,
    rating: 4.7,
    reviewsCount: 310,
    accentColor: '#8B0000',
    tags: ['Retail Ready', 'Counter Display', 'Best Wholesale Value'],
    specs: [
      { label: 'Carton Weight', value: '4.8 kg Gross' },
      { label: 'Carton Dimensions', value: '380mm x 260mm x 190mm' },
      { label: 'Boxes per Pack', value: '500 Total (50 Display Packs of 10)' },
      { label: 'Moisture Protection', value: 'Wax-coated Inner Kraft Liner' },
      { label: 'Pallet Fit', value: '48 Cartons / Standard Euro Pallet' }
    ],
    minOrder: '2 Cartons (1,000 Boxes)'
  },
  {
    id: 'pmi-007',
    slug: 'distributor-super-pack-1000',
    name: 'Bulk Distributor Pack (1,000 Boxes)',
    code: 'PMI-BDP-007',
    category: 'Wholesale Packs',
    price: 1420,
    mrp: 1750,
    unit: 'Export Grade Master Carton (1,000 Boxes)',
    description: 'High-density commercial consignment packaging optimized for regional distributors, freight shippers, and overseas export.',
    longDescription: 'Built to endure cross-country transit and sea-freight humidity. Double-fluted export cartons lined with heavy LDPE vapor barrier ensure match heads remain completely dry and strike-ready across diverse climate zones.',
    packaging: 'Export-grade 7-Ply Kraft with Reinforced Strapping',
    matchsticksPerBox: 48,
    splintType: 'Fully Carbonized Wood Splints',
    strikeSurface: 'Dual-side Industrial Strike Compound',
    available: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 185,
    accentColor: '#171717',
    tags: ['Export Grade', 'Mega Volume', 'Distributor Favorite'],
    specs: [
      { label: 'Total Units', value: '1,000 Matchboxes' },
      { label: 'Gross Weight', value: '9.4 kg' },
      { label: 'Carton Specs', value: '7-Ply Heavy Corrugated with corner guards' },
      { label: 'Moisture Ingress', value: 'Hermetically heat-sealed sub-packs' },
      { label: 'Transport Class', value: 'UN 1944 Safety Matches / Non-Hazardous' }
    ],
    minOrder: '5 Cartons (5,000 Boxes)'
  },
  {
    id: 'pmi-008',
    slug: 'signature-safety-matchbox-gold-edition',
    name: 'Signature Matchbox (Gold Edition)',
    code: 'PMI-PSM-008',
    category: 'Premium',
    price: 310,
    mrp: 380,
    unit: 'Pack of 50 luxury matchboxes',
    description: 'Distinguished matte black box accented with brushed gold foil lettering and dark charcoal match heads.',
    longDescription: 'Designed for interior styling, upscale gifting, and premium retail boutiques. Each drawer slides open smoothly to reveal perfectly aligned dark charcoal matchsticks with lustrous ruby strike tips.',
    packaging: 'Rigid presentation slide-carton with velvet pull ribbon',
    matchsticksPerBox: 50,
    splintType: 'Dyed Nordic Pine with Carbonization',
    strikeSurface: 'Concealed Lateral Striker',
    available: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 112,
    accentColor: '#C7A56B',
    tags: ['Gold Edition', 'Gifting & Decor', 'Matte Black'],
    specs: [
      { label: 'Box Dimensions', value: '58mm x 38mm x 15mm' },
      { label: 'Splint Length', value: '48mm' },
      { label: 'Foil Details', value: 'Hot-Stamped 24K Matte Gold Foil' },
      { label: 'Packaging Style', value: 'Slide Drawer with Ribbon Tab' },
      { label: 'Safety Rating', value: 'Anti-Afterglow Chemically Inerted' }
    ],
    minOrder: '2 Packs (100 Boxes)'
  },
  {
    id: 'pmi-009',
    slug: 'kitchen-fire-camp-jumbo-box',
    name: 'Jumbo Hearth & Camp Matchbox',
    code: 'PMI-JMP-009',
    category: 'Regular',
    price: 240,
    mrp: 290,
    unit: 'Pack of 20 giant household boxes',
    description: 'Extra-capacity giant box holding 250 thick matchsticks for wood stoves, tandoors, barbecues, and outdoor campfires.',
    longDescription: 'When small boxes run out too quickly, the Jumbo Hearth Matchbox steps in. Holding 250 heavy-gauge splints that ignite reliably in breezy outdoor setups, it is a staple for commercial kitchens, barbecue caterers, and outdoor enthusiasts.',
    packaging: 'Shrink-wrapped bundle of 20 jumbo boxes',
    matchsticksPerBox: 250,
    splintType: 'Thick-Cut 3mm Heavy Veneer Timber',
    strikeSurface: 'Heavy-Duty Wide Friction Pad',
    available: true,
    featured: false,
    rating: 4.7,
    reviewsCount: 76,
    accentColor: '#C62828',
    tags: ['Giant Size', '250 Sticks', 'Outdoor & Kitchen'],
    specs: [
      { label: 'Box Dimensions', value: '110mm x 65mm x 28mm' },
      { label: 'Splint Thickness', value: '3.0mm square cross-section' },
      { label: 'Stick Count', value: '250 ± 10 Matches per Box' },
      { label: 'Wind Tolerance', value: 'Dual-Dip High Heat Ignition Head' }
    ],
    minOrder: '3 Packs (60 Jumbo Boxes)'
  },
  {
    id: 'pmi-010',
    slug: 'custom-embossed-luxury-matchbook',
    name: 'Custom Embossed Luxury Matchbook',
    code: 'PMI-RHM-010',
    category: 'Custom Printed',
    price: 520,
    mrp: 690,
    unit: 'Box of 100 promotional matchbooks',
    description: 'Vintage 20-stem and 30-stem flap matchbooks with deep 3D multi-level debossing and foil edge stamping.',
    longDescription: 'A classic retro format that never goes out of style. Popular with heritage hotel properties, cocktail clubs, and premium wedding favor creators. The cardboard stems are colored throughout to complement the bespoke cover artwork.',
    packaging: 'Protected clear acrylic sleeves of 25 matchbooks',
    matchsticksPerBox: 30,
    splintType: 'Heavy Compressed Sulfur-Treated Pulp Stems',
    strikeSurface: 'Back Flap Friction Striker',
    available: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 63,
    accentColor: '#C7A56B',
    tags: ['Matchbook Style', '3D Deboss', 'Wedding & Favors'],
    specs: [
      { label: 'Style', value: 'Front-Fold Safety Matchbook' },
      { label: 'Stem Count', value: '30 Safety Stems' },
      { label: 'Cover Finish', value: 'French Cotton Paper 320 GSM' },
      { label: 'Foil Options', value: 'Rose Gold, Copper, Silver, Holographic' }
    ],
    minOrder: '5 Boxes (500 Matchbooks)'
  },
  {
    id: 'pmi-011',
    slug: 'festival-decorative-sleeve-pack',
    name: 'Festival Heritage Collection',
    code: 'PMI-FSM-011',
    category: 'Premium',
    price: 390,
    mrp: 480,
    unit: 'Gift pack of 40 decorative boxes',
    description: 'Artisanal packaging featuring timeless geometric and traditional Indian screen-printed motifs for festive gifting.',
    longDescription: 'Commemorating the time-honored connection between flame and festive ceremonies. Packed with vibrant, archival-grade screen-printed sleeves that make magnificent additions to pooja altars, festive hampers, and artisanal homeware collections.',
    packaging: 'Keepsake gold-lined presentation tin with 40 boxes',
    matchsticksPerBox: 45,
    splintType: 'Polished Seasoned Malabar Pine',
    strikeSurface: 'Micro-Dot Red Phosphorus Striker',
    available: true,
    featured: true,
    rating: 4.9,
    reviewsCount: 145,
    accentColor: '#C7A56B',
    tags: ['Festive Heritage', 'Gift Tin Included', 'Artisanal'],
    specs: [
      { label: 'Gift Tin Material', value: 'Food-grade Matte Tinplate with Gold Emboss' },
      { label: 'Boxes Inside', value: '40 Individually Designed Boxes' },
      { label: 'Artwork', value: '8 Unique Heritage Pattern Variants' },
      { label: 'Burn Duration', value: '8 - 10 Seconds tranquil burn' }
    ],
    minOrder: '2 Gift Tins (80 Boxes)'
  },
  {
    id: 'pmi-012',
    slug: 'heavy-industrial-safety-matches',
    name: 'Industrial Heavy-Duty Safety Matches',
    code: 'PMI-ISM-012',
    category: 'Regular',
    price: 260,
    mrp: 320,
    unit: 'Bundle of 100 weather-treated boxes',
    description: 'Reinforced moisture-proof matchboxes created specifically for foundries, workshops, boiler rooms, and maritime use.',
    longDescription: 'When high humidity and greasy environments cause standard match heads to crumble, our Industrial Heavy-Duty formulation excels. Each wooden splint is vacuum-impregnated with paraffin wax and moisture-shield sealant, striking reliably even after exposure to damp coastal breezes.',
    packaging: 'Sealed moisture-barrier tin foil wrapping of 100 units',
    matchsticksPerBox: 50,
    splintType: 'Wax-Treated Hardwood Splints',
    strikeSurface: 'Waterproof Synthetic Binder Striker',
    available: true,
    featured: false,
    rating: 4.8,
    reviewsCount: 92,
    accentColor: '#171717',
    tags: ['Industrial Tough', 'Water Resistant', 'Foundry Grade'],
    specs: [
      { label: 'Environmental Grade', value: 'Maritime & Heavy Industry Compliant' },
      { label: 'Water Repellency', value: 'Head resists splash & 95% RH humidity' },
      { label: 'Tensile Strength', value: 'High fracture-resistant hardwood stem' },
      { label: 'Packaging', value: 'Vacuum foil sealed pack of 100 boxes' }
    ],
    minOrder: '5 Bundles (500 Boxes)'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Automated Splint Dipping Carousel',
    category: 'Factory Equipment',
    description: 'Precision automated chemical dipping carousel treating over 12,000 Aspen splints per batch with uniform sulfur-free ignition composition.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop',
    aspect: 'wide'
  },
  {
    id: 'gal-2',
    title: 'Precision Inner Tray Assembly',
    category: 'Manufacturing',
    description: 'High-speed rotary cardboard folding and scoring machine operating at 300 boxes per minute with micro-meter tolerances.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop',
    aspect: 'square'
  },
  {
    id: 'gal-3',
    title: 'Classic Red Finished Outer Sleeves',
    category: 'Product Packaging',
    description: 'Freshly varnished and dried outer sleeves stacked in inspection bays awaiting automated matchstick insertion.',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&auto=format&fit=crop',
    aspect: 'tall'
  },
  {
    id: 'gal-4',
    title: 'Heidelberg 4-Color Offset Press',
    category: 'Factory Equipment',
    description: 'High-definition Pantone-calibrated offset printing machinery executing custom hospitality branding orders.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
    aspect: 'wide'
  },
  {
    id: 'gal-5',
    title: 'Signature Gold Foil Matchbox Collection',
    category: 'Matchbox Collections',
    description: 'Luxury collector drawer boxes with 24K hot-stamped gold foil logo and matte charcoal finish.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop',
    aspect: 'square'
  },
  {
    id: 'gal-6',
    title: 'Automated Friction Striker Screen Printing',
    category: 'Manufacturing',
    description: 'Applying proprietary water-resistant red phosphorus friction paste along the outer edges of matchbox sleeves.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&auto=format&fit=crop',
    aspect: 'tall'
  },
  {
    id: 'gal-7',
    title: 'Bespoke Hospitality Client Showcase',
    category: 'Custom Branding',
    description: 'A curated showcase of custom matchbooks and slimline boxes manufactured for fine dining venues and boutique resorts.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=800&auto=format&fit=crop',
    aspect: 'wide'
  },
  {
    id: 'gal-8',
    title: 'Timber Splint Quality & Moisture Inspection',
    category: 'Manufacturing',
    description: 'Continuous electronic moisture-metering bench confirming wood humidity levels remain strictly beneath 8%.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop',
    aspect: 'square'
  },
  {
    id: 'gal-9',
    title: 'Wholesale Master Cartons Palletization',
    category: 'Product Packaging',
    description: 'Reinforced corrugated cartons packed and strapped on heat-treated wooden pallets ready for interstate freight dispatch.',
    image: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=800&auto=format&fit=crop',
    aspect: 'tall'
  },
  {
    id: 'gal-10',
    title: 'Cigar Lounge Extra-Long Match Series',
    category: 'Matchbox Collections',
    description: '90mm slow-burn matches stored in cedarwood sliding cases formulated for cigar smokers.',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=800&auto=format&fit=crop',
    aspect: 'wide'
  },
  {
    id: 'gal-11',
    title: 'Artisanal Festival Special Edition',
    category: 'Custom Branding',
    description: 'Heritage series featuring traditional Indian screen-printed motifs housed in decorative gold-accented presentation boxes.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop',
    aspect: 'square'
  },
  {
    id: 'gal-12',
    title: 'Optoelectronic Spark & Strike Safety Testing',
    category: 'Factory Equipment',
    description: 'Laboratory friction wheel testing rig sampling 1 box in every 500 for strike force, spark containment, and afterglow duration.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop',
    aspect: 'tall'
  }
];

export const SAMPLE_ORDERS: SampleOrder[] = [
  {
    id: 'PMI-ORD-8821',
    customerName: 'Rajesh Mehta',
    companyName: 'Apex Wholesale Distribution Ltd.',
    date: '2026-10-22',
    items: 'Distributor Super Pack (10 Cartons)',
    total: 14200,
    status: 'Processing',
    type: 'Wholesale'
  },
  {
    id: 'PMI-ORD-8820',
    customerName: 'Vikram Singhania',
    companyName: 'The Grand Heritage Palace Hotel',
    date: '2026-10-21',
    items: 'Custom Branded Hospitality Matchbox (1,500 Units)',
    total: 7350,
    status: 'Shipped',
    type: 'Wholesale'
  },
  {
    id: 'PMI-ORD-8819',
    customerName: 'Ananya Sharma',
    companyName: 'Amber & Ash Artisanal Living',
    date: '2026-10-20',
    items: 'Premium Aspen Long Matchbox (6 Packs)',
    total: 2040,
    status: 'Delivered',
    type: 'Retail'
  },
  {
    id: 'PMI-ORD-8818',
    customerName: 'Kavita Sundaram',
    companyName: 'Sundaram FMCG Supermarkets',
    date: '2026-10-19',
    items: 'Everyday Household Economy Pack (40 Bundles)',
    total: 5000,
    status: 'Delivered',
    type: 'Wholesale'
  },
  {
    id: 'PMI-ORD-8817',
    customerName: 'Devendra Nair',
    companyName: 'Smokers Sanctuary Club',
    date: '2026-10-18',
    items: 'Cigar Lounge Extra-Long Matchbox (8 Packs)',
    total: 7120,
    status: 'Delivered',
    type: 'Retail'
  },
  {
    id: 'PMI-ORD-8816',
    customerName: 'Mohit Agarwal',
    companyName: 'National Hardware & Foundry Supplies',
    date: '2026-10-16',
    items: 'Industrial Safety Matches (15 Bundles)',
    total: 3900,
    status: 'Delivered',
    type: 'Wholesale'
  },
  {
    id: 'PMI-ORD-8815',
    customerName: 'Sneha Patel',
    companyName: 'Vedic Scents Luxury Candles',
    date: '2026-10-15',
    items: 'Signature Matchbox Gold Edition (4 Packs)',
    total: 1240,
    status: 'Delivered',
    type: 'Sample Order'
  },
  {
    id: 'PMI-ORD-8814',
    customerName: 'Gurpreet Singh',
    companyName: 'Punjab Agro-Chemicals & Logistics',
    date: '2026-10-14',
    items: 'Retailer Supply Pack (5 Master Cartons)',
    total: 3900,
    status: 'Delivered',
    type: 'Wholesale'
  }
];

export const SAMPLE_ENQUIRIES: SampleEnquiry[] = [
  {
    id: 'PMI-ENQ-409',
    name: 'Alok Bhattacharya',
    company: 'Bengal Tobacco & Cigar Confraternity',
    email: 'alok.bhatt@bengalcigar.in',
    phone: '+91 98301 44290',
    enquiryType: 'Custom Manufacturing',
    category: 'Custom Printed',
    quantity: '5,000 Custom Boxes with Spot UV',
    date: '2026-10-23',
    status: 'New',
    message: 'We require a custom slide-out matchbox with black wooden splints and golden tips for our annual members dinner in Kolkata.'
  },
  {
    id: 'PMI-ENQ-408',
    name: 'Priya Kulkarni',
    company: 'Taj Vivanta F&B Operations',
    email: 'p.kulkarni@tajvivanta-example.com',
    phone: '+91 98220 55182',
    enquiryType: 'Wholesale Order',
    category: 'Custom Printed',
    quantity: '25,000 slimline matchboxes annually',
    date: '2026-10-21',
    status: 'Quoted',
    message: 'Looking for a verified manufacturing partner for annual supply of branded restaurant matchboxes across 4 Maharashtra properties.'
  },
  {
    id: 'PMI-ENQ-407',
    name: 'Harish Chawla',
    company: 'Chawla Kirana Super-Stockists',
    email: 'harish@chawlastockists-sample.com',
    phone: '+91 94140 12890',
    enquiryType: 'Wholesale Order',
    category: 'Wholesale Packs',
    quantity: '50 Master Cartons per month',
    date: '2026-10-19',
    status: 'In Progress',
    message: 'Requesting distributor wholesale rate sheet and CIF transport rates for delivery to our central warehouse in Jaipur.'
  },
  {
    id: 'PMI-ENQ-406',
    name: 'Maria Fernandez',
    company: 'Casa Sol Boutique Resorts Goa',
    email: 'maria@casasolgoa-demo.com',
    phone: '+91 98230 77109',
    enquiryType: 'Product Information',
    category: 'Premium',
    quantity: '500 luxury matchboxes',
    date: '2026-10-18',
    status: 'Responded',
    message: 'Can you provide physical samples of the Signature Gold Edition and Premium Aspen Long boxes before we finalize a bulk order?'
  },
  {
    id: 'PMI-ENQ-405',
    name: 'Suresh Nambiar',
    company: 'Malabar Shipping & Marine Stores',
    email: 'stores@malabarshipping-example.in',
    phone: '+91 94470 33812',
    enquiryType: 'General Enquiry',
    category: 'Regular',
    quantity: '100 Bundles Industrial Safety Matches',
    date: '2026-10-16',
    status: 'Responded',
    message: 'Please confirm safety match compliance with maritime non-hazardous consignment classifications for vessel replenishment.'
  },
  {
    id: 'PMI-ENQ-404',
    name: 'Tanya Dewan',
    company: 'Dewan Wedding Planners & Co.',
    email: 'tanya@dewanweddings-demo.in',
    phone: '+91 99100 88234',
    enquiryType: 'Business Partnership',
    category: 'Custom Printed',
    quantity: '1,200 keepsake matchboxes',
    date: '2026-10-14',
    status: 'Quoted',
    message: 'Looking to produce personalized commemorative matchbooks with foil-stamped couple monograms for a destination wedding in Udaipur.'
  }
];

export const MANUFACTURING_STEPS = [
  {
    step: '01',
    title: 'Raw Timber Seasoning & Peeling',
    subtitle: 'Wood Conditioning',
    description: 'Select logs of Aspen and Malabar pine are debarked and steamed to exact moisture tolerances, then rotary peeled into continuous micro-veneer ribbons.',
    details: ['Aspen & Nordic Pine selection', 'Rotary veneer peeling to 2.2mm thickness', 'Automated moisture indexing < 8%'],
    stat: '99.8%',
    statLabel: 'Splint Straightness'
  },
  {
    step: '02',
    title: 'Splint Chopping & Carbonization',
    subtitle: 'Chemical Safety Treatment',
    description: 'Veneers are chopped into uniform splints and vacuum-impregnated with ammonium phosphate to eliminate afterglow, ensuring zero post-burn ember danger.',
    details: ['Ammonium phosphate anti-afterglow bath', 'Tumbler de-dusting and polishing', 'High-velocity warm air chamber drying'],
    stat: '0.0s',
    statLabel: 'Afterglow Duration'
  },
  {
    step: '03',
    title: 'Automated Dipping & Head Formation',
    subtitle: 'Pyrotechnic Chemical Dip',
    description: 'Splints are inserted into continuous chain perforated plates, pre-heated, paraffin-dipped for sustained burn, and tipped in sulfur-free ignition composition.',
    details: ['Micro-paraffin wax absorption zone', 'Potassium chlorate pyrotechnic binder slurry', 'Multi-stage climate-controlled drying tunnel'],
    stat: '12,000',
    statLabel: 'Sticks Dipped / Min'
  },
  {
    step: '04',
    title: 'Cardboard Box Folding & Friction Striking',
    subtitle: 'Precision Packaging & Striker',
    description: 'Inner sliding trays and outer duplex sleeves are scored, folded, and glued. A proprietary water-resistant red phosphorus friction paste is screen-applied.',
    details: ['High-speed 300 ppm folding machines', 'Red phosphorus + abrasive binder coating', 'Heidelberg offset printing integration'],
    stat: '300 ppm',
    statLabel: 'Assembly Velocity'
  },
  {
    step: '05',
    title: 'Optoelectronic Inspection & Dispatch',
    subtitle: 'Quality Assurance & Packing',
    description: 'Automated optical cameras inspect box fill-count, striking surface continuity, and print alignment before shrink-bundling into corrugated master cartons.',
    details: ['Vision camera check for 100% count accuracy', 'Friction spark calibration sampling', 'Moisture-barrier shrink wrapping'],
    stat: '100%',
    statLabel: 'Batch Traceability'
  }
];
