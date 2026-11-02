'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Flame,
  Truck,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Package,
  Award,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { VEENUS_MATCH_PRODUCTS, VEENUS_TRANSPORT_FLEET, COMPANY_CONTACT } from '@/lib/data';
import { VeenusLogo } from '@/components/VeenusLogo';

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
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* ============================================================== */}
      {/* 1. HERO SECTION (Prestigious Corporate Light & Royal Burgundy) */}
      {/* ============================================================== */}
      <section className="relative pt-10 sm:pt-16 pb-14 bg-gradient-to-b from-white via-slate-50 to-slate-100/60 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  Dedicated Fleet Logistics.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Manufacturer of India&apos;s trusted <strong>JEEVAN</strong> and <strong>TEHLA</strong> safety matches, alongside a comprehensive commercial road transport fleet. Moisture-resistant veneer boxes, carbonized splints, heavy freight trucks, and passenger coaches from Srivilliputhur.
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
                  href="/transport"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-sm shadow-xs transition-all hover:scale-102"
                >
                  <Truck className="w-4 h-4 text-red-700" />
                  <span>Transport Fleet</span>
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
                  <div className="text-2xl sm:text-3xl font-black text-amber-700">24/7 Logistics</div>
                  <div className="text-xs text-slate-500 font-semibold">All-India Permits</div>
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
                      src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800"
                      alt="Heavy Freight Logistics"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent p-3 flex flex-col justify-end">
                      <span className="text-xs font-bold text-white">Commercial Fleet</span>
                      <span className="text-[10px] text-rose-200 font-semibold">Lorries & Mini Vans</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-800">Factory Manufacturing Quality</span>
                    <span className="text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Verified Standard</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-500">
                    High carbonized wooden splints, instant single-strike ignition, zero afterglow, and secure all-weather freight delivery.
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
      {/* 2. TWO PILLARS OVERVIEW (Matchbox Factory & Transport Fleet)   */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Core Divisions
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Two Strong Businesses, One Trusted Name
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Veenus Group combines safety match manufacturing with commercial freight and passenger transport fleets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: Match Works */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-700 border border-red-200 flex items-center justify-center shadow-xs">
                  <Flame className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Manufacturing Division
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                  Veenus Match Works
                </h3>
                <p className="text-xs text-red-700 font-bold mt-0.5">
                  Established 1979 &bull; Srivilliputhur
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Manufacturer and exporter of premium veneer safety matches, carbonized cardboard matchboxes, and weatherproof wax matches. Known for smooth striking surfaces and single-strike ignition.
              </p>

              <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Moisture-proof natural veneer outer shells</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>High-grade carbonized splints with zero afterglow</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Wholesale cartons and distributor export bales</span>
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

          {/* Pillar 2: Logistics & Transports */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shadow-xs">
                  <Truck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  Fleet & Logistics
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  Cavery Travels & Freight Fleet
                </h3>
                <p className="text-xs text-amber-700 font-bold mt-0.5">
                  30+ Luxury Buses & Heavy Lorries
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Operating Cavery Travels with an active fleet of 30+ luxury tourist coaches (32 to 54-seater AC/Non-AC), alongside 6 & 10-wheeler commercial freight trucks, Tata Ace mini lorries, and delivery vans.
              </p>

              <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cavery Travels: 30+ Luxury AC & Non-AC coaches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Freight haulage with safe tarpaulin covers & permits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pilgrimage tours (Rameswaram, Madurai, Tirupati) & weddings</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/transport"
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 transition-colors"
              >
                <span>View Transport Fleet</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent('Hello Veenus Transports, I would like to inquire about booking a vehicle.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold transition-colors"
              >
                Book Vehicle
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SAFETY MATCHES CATALOGUE (Crisp White Product Cards)        */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Manufactured By Veenus Match Works
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Featured Safety Matches
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Engineered with premium carbonized splints for smooth, damp-proof ignition.
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

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {prod.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Packing: <strong className="text-slate-800">{prod.unit}</strong></span>
                    <span className="text-emerald-700 font-bold">{prod.priceEstimate}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppProductUrl(prod.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs transition-colors shadow-2xs"
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
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Veenus Transports & Logistics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Commercial Fleet & Passenger Vehicles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Heavy lorries for cargo freight, mini vans for rapid dispatch, and tourist buses for tours.
            </p>
          </div>
          <Link
            href="/transport"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors"
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
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/95 text-slate-800 border border-slate-200 shadow-2xs">
                      {vehicle.category}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-red-700 transition-colors leading-snug">
                    {vehicle.title}
                  </h3>
                  <div className="text-[11px] font-bold text-red-700">
                    Capacity: {vehicle.capacity}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
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
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-600" />
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
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Story */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-wider">
                <span>ABOUT VEENUS GROUP</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Over 45 Years of Manufacturing Quality & Highway Reliability
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Founded in <strong>1979</strong> with a single manufacturing unit in <strong>Srivilliputhur, Tamil Nadu</strong>, Veenus Match Works began with a dedicated focus on manufacturing sturdy, damp-resistant safety matchboxes. Today, that enterprise has steadily grown into <strong>3 full-scale industrial manufacturing units</strong>.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Under the visionary leadership of Managing Director <strong>Mr. S. Hariharan</strong>, the group also established <strong>Cavery Travels</strong>, operating a premier fleet of <strong>30+ luxury tourist buses</strong> alongside heavy freight haulage lorries, ensuring both manufactured goods and passengers are served with dependable quality.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-red-700 font-bold text-sm mb-1">3 Factory Units</div>
                  <p className="text-[11px] text-slate-500">Grown from 1 unit to 3 modern manufacturing units.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-emerald-700 font-bold text-sm mb-1">Cavery Travels (30+ Buses)</div>
                  <p className="text-[11px] text-slate-500">Luxury coaches for temple pilgrimages, weddings & tours.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-amber-700 font-bold text-sm mb-1">Freight Haulage</div>
                  <p className="text-[11px] text-slate-500">Heavy trucks & mini vans for safe interstate transport.</p>
                </div>
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
                <div className="relative h-28 rounded-xl overflow-hidden border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800"
                    alt="Veenus Mini Freight Lorries"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/50 p-2 flex items-end">
                    <span className="text-[10px] font-bold text-white">Freight Lorries</span>
                  </div>
                </div>

                <div className="relative h-28 rounded-xl overflow-hidden border border-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800"
                    alt="Veenus Tourist Passenger Coaches"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/50 p-2 flex items-end">
                    <span className="text-[10px] font-bold text-white">Passenger Buses</span>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-900 via-red-800 to-rose-950 p-8 sm:p-10 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              Connect Directly with Veenus Group Management
            </h3>
            <p className="text-xs sm:text-sm text-rose-100">
              For factory matchbox orders, distributor partnerships, or immediate vehicle fleet hire.
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
