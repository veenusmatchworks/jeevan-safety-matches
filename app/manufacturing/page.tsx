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
import { COMPANY_CONTACT, MANUFACTURING_15_PHOTOS, ManufacturingPhoto } from '@/lib/data';
import { VeenusLogo } from '@/components/VeenusLogo';

export default function ManufacturingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Photos');
  const [lightboxPhoto, setLightboxPhoto] = useState<ManufacturingPhoto | null>(null);

  const categories = [
    'All Photos',
    'Unit 1: Chemical & Splints',
    'Unit 2: Box Making & Duplex',
    'Unit 3: Packaging & Warehouse',
    'Quality & Loading Bay'
  ];

  const filteredPhotos = MANUFACTURING_15_PHOTOS.filter((photo) => {
    if (selectedCategory === 'All Photos') return true;
    return photo.category === selectedCategory;
  });

  return (
    <div className="py-10 space-y-14">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
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
              Established in <strong>1979 by Mr. M. Subburam</strong>, Jeevan Safety Matches (Regd. No.: 3481060) carries a legacy of quality, trust and dedication. Today, under the leadership of his son, <strong>Mr. S. Hariharan</strong>, our manufacturing strength is supported by three sister concerns: <strong>Veenus Match Works</strong> (our largest manufacturing unit), <strong>United Match Industries</strong>, and <strong>The Cauveri Matches</strong>. With high-speed machinery and modern industrial infrastructure, we deliver consistent, uncompromised single-strike quality for dealers and distributors nationwide.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>3 Manufacturing Sister Concerns</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Veenus Match Works (Largest Manufacturing Unit)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Factory Photo Showcase</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>All-India Wholesale Supply</span>
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
              Sister Concerns & Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Our 3 Manufacturing Units
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Supported by three sister concerns in Srivilliputhur, equipped with advanced high-speed machinery for large-scale production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Unit 1: Veenus Match Works */}
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-red-200 p-6 space-y-4 shadow-sm hover:shadow-lg transition-all relative">
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-red-700 text-white shadow-xs">
                  Largest Unit
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-red-50 text-red-700 border border-red-200 flex items-center justify-center font-black text-sm">
                  01
                </span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Veenus Match Works</h3>
                <p className="text-xs text-red-700 font-bold">Our Largest Manufacturing Unit &bull; Srivilliputhur</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our flagship central manufacturing installation operating high-speed automated match production, chemical formulation, precision dipping, and heavy wholesale dispatch.
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>High-speed match-frame & dipping machinery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Heavy wholesale bundle staging & dispatch</span>
                </div>
              </div>
            </div>

            {/* Unit 2: United Match Industries */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 p-6 space-y-4 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center font-black text-sm">
                  02
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  Sister Concern
                </span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">United Match Industries</h3>
                <p className="text-xs text-amber-700 font-bold">High-Speed Box & Splint Operations</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized production facility equipped with precision splint-sorting, inner and outer duplex box-making, and high-velocity automated box filling lines.
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Splint-sorting & matchbox-making systems</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Automated matchbox-filling & friction coating</span>
                </div>
              </div>
            </div>

            {/* Unit 3: The Cauveri Matches */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 p-6 space-y-4 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all">
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-black text-sm">
                  03
                </span>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  Sister Concern
                </span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">The Cauveri Matches</h3>
                <p className="text-xs text-emerald-700 font-bold">Packaging & Quality Assurance</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Advanced manufacturing unit hosting industrial drying chambers, multi-color branding and labelling, digital quality inspection, and carton-packing lines.
              </p>
              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Industrial drying & quality-inspection systems</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Automated carton-packing & bundle wrapping</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 10 Advanced Machinery & Industrial Infrastructure Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-sm space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Modern Industrial Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              10 Advanced High-Speed Machinery Lines
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              All three manufacturing units are equipped with advanced industrial equipment supporting large-scale manufacturing, efficient production processes, and consistent single-strike product quality.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-2">
            {[
              { num: '01', name: 'Splint-Making Machines', desc: 'Precision timber cutting & uniform wooden splints' },
              { num: '02', name: 'Splint-Sorting Machines', desc: 'Calibrated vibration sieve & defect elimination' },
              { num: '03', name: 'Match-Frame Machines', desc: 'High-speed automated splint alignment frames' },
              { num: '04', name: 'Match-Head Dipping', desc: 'Accurate chemical formulation & compound dip' },
              { num: '05', name: 'Industrial Drying Systems', desc: 'Temperature-controlled continuous damp-proof curing' },
              { num: '06', name: 'Matchbox-Making Machines', desc: 'Duplex paper board precision crease & folding' },
              { num: '07', name: 'Automated Box Filling', desc: 'Accurate count insertion into sliding trays' },
              { num: '08', name: 'Printing & Labelling', desc: 'High-definition brand label registration' },
              { num: '09', name: 'Quality-Inspection Systems', desc: 'Defect rejection, strike testing & safety standards' },
              { num: '10', name: 'Carton-Packing Machinery', desc: 'Bale bundling, shrink sealing & master carton pack' },
            ].map((m) => (
              <div key={m.num} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 hover:border-red-300 transition-all">
                <span className="text-[11px] font-black text-red-700 bg-red-50 px-2 py-0.5 rounded-md border border-red-200">
                  {m.num}
                </span>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">{m.name}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Manufacturing Photos Grid */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Company Photo Showcase
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Manufacturing Facilities & Factory Photos
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Authentic factory machinery, chemical decks, box lines, packaging carousels, and staging bays across our 3 units.
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
            <span>Factory Infrastructure & Industrial Machinery</span>
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
