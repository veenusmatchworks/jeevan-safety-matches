'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Search,
  Filter,
  SlidersHorizontal,
  ShoppingBag,
  Eye,
  CheckCircle2,
  Package,
  Layers,
  ArrowUpDown,
  Sparkles,
  RefreshCw,
  X
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product } from '@/lib/data';
import { ProductIllustration } from '@/components/ProductIllustration';
import { useCart } from '@/lib/cart-context';

function ProductsCatalogueInner() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [onlyAvailable, setOnlyAvailable] = useState<boolean>(false);

  const { addItem } = useCart();
  const [addedPopup, setAddedPopup] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    addItem(product, 1);
    setAddedPopup(product.name);
    setTimeout(() => {
      setAddedPopup(null);
    }, 2400);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }
      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesCode = product.code.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesSplint = product.splintType.toLowerCase().includes(q);
        if (!matchesName && !matchesCode && !matchesDesc && !matchesSplint) {
          return false;
        }
      }
      // Availability filter
      if (onlyAvailable && !product.available) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy, onlyAvailable]);

  const categoryTabs = ['All', 'Regular', 'Premium', 'Custom Printed', 'Wholesale Packs'];

  return (
    <div className="bg-[#F8F5EF] min-h-screen text-[#171717] pb-24">
      {/* Toast popup */}
      {addedPopup && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#171717] text-white px-5 py-3 rounded-xl shadow-2xl border border-neutral-700 flex items-center gap-3 animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <div className="text-xs">
            <span className="font-bold text-white block">Added to Demo Cart</span>
            <span className="text-neutral-300">{addedPopup}</span>
          </div>
          <Link
            href="/cart"
            className="ml-3 bg-[#C62828] text-white text-[11px] font-bold px-2.5 py-1 rounded hover:bg-[#8B0000]"
          >
            View Cart
          </Link>
        </div>
      )}

      {/* Header Banner */}
      <section className="bg-[#171717] text-white py-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C7A56B] mb-2">
              <Package className="w-4 h-4 text-[#C62828]" />
              <span>Commercial Product Catalogue</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Manufactured Matchbox Solutions
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              Browse our complete lineup of 12 commercial specifications: from household carbonized safety matches to bespoke luxury hotel matchbooks and 1,000-box distributor master cartons.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-200/90 p-4 sm:p-6 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by name, code (e.g., PMI-PLM-002, Aspen, Hospitality)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F8F5EF] text-neutral-900 placeholder-neutral-400 pl-11 pr-10 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#C62828] text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-[#F8F5EF] px-3.5 py-2.5 rounded-xl border border-neutral-300 text-xs font-semibold text-neutral-700">
                <ArrowUpDown className="w-4 h-4 text-[#C62828]" />
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent font-bold text-neutral-900 focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Alphabetical (A-Z)</option>
                </select>
              </div>

              {/* Reset Filters */}
              {(selectedCategory !== 'All' || searchQuery !== '') && (
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="p-2.5 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-neutral-600 transition-colors"
                  title="Reset all filters"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 border-t border-neutral-100 pt-3">
            {categoryTabs.map((cat) => {
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
      </div>

      {/* Main Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex items-center justify-between text-xs text-neutral-600">
        <div>
          Showing <strong>{filteredProducts.length}</strong> of {PRODUCTS.length} sample products
          {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
          {searchQuery && <span> matching &ldquo;<strong>{searchQuery}</strong>&rdquo;</span>}
        </div>

        <div className="text-[11px] text-neutral-500 font-mono">
          * Demo prices in INR • Minimum Order Quantities Apply
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl border border-neutral-200 p-8 space-y-4">
            <Package className="w-12 h-12 text-neutral-300 mx-auto" />
            <h3 className="text-lg font-bold text-neutral-800">No matchbox models match your criteria</h3>
            <p className="text-xs text-neutral-500 max-w-md mx-auto">
              Try adjusting your search terms, removing filters, or resetting category selections to explore our full manufacturing catalog.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-2 bg-[#C62828] text-white px-5 py-2.5 rounded-lg text-xs font-bold"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-white border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Illustration Preview */}
                <div className="relative bg-neutral-900 h-64 flex items-center justify-center p-4 overflow-hidden border-b border-neutral-100">
                  <ProductIllustration
                    category={product.category}
                    name={product.name}
                    code={product.code}
                    accentColor={product.accentColor}
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                    <span className="bg-black/75 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                      {product.category}
                    </span>
                    {product.featured && (
                      <span className="bg-[#C7A56B] text-[#171717] text-[9px] font-extrabold uppercase px-2 py-0.5 rounded shadow">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 bg-neutral-900/90 text-[#C7A56B] text-[10px] font-mono font-bold px-2.5 py-1 rounded border border-[#C7A56B]/30">
                    {product.code}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-extrabold text-lg text-neutral-900 line-clamp-1 hover:text-[#C62828] transition-colors">
                      <Link href={`/products/${product.slug}`}>{product.name}</Link>
                    </h3>

                    <p className="text-neutral-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Quick Specs */}
                    <div className="mt-3 space-y-1.5 text-[11px] text-neutral-600 bg-[#F8F5EF] p-2.5 rounded-lg border border-neutral-200/80">
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Splint Type:</span>
                        <span className="font-semibold text-neutral-800 line-clamp-1 text-right">{product.splintType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Sticks / Box:</span>
                        <span className="font-semibold text-neutral-800">{product.matchsticksPerBox} count</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-500">Min. Order:</span>
                        <span className="font-semibold text-[#C62828]">{product.minOrder}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Demo Rate (INR)</div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-black text-neutral-900">₹{product.price}</span>
                        <span className="text-xs text-neutral-400 line-through">₹{product.mrp}</span>
                      </div>
                      <div className="text-[10px] text-neutral-500">{product.unit}</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="p-2 rounded-lg border border-neutral-300 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900 transition-colors"
                        title="View Full Product Specifications"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>

                      <button
                        onClick={() => handleAddToCart(product)}
                        className="inline-flex items-center gap-1.5 bg-[#C62828] hover:bg-[#A82020] text-white px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-md active:scale-95"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F8F5EF] flex items-center justify-center text-sm font-bold text-neutral-600">Loading Product Catalogue...</div>}>
      <ProductsCatalogueInner />
    </Suspense>
  );
}

