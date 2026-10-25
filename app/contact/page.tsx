'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Truck,
  Flame,
  ShieldCheck
} from 'lucide-react';
import { COMPANY_CONTACT } from '@/lib/data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Veenus Matchbox Wholesale Order',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Direct WhatsApp message trigger
    const waText = `Hello Veenus Group,%0A%0AMy Name: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AService / Interest: ${encodeURIComponent(formData.serviceType)}%0AMessage: ${encodeURIComponent(formData.message || 'Please contact me with quotation and details.')}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="py-12 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Banner */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Building className="w-4 h-4" />
              <span>Contact Veenus Group &bull; Established 1979</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Get in Touch with Our Team
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Connect directly with our factory office in Srivilliputhur for safety match supplies, distributor pricing, or vehicle fleet hire across South India.
            </p>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct WhatsApp Dispatch Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
            <h2 className="text-xl font-bold text-white mb-1">
              Send an Instant Inquiry
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Complete the quick form below to dispatch your message directly to our WhatsApp support team.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h3 className="font-bold text-base text-white">Thank you, {formData.name}!</h3>
                <p className="text-xs text-slate-300">
                  Your inquiry has been formulated and opened directly in WhatsApp. Our team will get back to you shortly on <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-400 hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name or company name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98421 56789"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Requirement Type
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Veenus Matchbox Wholesale Order">Veenus Matchbox Wholesale Order</option>
                    <option value="Veneer Safety Matches Bulk Supply">Veneer Safety Matches Bulk Supply</option>
                    <option value="Cardboard Safety Matches Dealership">Cardboard Safety Matches Dealership</option>
                    <option value="Mini Van / Omni Hire">Mini Van / Omni Hire</option>
                    <option value="Tata Ace / Mini Lorry Goods Transport">Tata Ace / Mini Lorry Goods Transport</option>
                    <option value="Heavy Freight Lorry (6 / 10 Wheeler) Booking">Heavy Freight Lorry (6 / 10 Wheeler) Booking</option>
                    <option value="Tourist Passenger Coach / Bus Booking">Tourist Passenger Coach / Bus Booking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Message / Quantity / Destination
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide quantity of boxes, transport pickup/drop location, or tour dates..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-101"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office & Factory Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
              <h3 className="text-lg font-bold text-white">Factory & Fleet Contact</h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-500/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block mb-0.5">Factory & Office Address</span>
                    <p className="text-slate-300 leading-relaxed">
                      {COMPANY_CONTACT.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 border border-blue-500/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block mb-0.5">Telephone Hotline</span>
                    <a href={`tel:${COMPANY_CONTACT.phoneCall}`} className="text-slate-200 hover:text-white font-semibold">
                      {COMPANY_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block mb-0.5">WhatsApp Support</span>
                    <a
                      href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-semibold"
                    >
                      {COMPANY_CONTACT.whatsappDisplay} (Direct Response)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/15 text-purple-400 flex items-center justify-center shrink-0 mt-0.5 border border-purple-500/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block mb-0.5">Email Support</span>
                    <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-slate-200 hover:text-white">
                      {COMPANY_CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-white/5 text-slate-400 flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-white block mb-0.5">Working Hours</span>
                    <p className="text-slate-400 leading-relaxed">
                      {COMPANY_CONTACT.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guarantees Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                <ShieldCheck className="w-4 h-4" />
                <span>DIRECT MANUFACTURER GUARANTEE</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deal directly with the factory management. We offer factory wholesale billing, customized box artwork, and doorstep vehicle freight delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
