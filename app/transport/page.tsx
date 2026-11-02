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
    <div className="py-10 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Banner */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5" />
              <span>Cavery Travels (30+ Buses) &bull; Commercial Freight Fleet</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Cavery Travels & Freight Fleet
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Premier passenger tourism and commercial cargo transport managed under the leadership of Managing Director <strong>Mr. S. Hariharan</strong>. Our fleet features <strong>Cavery Travels (30+ luxury tourist coaches from 32 to 54 seats)</strong> for pilgrimage tours and weddings, alongside 6 & 10-wheeler heavy trucks, Tata Ace mini lorries, and Omni delivery vans.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100 mt-6">
            <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1.5 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-red-700" />
              <span>Fleet Category:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-4 py-2 rounded-xl transition-all font-bold ${
                  selectedCategory === cat
                    ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
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
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <Image
                    src={veh.image}
                    alt={veh.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/95 text-slate-800 border border-slate-200 shadow-2xs">
                      {veh.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500 text-slate-950 shadow-md">
                      {veh.capacity}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl group-hover:text-red-700 transition-colors">
                      {veh.title}
                    </h3>
                    <p className="text-xs text-red-700 font-bold mt-1">
                      {veh.highlight}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {veh.description}
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Recommended Usage:
                    </span>
                    <p className="text-xs text-slate-700 font-medium">
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
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-101"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Book via WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY_CONTACT.phoneCall}`}
                  className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-red-700" />
                  <span>Call Office</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Guarantees Banner */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="space-y-1.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-red-700 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>All-India National Permits</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full documentation, commercial insurance, and inter-state permits for uninterrupted transit.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-700 font-bold text-sm">
                <Clock className="w-4 h-4" />
                <span>24/7 Dispatch Availability</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instant truck deployment for factory loads, parcel goods, and urgent passenger transfers.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-700 font-bold text-sm">
                <Users className="w-4 h-4" />
                <span>Experienced Highway Drivers</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Disciplined professional chauffeurs and freight captains with thorough route knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
