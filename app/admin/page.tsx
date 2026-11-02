'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Flame,
  Truck,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
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
  BarChart3,
  Calculator,
  Warehouse,
  TruckIcon,
  FileText,
  AlertCircle,
  Check,
  Calendar,
  Building2,
  DollarSign
} from 'lucide-react';
import {
  COMPANY_CONTACT,
  INITIAL_ADMIN_INQUIRIES,
  INITIAL_ADMIN_INVENTORY,
  INITIAL_ADMIN_FLEET,
  AdminInquiry,
  AdminInventoryItem,
  AdminFleetItem
} from '@/lib/data';
import { VeenusLogo } from '@/components/VeenusLogo';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'orders' | 'inventory' | 'fleet' | 'calculator'>('orders');
  const [inquiries, setInquiries] = useState<AdminInquiry[]>(INITIAL_ADMIN_INQUIRIES);
  const [inventory, setInventory] = useState<AdminInventoryItem[]>(INITIAL_ADMIN_INVENTORY);
  const [fleet, setFleet] = useState<AdminFleetItem[]>(INITIAL_ADMIN_FLEET);

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  // Quotation Calculator State
  const [calcProduct, setCalcProduct] = useState<'JEEVAN-1' | 'JEEVAN-2' | 'TEHLA-1'>('JEEVAN-1');
  const [calcBales, setCalcBales] = useState<number>(20);
  const [calcDistanceKm, setCalcDistanceKm] = useState<number>(150);
  const [copiedQuote, setCopiedQuote] = useState(false);

  // Status Updater
  const updateInquiryStatus = (id: string, newStatus: AdminInquiry['status']) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
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

  // Fleet Status Updater
  const updateFleetStatus = (id: string, newStatus: AdminFleetItem['status']) => {
    setFleet((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
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

  // Quotation Calculations
  const getRatePerBox = () => {
    if (calcProduct === 'JEEVAN-1') return 0.72; // Wholesale cost for Rs. 1 MRP
    if (calcProduct === 'JEEVAN-2') return 1.45; // Wholesale cost for Rs. 2 MRP
    return 0.70; // Tehla wholesale rate
  };

  const totalBoxes = calcBales * 1000;
  const matchCost = Math.round(totalBoxes * getRatePerBox());
  const freightCost = Math.round(calcDistanceKm * 32); // Rs. 32 / km
  const gstAmount = Math.round(matchCost * 0.12); // 12% GST on safety matches
  const totalInvoice = matchCost + freightCost + gstAmount;

  const getQuoteText = () => {
    return `*VEENUS MATCH WORKS & TRANSPORTS — OFFICIAL WHOLESALE QUOTATION*
Factory: 3/19/A, Venkateswarpuram, Aladipatti, Srivilliputhur - 626125
----------------------------------------
Brand: ${calcProduct === 'JEEVAN-1' ? 'JEEVAN Safety Matches (₹1.00)' : calcProduct === 'JEEVAN-2' ? 'JEEVAN Safety Matches (₹2.00)' : 'TEHLA Safety Matches (₹1.00)'}
Quantity: ${calcBales} Master Bales (${totalBoxes.toLocaleString('en-IN')} Boxes)
Factory Supply Cost: ₹ ${matchCost.toLocaleString('en-IN')}
Dedicated Freight (${calcDistanceKm} km): ₹ ${freightCost.toLocaleString('en-IN')}
GST (12%): ₹ ${gstAmount.toLocaleString('en-IN')}
*TOTAL ESTIMATE: ₹ ${totalInvoice.toLocaleString('en-IN')}*
----------------------------------------
Direct Factory Dispatch: +91 4563 266277 / +91 98421 56789`;
  };

  const copyQuoteToClipboard = () => {
    navigator.clipboard.writeText(getQuoteText());
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  return (
    <div className="py-8 sm:py-12 space-y-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Header Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Veenus Group &bull; Operations & Administration Portal</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Management Control Center
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Direct factory dashboard for wholesale matchbox orders, warehouse bales inventory, and commercial fleet logistics dispatch.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-right">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Managing Director</span>
              <span className="text-xs font-black text-slate-900">Mr. S. Hariharan</span>
              <span className="text-[10px] text-red-700 block font-semibold">3 Factory Units &bull; Cavery Travels (30 Buses)</span>
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

        {/* 4 Core KPI Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Fleet Vehicle Status</span>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                <TruckIcon className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900">
              {fleet.filter((f) => f.status === 'On Trip').length} / {fleet.length} <span className="text-xs text-slate-500 font-medium">On Trip</span>
            </div>
            <p className="text-[11px] text-blue-700 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{fleet.filter((f) => f.status === 'Available').length} Vehicles Standby at Depot</span>
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">Daily Plant Production</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                <Flame className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black text-slate-900">
              100 <span className="text-xs text-slate-500 font-medium">Bales / Day</span>
            </div>
            <p className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Full automated splint & packaging lines</span>
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
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
            <span>Wholesale Orders & Inquiries ({inquiries.length})</span>
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
            <span>Finished Stock & Bales</span>
          </button>

          <button
            onClick={() => setActiveTab('fleet')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'fleet'
                ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Fleet Dispatch Tracker</span>
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

        {/* TAB 1: WHOLESALE ORDERS & INQUIRIES */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {/* Filter & Search Bar */}
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
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status:</span>
                {['All', 'Pending', 'Quoted', 'Dispatched', 'Delivered'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all ${
                      statusFilter === st
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Inquiries Table */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Order ID & Date</th>
                      <th className="py-3.5 px-4">Customer & Company</th>
                      <th className="py-3.5 px-4">Requirement / Product</th>
                      <th className="py-3.5 px-4">Quantity</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredInquiries.map((inq) => {
                      const waReplyUrl = `https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                        `Hello ${inq.customerName}, this is Mr. S. Hariharan from Veenus Match Works Srivilliputhur regarding your order ${inq.id} for ${inq.quantity}.`
                      )}`;

                      return (
                        <tr key={inq.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-4 px-4 font-mono font-bold text-slate-900">
                            <div>{inq.id}</div>
                            <span className="text-[11px] font-normal text-slate-500">{inq.date}</span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-bold text-slate-900">{inq.customerName}</div>
                            <div className="text-[11px] text-slate-500">{inq.companyName} &bull; {inq.location}</div>
                            <div className="text-[11px] text-red-700 font-semibold">{inq.phone}</div>
                          </td>
                          <td className="py-4 px-4 font-medium text-slate-800">
                            <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 mb-1">
                              {inq.type}
                            </div>
                            <div>{inq.productOrVehicle}</div>
                            <p className="text-[10px] text-slate-500 italic mt-0.5">{inq.notes}</p>
                          </td>
                          <td className="py-4 px-4 font-bold text-slate-900">
                            {inq.quantity}
                          </td>
                          <td className="py-4 px-4">
                            <select
                              value={inq.status}
                              onChange={(e) => updateInquiryStatus(inq.id, e.target.value as AdminInquiry['status'])}
                              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border focus:outline-none ${
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
                          <td className="py-4 px-4 text-right">
                            <a
                              href={waReplyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-bold shadow-xs transition-colors"
                            >
                              <MessageCircle className="w-3.5 h-3.5 fill-current" />
                              <span>WhatsApp</span>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FINISHED STOCK & INVENTORY */}
        {activeTab === 'inventory' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {inventory.map((item) => (
                <div key={item.id} className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded font-bold">
                        {item.code}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mt-1">
                        {item.name}
                      </h3>
                      <span className="text-xs text-red-700 font-bold">{item.brand} Brand</span>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        item.status === 'In Stock'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-amber-50 text-amber-800 border-amber-200'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">Warehouse Stock:</span>
                      <span className="text-lg font-black text-slate-900">{item.balesInStock} Bales</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Total Matchboxes:</span>
                      <span className="font-bold text-slate-800">{(item.balesInStock * item.boxesPerBale).toLocaleString('en-IN')} Boxes</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Daily Production:</span>
                      <span className="font-bold text-emerald-700">+{item.dailyProductionBales} Bales / Day</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-slate-500">Quick Adjust:</span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => updateStock(item.id, -10)}
                        className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700"
                        title="Dispatch 10 Bales"
                      >
                        -10
                      </button>
                      <button
                        onClick={() => updateStock(item.id, 10)}
                        className="px-2.5 py-1 rounded bg-red-50 hover:bg-red-100 text-xs font-bold text-red-800"
                        title="Add 10 Bales to stock"
                      >
                        +10
                      </button>
                      <button
                        onClick={() => updateStock(item.id, 50)}
                        className="px-2.5 py-1 rounded bg-emerald-50 hover:bg-emerald-100 text-xs font-bold text-emerald-800"
                        title="Add 50 Bales batch"
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

        {/* TAB 3: FLEET DISPATCH TRACKER */}
        {activeTab === 'fleet' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Active Commercial Fleet</h3>
                  <p className="text-xs text-slate-500">Tracking all lorries, vans, and passenger tourist coaches.</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  {fleet.length} Total Vehicles in Fleet
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Reg No & Vehicle</th>
                      <th className="py-3.5 px-4">Assigned Driver</th>
                      <th className="py-3.5 px-4">Current Location</th>
                      <th className="py-3.5 px-4">Destination</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Driver Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {fleet.map((veh) => (
                      <tr key={veh.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-4 px-4 font-bold text-slate-900">
                          <div className="font-mono text-red-800">{veh.vehicleNumber}</div>
                          <span className="text-slate-600 font-medium text-[11px]">{veh.title}</span>
                        </td>
                        <td className="py-4 px-4 font-semibold text-slate-900">
                          {veh.driverName}
                        </td>
                        <td className="py-4 px-4 text-slate-700 flex items-center gap-1.5 mt-2">
                          <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{veh.currentLocation}</span>
                        </td>
                        <td className="py-4 px-4 font-medium text-slate-800">
                          {veh.destination}
                        </td>
                        <td className="py-4 px-4">
                          <select
                            value={veh.status}
                            onChange={(e) => updateFleetStatus(veh.id, e.target.value as AdminFleetItem['status'])}
                            className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border focus:outline-none ${
                              veh.status === 'On Trip'
                                ? 'bg-blue-50 text-blue-800 border-blue-200'
                                : veh.status === 'Available'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                : veh.status === 'Loading'
                                ? 'bg-amber-50 text-amber-800 border-amber-200'
                                : 'bg-red-50 text-red-800 border-red-200'
                            }`}
                          >
                            <option value="Available">Available</option>
                            <option value="On Trip">On Trip</option>
                            <option value="Loading">Loading</option>
                            <option value="Service">Service</option>
                          </select>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <a
                            href={`tel:${veh.driverPhone}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5 text-red-700" />
                            <span>{veh.driverPhone}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: WHOLESALE QUOTATION GENERATOR */}
        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-5">
              <h3 className="font-bold text-slate-900 text-lg">Quotation Parameters</h3>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Select Product Brand
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setCalcProduct('JEEVAN-1')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      calcProduct === 'JEEVAN-1'
                        ? 'bg-red-700 text-white border-red-700 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    JEEVAN ₹1
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcProduct('JEEVAN-2')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      calcProduct === 'JEEVAN-2'
                        ? 'bg-red-700 text-white border-red-700 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    JEEVAN ₹2
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcProduct('TEHLA-1')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      calcProduct === 'TEHLA-1'
                        ? 'bg-red-700 text-white border-red-700 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    TEHLA ₹1
                  </button>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>Quantity (Master Bales):</span>
                  <span className="text-red-700 font-black">{calcBales} Bales ({totalBoxes.toLocaleString('en-IN')} Boxes)</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={calcBales}
                  onChange={(e) => setCalcBales(Number(e.target.value))}
                  className="w-full accent-red-700"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>5 Bales</span>
                  <span>50 Bales</span>
                  <span>100 Bales (1 Truckload)</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>Transport Distance:</span>
                  <span className="text-blue-700 font-black">{calcDistanceKm} KM</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="800"
                  step="10"
                  value={calcDistanceKm}
                  onChange={(e) => setCalcDistanceKm(Number(e.target.value))}
                  className="w-full accent-blue-700"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>20 KM (Local)</span>
                  <span>400 KM (Chennai)</span>
                  <span>800 KM (Interstate)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 text-slate-600">
                <span className="font-bold text-slate-800 block">Pricing Formula Reference:</span>
                <p>&bull; 1 Master Bale = 1,000 Safety Matchboxes</p>
                <p>&bull; GST: 12% statutory rate on matches</p>
                <p>&bull; Fleet transport: ₹32/km for dedicated lorry dispatch</p>
              </div>
            </div>

            {/* Generated Quote Preview */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-black text-slate-900 text-lg">Wholesale Quotation Sheet</h3>
                  <span className="text-[11px] text-slate-500 font-medium">Ready for immediate client dispatch</span>
                </div>
                <button
                  onClick={copyQuoteToClipboard}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors shadow-2xs"
                >
                  {copiedQuote ? <Check className="w-4 h-4 text-emerald-400" /> : <FileText className="w-4 h-4" />}
                  <span>{copiedQuote ? 'Copied to Clipboard!' : 'Copy Quote Text'}</span>
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">Product / Brand</span>
                  <span className="font-bold text-slate-900">
                    {calcProduct === 'JEEVAN-1' ? 'JEEVAN Matches (₹1.00 - 27s)' : calcProduct === 'JEEVAN-2' ? 'JEEVAN Matches (₹2.00 - 50s)' : 'TEHLA Matches (₹1.00 - 30s)'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">Total Bales & Boxes</span>
                  <span className="font-bold text-slate-900">{calcBales} Bales ({totalBoxes.toLocaleString('en-IN')} Boxes)</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">Factory Supply Price</span>
                  <span className="font-bold text-slate-900">₹ {matchCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">Dedicated Vehicle Freight ({calcDistanceKm} km)</span>
                  <span className="font-bold text-slate-900">₹ {freightCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600 font-medium">GST Tax (12%)</span>
                  <span className="font-bold text-slate-900">₹ {gstAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between py-3 bg-red-50 px-4 rounded-xl text-red-900">
                  <span className="font-black text-sm">TOTAL ESTIMATED INVOICE</span>
                  <span className="font-black text-lg">₹ {totalInvoice.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(getQuoteText())}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-101"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Quotation via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
