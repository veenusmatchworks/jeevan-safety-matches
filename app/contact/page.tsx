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
import { useFactory } from '@/context/FactoryContext';

export default function ContactPage() {
  const { addInquiry, companyContact } = useFactory();
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

    // Record inquiry into admin database
    addInquiry({
      customerName: formData.name.trim(),
      companyName: 'Website Customer',
      phone: formData.phone.trim(),
      location: 'Website Direct',
      type: 'Wholesale Safety Matches',
      product: formData.serviceType,
      quantity: 'Pending Quote',
      status: 'Pending',
      notes: formData.message?.trim() || 'Inquiry submitted from Contact Us form.'
    });

    // Direct WhatsApp message trigger
    const waText = `Hello Veenus Group,%0A%0AMy Name: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AService / Interest: ${encodeURIComponent(formData.serviceType)}%0AMessage: ${encodeURIComponent(formData.message || 'Please contact me with quotation and details.')}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/${companyContact.whatsappNumber || '919952411077'}?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="py-10 space-y-12">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Header Banner */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              <span>Contact Veenus Group &bull; Established 1979</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Get in Touch with Our Team
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              Connect directly with our factory office in Srivilliputhur for safety match supplies, distributor bulk pricing, and wholesale dealership inquiries.
            </p>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct WhatsApp Dispatch Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-1">
              Send an Instant Inquiry
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Complete the quick form below to dispatch your message directly to our WhatsApp support team.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-base text-slate-900">Thank you, {formData.name}!</h3>
                <p className="text-xs text-slate-600">
                  Your inquiry has been formulated and opened directly in WhatsApp. Our team will get back to you shortly on <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-700 hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name or company name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-red-700 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98421 56789"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-red-700 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Requirement Type
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-700 transition-colors"
                  >
                    <option value="JEEVAN Matchbox Wholesale Order">JEEVAN Matchbox Wholesale Order</option>
                    <option value="TEHLA Matchbox Wholesale Order">TEHLA Matchbox Wholesale Order</option>
                    <option value="Veneer Safety Matches Bulk Supply">Veneer Safety Matches Bulk Supply</option>
                    <option value="Cardboard Safety Matches Dealership">Cardboard Safety Matches Dealership</option>
                    <option value="Contract Manufacturing / Factory Supply">Contract Manufacturing / Factory Supply</option>
                    <option value="Other Wholesale Inquiry">Other Wholesale Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message / Quantity / Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide quantity of boxes, bundles required, or dealership details..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-red-700 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all hover:scale-101"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office & Factory Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-slate-900">Factory Office Contact</h3>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-red-700 flex items-center justify-center shrink-0 mt-0.5 border border-red-200">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Factory & Office Address</span>
                    <p className="text-slate-600 leading-relaxed">
                      {companyContact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Factory Office Landline</span>
                    <a href={`tel:${companyContact.phoneCall}`} className="text-slate-800 hover:text-red-700 font-bold">
                      {companyContact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Mobile / Direct Hotline</span>
                    <a href={`tel:${companyContact.mobileCall}`} className="text-slate-800 hover:text-red-700 font-bold">
                      {companyContact.mobileDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">WhatsApp Support</span>
                    <a
                      href={`https://wa.me/${companyContact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-800 font-bold"
                    >
                      {companyContact.whatsappDisplay} (Direct Response)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 mt-0.5 border border-rose-200">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Email Support</span>
                    <a href={`mailto:${companyContact.email}`} className="text-slate-800 hover:text-red-700 font-semibold">
                      {companyContact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Working Hours</span>
                    <p className="text-slate-500 leading-relaxed">
                      {companyContact.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guarantees Card */}
            <div className="bg-red-50 p-6 rounded-3xl border border-red-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-red-800">
                <ShieldCheck className="w-4 h-4" />
                <span>DIRECT MANUFACTURER GUARANTEE</span>
              </div>
              <p className="text-xs text-red-950/80 leading-relaxed font-medium">
                Deal directly with the factory management. We offer factory wholesale billing, customized box artwork, and scheduled wholesale bale dispatch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
