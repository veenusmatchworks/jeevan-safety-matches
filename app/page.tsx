'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Flame,
  Truck,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  MapPin,
  Box,
  Compass,
  Building2,
  Sparkles
} from 'lucide-react';
import { VEENUS_MATCH_PRODUCTS, VEENUS_TRANSPORT_FLEET, COMPANY_CONTACT } from '@/lib/data';

export default function HomePage() {
  const getWhatsAppProductUrl = (productName: string) => {
    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
      `Hello Veenus Group, I am interested in wholesale supply for: ${productName}. Please share quotation and delivery details.`
    )}`;
  };

  const getWhatsAppVehicleUrl = (vehicleName: string) => {
    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
      `Hello Veenus Group, I want to book/inquire about your transport service: ${vehicleName}. Please share availability and rates.`
    )}`;
  };

  return (
    <div className="space-y-24 pb-20">
      {/* ============================================================== */}
      {/* 1. HERO SECTION (Modern Glassmorphism & High-End Aesthetic)    */}
      {/* ============================================================== */}
      <section className="relative pt-12 sm:pt-20 pb-16 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-amber-500/15 via-orange-600/10 to-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-300 text-xs font-semibold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>ESTABLISHED 1979 &bull; TRUSTED INDUSTRIAL EXCELLENCE</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Premium Safety Matches & <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                  Dedicated Transport Fleet.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                South India's recognized safety match manufacturer and commercial fleet operator. Delivering moisture-resistant veneer matches, retail packaging, heavy freight haulage, and passenger travel from Srivilliputhur.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/products"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/25 hover:from-amber-400 hover:to-orange-400 transition-all hover:scale-105"
                >
                  <Flame className="w-4 h-4 fill-current" />
                  <span>Explore Matchboxes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/transport"
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-semibold text-sm backdrop-blur-md transition-all hover:scale-105"
                >
                  <Truck className="w-4 h-4 text-amber-400" />
                  <span>Transport Fleet</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              {/* Stats Bar */}
              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-white/10 text-left">
                <div>
                  <div className="text-2xl font-black text-white">45+ Years</div>
                  <div className="text-xs text-slate-400">Trusted Since 1979</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-amber-400">100% Secure</div>
                  <div className="text-xs text-slate-400">Moisture-Proof Matches</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400">24/7 Logistics</div>
                  <div className="text-xs text-slate-400">All-India Permits</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="glass-panel p-6 sm:p-8 space-y-6 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                      VMW
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm">Veenus Match Works</h3>
                      <p className="text-[11px] text-slate-400">Srivilliputhur, Tamil Nadu</p>
                    </div>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 font-medium border border-emerald-500/30">
                    Active Operations
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="relative h-36 rounded-xl overflow-hidden border border-white/10 group">
                    <Image
                      src="/products/jeevan-veneer-matches.jpg"
                      alt="JEEVAN Veneer Safety Matches"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-3 flex flex-col justify-end">
                      <span className="text-xs font-bold text-white">JEEVAN Matches</span>
                      <span className="text-[10px] text-amber-300">Veneer & Cardboard</span>
                    </div>
                  </div>

                  <div className="relative h-36 rounded-xl overflow-hidden border border-white/10 group">
                    <Image
                      src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800"
                      alt="Heavy Freight Logistics"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-3 flex flex-col justify-end">
                      <span className="text-xs font-bold text-white">Freight Logistics</span>
                      <span className="text-[10px] text-blue-300">Lorries & Mini Vans</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Manufacturing Quality</span>
                    <span className="text-emerald-400 font-semibold">Verified Standard</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-400">
                    High carbonized wooden splints, instant single-strike ignition, zero afterglow, and secure all-weather freight delivery.
                  </p>
                </div>

                <a
                  href={`tel:${COMPANY_CONTACT.phoneCall}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs border border-white/10 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Direct Hotline: {COMPANY_CONTACT.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. TWO PILLARS OVERVIEW (Matchbox Factory & Transport Fleet)   */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Core Divisions
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3">
            Two Strong Businesses, One Trusted Name
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Veenus Group combines safety match manufacturing with commercial freight and passenger transport fleets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: Match Works */}
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                  <Flame className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  Manufacturing Division
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  Veenus Match Works
                </h3>
                <p className="text-xs text-amber-400/90 font-medium mt-0.5">
                  Established 1979 &bull; Srivilliputhur
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Manufacturer and exporter of premium veneer safety matches, carbonized cardboard matchboxes, and weatherproof wax matches. Known for smooth striking surfaces and single-strike ignition.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Moisture-proof natural veneer outer shells</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>High-grade carbonized splints with zero afterglow</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Wholesale cartons and distributor export bales</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/products"
                className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
              >
                <span>View Products Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent('Hello Veenus Match Works, I would like to inquire about safety match orders.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-colors"
              >
                Order Matches
              </a>
            </div>
          </div>

          {/* Pillar 2: Logistics & Transports */}
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                  Fleet & Logistics
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  Veenus Transports & Logistics
                </h3>
                <p className="text-xs text-blue-400/90 font-medium mt-0.5">
                  Vans, Lorries & Passenger Travel
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Operating a versatile commercial fleet featuring Maruti Omni & Eeco mini vans, Tata Ace mini lorries, 6 & 10-wheeler commercial freight trucks, and comfortable tourist passenger buses.
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Freight haulage with safe tarpaulin covers & permits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Rapid local deliveries via Omni & mini vans</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Tourist buses for family weddings & temple tours</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/transport"
                className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors"
              >
                <span>View Transport Fleet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent('Hello Veenus Transports, I would like to inquire about booking a vehicle.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-500/30 text-xs font-semibold transition-colors"
              >
                Book Vehicle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SAFETY MATCHES CATALOGUE (Clean Glassmorphism Cards)         */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Manufactured By Veenus Match Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Featured Safety Matches
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Engineered with premium carbonized splints for smooth, damp-proof ignition.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
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
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900 border-b border-white/10">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-slate-950/80 text-white backdrop-blur-md border border-white/15">
                      {prod.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400 text-slate-950">
                      {prod.sticksPerBox} Sticks
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-[11px] text-amber-400/90 font-medium mt-0.5">
                      {prod.highlight}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>Packing: <strong className="text-slate-200">{prod.unit}</strong></span>
                    <span className="text-emerald-400 font-semibold">{prod.priceEstimate}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <a
                  href={getWhatsAppProductUrl(prod.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 font-semibold text-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. TRANSPORT FLEET SECTION (Mini Vans, Lorries, Buses)         */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
              Veenus Transports & Logistics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Commercial Fleet & Passenger Vehicles
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Heavy lorries for cargo freight, mini vans for rapid dispatch, and tourist buses for tours.
            </p>
          </div>
          <Link
            href="/transport"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View All Fleet</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEENUS_TRANSPORT_FLEET.map((vehicle) => (
            <div
              key={vehicle.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-900 border-b border-white/10">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-950/80 text-white backdrop-blur-md border border-white/15">
                      {vehicle.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-2.5">
                  <h3 className="font-bold text-white text-sm group-hover:text-blue-300 transition-colors leading-snug">
                    {vehicle.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-blue-400">
                    Capacity: {vehicle.capacity}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {vehicle.idealFor}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-4 pt-0">
                <a
                  href={getWhatsAppVehicleUrl(vehicle.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-500/30 font-semibold text-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. ABOUT VEENUS GROUP (Authentic Srivilliputhur Story & Legacy)*/}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Story */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-semibold">
                <span>ABOUT VEENUS GROUP</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Over 45 Years of Manufacturing Quality & Highway Reliability
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Founded in <strong>1979</strong> by <strong>Mr. M. Subburam</strong> in <strong>Srivilliputhur, Tamil Nadu</strong>, Veenus Match Works began with a singular focus: manufacturing sturdy, damp-resistant safety matchboxes with single-strike reliability.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Over the decades, guided by Managing Director <strong>Mr. S. Hariharan</strong> and <strong>Mr. S. Murali</strong>, the business expanded into comprehensive commercial transportation. Today, Veenus Group operates its own active fleet of freight lorries, mini delivery vans, and passenger tourist coaches, ensuring both manufactured products and external client cargo are transported securely across the region.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-amber-400 font-bold text-sm mb-1">Safety Matches</div>
                  <p className="text-[11px] text-slate-400">Veneer, Cardboard & Wax matches with zero afterglow.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-blue-400 font-bold text-sm mb-1">Freight Haulage</div>
                  <p className="text-[11px] text-slate-400">Heavy trucks & mini vans for safe interstate transport.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-emerald-400 font-bold text-sm mb-1">Passenger Fleet</div>
                  <p className="text-[11px] text-slate-400">AC/Non-AC buses & vans for temple and family travel.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/15 border border-white/15 px-5 py-2.5 rounded-xl transition-colors"
                >
                  <span>Read Full Company Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Visuals */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-60 rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
                  alt="Veenus Match Works Manufacturing Plant"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-white">Veenus Match Works &bull; Srivilliputhur</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-28 rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800"
                    alt="Veenus Mini Freight Lorries"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 p-2 flex items-end">
                    <span className="text-[10px] font-bold text-white">Freight Lorries</span>
                  </div>
                </div>

                <div className="relative h-28 rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800"
                    alt="Veenus Tourist Passenger Coaches"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 p-2 flex items-end">
                    <span className="text-[10px] font-bold text-white">Passenger Buses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. DIRECT CONTACT BANNER (Clean & Fast)                         */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Connect Directly with Veenus Group
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              For factory matchbox orders, distributor partnerships, or immediate vehicle hire.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_CONTACT.phoneCall}`}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-lg transition-all hover:scale-105"
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
