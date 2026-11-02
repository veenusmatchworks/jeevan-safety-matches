'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Flame,
  Truck,
  Filter,
  Maximize2,
  X,
  MessageCircle,
  Phone,
  Camera,
  CheckCircle2,
  Factory,
  Bus
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data';
import { VeenusLogo } from '@/components/VeenusLogo';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Matchbox Brands' | 'Cavery Travels (30 Buses)' | 'Commercial Freight' | 'Manufacturing (3 Units)';
  image: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  // 1 to 3: Real Matchbox Brands
  {
    id: 'g-01',
    title: 'JEEVAN Safety Matches (₹1.00 - 27 Sticks)',
    category: 'Matchbox Brands',
    image: '/products/jeevan-1rs-matches.jpg',
    caption: 'Official Three Fruits front artwork (Orange, Apple, Pear) with reverse skier illustration (Regd No. 3481060).'
  },
  {
    id: 'g-02',
    title: 'JEEVAN Safety Matches (₹2.00 - 50 Sticks)',
    category: 'Matchbox Brands',
    image: '/products/jeevan-2rs-matches.jpg',
    caption: 'Extended family pack with 50 long-burning carbonized matchsticks and customer care details.'
  },
  {
    id: 'g-03',
    title: 'TEHLA Safety Matches (₹1.00 - 30 Sticks)',
    category: 'Matchbox Brands',
    image: '/products/tehla-matches.jpg',
    caption: 'Renowned regional handcart cargo motif brand owned by Veenus Match Works (Regd No. 1395866).'
  },

  // 4 to 8: Cavery Travels (Fleet of 30+ Buses)
  {
    id: 'g-04',
    title: 'Cavery Travels — 54-Seater Luxury Highway Coach',
    category: 'Cavery Travels (30 Buses)',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000',
    caption: 'Flagship long-distance luxury coach for South India highway tourism and institutional travel.'
  },
  {
    id: 'g-05',
    title: 'Cavery Travels — 32-Seater AC Push-Back Coach',
    category: 'Cavery Travels (30 Buses)',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1000',
    caption: 'Comfortable air-conditioned coach tailored for family weddings and pilgrimage tours.'
  },
  {
    id: 'g-06',
    title: 'Cavery Travels — Srivilliputhur Bus Depot Lineup',
    category: 'Cavery Travels (30 Buses)',
    image: 'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=1000',
    caption: 'Part of our active 30+ bus fleet assembled at the central depot ready for 24/7 departure.'
  },
  {
    id: 'g-07',
    title: 'Cavery Travels — Executive Recliner Interior',
    category: 'Cavery Travels (30 Buses)',
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=1000',
    caption: 'Plush push-back reclining seats, individual air vents, sound system, and generous legroom.'
  },
  {
    id: 'g-08',
    title: 'Cavery Travels — Temple Pilgrimage Express',
    category: 'Cavery Travels (30 Buses)',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=1000',
    caption: 'Dedicated coaches operating spiritual tours to Rameswaram, Madurai Meenakshi, and Tirupati.'
  },

  // 9 to 11: Commercial Heavy Freight & Logistics
  {
    id: 'g-09',
    title: '10-Wheeler Commercial Heavy Haulage Lorry',
    category: 'Commercial Freight',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1000',
    caption: 'Heavy haulage truck with All-India National Permit for interstate matchbox bales and factory cargo.'
  },
  {
    id: 'g-10',
    title: '6-Wheeler Regional Freight Cargo Truck',
    category: 'Commercial Freight',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1000',
    caption: '8-Ton payload truck equipped with heavy all-weather tarpaulin for prompt Tamil Nadu deliveries.'
  },
  {
    id: 'g-11',
    title: 'Tata Ace & Maruti Omni Mini Delivery Vans',
    category: 'Commercial Freight',
    image: 'https://images.unsplash.com/photo-1559297434-fae8a1916a79?w=1000',
    caption: 'Agile vans for local retail shop replenishment, carton drops, and express point-to-point transit.'
  },

  // 12 to 15: 3 Manufacturing Units in Srivilliputhur
  {
    id: 'g-12',
    title: 'Manufacturing Unit 1 — Mother Plant (Venkateswarpuram)',
    category: 'Manufacturing (3 Units)',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000',
    caption: 'Established in 1979 in Srivilliputhur: Chemical formulation, phosphorus compounding, and splint carbonization.'
  },
  {
    id: 'g-13',
    title: 'Manufacturing Unit 2 — Box Making & Duplex Shell Line',
    category: 'Manufacturing (3 Units)',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000',
    caption: 'Modern high-speed unit producing damp-resistant outer duplex cases and precision sliding trays.'
  },
  {
    id: 'g-14',
    title: 'Manufacturing Unit 3 — Automated Packaging & Tray Insertion',
    category: 'Manufacturing (3 Units)',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=1000',
    caption: 'Advanced automated machinery ensuring accurate stick count (27s, 30s, 50s) and side friction coating.'
  },
  {
    id: 'g-15',
    title: 'Warehouse & Master Baling Dispatch Bay',
    category: 'Manufacturing (3 Units)',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000',
    caption: '1,000-box tarpaulin-wrapped master export bales staged for direct loading onto Veenus lorries.'
  }
];

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Matchbox Brands',
    'Cavery Travels (30 Buses)',
    'Commercial Freight',
    'Manufacturing (3 Units)'
  ];

  const filtered = GALLERY_ITEMS.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.category === selectedFilter;
  });

  return (
    <div className="py-10 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Banner */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>Complete Visual Showcase &bull; 15 High-Resolution Photos</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Factory, Fleet & Travels Gallery
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Explore 15 authentic photo features showcasing our <strong>JEEVAN & TEHLA</strong> safety match brands, <strong>Cavery Travels (30+ Luxury Buses)</strong>, commercial freight lorries, and our <strong>3 manufacturing units</strong> in Srivilliputhur.
            </p>
          </div>

          <div className="hidden md:flex shrink-0 p-3 rounded-2xl bg-slate-50 border border-slate-200">
            <VeenusLogo size="lg" />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1.5 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-red-700" />
            <span>Category:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`text-xs px-4 py-2 rounded-xl transition-all font-bold ${
                selectedFilter === cat
                  ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Count Pill */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
          <span>Showing {filtered.length} of {GALLERY_ITEMS.length} Photos</span>
          <span className="text-red-700 font-bold">Click any photo to enlarge in HD Lightbox</span>
        </div>

        {/* 15 Photos Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative h-64 w-full bg-slate-50 overflow-hidden flex items-center justify-center p-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-slate-800 border border-slate-200 shadow-2xs">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 text-white p-2 rounded-xl">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 space-y-1">
                <h3 className="font-bold text-slate-900 text-base group-hover:text-red-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{lightboxItem.title}</h3>
                  <span className="text-[11px] text-red-700 font-semibold">{lightboxItem.category}</span>
                </div>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative h-[480px] w-full bg-slate-100 flex items-center justify-center p-4">
                <Image
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 border-t border-slate-100">
                <p className="text-xs text-slate-600 max-w-xl">{lightboxItem.caption}</p>
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Veenus Group, I saw ${lightboxItem.title} in your gallery. I would like to inquire about it.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shrink-0 flex items-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
