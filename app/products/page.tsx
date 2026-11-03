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
import { VeenusLogo } from '@/components/VeenusLogo';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');

  const categories = [
    'All Products',
    'JEEVAN Brand',
    'TEHLA Brand'
  ];

  const filtered = VEENUS_MATCH_PRODUCTS.filter((item) => {
    if (selectedCategory === 'All Products') return true;
    if (selectedCategory === 'JEEVAN Brand') return item.name.includes('JEEVAN');
    if (selectedCategory === 'TEHLA Brand') return item.name.includes('TEHLA');
    return true;
  });

  const getWhatsAppProductUrl = (product: MatchProduct) => {
    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
      `Hello Veenus Match Works, I want to inquire about ${product.name} (${product.code}). Please share wholesale price, minimum order quantity, and delivery timeline.`
    )}`;
  };

  return (
    <div className="py-10 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Banner */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" />
                <span>Veenus Match Works &bull; Makers of JEEVAN & TEHLA Matches &bull; Est. 1979</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                Safety Matchbox Products Catalogue
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed">
                Featuring our flagship <strong>JEEVAN</strong> (Regd No. 3481060) and <strong>TEHLA</strong> (Regd No. 1395866) safety matches, produced across our manufacturing units and sister concerns (<strong>United Match Industries</strong> & <strong>The Cauveri Matches</strong>). Manufactured with moisture-resistant natural wood veneers, high-grade carbonized duplex boards, and single-strike ignition formula.
              </p>
            </div>
            <div className="hidden md:flex shrink-0 p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <VeenusLogo size="lg" />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100 mt-6">
            <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1.5 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-red-700" />
              <span>Filter:</span>
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

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-red-200 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center justify-center p-3">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-slate-800 border border-slate-200 shadow-2xs">
                      {prod.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 shadow-2xs">
                      {prod.sticksPerBox} Sticks / Box
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg group-hover:text-red-700 transition-colors">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-red-700 font-bold mt-0.5">
                        {prod.highlight}
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200 shrink-0 font-bold">
                      {prod.code}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prod.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div>
                      <span className="text-slate-500">Packaging:</span>{' '}
                      <strong className="text-slate-800">{prod.unit}</strong>
                    </div>
                    <div className="text-emerald-700 font-black">
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
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-xs transition-colors hover:scale-101 shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire / Order on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Wholesale Inquiries Note */}
        <div className="bg-gradient-to-r from-red-900 via-red-800 to-rose-950 p-8 sm:p-10 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold">Looking for Bulk JEEVAN or TEHLA Matchbox Cartons?</h4>
            <p className="text-xs text-rose-100">
              We supply direct factory consignments to distributors, retail super stockists, and export freight carriers.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_CONTACT.phoneCall}`}
              className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-sm hover:bg-rose-50 transition-colors"
            >
              Call: {COMPANY_CONTACT.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
