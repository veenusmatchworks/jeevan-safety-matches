'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Flame,
  Building2,
  Building,
  ShieldCheck,
  CheckCircle2,
  Package,
  Layers,
  Search,
  Plus,
  Filter,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  Calculator,
  Warehouse,
  FileText,
  AlertCircle,
  Check,
  Phone,
  MessageCircle,
  Trash2,
  Lock,
  Unlock,
  Eye,
  Camera,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import {
  COMPANY_CONTACT,
  MANUFACTURING_15_PHOTOS,
  ManufacturingPhoto,
  VEENUS_MATCH_PRODUCTS,
  INITIAL_ADMIN_INQUIRIES,
  INITIAL_ADMIN_INVENTORY,
  INITIAL_MACHINERY_LINES,
  AdminInquiry,
  AdminInventoryItem,
  MachineryLineStatus
} from '@/lib/data';
import { VeenusLogo } from '@/components/VeenusLogo';

export default function AdminPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');

  // Active Tab
  const [activeTab, setActiveTab] = useState<'orders' | 'inventory' | 'gallery' | 'machinery' | 'calculator'>('orders');

  // Data States
  const [inquiries, setInquiries] = useState<AdminInquiry[]>(INITIAL_ADMIN_INQUIRIES);
  const [inventory, setInventory] = useState<AdminInventoryItem[]>(INITIAL_ADMIN_INVENTORY);
  const [machinery, setMachinery] = useState<MachineryLineStatus[]>(INITIAL_MACHINERY_LINES);
  const [photos, setPhotos] = useState<ManufacturingPhoto[]>(MANUFACTURING_15_PHOTOS);

  // Search & Filter for Inquiries
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  // New Inquiry Modal Form State
  const [showAddInquiryModal, setShowAddInquiryModal] = useState(false);
  const [newInquiry, setNewInquiry] = useState({
    customerName: '',
    companyName: '',
    phone: '',
    location: '',
    type: 'Wholesale Safety Matches' as AdminInquiry['type'],
    product: 'JEEVAN Safety Matches (₹1.00 - 27s)',
    quantity: '20 Master Bales (20,000 Boxes)',
    notes: ''
  });

  // New Photo Modal Form State
  const [showAddPhotoModal, setShowAddPhotoModal] = useState(false);
  const [newPhoto, setNewPhoto] = useState({
    title: '',
    category: 'Unit 1: Chemical & Splints' as ManufacturingPhoto['category'],
    unitTag: 'Unit 1 • Veenus Match Works',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000',
    caption: ''
  });

  // Quotation Calculator State
  const [calcProduct, setCalcProduct] = useState<'JEEVAN-1' | 'JEEVAN-2' | 'TEHLA-1'>('JEEVAN-1');
  const [calcBales, setCalcBales] = useState<number>(25);
  const [calcDiscountPercent, setCalcDiscountPercent] = useState<number>(0);
  const [calcDeliveryLocation, setCalcDeliveryLocation] = useState<string>('Madurai Wholesale Hub');
  const [copiedQuote, setCopiedQuote] = useState(false);

  // Authentication Handler
  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === '1979' || pinInput === 'admin' || pinInput === '3481060') {
      setIsAuthenticated(true);
      setPinError('');
    } else {
      setPinError('Invalid passcode. Default passcode is 1979.');
    }
  };

  // Inquiry Status Updater
  const updateInquiryStatus = (id: string, newStatus: AdminInquiry['status']) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  // Delete Inquiry
  const deleteInquiry = (id: string) => {
    if (confirm('Are you sure you want to delete this inquiry record?')) {
      setInquiries((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // Add New Inquiry Handler
  const handleCreateInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInquiry.customerName || !newInquiry.phone) return;

    const created: AdminInquiry = {
      id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: newInquiry.customerName,
      companyName: newInquiry.companyName || 'Retail Dealer',
      phone: newInquiry.phone,
      location: newInquiry.location || 'Tamil Nadu',
      type: newInquiry.type,
      product: newInquiry.product,
      quantity: newInquiry.quantity,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending',
      notes: newInquiry.notes || 'Inquiry registered through Factory Portal.'
    };

    setInquiries([created, ...inquiries]);
    setShowAddInquiryModal(false);
    setNewInquiry({
      customerName: '',
      companyName: '',
      phone: '',
      location: '',
      type: 'Wholesale Safety Matches',
      product: 'JEEVAN Safety Matches (₹1.00 - 27s)',
      quantity: '20 Master Bales (20,000 Boxes)',
      notes: ''
    });
  };

  // Stock Updater
  const updateStock = (id: string, delta: number) => {
    setInventory((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(0, item.balesInStock + delta);
          return {
            ...item,
            balesInStock: newQty,
            status: newQty <= item.reorderLevel ? 'Low Stock' : 'In Stock'
          };
        }
        return item;
      })
    );
  };

  // Machinery Status Updater
  const toggleMachineryStatus = (id: string) => {
    setMachinery((prev) =>
      prev.map((m) => {
        if (m.id === id) {
          const nextStatus: MachineryLineStatus['status'] =
            m.status === 'Operational' ? 'Maintenance' : m.status === 'Maintenance' ? 'Standby' : 'Operational';
          return { ...m, status: nextStatus };
        }
        return m;
      })
    );
  };

  // Add Photo Handler
  const handleCreatePhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhoto.title || !newPhoto.image) return;

    const createdPhoto: ManufacturingPhoto = {
      id: `m-${photos.length + 1}`,
      title: newPhoto.title,
      category: newPhoto.category,
      unitTag: newPhoto.unitTag,
      image: newPhoto.image,
      caption: newPhoto.caption || 'Verified factory machinery and production floor at Srivilliputhur plant.'
    };

    setPhotos([...photos, createdPhoto]);
    setShowAddPhotoModal(false);
    setNewPhoto({
      title: '',
      category: 'Unit 1: Chemical & Splints',
      unitTag: 'Unit 1 • Veenus Match Works',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000',
      caption: ''
    });
  };

  // Delete Photo Handler
  const deletePhoto = (id: string) => {
    if (confirm('Delete this photo from the factory showcase gallery?')) {
      setPhotos((prev) => prev.filter((p) => p.id !== id));
    }
  };

  // Quotation Calculations
  const getRatePerBox = () => {
    if (calcProduct === 'JEEVAN-1') return 0.72; // Wholesale cost for Rs. 1 MRP
    if (calcProduct === 'JEEVAN-2') return 1.45; // Wholesale cost for Rs. 2 MRP
    return 0.70; // Tehla wholesale rate
  };

  const totalBoxes = calcBales * 1000;
  const baseRate = getRatePerBox();
  const subtotalBeforeDiscount = Math.round(totalBoxes * baseRate);
  const discountAmount = Math.round((subtotalBeforeDiscount * calcDiscountPercent) / 100);
  const matchCost = subtotalBeforeDiscount - discountAmount;
  const gstAmount = Math.round(matchCost * 0.12); // 12% GST on safety matches
  const totalInvoice = matchCost + gstAmount;

  const getQuoteText = () => {
    return `*JEEVAN SAFETY MATCHES — OFFICIAL WHOLESALE QUOTATION*
Factory: 3/19/A, Venkateswarpuram, Aladipatti, Srivilliputhur - 626125
Regd. No.: 3481060 | Founder: Mr. M. Subburam (Est. 1979)
----------------------------------------
Brand / Line: ${calcProduct === 'JEEVAN-1' ? 'JEEVAN Safety Matches (₹1.00 - 27s)' : calcProduct === 'JEEVAN-2' ? 'JEEVAN Safety Matches (₹2.00 - 50s)' : 'TEHLA Safety Matches (₹1.00 - 30s)'}
Quantity: ${calcBales} Master Bales (${totalBoxes.toLocaleString('en-IN')} Boxes)
Destination: ${calcDeliveryLocation}
Base Cost: ₹ ${subtotalBeforeDiscount.toLocaleString('en-IN')}
${calcDiscountPercent > 0 ? `Wholesale Discount (${calcDiscountPercent}%): - ₹ ${discountAmount.toLocaleString('en-IN')}\n` : ''}Net Matchbox Cost: ₹ ${matchCost.toLocaleString('en-IN')}
GST (12%): ₹ ${gstAmount.toLocaleString('en-IN')}
*TOTAL ESTIMATE: ₹ ${totalInvoice.toLocaleString('en-IN')}*
----------------------------------------
3 Manufacturing Sister Concerns:
1. Veenus Match Works (Largest Manufacturing Unit)
2. United Match Industries
3. The Cauveri Matches
Office Hotline: 04563 262657 | WhatsApp: +91 98421 56789`;
  };

  const copyQuoteToClipboard = () => {
    navigator.clipboard.writeText(getQuoteText());
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  // Filtered Inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // If Not Authenticated, Show Security Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-slate-50">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-slate-200/90 shadow-xl space-y-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-700 border border-red-200 flex items-center justify-center mx-auto shadow-sm">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Restricted Operations
            </span>
            <h1 className="text-2xl font-black text-slate-900">
              Factory Admin Portal
            </h1>
            <p className="text-xs text-slate-500">
              Enter authorized administrator passcode to manage wholesale inquiries, production lines, and factory showcase.
            </p>
          </div>

          <form onSubmit={handlePinSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Passcode / Access Key
              </label>
              <input
                type="password"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Enter passcode (e.g. 1979)"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-red-700 transition-colors text-center tracking-widest"
                autoFocus
              />
              {pinError && (
                <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1 justify-center">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{pinError}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-900/20 transition-all hover:scale-101 flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Admin Center</span>
            </button>
          </form>

          <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-100 flex items-center justify-between">
            <span>Jeevan Safety Matches &bull; Est. 1979</span>
            <Link href="/" className="text-red-700 font-bold hover:underline">
              &larr; Back to Site
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12 space-y-8 bg-slate-50 min-h-screen">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        {/* ============================================================ */}
        {/* TOP HEADER CARD                                              */}
        {/* ============================================================ */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Jeevan Safety Matches &bull; Factory Operations Center</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Factory Admin & Operations Portal
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Centralized dashboard for wholesale dealer orders, warehouse stock, 3 sister concerns machinery, and 15 factory photos showcase.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-right">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Managing Director</span>
              <span className="text-xs font-black text-slate-900">Mr. S. Hariharan</span>
              <span className="text-[10px] text-red-700 block font-semibold">Veenus &bull; United &bull; The Cauveri</span>
            </div>
            <Link
              href="/"
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition-colors flex items-center gap-1.5"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 4 CORE KPI STATS                                             */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Finished Bales in Stock</span>
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-700 flex items-center justify-center font-bold">
                <Warehouse className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900">
              {inventory.reduce((acc, i) => acc + i.balesInStock, 0)} <span className="text-xs text-slate-500 font-medium">Bales</span>
            </div>
            <p className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{(inventory.reduce((acc, i) => acc + i.balesInStock, 0) * 1000).toLocaleString('en-IN')} Boxes Ready for Dispatch</span>
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Active Wholesale Inquiries</span>
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                <FileText className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900">
              {inquiries.length} <span className="text-xs text-slate-500 font-medium">Recorded</span>
            </div>
            <p className="text-[11px] text-amber-700 font-bold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{inquiries.filter((i) => i.status === 'Pending').length} Pending immediate quote</span>
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">3 Sister Plants Machinery</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900">
              {machinery.filter((m) => m.status === 'Operational').length} / {machinery.length} <span className="text-xs text-slate-500 font-medium">Lines Active</span>
            </div>
            <p className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Full automated splint, dipping & box packing</span>
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Factory Showcase Photos</span>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                <Camera className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900">
              {photos.length} <span className="text-xs text-slate-500 font-medium">HD Photos</span>
            </div>
            <p className="text-[11px] text-blue-700 font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Covering Unit 1, Unit 2, Unit 3 & QC Lab</span>
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* TAB NAVIGATION BAR                                           */}
        {/* ============================================================ */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'orders'
                ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Wholesale Inquiries ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inventory')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'inventory'
                ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <Warehouse className="w-4 h-4" />
            <span>Matchbox Stock & Inventory</span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'gallery'
                ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>Manufacturing Photos Manager ({photos.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('machinery')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'machinery'
                ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <Building className="w-4 h-4" />
            <span>3 Sister Plants & 10 Machinery Lines</span>
          </button>

          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'calculator'
                ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Wholesale Quotation Generator</span>
          </button>
        </div>

        {/* ============================================================ */}
        {/* TAB 1: WHOLESALE INQUIRIES & ORDERS                          */}
        {/* ============================================================ */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {/* Filter, Search & Add Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search customer, location or order..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-red-700"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold mr-1">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Status:</span>
                </div>
                {['All', 'Pending', 'Quoted', 'Dispatched', 'Delivered'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      statusFilter === st
                        ? 'bg-red-800 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}

                <button
                  onClick={() => setShowAddInquiryModal(true)}
                  className="ml-auto sm:ml-2 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Log New Order</span>
                </button>
              </div>
            </div>

            {/* Inquiries Table / Cards */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-4 px-6">ID & Date</th>
                      <th className="py-4 px-6">Customer & Wholesaler</th>
                      <th className="py-4 px-6">Product & Quantity</th>
                      <th className="py-4 px-6">Status</th>
                      <th className="py-4 px-6">Internal Notes</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {filteredInquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-10 text-center text-slate-400">
                          No wholesale inquiry records found matching &ldquo;{searchQuery}&rdquo;.
                        </td>
                      </tr>
                    ) : (
                      filteredInquiries.map((inq) => {
                        const waText = `Hello ${inq.customerName}, this is regarding your wholesale inquiry ${inq.id} for ${inq.product} (${inq.quantity}) from Jeevan Safety Matches / Veenus Match Works.`;
                        const waLink = `https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(waText)}`;

                        return (
                          <tr key={inq.id} className="hover:bg-slate-50/70 transition-colors">
                            <td className="py-4 px-6 font-mono font-bold text-slate-900">
                              <div>{inq.id}</div>
                              <div className="text-[11px] text-slate-400 font-normal">{inq.date}</div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="font-bold text-slate-900 text-sm">{inq.customerName}</div>
                              <div className="text-slate-500">{inq.companyName}</div>
                              <div className="text-[11px] text-red-700 font-semibold flex items-center gap-1 mt-0.5">
                                <MapPin className="w-3 h-3" />
                                <span>{inq.location}</span>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <span className="font-bold text-slate-900 block">{inq.product}</span>
                              <span className="text-amber-800 font-semibold">{inq.quantity}</span>
                            </td>
                            <td className="py-4 px-6">
                              <select
                                value={inq.status}
                                onChange={(e) => updateInquiryStatus(inq.id, e.target.value as AdminInquiry['status'])}
                                className={`text-[11px] font-bold px-3 py-1.5 rounded-xl border focus:outline-none cursor-pointer ${
                                  inq.status === 'Pending'
                                    ? 'bg-amber-50 text-amber-800 border-amber-200'
                                    : inq.status === 'Quoted'
                                    ? 'bg-blue-50 text-blue-800 border-blue-200'
                                    : inq.status === 'Dispatched'
                                    ? 'bg-purple-50 text-purple-800 border-purple-200'
                                    : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                }`}
                              >
                                <option value="Pending">Pending</option>
                                <option value="Quoted">Quoted</option>
                                <option value="Dispatched">Dispatched</option>
                                <option value="Delivered">Delivered</option>
                              </select>
                            </td>
                            <td className="py-4 px-6 max-w-xs text-slate-500 text-[11px]">
                              {inq.notes}
                            </td>
                            <td className="py-4 px-6 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <a
                                  href={waLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                                  title="WhatsApp Wholesaler"
                                >
                                  <MessageCircle className="w-4 h-4" />
                                </a>
                                <a
                                  href={`tel:${inq.phone.replace(/[^0-9+]/g, '')}`}
                                  className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                                  title="Call Wholesaler"
                                >
                                  <Phone className="w-4 h-4" />
                                </a>
                                <button
                                  onClick={() => deleteInquiry(inq.id)}
                                  className="p-2 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition-colors"
                                  title="Delete Record"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: FINISHED STOCK & INVENTORY                            */}
        {/* ============================================================ */}
        {activeTab === 'inventory' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Finished Warehouse Stock & Daily Production Rate
                </h2>
                <p className="text-xs text-slate-500">
                  Track finished master bales (1,000 boxes/bale) and daily packaging runs for Jeevan and Tehla matchboxes.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500">All 3 Brands Active</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {inventory.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-slate-400">{item.code}</span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                          item.status === 'Low Stock'
                            ? 'bg-rose-100 text-rose-800 border border-rose-200'
                            : item.status === 'High Demand'
                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                            : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base">{item.name}</h3>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500">Bales in Stock:</span>
                        <span className="text-2xl font-black text-slate-900">{item.balesInStock} Bales</span>
                      </div>
                      <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/80">
                        <span className="text-slate-500">Total Matchboxes:</span>
                        <span className="font-bold text-red-700">
                          {(item.balesInStock * item.boxesPerBale).toLocaleString('en-IN')} Boxes
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">Daily Production:</span>
                        <span className="font-bold text-emerald-700">
                          +{item.dailyProductionBales} Bales / Day
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">Reorder Alert Level:</span>
                        <span className="font-medium text-slate-700">{item.reorderLevel} Bales</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Quick Stock Adjustment:
                    </span>
                    <div className="grid grid-cols-4 gap-2">
                      <button
                        onClick={() => updateStock(item.id, -50)}
                        className="py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                      >
                        -50
                      </button>
                      <button
                        onClick={() => updateStock(item.id, -10)}
                        className="py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
                      >
                        -10
                      </button>
                      <button
                        onClick={() => updateStock(item.id, 10)}
                        className="py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-200"
                      >
                        +10
                      </button>
                      <button
                        onClick={() => updateStock(item.id, 50)}
                        className="py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-200"
                      >
                        +50
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: MANUFACTURING PHOTOS MANAGER (15 HD PHOTOS)           */}
        {/* ============================================================ */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  Industrial Photo Showcase
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  Manufacturing Facilities & Factory Photo Gallery
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Manage the factory showcase photos displayed on the public Manufacturing page across our 3 units.
                </p>
              </div>

              <button
                onClick={() => setShowAddPhotoModal(true)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs shadow-md shadow-red-900/20 transition-all hover:scale-102 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Add / Upload Factory Photo</span>
              </button>
            </div>

            {/* Photos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                      <Image
                        src={photo.image}
                        alt={photo.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-black/70 text-white backdrop-blur-xs">
                          {photo.unitTag}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-amber-500 text-slate-950 font-mono">
                          #{index + 1}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block">
                        {photo.category}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm line-clamp-1">{photo.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {photo.caption}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100">
                    <span className="text-[11px] font-mono text-slate-400">ID: {photo.id}</span>
                    <button
                      onClick={() => deletePhoto(photo.id)}
                      className="text-xs font-bold text-rose-700 hover:text-rose-900 flex items-center gap-1 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 4: 3 SISTER PLANTS & 10 MACHINERY LINES                  */}
        {/* ============================================================ */}
        {activeTab === 'machinery' && (
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  3 Industrial Units &bull; Srivilliputhur Base
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  10 High-Speed Automated Machinery Lines
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Real-time operational status across Veenus Match Works (Mother Plant), United Match Industries, and The Cauveri Matches.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>All Plants Online</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {machinery.map((line) => (
                <div
                  key={line.id}
                  className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-slate-400">{line.id}</span>
                      <button
                        onClick={() => toggleMachineryStatus(line.id)}
                        className={`text-[11px] font-bold px-3 py-1 rounded-full border transition-colors flex items-center gap-1.5 ${
                          line.status === 'Operational'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : line.status === 'Maintenance'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                        title="Click to toggle status"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            line.status === 'Operational'
                              ? 'bg-emerald-600'
                              : line.status === 'Maintenance'
                              ? 'bg-amber-600'
                              : 'bg-slate-500'
                          }`}
                        />
                        <span>{line.status}</span>
                      </button>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{line.name}</h4>
                      <p className="text-xs text-red-700 font-semibold mt-0.5">{line.unit}</p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Machinery Specification:</span>
                        <span className="font-bold text-slate-800">{line.type}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Rated Capacity:</span>
                        <span className="font-bold text-amber-800">{line.speed}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">Lead Operator:</span>
                        <span className="font-bold text-slate-700">{line.operator}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Click status badge to toggle maintenance</span>
                    <span className="text-emerald-700 font-bold">100% Inspected</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 5: WHOLESALE QUOTATION GENERATOR                         */}
        {/* ============================================================ */}
        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Config Card */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  Instant Commercial Estimator
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  Wholesale Quotation Generator
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Configure wholesale orders for dealers, apply volume discounts, and copy a one-click WhatsApp quotation.
                </p>
              </div>

              <div className="space-y-4">
                {/* Product Choice */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Select Matchbox Product & Brand
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setCalcProduct('JEEVAN-1')}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        calcProduct === 'JEEVAN-1'
                          ? 'border-red-700 bg-red-50 text-red-900 font-bold shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-xs font-bold">JEEVAN ₹1.00</div>
                      <div className="text-[10px] text-slate-500">27 Sticks</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCalcProduct('JEEVAN-2')}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        calcProduct === 'JEEVAN-2'
                          ? 'border-red-700 bg-red-50 text-red-900 font-bold shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-xs font-bold">JEEVAN ₹2.00</div>
                      <div className="text-[10px] text-slate-500">50 Sticks</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCalcProduct('TEHLA-1')}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        calcProduct === 'TEHLA-1'
                          ? 'border-red-700 bg-red-50 text-red-900 font-bold shadow-xs'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-xs font-bold">TEHLA ₹1.00</div>
                      <div className="text-[10px] text-slate-500">30 Sticks</div>
                    </button>
                  </div>
                </div>

                {/* Bales Slider / Input */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Wholesale Master Bales Quantity (1 Bale = 1,000 Boxes)
                    </label>
                    <span className="text-sm font-black text-red-700">{calcBales} Bales</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="200"
                    step="5"
                    value={calcBales}
                    onChange={(e) => setCalcBales(Number(e.target.value))}
                    className="w-full accent-red-700 cursor-pointer"
                  />
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
                    <span>5 Bales (5,000 Boxes)</span>
                    <span className="font-bold text-slate-700">Total: {totalBoxes.toLocaleString('en-IN')} Boxes</span>
                    <span>200 Bales (2,00,000 Boxes)</span>
                  </div>
                </div>

                {/* Discount Percentage */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Wholesale Volume Discount
                    </label>
                    <span className="text-xs font-bold text-emerald-700">{calcDiscountPercent}% Off</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[0, 2, 3, 5, 7].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setCalcDiscountPercent(pct)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold transition-colors ${
                          calcDiscountPercent === pct
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {pct === 0 ? 'None' : `${pct}%`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Destination Hub */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Dealer Delivery Hub / Destination
                  </label>
                  <input
                    type="text"
                    value={calcDeliveryLocation}
                    onChange={(e) => setCalcDeliveryLocation(e.target.value)}
                    placeholder="e.g. Madurai, Coimbatore, Tirunelveli, Chennai"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>
              </div>
            </div>

            {/* Right Invoice & WhatsApp Dispatch Card */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Formal Quotation</span>
                  <h4 className="font-bold text-slate-900 text-lg">Invoice Estimate Summary</h4>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-red-700 block">Jeevan Safety Matches</span>
                  <span className="text-[10px] text-slate-400 font-mono">Regd No. 3481060</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span>Product Model:</span>
                  <span className="font-bold text-slate-900">
                    {calcProduct === 'JEEVAN-1' ? 'JEEVAN Safety Matches (₹1.00)' : calcProduct === 'JEEVAN-2' ? 'JEEVAN Safety Matches (₹2.00)' : 'TEHLA Safety Matches (₹1.00)'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span>Total Master Bales:</span>
                  <span className="font-bold text-slate-900">{calcBales} Bales ({totalBoxes.toLocaleString('en-IN')} Boxes)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span>Gross Product Cost:</span>
                  <span className="font-bold text-slate-900">₹ {subtotalBeforeDiscount.toLocaleString('en-IN')}</span>
                </div>
                {calcDiscountPercent > 0 && (
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-100 text-emerald-700">
                    <span>Wholesale Discount ({calcDiscountPercent}%):</span>
                    <span className="font-bold">- ₹ {discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span>Net Supply Amount:</span>
                  <span className="font-bold text-slate-900">₹ {matchCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span>GST (12%):</span>
                  <span className="font-bold text-slate-900">₹ {gstAmount.toLocaleString('en-IN')}</span>
                </div>

                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-between text-base">
                  <div>
                    <span className="text-xs text-red-800 font-bold block uppercase tracking-wider">Total Wholesale Quote</span>
                    <span className="text-[11px] text-red-600 font-semibold">Ex-Factory Srivilliputhur</span>
                  </div>
                  <span className="text-2xl font-black text-red-900">
                    ₹ {totalInvoice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={copyQuoteToClipboard}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-xs shadow-md shadow-red-900/20 transition-all hover:scale-101 flex items-center justify-center gap-2"
                >
                  {copiedQuote ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                      <span>Copied Quotation to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4" />
                      <span>Copy Formatted WhatsApp Quotation</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(getQuoteText())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-sm transition-all hover:scale-101 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Share Directly via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* ADD INQUIRY MODAL                                            */}
        {/* ============================================================ */}
        {showAddInquiryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="bg-white w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-lg">Log New Wholesale Inquiry</h3>
                <button
                  onClick={() => setShowAddInquiryModal(false)}
                  className="text-slate-400 hover:text-slate-700 text-xs font-bold"
                >
                  ✕ Close
                </button>
              </div>

              <form onSubmit={handleCreateInquiry} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Customer / Dealer Name *</label>
                  <input
                    type="text"
                    required
                    value={newInquiry.customerName}
                    onChange={(e) => setNewInquiry({ ...newInquiry, customerName: e.target.value })}
                    placeholder="e.g. S. Murugesan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Company / Agency</label>
                    <input
                      type="text"
                      value={newInquiry.companyName}
                      onChange={(e) => setNewInquiry({ ...newInquiry, companyName: e.target.value })}
                      placeholder="e.g. Sri Krishna Agencies"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={newInquiry.phone}
                      onChange={(e) => setNewInquiry({ ...newInquiry, phone: e.target.value })}
                      placeholder="+91 98421 XXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Location / Market</label>
                    <input
                      type="text"
                      value={newInquiry.location}
                      onChange={(e) => setNewInquiry({ ...newInquiry, location: e.target.value })}
                      placeholder="e.g. Madurai, TN"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Product</label>
                    <select
                      value={newInquiry.product}
                      onChange={(e) => setNewInquiry({ ...newInquiry, product: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                    >
                      <option value="JEEVAN Safety Matches (₹1.00 - 27s)">JEEVAN Safety Matches (₹1.00)</option>
                      <option value="JEEVAN Safety Matches (₹2.00 - 50s)">JEEVAN Safety Matches (₹2.00)</option>
                      <option value="TEHLA Safety Matches (₹1.00 - 30s)">TEHLA Safety Matches (₹1.00)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Quantity</label>
                  <input
                    type="text"
                    value={newInquiry.quantity}
                    onChange={(e) => setNewInquiry({ ...newInquiry, quantity: e.target.value })}
                    placeholder="e.g. 50 Master Bales (50,000 Boxes)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Notes</label>
                  <textarea
                    rows={2}
                    value={newInquiry.notes}
                    onChange={(e) => setNewInquiry({ ...newInquiry, notes: e.target.value })}
                    placeholder="Order urgency, payment terms, or delivery expectations..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddInquiryModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold shadow-md shadow-red-900/20"
                  >
                    Save Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* ADD PHOTO MODAL                                              */}
        {/* ============================================================ */}
        {showAddPhotoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="bg-white w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-lg">Add Factory Photo to Showcase</h3>
                <button
                  onClick={() => setShowAddPhotoModal(false)}
                  className="text-slate-400 hover:text-slate-700 text-xs font-bold"
                >
                  ✕ Close
                </button>
              </div>

              <form onSubmit={handleCreatePhoto} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Photo Title *</label>
                  <input
                    type="text"
                    required
                    value={newPhoto.title}
                    onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                    placeholder="e.g. Unit 1 — High-Speed Chemical Dipping Machine"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Category</label>
                    <select
                      value={newPhoto.category}
                      onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value as ManufacturingPhoto['category'] })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                    >
                      <option value="Unit 1: Chemical & Splints">Unit 1: Chemical & Splints</option>
                      <option value="Unit 2: Box Making & Duplex">Unit 2: Box Making & Duplex</option>
                      <option value="Unit 3: Packaging & Warehouse">Unit 3: Packaging & Warehouse</option>
                      <option value="Quality & Loading Bay">Quality & Loading Bay</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Unit Tag</label>
                    <input
                      type="text"
                      value={newPhoto.unitTag}
                      onChange={(e) => setNewPhoto({ ...newPhoto, unitTag: e.target.value })}
                      placeholder="e.g. Unit 1 • Mother Plant"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Image URL *</label>
                  <input
                    type="url"
                    required
                    value={newPhoto.image}
                    onChange={(e) => setNewPhoto({ ...newPhoto, image: e.target.value })}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Caption / Description</label>
                  <textarea
                    rows={2}
                    value={newPhoto.caption}
                    onChange={(e) => setNewPhoto({ ...newPhoto, caption: e.target.value })}
                    placeholder="Describe machinery features, capacity, or plant process..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddPhotoModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold shadow-md shadow-red-900/20"
                  >
                    Add to Gallery
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
