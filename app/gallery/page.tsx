'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Filter,
  Eye,
  Camera
} from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/lib/data';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Product Packaging',
    'Matchbox Collections',
    'Manufacturing',
    'Factory Equipment',
    'Custom Branding'
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen text-[#171717] pb-24">
      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-neutral-800/80 hover:bg-neutral-700 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-neutral-800/80 hover:bg-neutral-700 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-neutral-800/80 hover:bg-neutral-700 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content */}
          <div
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[55vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center max-w-2xl px-4 text-white">
              <span className="text-xs font-mono font-bold text-[#C7A56B] uppercase tracking-wider bg-black/60 px-3 py-1 rounded-full border border-neutral-700">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold mt-2">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm mt-1 leading-relaxed">
                {filteredItems[lightboxIndex].description}
              </p>
              <div className="text-[11px] text-neutral-500 mt-2 font-mono">
                Image {lightboxIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header Banner */}
      <section className="bg-[#171717] text-white py-16 lg:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C7A56B]">
              <Camera className="w-4 h-4 text-[#C62828]" />
              <span>Visual Manufacturing Archive</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Industrial Gallery & Packaging Portfolio
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Explore photography of our proposed high-speed rotary splint dipping carousels, offset printing machinery, finished master cartons, and custom hospitality brand collections.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-200/90 p-4 flex items-center gap-2 overflow-x-auto">
          <div className="flex items-center gap-1 text-xs font-bold text-neutral-500 pl-2 pr-3 border-r border-neutral-200 shrink-0">
            <Filter className="w-4 h-4 text-[#C62828]" />
            <span>Filter:</span>
          </div>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#171717] text-[#C7A56B] shadow-md'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex items-center justify-between text-xs text-neutral-600">
        <div>
          Showing <strong>{filteredItems.length}</strong> photos
          {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
        </div>
        <div className="text-[11px] text-neutral-500">
          Click any photograph to view high-resolution image in fullscreen lightbox.
        </div>
      </div>

      {/* Gallery Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer aspect-[4/3]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#C7A56B]" />
              </div>

              {/* Info Bottom */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C7A56B] bg-black/60 px-2.5 py-0.5 rounded-full border border-neutral-700">
                  {item.category}
                </span>
                <h3 className="font-extrabold text-sm sm:text-base leading-snug group-hover:text-[#C7A56B] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-neutral-300 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
