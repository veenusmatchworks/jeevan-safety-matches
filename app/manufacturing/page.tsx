'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Factory,
  Maximize2,
  X,
  MessageCircle,
  Phone,
  CheckCircle2,
  Building2,
  Layers,
  ArrowRight,
  ShieldCheck,
  Package,
  Sparkles
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data';
import { VeenusLogo } from '@/components/VeenusLogo';

interface ManufacturingPhoto {
  id: string;
  title: string;
  category: 'Unit 1: Chemical & Splints' | 'Unit 2: Box Making & Duplex' | 'Unit 3: Packaging & Warehouse' | 'Quality & Loading Bay';
  unitTag: string;
  image: string;
  caption: string;
}

const MANUFACTURING_15_PHOTOS: ManufacturingPhoto[] = [
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
    caption: 'Expansive warehouse holding 1,000-box master export bales and corrugated wholesale cartons ready for highway transport.'
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
    title: 'Factory Loading Dock & Direct Freight Transit Bay',
    category: 'Quality & Loading Bay',
    unitTag: 'Dispatch Dock',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=1000',
    caption: 'Dedicated covered loading dock where commercial heavy freight lorries receive wholesale match consignments for all-India dispatch.'
  }
];

export default function ManufacturingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Photos (15)');
  const [lightboxPhoto, setLightboxPhoto] = useState<ManufacturingPhoto | null>(null);

  const categories = [
    'All Photos (15)',
    'Unit 1: Chemical & Splints',
    'Unit 2: Box Making & Duplex',
    'Unit 3: Packaging & Warehouse',
    'Quality & Loading Bay'
  ];

  const filteredPhotos = MANUFACTURING_15_PHOTOS.filter((photo) => {
    if (selectedCategory === 'All Photos (15)') return true;
    return photo.category === selectedCategory;
  });

  return (
    <div className="py-10 space-y-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Banner */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-wider">
              <Factory className="w-3.5 h-3.5 text-red-700" />
              <span>Srivilliputhur &bull; 3 Manufacturing Units &bull; Est. 1979</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Manufacturing Units & <br />
              <span className="bg-gradient-to-r from-red-700 via-red-800 to-amber-700 bg-clip-text text-transparent">
                Industrial Facilities.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Established in <strong>1979 starting with a single unit</strong> in Srivilliputhur, Veenus Match Works has steadily expanded under the leadership of Managing Director <strong>Mr. S. Hariharan</strong> into <strong>3 full-scale industrial manufacturing units</strong>, operating in coordination with sister concerns <strong>United Match Industries</strong> and <strong>The Cauveri Matches</strong> to manufacture <strong>JEEVAN</strong> and <strong>TEHLA</strong> safety matches with consistent single-strike reliability and damp-proof performance.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>3 Industrial Production Units</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Sister Concerns: United Match Industries & The Cauveri Matches</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>15 Company Manufacturing Photos</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Cavery Travels (30+ Luxury Buses)</span>
              </span>
            </div>
          </div>

          <div className="hidden lg:flex shrink-0 p-4 rounded-3xl bg-slate-50 border border-slate-200">
            <VeenusLogo size="lg" />
          </div>
        </div>

        {/* The 3 Industrial Manufacturing Units Overview */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Manufacturing Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Our 3 Factory Manufacturing Plants
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Started in 1979 with 1 unit in Srivilliputhur, grown into 3 specialized industrial units.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Unit 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 p-6 space-y-4 shadow-sm hover:shadow-lg hover:border-red-200 transition-all">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-red-50 text-red-700 border border-red-200 flex items-center justify-center font-black text-sm">
                  01
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Est. 1979 Mother Plant
                </span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Unit 1 — Chemical & Splints</h3>
                <p className="text-xs text-red-700 font-semibold">Venkateswarpuram, Aladipatti</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Initial mother unit established in 1979. Handles non-toxic phosphorus formulation, wooden splint carbonization to eliminate afterglow, and automated chemical head dipping.
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Phosphorus compounding & head dipping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Carbonized wooden splint processing</span>
                </div>
              </div>
            </div>

            {/* Unit 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 p-6 space-y-4 shadow-sm hover:shadow-lg hover:border-red-200 transition-all">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center font-black text-sm">
                  02
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Box Making Plant
                </span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Unit 2 — Duplex Shell & Tray</h3>
                <p className="text-xs text-amber-700 font-semibold">Perumalpatti Industrial Road</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modern high-capacity plant dedicated to folding, pasting, and precision cutting of damp-resistant duplex outer shells and inner trays for JEEVAN & TEHLA matchboxes.
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Damp-proof outer box shell forming</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Smooth precision sliding match tray line</span>
                </div>
              </div>
            </div>

            {/* Unit 3 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 p-6 space-y-4 shadow-sm hover:shadow-lg hover:border-red-200 transition-all">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-black text-sm">
                  03
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Packaging & Dispatch
                </span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Unit 3 — Packaging & Dispatch</h3>
                <p className="text-xs text-emerald-700 font-semibold">Srivilliputhur Dispatch Terminal</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated high-speed tray filling, friction strip edge coating, 10-box cellophane banding, 100-box retail packaging, and master export bale compression.
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Automated stick count & box insertion</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct freight loading bay for highway lorries</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 15 Company Manufacturing Photos Grid */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Company Photo Showcase
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                15 Photos of Our Manufacturing Units
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Authentic factory machinery, chemical decks, box lines, packaging carousels, and loading bays across our 3 units.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-xl font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
            <span>Showing {filteredPhotos.length} of {MANUFACTURING_15_PHOTOS.length} Factory Photos</span>
            <span className="text-red-700 font-bold">Click any photo to enlarge in HD Lightbox</span>
          </div>

          {/* 15 Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setLightboxPhoto(photo)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-950/80 text-white border border-white/20 shadow-xs backdrop-blur-xs">
                      {photo.unitTag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 text-white p-2 rounded-xl backdrop-blur-xs">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-red-700 transition-colors leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-screen Lightbox Modal */}
        {lightboxPhoto && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxPhoto(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{lightboxPhoto.title}</h3>
                  <span className="text-[11px] text-red-700 font-semibold">{lightboxPhoto.unitTag} &bull; {lightboxPhoto.category}</span>
                </div>
                <button
                  onClick={() => setLightboxPhoto(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative h-[480px] w-full bg-slate-950 flex items-center justify-center">
                <Image
                  src={lightboxPhoto.image}
                  alt={lightboxPhoto.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 border-t border-slate-100">
                <p className="text-xs text-slate-600 max-w-xl">{lightboxPhoto.caption}</p>
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Veenus Match Works, I would like to inquire about your manufacturing facilities: ${lightboxPhoto.title}.`
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

        {/* Factory Contact CTA */}
        <div className="bg-gradient-to-r from-red-900 via-red-800 to-rose-950 p-8 sm:p-10 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              Direct Supply From Our 3 Srivilliputhur Units
            </h3>
            <p className="text-xs sm:text-sm text-rose-100">
              Contract manufacturing, wholesale distributor bales, or factory visit appointments.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_CONTACT.phoneCall}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-sm hover:bg-rose-50 transition-all"
            >
              <Phone className="w-4 h-4 text-red-700" />
              <span>Call: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent('Hello Veenus Group, I want to inquire about factory supply from your 3 manufacturing units.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Direct WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
