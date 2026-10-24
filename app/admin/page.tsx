'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldAlert,
  LayoutDashboard,
  Package,
  ShoppingBag,
  MessageSquare,
  Settings,
  TrendingUp,
  Users,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Plus,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
  X
} from 'lucide-react';
import { PRODUCTS, SAMPLE_ORDERS, SAMPLE_ENQUIRIES, Product } from '@/lib/data';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders' | 'enquiries'>('overview');
  const [productList, setProductList] = useState<Product[]>(PRODUCTS);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editSuccessToast, setEditSuccessToast] = useState(false);

  // Filter terms
  const [searchProduct, setSearchProduct] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const filteredProducts = productList.filter((p) => {
    if (filterCategory !== 'All' && p.category !== filterCategory) return false;
    if (searchProduct && !p.name.toLowerCase().includes(searchProduct.toLowerCase()) && !p.code.toLowerCase().includes(searchProduct.toLowerCase())) {
      return false;
    }
    return true;
  });

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    setProductList((prev) =>
      prev.map((p) => (p.id === editingProduct.id ? editingProduct : p))
    );
    setEditingProduct(null);
    setEditSuccessToast(true);
    setTimeout(() => setEditSuccessToast(false), 2500);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to delete this sample product from the demo table?')) {
      setProductList((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="bg-[#171717] min-h-screen text-white pb-24">
      {/* Toast Notification */}
      {editSuccessToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in text-xs font-bold">
          <CheckCircle2 className="w-5 h-5 text-white" />
          <span>Sample Product Updated Successfully!</span>
        </div>
      )}

      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-700 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <h3 className="font-bold text-lg text-white">Edit Demo Product</h3>
              <button
                onClick={() => setEditingProduct(null)}
                className="text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1">Product Name</label>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#C7A56B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Sample Price (₹ INR)</label>
                  <input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#C7A56B]"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">MRP (₹ INR)</label>
                  <input
                    type="number"
                    value={editingProduct.mrp}
                    onChange={(e) => setEditingProduct({ ...editingProduct, mrp: Number(e.target.value) })}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#C7A56B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1">Packaging Unit</label>
                  <input
                    type="text"
                    value={editingProduct.unit}
                    onChange={(e) => setEditingProduct({ ...editingProduct, unit: e.target.value })}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#C7A56B]"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Splint Sticks per Box</label>
                  <input
                    type="number"
                    value={editingProduct.matchsticksPerBox}
                    onChange={(e) => setEditingProduct({ ...editingProduct, matchsticksPerBox: Number(e.target.value) })}
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#C7A56B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-neutral-400 mb-1">Short Description</label>
                <textarea
                  rows={3}
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#C7A56B]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#C62828] hover:bg-[#8B0000] text-white font-bold"
                >
                  Save Changes (Demo)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Top Banner Disclaimer */}
      <div className="bg-amber-500/10 border-b border-amber-500/30 text-amber-300 px-4 py-2.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>ADMIN DASHBOARD PREVIEW:</strong> This is a frontend presentation mockup demonstrating the proposed management interface. Authentication and database integration are intentionally simulated.
            </span>
          </div>
          <span className="font-mono text-[10px] bg-amber-400/20 px-2 py-0.5 rounded text-amber-200">
            PROTOTYPE ONLY
          </span>
        </div>
      </div>

      {/* Admin Header */}
      <section className="bg-neutral-900 border-b border-neutral-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#C7A56B] uppercase tracking-wider block">
                PRIME MATCH INDUSTRIES • PORTAL
              </span>
              <h1 className="text-2xl font-black text-white">Management Console Preview</h1>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-200 border border-neutral-700"
              >
                <span>View Live Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto border-t border-neutral-800/80 pt-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'overview'
                  ? 'bg-[#C62828] text-white'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Overview Metrics</span>
            </button>

            <button
              onClick={() => setActiveTab('products')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'products'
                  ? 'bg-[#C62828] text-white'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Products Management ({productList.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'orders'
                  ? 'bg-[#C62828] text-white'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Sample Orders ({SAMPLE_ORDERS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('enquiries')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'enquiries'
                  ? 'bg-[#C62828] text-white'
                  : 'bg-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Commercial Enquiries ({SAMPLE_ENQUIRIES.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* ================= 1. OVERVIEW TAB ================= */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
                <div className="text-neutral-400 text-xs font-semibold uppercase">Total Catalogue Models</div>
                <div className="text-3xl font-black text-white mt-2">{productList.length}</div>
                <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                  <span>Across 4 manufacturing lines</span>
                </div>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
                <div className="text-neutral-400 text-xs font-semibold uppercase">Simulated Orders (Month)</div>
                <div className="text-3xl font-black text-[#C7A56B] mt-2">{SAMPLE_ORDERS.length}</div>
                <div className="text-[11px] text-neutral-400 mt-1">₹44,870 Total Demo Volume</div>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
                <div className="text-neutral-400 text-xs font-semibold uppercase">B2B Enquiries Logged</div>
                <div className="text-3xl font-black text-[#C62828] mt-2">{SAMPLE_ENQUIRIES.length}</div>
                <div className="text-[11px] text-amber-400 mt-1">2 Pending Sales Callback</div>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
                <div className="text-neutral-400 text-xs font-semibold uppercase">Production Uptime</div>
                <div className="text-3xl font-black text-emerald-400 mt-2">99.4%</div>
                <div className="text-[11px] text-neutral-400 mt-1">Rotary Carousel Dipping Line</div>
              </div>
            </div>

            {/* Recent Orders Preview */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-extrabold text-base text-white">Recent Simulated Orders</h3>
                <button
                  onClick={() => setActiveTab('orders')}
                  className="text-xs text-[#C7A56B] hover:underline flex items-center gap-1"
                >
                  <span>View all {SAMPLE_ORDERS.length}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-neutral-800/80 text-neutral-400 uppercase text-[10px]">
                    <tr>
                      <th className="p-3 font-semibold">Order ID</th>
                      <th className="p-3 font-semibold">Customer / Company</th>
                      <th className="p-3 font-semibold">Ordered Format</th>
                      <th className="p-3 font-semibold">Value</th>
                      <th className="p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800">
                    {SAMPLE_ORDERS.slice(0, 4).map((ord) => (
                      <tr key={ord.id} className="hover:bg-neutral-800/50">
                        <td className="p-3 font-mono font-bold text-[#C7A56B]">{ord.id}</td>
                        <td className="p-3">
                          <span className="font-bold text-white block">{ord.customerName}</span>
                          <span className="text-[11px] text-neutral-400">{ord.companyName}</span>
                        </td>
                        <td className="p-3 text-neutral-300">{ord.items}</td>
                        <td className="p-3 font-bold text-white">₹{ord.total.toLocaleString()}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              ord.status === 'Delivered'
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : ord.status === 'Shipped'
                                ? 'bg-blue-500/20 text-blue-400'
                                : 'bg-amber-500/20 text-amber-400'
                            }`}
                          >
                            {ord.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= 2. PRODUCTS TAB ================= */}
        {activeTab === 'products' && (
          <div className="space-y-6 animate-fade-in">
            {/* Filter toolbar */}
            <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter product by name or code..."
                  value={searchProduct}
                  onChange={(e) => setSearchProduct(e.target.value)}
                  className="w-full bg-neutral-800 text-xs text-white placeholder-neutral-500 pl-9 pr-3 py-2 rounded-lg border border-neutral-700 focus:outline-none focus:border-[#C7A56B]"
                />
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="bg-neutral-800 text-xs text-white border border-neutral-700 rounded-lg px-3 py-2 focus:outline-none"
                >
                  <option value="All">All Categories</option>
                  <option value="Regular">Regular</option>
                  <option value="Premium">Premium</option>
                  <option value="Custom Printed">Custom Printed</option>
                  <option value="Wholesale Packs">Wholesale Packs</option>
                </select>
              </div>
            </div>

            {/* Products Table */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-neutral-800 text-neutral-400 uppercase text-[10px]">
                    <tr>
                      <th className="p-3 font-semibold">Code</th>
                      <th className="p-3 font-semibold">Product Name</th>
                      <th className="p-3 font-semibold">Category</th>
                      <th className="p-3 font-semibold">Price (INR)</th>
                      <th className="p-3 font-semibold">Sticks/Box</th>
                      <th className="p-3 font-semibold">Packaging Ratio</th>
                      <th className="p-3 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800">
                    {filteredProducts.map((p) => (
                      <tr key={p.id} className="hover:bg-neutral-800/50">
                        <td className="p-3 font-mono font-bold text-[#C7A56B]">{p.code}</td>
                        <td className="p-3">
                          <Link href={`/products/${p.slug}`} className="font-bold text-white hover:underline">
                            {p.name}
                          </Link>
                        </td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-neutral-800 text-neutral-300">
                            {p.category}
                          </span>
                        </td>
                        <td className="p-3 font-bold text-white">₹{p.price}</td>
                        <td className="p-3 text-neutral-400">{p.matchsticksPerBox} count</td>
                        <td className="p-3 text-neutral-400 max-w-xs truncate">{p.packaging}</td>
                        <td className="p-3 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setEditingProduct(p)}
                              className="p-1.5 rounded hover:bg-neutral-700 text-neutral-300 hover:text-white"
                              title="Edit Demo Product"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(p.id)}
                              className="p-1.5 rounded hover:bg-red-900/40 text-neutral-400 hover:text-red-400"
                              title="Delete Product"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= 3. ORDERS TAB ================= */}
        {activeTab === 'orders' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden p-6">
              <h3 className="font-bold text-base text-white mb-4">Sample Client Order Log</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-neutral-800 text-neutral-400 uppercase text-[10px]">
                    <tr>
                      <th className="p-3 font-semibold">Order ID</th>
                      <th className="p-3 font-semibold">Date</th>
                      <th className="p-3 font-semibold">Client / Company</th>
                      <th className="p-3 font-semibold">Type</th>
                      <th className="p-3 font-semibold">Items</th>
                      <th className="p-3 font-semibold">Total</th>
                      <th className="p-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800">
                    {SAMPLE_ORDERS.map((ord) => (
                      <tr key={ord.id} className="hover:bg-neutral-800/50">
                        <td className="p-3 font-mono font-bold text-[#C7A56B]">{ord.id}</td>
                        <td className="p-3 text-neutral-400 font-mono">{ord.date}</td>
                        <td className="p-3">
                          <span className="font-bold text-white block">{ord.customerName}</span>
                          <span className="text-[11px] text-neutral-400">{ord.companyName}</span>
                        </td>
                        <td className="p-3">
                          <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                            {ord.type}
                          </span>
                        </td>
                        <td className="p-3 text-neutral-300">{ord.items}</td>
                        <td className="p-3 font-bold text-white">₹{ord.total.toLocaleString()}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              ord.status === 'Delivered'
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : ord.status === 'Shipped'
                                ? 'bg-blue-500/20 text-blue-400'
                                : 'bg-amber-500/20 text-amber-400'
                            }`}
                          >
                            {ord.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ================= 4. ENQUIRIES TAB ================= */}
        {activeTab === 'enquiries' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden p-6">
              <h3 className="font-bold text-base text-white mb-4">Commercial Bulk Enquiries</h3>
              <div className="space-y-4">
                {SAMPLE_ENQUIRIES.map((enq) => (
                  <div
                    key={enq.id}
                    className="p-5 rounded-xl bg-neutral-800/60 border border-neutral-700/80 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-700 pb-3">
                      <div>
                        <span className="font-mono text-xs text-[#C7A56B] font-bold mr-2">{enq.id}</span>
                        <span className="font-bold text-white text-sm">{enq.name}</span>
                        <span className="text-xs text-neutral-400 ml-2">({enq.company})</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-neutral-400">{enq.date}</span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            enq.status === 'New'
                              ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                              : enq.status === 'Quoted'
                              ? 'bg-[#C7A56B]/20 text-[#C7A56B]'
                              : 'bg-neutral-700 text-neutral-300'
                          }`}
                        >
                          {enq.status}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-neutral-300">
                      <div>
                        <span className="text-neutral-500 block">Contact Info:</span>
                        <span className="font-mono">{enq.email}</span>
                        <span className="block font-mono text-[11px] text-neutral-400">{enq.phone}</span>
                      </div>

                      <div>
                        <span className="text-neutral-500 block">Enquiry Type:</span>
                        <span className="font-semibold text-white">{enq.enquiryType}</span>
                        <span className="block text-[11px] text-neutral-400">{enq.category}</span>
                      </div>

                      <div>
                        <span className="text-neutral-500 block">Estimated Volume:</span>
                        <span className="font-semibold text-[#C7A56B]">{enq.quantity}</span>
                      </div>
                    </div>

                    <div className="p-3 bg-neutral-900 rounded-lg text-xs text-neutral-300 italic border border-neutral-800">
                      &ldquo;{enq.message}&rdquo;
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
