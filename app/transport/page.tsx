'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Truck,
  MessageCircle,
  Phone,
  CheckCircle2,
  Filter,
  ShieldCheck,
  Clock,
  MapPin,
  ArrowRight,
  Users
} from 'lucide-react';
import { VEENUS_TRANSPORT_FLEET, COMPANY_CONTACT, TransportVehicle } from '@/lib/data';

export default function TransportPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Mini Vans & Omni',
    'Heavy Lorries & Trucks',
    'Tourist Buses & Coaches'
  ];

  const filtered = VEENUS_TRANSPORT_FLEET.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const getWhatsAppVehicleUrl = (veh: TransportVehicle) => {
    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
      `Hello Veenus Transports, I am looking to hire/book: ${veh.title}. Please share availability, per km/trip rates, and driver details.`
    )}`;
  };

  return (
    <div className="py-12 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Banner */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
              <Truck className="w-4 h-4" />
              <span>Veenus Transports & Logistics &bull; Fleet Services</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Fleet & Commercial Transports
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Dependable cargo freight haulage and comfortable passenger travel. Our fleet includes Maruti Omni & Eeco mini delivery vans, Tata Ace mini lorries, 6 & 10-wheeler commercial trucks with all-India permits, and luxury tourist passenger buses.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/10 mt-6">
            <span className="text-xs font-semibold text-slate-400 mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-blue-400" />
              <span>Fleet Category:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-4 py-2 rounded-xl transition-all font-medium ${
                  selectedCategory === cat
                    ? 'bg-blue-500 text-white font-bold shadow-md shadow-blue-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filtered.map((veh) => (
            <div
              key={veh.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900 border-b border-white/10">
                  <Image
                    src={veh.image}
                    alt={veh.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-950/80 text-white backdrop-blur-md border border-white/15">
                      {veh.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500 text-white shadow-md">
                      {veh.capacity}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-white text-xl group-hover:text-blue-300 transition-colors">
                      {veh.title}
                    </h3>
                    <p className="text-xs text-blue-400 font-medium mt-1">
                      {veh.highlight}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {veh.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Recommended Usage:
                    </span>
                    <p className="text-xs text-slate-200">
                      {veh.idealFor}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <a
                  href={getWhatsAppVehicleUrl(veh)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border border-blue-500/30 font-semibold text-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Book via WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY_CONTACT.phoneCall}`}
                  className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Guarantees Banner */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="space-y-1.5">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-400 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>All-India National Permits</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full documentation, commercial insurance, and inter-state permits for uninterrupted transit.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>24/7 Dispatch Availability</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Instant truck deployment for factory loads, parcel goods, and urgent passenger transfers.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-400 font-bold text-sm">
                <Users className="w-4 h-4" />
                <span>Experienced Highway Drivers</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Disciplined professional chauffeurs and freight captains with thorough route knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
