'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Flame,
  MessageCircle,
  Phone,
  CheckCircle2,
  Filter,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { VEENUS_MATCH_PRODUCTS, COMPANY_CONTACT, MatchProduct } from '@/lib/data';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Veneer Safety Matches',
    'Cardboard Safety Matches',
    'Wax Matches',
    'Match Splints & Sticks'
  ];

  const filtered = VEENUS_MATCH_PRODUCTS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const getWhatsAppProductUrl = (product: MatchProduct) => {
    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
      `Hello Veenus Match Works, I want to inquire about ${product.name} (${product.code}). Please share wholesale price, minimum order quantity, and delivery timeline.`
    )}`;
  };

  return (
    <div className="py-12 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Banner */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Flame className="w-4 h-4" />
              <span>Veenus Match Works &bull; Makers of JEEVAN Safety Matches &bull; Est. 1979</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Safety Matchbox Products Catalogue
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Featuring our flagship <strong>JEEVAN</strong> safety matches. Outer shells made of sturdy wood veneers that are moisture proof and stay rigid in wet fields without collapsing, alongside high-grade carbonized cardboard matches and weatherproof wax matches.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/10 mt-6">
            <span className="text-xs font-semibold text-slate-400 mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>Filter:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-4 py-2 rounded-xl transition-all font-medium ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900 border-b border-white/10">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-950/80 text-white backdrop-blur-md border border-white/15">
                      {prod.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-amber-400 text-slate-950">
                      {prod.sticksPerBox} Sticks / Box
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-white text-lg group-hover:text-amber-300 transition-colors">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-amber-400 font-medium mt-0.5">
                        {prod.highlight}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/10 shrink-0">
                      {prod.code}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <div>
                      <span className="text-slate-400">Packaging:</span>{' '}
                      <strong className="text-slate-200">{prod.unit}</strong>
                    </div>
                    <div className="text-emerald-400 font-bold">
                      {prod.priceEstimate}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <a
                  href={getWhatsAppProductUrl(prod)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 font-semibold text-xs transition-colors hover:scale-101"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire / Order on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale Inquiries Note */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">Looking for Bulk JEEVAN Matchbox Cartons or Bales?</h4>
            <p className="text-xs text-slate-400">
              We supply direct factory consignments to distributors, retail super stockists, and export freight carriers.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_CONTACT.phoneCall}`}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs border border-white/15 transition-colors"
            >
              Call: {COMPANY_CONTACT.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-md transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
