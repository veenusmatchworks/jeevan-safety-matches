'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Flame,
  Building,
  ShieldCheck,
  CheckCircle2,
  Award,
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  Building2,
  Sparkles,
  Factory,
  Cog,
  Layers,
  Check
} from 'lucide-react';
import {
  VEENUS_MATCH_PRODUCTS,
  COMPANY_CONTACT,
  MANUFACTURING_15_PHOTOS
} from '@/lib/data';
import { VeenusLogo } from '@/components/VeenusLogo';

export default function HomePage() {
  const getWhatsAppProductUrl = (prodName: string) => {
    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
      `Hello Veenus Match Works, I want to inquire about purchasing: ${prodName}. Please share wholesale price list and minimum order quantity.`
    )}`;
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* ============================================================== */}
      {/* 1. HERO SECTION (Industrial Safety Matches & Manufacturing)    */}
      {/* ============================================================== */}
      <section className="relative pt-10 sm:pt-16 pb-14 bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200/80">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/90 text-red-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span>ESTABLISHED 1979 &bull; SRIVILLIPUTHUR, TAMIL NADU</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Industrial Safety Matches & <br />
                <span className="bg-gradient-to-r from-red-700 via-red-800 to-amber-700 bg-clip-text text-transparent">
                  Manufacturing Excellence.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Manufacturer of India&apos;s trusted <strong>JEEVAN</strong> and <strong>TEHLA</strong> safety matches across 3 modern manufacturing facilities in Srivilliputhur. Moisture-resistant veneer boxes, 100% carbonized wooden splints, and single-strike reliability for wholesale dealers nationwide.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <Link
                  href="/products"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-sm shadow-md shadow-red-900/20 transition-all hover:scale-102"
                >
                  <Flame className="w-4 h-4 fill-current" />
                  <span>Explore Matchboxes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/manufacturing"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-sm shadow-xs transition-all hover:scale-102"
                >
                  <Building className="w-4 h-4 text-red-700" />
                  <span>Manufacturing Units</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all hover:scale-102"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              {/* Stats Bar */}
              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-slate-200 text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">45+ Years</div>
                  <div className="text-xs text-slate-500 font-semibold">Legacy Since 1979</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-red-700">100% Reliable</div>
                  <div className="text-xs text-slate-500 font-semibold">Moisture-Proof Matches</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-700">3 Plants</div>
                  <div className="text-xs text-slate-500 font-semibold">Industrial Facilities</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 space-y-6 relative overflow-hidden rounded-3xl border border-slate-200/90 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <VeenusLogo size="sm" />
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Veenus Match Works</h3>
                      <p className="text-[11px] text-slate-500">3/19/A, Venkateswarpuram, Aladipatti</p>
                    </div>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                    Active Operations
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="relative h-40 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 group">
                    <Image
                      src="/products/jeevan-1rs-matches.jpg"
                      alt="JEEVAN Safety Matches (₹1.00 & ₹2.00)"
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent p-3 flex flex-col justify-end">
                      <span className="text-xs font-bold text-white">JEEVAN Matches</span>
                      <span className="text-[10px] text-amber-300 font-semibold">Regd No. 3481060 &bull; ₹1 & ₹2</span>
                    </div>
                  </div>

                  <div className="relative h-40 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 group">
                    <Image
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                      alt="Industrial Manufacturing Facilities"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent p-3 flex flex-col justify-end">
                      <span className="text-xs font-bold text-white">3 Factory Units</span>
                      <span className="text-[10px] text-rose-200 font-semibold">Srivilliputhur Plant</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">Factory Manufacturing Quality</span>
                    <span className="text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Verified Standard</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-500">
                    High carbonized wooden splints, instant single-strike ignition, zero afterglow, and secure master wholesale packing.
                  </p>
                </div>

                <a
                  href={`tel:${COMPANY_CONTACT.phoneCall}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-900 font-bold text-xs border border-red-200/90 transition-colors shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5 text-red-700" />
                  <span>Direct Hotline: {COMPANY_CONTACT.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CORE STRENGTHS (Brand Quality & 3 Manufacturing Sister Concerns)*/}
      {/* ============================================================== */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Core Infrastructure
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Two Pillars of Manufacturing Strength
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Decades of trusted brand reputation backed by modern multi-unit industrial infrastructure in Srivilliputhur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: Matchbox Brand Excellence */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-700 border border-red-200 flex items-center justify-center shadow-xs">
                  <Flame className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Brand Division
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                  JEEVAN & TEHLA Safety Matches
                </h3>
                <p className="text-xs text-red-700 font-bold mt-0.5">
                  Regd. No. 3481060 &bull; Est. 1979 by Mr. M. Subburam
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Manufacturer of premium veneer safety matches, carbonized cardboard matchboxes, and damp-proof matches. Known for smooth striking surfaces, instant single-strike ignition, and reliable wholesale distribution across India.
              </p>

              <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Moisture-proof duplex outer shells with friction edge</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>High-grade carbonized splints with zero afterglow</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Wholesale cartons and 1,000-box master export bales</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/products"
                className="text-xs font-bold text-red-700 hover:text-red-800 flex items-center gap-1.5 transition-colors"
              >
                <span>View Products Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent('Hello Veenus Match Works, I would like to inquire about safety match orders.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-colors"
              >
                Order Matches
              </a>
            </div>
          </div>

          {/* Pillar 2: 3 Manufacturing Units & Sister Concerns */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shadow-xs">
                  <Building className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  3 Sister Concerns
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  Veenus Match Works & Sister Concerns
                </h3>
                <p className="text-xs text-amber-700 font-bold mt-0.5">
                  Veenus Match Works &bull; United Match Industries &bull; The Cauveri Matches
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Our manufacturing strength is anchored by three sister concerns in Srivilliputhur, with <strong>Veenus Match Works as our largest manufacturing unit</strong>. Equipped with 10 high-speed automated machinery lines.
              </p>

              <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Veenus Match Works: Largest central manufacturing unit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>United Match Industries & The Cauveri Matches sister concerns</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>10 high-speed lines: splint-making, head dipping, box filling & packing</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/manufacturing"
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 transition-colors"
              >
                <span>View Manufacturing Units</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/manufacturing"
                className="px-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold transition-colors"
              >
                Factory Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SAFETY MATCHES CATALOGUE (Crisp White Product Cards)        */}
      {/* ============================================================== */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Manufactured By Veenus Match Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Featured Safety Matches
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Engineered with premium carbonized splints for smooth, damp-proof single-strike ignition.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-red-700 hover:text-red-800 transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VEENUS_MATCH_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center justify-center p-3">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-slate-800 border border-slate-200 shadow-2xs">
                      {prod.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 shadow-2xs">
                      {prod.sticksPerBox} Sticks
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base group-hover:text-red-700 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-[11px] text-red-700 font-bold mt-0.5">
                      {prod.highlight}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {prod.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Packaging:</span>
                    <span className="font-bold text-slate-800">{prod.unit}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <a
                  href={getWhatsAppProductUrl(prod.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-101"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Wholesale Order</span>
                </a>

                <Link
                  href={`/products/${prod.id}`}
                  className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold transition-colors"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. THREE MANUFACTURING UNITS & FACTORY GALLERY PREVIEW         */}
      {/* ============================================================== */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Manufacturing Facilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Our 3 Sister Concerns & Manufacturing Facilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Started in 1979 with 1 unit, now grown to 3 dedicated industrial production plants in Srivilliputhur.
              </p>
            </div>
            <Link
              href="/manufacturing"
              className="inline-flex items-center gap-2 text-xs font-bold text-red-700 hover:text-red-800 transition-colors"
            >
              <span>Explore Factory Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Unit 1 */}
            <div className="p-6 rounded-2xl bg-red-50/40 border-2 border-red-200 space-y-3 relative">
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-700 text-white">
                  Largest Unit
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-red-700 text-white flex items-center justify-center font-black text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">Veenus Match Works</h3>
              <p className="text-xs text-red-700 font-bold">Largest Unit &bull; Mother Plant</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Central plant hosting automated match-frame machines, chemical head dipping, continuous industrial drying, and master wholesale bundling.
              </p>
            </div>

            {/* Unit 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-black text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">United Match Industries</h3>
              <p className="text-xs text-amber-700 font-bold">Sister Concern &bull; Box Making</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-capacity facility running precision duplex cardboard box folding, vibration splint-sorting, and automated box filling carousels.
              </p>
            </div>

            {/* Unit 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center font-black text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">The Cauveri Matches</h3>
              <p className="text-xs text-slate-600 font-bold">Sister Concern &bull; Quality Assurance</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Finishing plant equipped with automated quality-inspection cameras, multi-color trademark label registration, and master carton packing lines.
              </p>
            </div>
          </div>

          {/* Photo Strip Preview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {MANUFACTURING_15_PHOTOS.slice(0, 4).map((p) => (
              <Link
                key={p.id}
                href="/manufacturing"
                className="group relative h-36 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-2xs"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-3 flex flex-col justify-end">
                  <span className="text-[10px] font-bold text-amber-300">{p.unitTag}</span>
                  <span className="text-xs font-bold text-white line-clamp-1">{p.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. ABOUT JEEVAN SAFETY MATCHES (Story & Legacy)                */}
      {/* ============================================================== */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Story */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-wider">
                <span>ABOUT JEEVAN SAFETY MATCHES</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Established 1979 &bull; Quality, Trust and Dedication
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Established in <strong>1979 by Mr. M. Subburam</strong>, <strong>Jeevan Safety Matches (Regd. No.: 3481060)</strong> carries a legacy of quality, trust and dedication. Today, under the leadership of his son, <strong>Mr. S. Hariharan</strong>, the company continues its journey with the same commitment to excellence, serving wholesale dealers and distributors with unwavering reliability across India.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                At Jeevan Safety Matches, quality is our identity. We believe that the quality of even a single matchstick reflects the reputation of our brand. With decades of experience and a strong commitment to consistency, we strive to maintain the trust of our customers across every wholesale market and retail dealership.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-red-700 font-black text-base sm:text-lg mb-0.5">1979</div>
                  <div className="text-[11px] font-bold text-slate-900">Mr. M. Subburam</div>
                  <p className="text-[10px] text-slate-500">Established founder</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-amber-700 font-black text-base sm:text-lg mb-0.5">10 Lines</div>
                  <div className="text-[11px] font-bold text-slate-900">Modern Machinery</div>
                  <p className="text-[10px] text-slate-500">Automated lines</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-900 font-black text-base sm:text-lg mb-0.5">3 Units</div>
                  <div className="text-[11px] font-bold text-slate-900">Manufacturing Base</div>
                  <p className="text-[10px] text-slate-500">Srivilliputhur plants</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-emerald-700 font-black text-base sm:text-lg mb-0.5">100%</div>
                  <div className="text-[11px] font-bold text-slate-900">Carbonized</div>
                  <p className="text-[10px] text-slate-500">Damp-proof ignition</p>
                </div>
              </div>

              <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="font-bold text-slate-800">3 Sister Concerns:</span>
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-800 border border-red-200 font-bold text-[11px]">
                  Veenus Match Works (Largest Unit)
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-[11px]">
                  United Match Industries
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-semibold text-[11px]">
                  The Cauveri Matches
                </span>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 px-5 py-2.5 rounded-xl transition-colors"
                >
                  <span>Read Full Company Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Visuals */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-60 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                  alt="Veenus Match Works Manufacturing Plant"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white">Veenus Match Works &bull; Srivilliputhur</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-28 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800"
                    alt="Industrial High-Speed Dipping Machinery"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/50 p-2 flex items-end">
                    <span className="text-[10px] font-bold text-white">Automated Machinery</span>
                  </div>
                </div>

                <div className="relative h-28 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
                    alt="Master Export Packaging Line"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/50 p-2 flex items-end">
                    <span className="text-[10px] font-bold text-white">Wholesale Dispatch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. DIRECT CONTACT BANNER (Royal Burgundy Call-To-Action)       */}
      {/* ============================================================== */}
      <section className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-gradient-to-r from-red-900 via-red-800 to-rose-950 p-8 sm:p-10 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              Connect Directly with Factory Management
            </h3>
            <p className="text-xs sm:text-sm text-rose-100">
              For factory matchbox orders, distributor partnerships, or wholesale dealer pricing.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_CONTACT.phoneCall}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-sm hover:bg-rose-50 transition-all hover:scale-102"
            >
              <Phone className="w-4 h-4 text-red-700" />
              <span>Call: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-all hover:scale-102"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Direct WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}