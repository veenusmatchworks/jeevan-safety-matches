'use client';

import React, { useState, useEffect } from 'react';
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
  EyeOff,
  Edit,
  Camera,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  Settings,
  X,
  Sliders,
  RotateCcw,
  FileEdit,
  Database,
  Cloud,
  Upload,
  KeyRound,
  User,
  LogOut
} from 'lucide-react';
import {
  MatchProduct,
  ManufacturingPhoto,
  AdminInquiry,
  AdminInventoryItem,
  MachineryLineStatus
} from '@/lib/data';
import { useFactory } from '@/context/FactoryContext';
import { VeenusLogo } from '@/components/VeenusLogo';
import { AdminSessionTimeout } from '@/components/AdminSessionTimeout';

export default function AdminPage() {
  const {
    products,
    photos,
    inquiries,
    inventory,
    machinery,
    companyContact,
    addProduct,
    updateProduct,
    deleteProduct,
    toggleHideProduct,
    addPhoto,
    updatePhoto,
    deletePhoto,
    toggleHidePhoto,
    addInquiry,
    updateInquiry,
    deleteInquiry,
    updateStock,
    updateMachineryStatus,
    updateCompanyContact,
    resetAllDefaults
  } = useFactory();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginUsername, setLoginUsername] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [showLoginPassword, setShowLoginPassword] = useState<boolean>(false);
  const [currentAdminUser, setCurrentAdminUser] = useState<string>('Administrator');
  const [pinError, setPinError] = useState<string>('');
  const [sessionExpiredNotice, setSessionExpiredNotice] = useState<string>('');
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  // Security & Password Change State
  const [changeUserForm, setChangeUserForm] = useState({
    newUsername: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [securitySuccess, setSecuritySuccess] = useState('');
  const [securityError, setSecurityError] = useState('');
  const [isUpdatingSecurity, setIsUpdatingSecurity] = useState(false);

  // Check existing session on server (strict server validation)
  useEffect(() => {
    async function verifyAuth() {
      try {
        const res = await fetch('/api/admin/auth');
        const data = await res.json();
        if (res.ok && data.authenticated) {
          setIsAuthenticated(true);
          if (data.username) {
            setCurrentAdminUser(data.username);
            setChangeUserForm((prev) => ({ ...prev, newUsername: data.username }));
          }
        } else {
          setIsAuthenticated(false);
          if (data.expired) {
            setSessionExpiredNotice('Your session expired due to inactivity. Please log in again.');
          }
        }
      } catch (e) {
        setIsAuthenticated(false);
      }
    }

    verifyAuth();
  }, []);

  // Active Tab
  const [activeTab, setActiveTab] = useState<
    'about' | 'products' | 'orders' | 'gallery' | 'company' | 'database' | 'security'
  >('about');

  // Dedicated About Page Form State
  const [aboutForm, setAboutForm] = useState({
    aboutHeroTitle: companyContact.aboutHeroTitle || '',
    aboutHeroSubtitle: companyContact.aboutHeroSubtitle || '',
    aboutHeroDescription: companyContact.aboutHeroDescription || '',
    monthlyProduction: companyContact.monthlyProduction || '50,000+ Bundles',
    monthlyProductionDisplay: companyContact.monthlyProductionDisplay || '50,000+ Bundles / Month (50K Sales)',
    founderName: companyContact.founderName || 'Mr. M. Subburam',
    founderRole: companyContact.founderRole || 'Founder & Visionary (Established 1979)',
    founderPhoto: companyContact.founderPhoto || '',
    founderBio: companyContact.founderBio || '',
    managingDirectorName: companyContact.managingDirectorName || 'Mr. S. Hariharan',
    managingDirectorRole: companyContact.managingDirectorRole || 'Managing Director (Son of Mr. M. Subburam)',
    managingDirectorPhoto: companyContact.managingDirectorPhoto || '',
    managingDirectorBio: companyContact.managingDirectorBio || '',
    aboutSisterConcernsText: companyContact.aboutSisterConcernsText || '',
    cauveriTravelsFleet: companyContact.cauveriTravelsFleet || '10+ Omni Buses',
    aboutCauveriTravelsHeading: companyContact.aboutCauveriTravelsHeading || 'Expanding Beyond Matches — Sri Cauveri Travels',
    aboutCauveriTravelsText: companyContact.aboutCauveriTravelsText || ''
  });

  const [aboutSaved, setAboutSaved] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [dbStatus, setDbStatus] = useState<{
    mongodb: { connected: boolean; error: string | null; configured: boolean };
    cloudinary: { configured: boolean; cloudName: string | null };
  } | null>(null);

  useEffect(() => {
    setAboutForm({
      aboutHeroTitle: companyContact.aboutHeroTitle || '',
      aboutHeroSubtitle: companyContact.aboutHeroSubtitle || '',
      aboutHeroDescription: companyContact.aboutHeroDescription || '',
      monthlyProduction: companyContact.monthlyProduction || '50,000+ Bundles',
      monthlyProductionDisplay: companyContact.monthlyProductionDisplay || '50,000+ Bundles / Month (50K Sales)',
      founderName: companyContact.founderName || 'Mr. M. Subburam',
      founderRole: companyContact.founderRole || 'Founder & Visionary (Established 1979)',
      founderPhoto: companyContact.founderPhoto || '',
      founderBio: companyContact.founderBio || '',
      managingDirectorName: companyContact.managingDirectorName || 'Mr. S. Hariharan',
      managingDirectorRole: companyContact.managingDirectorRole || 'Managing Director (Son of Mr. M. Subburam)',
      managingDirectorPhoto: companyContact.managingDirectorPhoto || '',
      managingDirectorBio: companyContact.managingDirectorBio || '',
      aboutSisterConcernsText: companyContact.aboutSisterConcernsText || '',
      cauveriTravelsFleet: companyContact.cauveriTravelsFleet || '10+ Omni Buses',
      aboutCauveriTravelsHeading: companyContact.aboutCauveriTravelsHeading || 'Expanding Beyond Matches — Sri Cauveri Travels',
      aboutCauveriTravelsText: companyContact.aboutCauveriTravelsText || ''
    });
  }, [companyContact]);

  useEffect(() => {
    fetch('/api/db/status')
      .then((res) => res.json())
      .then((data) => setDbStatus(data))
      .catch((e) => console.warn('Could not check DB status:', e));
  }, []);

  const handleSaveAbout = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompanyContact(aboutForm);
    setAboutSaved(true);
    setTimeout(() => setAboutSaved(false), 3000);
  };

  const handleUploadImage = async (file: File): Promise<string> => {
    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Upload failed');
      }
      return data.url;
    } finally {
      setUploadingImage(false);
    }
  };

  // Search & Filter for Products
  const [productSearch, setProductSearch] = useState('');
  const [productFilter, setProductFilter] = useState<'All' | 'Active' | 'Hidden'>('All');

  // Product Modals: Add / Edit
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [productForm, setProductForm] = useState<Omit<MatchProduct, 'id'>>({
    name: '',
    code: '',
    category: 'Cardboard Safety Matches',
    unit: '100 Boxes / Pack • Master Bales Available',
    priceEstimate: 'M.R.P. ₹ 1.00 (Wholesale Bales Available)',
    sticksPerBox: 27,
    description: '',
    image: '/products/jeevan-1rs-matches.jpg',
    highlight: '',
    isHidden: false
  });

  // Photo Modals: Add / Edit
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [editingPhotoId, setEditingPhotoId] = useState<string | null>(null);
  const [photoForm, setPhotoForm] = useState<Omit<ManufacturingPhoto, 'id'>>({
    title: '',
    category: 'Unit 1: Chemical & Splints',
    unitTag: 'Unit 1 • Mother Plant',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000',
    caption: '',
    isHidden: false
  });

  // Inquiry Modals: Add / Edit
  const [inquirySearch, setInquirySearch] = useState('');
  const [inquiryFilter, setInquiryFilter] = useState<string>('All');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [editingInquiryId, setEditingInquiryId] = useState<string | null>(null);
  const [inquiryForm, setInquiryForm] = useState<Omit<AdminInquiry, 'id' | 'date'>>({
    customerName: '',
    companyName: '',
    phone: '',
    location: '',
    type: 'Wholesale Safety Matches',
    product: 'JEEVAN Safety Matches (₹1.00 - 27s)',
    quantity: '20 Master Bales (20,000 Boxes)',
    status: 'Pending',
    notes: ''
  });

  // Company Settings Form State
  const [contactForm, setContactForm] = useState(companyContact);
  const [contactSaved, setContactSaved] = useState(false);

  useEffect(() => {
    if (companyContact) {
      setContactForm((prev) => ({ ...companyContact, ...prev, ...companyContact }));
    }
  }, [companyContact]);



  // Authentication Handler (Username & Password)
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginPassword.trim()) {
      setPinError('Please enter your administrator password.');
      return;
    }

    setIsAuthenticating(true);
    setPinError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: loginUsername.trim(),
          password: loginPassword.trim()
        })
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setSessionExpiredNotice('');
        if (data.username) {
          setCurrentAdminUser(data.username);
          setChangeUserForm((prev) => ({ ...prev, newUsername: data.username }));
        }
        setPinError('');
      } else {
        setPinError(data.error || 'Invalid administrator username or password.');
      }
    } catch {
      setPinError('Unable to connect to authorization server. Please try again.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  // Change Admin Username & Password Handler
  const handleChangeCredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    setSecurityError('');
    setSecuritySuccess('');

    if (!changeUserForm.currentPassword) {
      setSecurityError('Current password is required to confirm identity.');
      return;
    }
    if (!changeUserForm.newUsername || changeUserForm.newUsername.length < 3) {
      setSecurityError('New username must be at least 3 characters.');
      return;
    }
    if (!changeUserForm.newPassword || changeUserForm.newPassword.length < 4) {
      setSecurityError('New password must be at least 4 characters.');
      return;
    }
    if (changeUserForm.newPassword !== changeUserForm.confirmPassword) {
      setSecurityError('New password and confirm password do not match.');
      return;
    }

    setIsUpdatingSecurity(true);
    try {
      const res = await fetch('/api/admin/change-credentials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: changeUserForm.currentPassword,
          newUsername: changeUserForm.newUsername,
          newPassword: changeUserForm.newPassword
        })
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSecuritySuccess('Admin username and password updated successfully in MongoDB Atlas!');
        setCurrentAdminUser(data.username || changeUserForm.newUsername);
        setChangeUserForm({
          newUsername: data.username || changeUserForm.newUsername,
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      } else {
        setSecurityError(data.error || 'Failed to update credentials.');
      }
    } catch {
      setSecurityError('Connection error. Please try again.');
    } finally {
      setIsUpdatingSecurity(false);
    }
  };

  // Logout Handler
  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
    } catch {}
    try {
      sessionStorage.removeItem('vmw_admin_session');
    } catch {}
    setIsAuthenticated(false);
    setLoginPassword('');
  };

  // --------------------------------------------------------------------------
  // PRODUCT ACTIONS
  // --------------------------------------------------------------------------
  const openAddProductModal = () => {
    setEditingProductId(null);
    setProductForm({
      name: '',
      code: `VMW-PROD-${products.length + 1}`,
      category: 'Cardboard Safety Matches',
      unit: '100 Boxes / Pack • Master Bales Available',
      priceEstimate: 'M.R.P. ₹ 1.00 (Wholesale Bales Available)',
      sticksPerBox: 27,
      description: '',
      image: '/products/jeevan-1rs-matches.jpg',
      highlight: 'Regd Brand • Premium Wooden Splints',
      isHidden: false
    });
    setShowProductModal(true);
  };

  const openEditProductModal = (prod: MatchProduct) => {
    setEditingProductId(prod.id);
    setProductForm({
      name: prod.name,
      code: prod.code,
      category: prod.category,
      unit: prod.unit,
      priceEstimate: prod.priceEstimate,
      sticksPerBox: prod.sticksPerBox,
      description: prod.description,
      image: prod.image,
      highlight: prod.highlight,
      isHidden: prod.isHidden || false
    });
    setShowProductModal(true);
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.name) return;

    if (editingProductId) {
      updateProduct(editingProductId, productForm);
    } else {
      addProduct(productForm);
    }
    setShowProductModal(false);
  };

  const handleDeleteProduct = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete the product "${name}"?`)) {
      deleteProduct(id);
    }
  };

  // --------------------------------------------------------------------------
  // PHOTO ACTIONS
  // --------------------------------------------------------------------------
  const openAddPhotoModal = () => {
    setEditingPhotoId(null);
    setPhotoForm({
      title: '',
      category: 'Unit 1: Chemical & Splints',
      unitTag: 'Unit 1 • Mother Plant',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000',
      caption: '',
      isHidden: false
    });
    setShowPhotoModal(true);
  };

  const openEditPhotoModal = (p: ManufacturingPhoto) => {
    setEditingPhotoId(p.id);
    setPhotoForm({
      title: p.title,
      category: p.category,
      unitTag: p.unitTag,
      image: p.image,
      caption: p.caption,
      isHidden: p.isHidden || false
    });
    setShowPhotoModal(true);
  };

  const handleSavePhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoForm.title || !photoForm.image) return;

    if (editingPhotoId) {
      updatePhoto(editingPhotoId, photoForm);
    } else {
      addPhoto(photoForm);
    }
    setShowPhotoModal(false);
  };

  const handleDeletePhoto = (id: string, title: string) => {
    if (confirm(`Delete factory photo "${title}" from the gallery?`)) {
      deletePhoto(id);
    }
  };

  // --------------------------------------------------------------------------
  // INQUIRY ACTIONS
  // --------------------------------------------------------------------------
  const openAddInquiryModal = () => {
    setEditingInquiryId(null);
    setInquiryForm({
      customerName: '',
      companyName: '',
      phone: '',
      location: '',
      type: 'Wholesale Safety Matches',
      product: 'JEEVAN Safety Matches (₹1.00 - 27s)',
      quantity: '25 Master Bales (25,000 Boxes)',
      status: 'Pending',
      notes: ''
    });
    setShowInquiryModal(true);
  };

  const openEditInquiryModal = (inq: AdminInquiry) => {
    setEditingInquiryId(inq.id);
    setInquiryForm({
      customerName: inq.customerName,
      companyName: inq.companyName,
      phone: inq.phone,
      location: inq.location,
      type: inq.type,
      product: inq.product,
      quantity: inq.quantity,
      status: inq.status,
      notes: inq.notes
    });
    setShowInquiryModal(true);
  };

  const handleSaveInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.customerName || !inquiryForm.phone) return;

    if (editingInquiryId) {
      updateInquiry(editingInquiryId, inquiryForm);
    } else {
      addInquiry(inquiryForm);
    }
    setShowInquiryModal(false);
  };

  const handleDeleteInquiry = (id: string, customer: string) => {
    if (confirm(`Delete wholesale inquiry for "${customer}"?`)) {
      deleteInquiry(id);
    }
  };

  // --------------------------------------------------------------------------
  // COMPANY SETTINGS SAVE
  // --------------------------------------------------------------------------
  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompanyContact(contactForm);
    setContactSaved(true);
    setTimeout(() => setContactSaved(false), 3000);
  };

  // Filters
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
      p.code.toLowerCase().includes(productSearch.toLowerCase());
    const matchesFilter =
      productFilter === 'All'
        ? true
        : productFilter === 'Active'
        ? !p.isHidden
        : p.isHidden;
    return matchesSearch && matchesFilter;
  });

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.customerName.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.companyName.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.location.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.id.toLowerCase().includes(inquirySearch.toLowerCase());
    const matchesFilter = inquiryFilter === 'All' || inq.status === inquiryFilter;
    return matchesSearch && matchesFilter;
  });

  // Security Gate if Not Authenticated
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
              Factory Control Center
            </h1>
            <p className="text-xs text-slate-500">
              Enter confidential administrator credentials to manage wholesale catalog, factory media, and orders.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Administrator Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  placeholder="admin"
                  disabled={isAuthenticating}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-red-700 transition-colors disabled:opacity-50"
                  autoFocus
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Administrator Password
              </label>
              <div className="relative">
                <input
                  type={showLoginPassword ? 'text' : 'password'}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  disabled={isAuthenticating}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-red-700 transition-colors disabled:opacity-50 pr-10 tracking-wider"
                />
                <button
                  type="button"
                  onClick={() => setShowLoginPassword(!showLoginPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  aria-label="Toggle password visibility"
                >
                  {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {pinError && (
                <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{pinError}</span>
                </p>
              )}
            </div>

            {sessionExpiredNotice && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{sessionExpiredNotice}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isAuthenticating}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-900/20 transition-all hover:scale-101 flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isAuthenticating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <Unlock className="w-4 h-4" />
                  <span>Log In to Control Center</span>
                </>
              )}
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
      <AdminSessionTimeout
        isAuthenticated={isAuthenticated}
        onSessionExpired={(reason) => {
          setIsAuthenticated(false);
          setSessionExpiredNotice(reason);
        }}
        onSessionRenewed={() => {
          setSessionExpiredNotice('');
        }}
      />
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        {/* ============================================================ */}
        {/* TOP HEADER CARD — WHOLESALE B2B CONTROL CENTER               */}
        {/* ============================================================ */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-800 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Jeevan Safety Matches &bull; B2B Wholesale Management Portal</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Factory Admin & Wholesale Operations Center
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Manage matchbox products, add/hide boxes, upload factory photos, stage wholesale dealer inquiries, and adjust warehouse stock in real time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs">
              <User className="w-3.5 h-3.5 text-red-700" />
              <span>User: <strong className="text-slate-900">{currentAdminUser}</strong></span>
            </div>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5"
              title="Lock Admin Portal Immediately"
            >
              <LogOut className="w-3.5 h-3.5 text-amber-400" />
              <span>Log Out</span>
            </button>

            <button
              onClick={resetAllDefaults}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-200 transition-colors flex items-center gap-1.5"
              title="Reset all data back to factory defaults"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <Link
              href="/"
              className="px-4 py-2 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5"
            >
              <span>View Public Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ============================================================ */}
        {/* TAB NAVIGATION BAR                                           */}
        {/* ============================================================ */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('about')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'about'
                ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <FileEdit className="w-4 h-4" />
            <span>Edit About Us Page</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'products'
                ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>Match Products Manager ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'gallery'
                ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <Camera className="w-4 h-4" />
            <span>Manufacturing Photos ({photos.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'orders'
                ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Customer Inquiries ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('company')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'company'
                ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Company & Contact Details</span>
          </button>

          <button
            onClick={() => setActiveTab('database')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'database'
                ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>MongoDB & Cloudinary</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
              activeTab === 'security'
                ? 'bg-red-700 text-white shadow-md shadow-red-900/20'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <KeyRound className="w-4 h-4" />
            <span>Change User & Password</span>
          </button>
        </div>

        {/* ============================================================ */}
        {/* TAB 1: MATCH PRODUCTS MANAGER (Add, Edit, Delete, Hide/Show) */}
        {/* ============================================================ */}
        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  Full Box & Product Control
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  Matchbox Products & Box Catalog
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Add new matchbox products, edit box specs, change wholesale prices, or hide/unhide any box from the website instantly.
                </p>
              </div>

              <button
                onClick={openAddProductModal}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs shadow-md shadow-red-900/20 transition-all hover:scale-102 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Matchbox Product</span>
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  placeholder="Search product name or code..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-red-700"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-semibold">Visibility:</span>
                {(['All', 'Active', 'Hidden'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setProductFilter(filter)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      productFilter === filter
                        ? 'bg-red-800 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Cards Grid with Complete Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className={`bg-white rounded-3xl overflow-hidden border transition-all shadow-sm flex flex-col justify-between group ${
                    prod.isHidden
                      ? 'border-dashed border-amber-400/90 bg-amber-50/20 opacity-80'
                      : 'border-slate-200/90 hover:shadow-xl'
                  }`}
                >
                  <div>
                    {/* Image & Visibility Badge */}
                    <div className="relative h-48 w-full bg-slate-50 border-b border-slate-100 flex items-center justify-center p-3 overflow-hidden">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/95 text-slate-800 border border-slate-200 shadow-2xs">
                          {prod.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        {prod.isHidden ? (
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 flex items-center gap-1 shadow-2xs font-semibold">
                            <EyeOff className="w-3 h-3" />
                            <span>Hidden on Site</span>
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-600 text-white flex items-center gap-1 shadow-2xs font-semibold">
                            <Eye className="w-3 h-3" />
                            <span>Active on Site</span>
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500 text-slate-950">
                          {prod.sticksPerBox} Sticks
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-400 font-bold">{prod.code}</span>
                        <span className="text-xs font-bold text-red-700">{prod.priceEstimate}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-base">{prod.name}</h3>
                      <p className="text-[11px] text-red-700 font-semibold">{prod.highlight}</p>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {prod.description}
                      </p>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                        <span className="text-slate-400 text-[11px] block">Packaging Standard:</span>
                        <span className="font-semibold text-slate-800">{prod.unit}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Toolbar for this Box */}
                  <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => toggleHideProduct(prod.id)}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        prod.isHidden
                          ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200'
                      }`}
                    >
                      {prod.isHidden ? (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Unhide Box</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Hide Box</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => openEditProductModal(prod)}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                      title="Edit this Box Details"
                    >
                      <Edit className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDeleteProduct(prod.id, prod.name)}
                      className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors"
                      title="Delete Product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: WHOLESALE DEALER INQUIRIES & CONSIGNMENT STAGING       */}
        {/* ============================================================ */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  B2B Wholesale Staging
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  Customer &amp; Dealer Inquiries
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Real customer inquiries submitted through the website Contact form and WhatsApp. <span className="text-slate-400 font-semibold">(Confidential admin record &bull; Never displayed on public website)</span>
                </p>
              </div>

              <button
                onClick={openAddInquiryModal}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all hover:scale-102 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Log New Dealer Consignment</span>
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={inquirySearch}
                  onChange={(e) => setInquirySearch(e.target.value)}
                  placeholder="Search customer, location or consignment..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-red-700"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 font-semibold mr-1">Status:</span>
                {['All', 'Pending', 'Quoted', 'Dispatched', 'Delivered'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setInquiryFilter(st)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      inquiryFilter === st
                        ? 'bg-red-800 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-4 px-6">ID & Date</th>
                      <th className="py-4 px-6">Dealer & Wholesaler</th>
                      <th className="py-4 px-6">Product & Quantity</th>
                      <th className="py-4 px-6">Dispatch Status</th>
                      <th className="py-4 px-6">Factory Notes</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {filteredInquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-14 text-center text-slate-400">
                          <FileText className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                          <p className="font-bold text-slate-600 text-sm">No Customer Inquiries Yet</p>
                          <p className="text-xs text-slate-400 mt-1">
                            Real customer inquiries submitted through the website Contact form will appear here automatically.
                          </p>
                        </td>
                      </tr>
                    ) : (
                      filteredInquiries.map((inq) => {
                        const waText = `Hello ${inq.customerName}, this is regarding your wholesale match consignment ${inq.id} for ${inq.product} (${inq.quantity}) from Jeevan Safety Matches.`;
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
                                onChange={(e) => updateInquiry(inq.id, { status: e.target.value as AdminInquiry['status'] })}
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
                              <div className="flex items-center justify-end gap-1.5">
                                <a
                                  href={waLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                                  title="WhatsApp Dealer"
                                >
                                  <MessageCircle className="w-4 h-4" />
                                </a>
                                <a
                                  href={`tel:${inq.phone.replace(/[^0-9+]/g, '')}`}
                                  className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                                  title="Call Dealer"
                                >
                                  <Phone className="w-4 h-4" />
                                </a>
                                <button
                                  onClick={() => openEditInquiryModal(inq)}
                                  className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
                                  title="Edit Inquiry"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleDeleteInquiry(inq.id, inq.customerName)}
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
        {/* TAB 3: MANUFACTURING PHOTOS MANAGER (Add, Edit, Delete, Hide)*/}
        {/* ============================================================ */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  Industrial Photo Showcase
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  Manufacturing Facilities & Photo Gallery
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Add factory photos, edit machinery captions, or hide photos from the public gallery across our 3 units.
                </p>
              </div>

              <button
                onClick={openAddPhotoModal}
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
                  className={`bg-white rounded-3xl overflow-hidden border transition-all shadow-sm flex flex-col justify-between group ${
                    photo.isHidden
                      ? 'border-dashed border-amber-400 bg-amber-50/20 opacity-80'
                      : 'border-slate-200/90 hover:shadow-xl'
                  }`}
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
                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        {photo.isHidden && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-semibold">
                            Hidden
                          </span>
                        )}
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 text-white font-mono">
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

                  <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-100 gap-2">
                    <button
                      onClick={() => toggleHidePhoto(photo.id)}
                      className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                        photo.isHidden
                          ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200'
                      }`}
                    >
                      {photo.isHidden ? (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Show</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Hide</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => openEditPhotoModal(photo)}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                      title="Edit Photo Details"
                    >
                      <Edit className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDeletePhoto(photo.id, photo.title)}
                      className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 transition-colors"
                      title="Delete Photo"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB: EDIT ABOUT US PAGE (Live Click & Edit Publisher)         */}
        {/* ============================================================ */}
        {activeTab === 'about' && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-8 max-w-5xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  Live Page Editor &bull; One-Click Publish
                </span>
                <h2 className="text-xl sm:text-3xl font-black text-slate-900 mt-2">
                  Edit About Us Page
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Change text, history, founder/director portraits, and Sri Cauveri Travels info. Click publish to update the live public site immediately.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/about"
                  target="_blank"
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs flex items-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Live About Page</span>
                </Link>
                <button
                  type="button"
                  onClick={handleSaveAbout}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-xs shadow-md shadow-red-900/20 transition-all hover:scale-102 flex items-center gap-2"
                >
                  {aboutSaved ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                      <span>Published Live!</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Save &amp; Publish Live</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <form onSubmit={handleSaveAbout} className="space-y-8">
              {/* --- Section 1: Hero Headline & Legacy Story --- */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-700"></span>
                  <h4 className="font-bold text-slate-900 text-sm">Header &amp; Legacy Overview</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-xs">Hero Title</label>
                    <input
                      type="text"
                      value={aboutForm.aboutHeroTitle}
                      onChange={(e) => setAboutForm({ ...aboutForm, aboutHeroTitle: e.target.value })}
                      placeholder="About Us — Jeevan Safety Matches"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-red-700"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-xs">Monthly Production / Sales Stat *</label>
                    <input
                      type="text"
                      value={aboutForm.monthlyProduction}
                      onChange={(e) => setAboutForm({ ...aboutForm, monthlyProduction: e.target.value })}
                      placeholder="e.g. 50,000+ Bundles"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-amber-300 text-xs font-bold text-amber-900 focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-xs">Hero Subtitle / Legacy Statement</label>
                  <input
                    type="text"
                    value={aboutForm.aboutHeroSubtitle}
                    onChange={(e) => setAboutForm({ ...aboutForm, aboutHeroSubtitle: e.target.value })}
                    placeholder="Established in 1979 by Mr. M. Subburam, Jeevan Safety Matches carries a legacy..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-red-700"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-xs">Main Company Story &amp; Leadership Description</label>
                  <textarea
                    rows={4}
                    value={aboutForm.aboutHeroDescription}
                    onChange={(e) => setAboutForm({ ...aboutForm, aboutHeroDescription: e.target.value })}
                    placeholder="Today, under the leadership of his son, Mr. S. Hariharan..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-red-700 leading-relaxed"
                  />
                </div>
              </div>

              {/* --- Section 2: Founder Profile (Mr. M. Subburam) --- */}
              <div className="p-6 rounded-2xl bg-red-50/40 border border-red-200/80 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-700"></span>
                  <h4 className="font-bold text-slate-900 text-sm">Founder Profile (Mr. M. Subburam)</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-xs">Founder Name *</label>
                    <input
                      type="text"
                      value={aboutForm.founderName}
                      onChange={(e) => setAboutForm({ ...aboutForm, founderName: e.target.value })}
                      placeholder="e.g. Mr. M. Subburam"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-red-700"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-xs">Founder Title / Role</label>
                    <input
                      type="text"
                      value={aboutForm.founderRole}
                      onChange={(e) => setAboutForm({ ...aboutForm, founderRole: e.target.value })}
                      placeholder="Founder &amp; Visionary (Established 1979)"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-red-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-xs">Founder Photo (Cloudinary or Direct URL)</label>
                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-300 relative shrink-0 bg-slate-100 shadow-xs">
                      {aboutForm.founderPhoto ? (
                        <img
                          src={aboutForm.founderPhoto}
                          alt="Founder"
                          className="w-full h-full object-cover"
                          onError={(e) => ((e.target as HTMLElement).style.display = 'none')}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-[10px]">No Photo</div>
                      )}
                    </div>
                    <div className="flex-1 w-full space-y-2">
                      <input
                        type="url"
                        value={aboutForm.founderPhoto}
                        onChange={(e) => setAboutForm({ ...aboutForm, founderPhoto: e.target.value })}
                        placeholder="https://res.cloudinary.com/... or paste image URL"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-800 focus:outline-none focus:border-red-700"
                      />
                      <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-[11px] font-bold cursor-pointer transition-colors">
                        <Upload className="w-3.5 h-3.5" />
                        <span>{uploadingImage ? 'Uploading...' : 'Upload to Cloudinary'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              try {
                                const url = await handleUploadImage(file);
                                setAboutForm((prev) => ({ ...prev, founderPhoto: url }));
                              } catch (err: unknown) {
                                alert(err instanceof Error ? err.message : 'Upload failed');
                              }
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-xs">Founder Legacy Quote / Bio</label>
                  <textarea
                    rows={3}
                    value={aboutForm.founderBio}
                    onChange={(e) => setAboutForm({ ...aboutForm, founderBio: e.target.value })}
                    placeholder="Established Jeevan Safety Matches in 1979..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-red-700 leading-relaxed"
                  />
                </div>
              </div>

              {/* --- Section 3: Managing Director Profile (Mr. S. Hariharan) --- */}
              <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-200/80 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-700"></span>
                  <h4 className="font-bold text-slate-900 text-sm">Managing Director Profile (Mr. S. Hariharan)</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-xs">Managing Director Name *</label>
                    <input
                      type="text"
                      value={aboutForm.managingDirectorName}
                      onChange={(e) => setAboutForm({ ...aboutForm, managingDirectorName: e.target.value })}
                      placeholder="e.g. Mr. S. Hariharan"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-red-700"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-xs">Managing Director Title / Role</label>
                    <input
                      type="text"
                      value={aboutForm.managingDirectorRole}
                      onChange={(e) => setAboutForm({ ...aboutForm, managingDirectorRole: e.target.value })}
                      placeholder="Managing Director (Son of Mr. M. Subburam)"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-red-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-xs">Managing Director Photo (Cloudinary or Direct URL)</label>
                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-slate-300 relative shrink-0 bg-slate-100 shadow-xs">
                      {aboutForm.managingDirectorPhoto ? (
                        <img
                          src={aboutForm.managingDirectorPhoto}
                          alt="Managing Director"
                          className="w-full h-full object-cover"
                          onError={(e) => ((e.target as HTMLElement).style.display = 'none')}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-[10px]">No Photo</div>
                      )}
                    </div>
                    <div className="flex-1 w-full space-y-2">
                      <input
                        type="url"
                        value={aboutForm.managingDirectorPhoto}
                        onChange={(e) => setAboutForm({ ...aboutForm, managingDirectorPhoto: e.target.value })}
                        placeholder="https://res.cloudinary.com/... or paste image URL"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-mono text-slate-800 focus:outline-none focus:border-red-700"
                      />
                      <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-[11px] font-bold cursor-pointer transition-colors">
                        <Upload className="w-3.5 h-3.5" />
                        <span>{uploadingImage ? 'Uploading...' : 'Upload to Cloudinary'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              try {
                                const url = await handleUploadImage(file);
                                setAboutForm((prev) => ({ ...prev, managingDirectorPhoto: url }));
                              } catch (err: unknown) {
                                alert(err instanceof Error ? err.message : 'Upload failed');
                              }
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-xs">Managing Director Leadership Bio</label>
                  <textarea
                    rows={3}
                    value={aboutForm.managingDirectorBio}
                    onChange={(e) => setAboutForm({ ...aboutForm, managingDirectorBio: e.target.value })}
                    placeholder="Guiding the company through ongoing technological modernization..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-red-700 leading-relaxed"
                  />
                </div>
              </div>

              {/* --- Section 4: Sister Concerns & Infrastructure --- */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                  <h4 className="font-bold text-slate-900 text-sm">Three Sister Concerns (Veenus, United, Cauveri)</h4>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-xs">Manufacturing Strength &amp; Sister Concerns Overview</label>
                  <textarea
                    rows={3}
                    value={aboutForm.aboutSisterConcernsText}
                    onChange={(e) => setAboutForm({ ...aboutForm, aboutSisterConcernsText: e.target.value })}
                    placeholder="Our manufacturing strength is supported by three sister concerns..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-red-700 leading-relaxed"
                  />
                </div>
              </div>

              {/* --- Section 5: Sri Cauveri Travels --- */}
              <div className="p-6 rounded-2xl bg-sky-50/50 border border-sky-200/80 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-700"></span>
                  <h4 className="font-bold text-slate-900 text-sm">Sri Cauveri Travels (Omni Bus Fleet)</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-xs">Section Heading</label>
                    <input
                      type="text"
                      value={aboutForm.aboutCauveriTravelsHeading}
                      onChange={(e) => setAboutForm({ ...aboutForm, aboutCauveriTravelsHeading: e.target.value })}
                      placeholder="Expanding Beyond Matches — Sri Cauveri Travels"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-900 focus:outline-none focus:border-red-700"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1 text-xs">Active Omni Bus Fleet Count *</label>
                    <input
                      type="text"
                      value={aboutForm.cauveriTravelsFleet}
                      onChange={(e) => setAboutForm({ ...aboutForm, cauveriTravelsFleet: e.target.value })}
                      placeholder="e.g. 10+ Omni Buses"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-300 text-xs font-bold text-sky-900 focus:outline-none focus:border-sky-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1 text-xs">Sri Cauveri Travels Description</label>
                  <textarea
                    rows={3}
                    value={aboutForm.aboutCauveriTravelsText}
                    onChange={(e) => setAboutForm({ ...aboutForm, aboutCauveriTravelsText: e.target.value })}
                    placeholder="Expanding beyond the matches industry under the leadership of Mr. S. Hariharan..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-red-700 leading-relaxed"
                  />
                </div>
              </div>

              {/* Bottom Submit */}
              <div className="flex items-center justify-end pt-4 border-t border-slate-200 gap-3">
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-900/30 transition-all hover:scale-102 flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Publish All Changes Live</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 6: COMPANY & CONTACT SETTINGS                            */}
        {/* ============================================================ */}
        {activeTab === 'company' && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-6 max-w-4xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  Factory Configuration
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  Company Identity & Contact Info
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Updates telephone hotlines, factory address, founder name, and sister concerns across the entire website.
                </p>
              </div>

              {contactSaved && (
                <span className="px-3.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Saved Live!</span>
                </span>
              )}
            </div>

            <form onSubmit={handleSaveContact} className="space-y-5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Company / Brand Name</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Managing Director</label>
                  <input
                    type="text"
                    value={contactForm.managingDirector}
                    onChange={(e) => setContactForm({ ...contactForm, managingDirector: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Office Landline Number *</label>
                  <input
                    type="text"
                    value={contactForm.phoneDisplay}
                    onChange={(e) => setContactForm({ ...contactForm, phoneDisplay: e.target.value, phoneCall: `+91${e.target.value.replace(/[^0-9]/g, '')}` })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700 font-bold text-slate-900"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">Official factory office line (04563 262657)</p>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                  <input
                    type="text"
                    value={contactForm.whatsappDisplay}
                    onChange={(e) => setContactForm({
                      ...contactForm,
                      whatsappDisplay: e.target.value,
                      mobileDisplay: e.target.value,
                      whatsappNumber: e.target.value.replace(/[^0-9]/g, ''),
                      mobileCall: `+${e.target.value.replace(/[^0-9]/g, '')}`
                    })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700 font-bold text-slate-900"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">Used for wholesale WhatsApp dispatches</p>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Official Email Address</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Complete Factory & Office Address</label>
                <textarea
                  rows={2}
                  value={contactForm.address}
                  onChange={(e) => setContactForm({ ...contactForm, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700 leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Founder / Regd Details</label>
                  <input
                    type="text"
                    value={contactForm.founder}
                    onChange={(e) => setContactForm({ ...contactForm, founder: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Operating Hours</label>
                  <input
                    type="text"
                    value={contactForm.hours}
                    onChange={(e) => setContactForm({ ...contactForm, hours: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>
              </div>

              {/* --- Section: Monthly Production Capacity --- */}
              <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                  <h4 className="font-bold text-slate-900 text-sm">Monthly Production Capacity (Live Across Website)</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Monthly Production Stat / Count *</label>
                    <input
                      type="text"
                      value={contactForm.monthlyProduction || ''}
                      onChange={(e) => setContactForm({ ...contactForm, monthlyProduction: e.target.value })}
                      placeholder="e.g. 50,000+ Bundles"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-amber-300 focus:outline-none focus:border-amber-600 font-bold text-slate-900"
                    />
                    <p className="text-[10px] text-slate-500 mt-1">Appears on Home page stats bar &amp; About page metrics</p>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Display Label / Frequency</label>
                    <input
                      type="text"
                      value={contactForm.monthlyProductionDisplay || ''}
                      onChange={(e) => setContactForm({ ...contactForm, monthlyProductionDisplay: e.target.value })}
                      placeholder="e.g. 50,000+ Bundles / Month (50K Sales)"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-red-700 text-slate-900"
                    />
                    <p className="text-[10px] text-slate-500 mt-1">Appears in leadership &amp; production highlights</p>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Monthly Production Description</label>
                  <input
                    type="text"
                    value={contactForm.monthlyProductionDescription || ''}
                    onChange={(e) => setContactForm({ ...contactForm, monthlyProductionDescription: e.target.value })}
                    placeholder="e.g. Large-scale monthly production capacity across our 3 manufacturing plants."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-red-700 text-slate-900"
                  />
                </div>
              </div>

              {/* --- Section: Founder Profile (Mr. M. Subburam) --- */}
              <div className="p-5 rounded-2xl bg-red-50/40 border border-red-200/80 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-700"></span>
                  <h4 className="font-bold text-slate-900 text-sm">Founder Profile (About Us Page)</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Founder Full Name *</label>
                    <input
                      type="text"
                      value={contactForm.founderName || ''}
                      onChange={(e) => setContactForm({ ...contactForm, founderName: e.target.value })}
                      placeholder="e.g. Mr. M. Subburam"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-red-700 font-bold text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Founder Role / Title</label>
                    <input
                      type="text"
                      value={contactForm.founderRole || ''}
                      onChange={(e) => setContactForm({ ...contactForm, founderRole: e.target.value })}
                      placeholder="e.g. Founder & Visionary (Established 1979)"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-red-700 text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Founder Photo URL *</label>
                  <div className="flex gap-3 items-center">
                    <input
                      type="url"
                      value={contactForm.founderPhoto || ''}
                      onChange={(e) => setContactForm({ ...contactForm, founderPhoto: e.target.value })}
                      placeholder="https://..."
                      className="flex-1 px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-red-700 text-slate-900 font-mono text-[11px]"
                    />
                    {contactForm.founderPhoto && (
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-300 relative shrink-0 shadow-2xs">
                        <img
                          src={contactForm.founderPhoto}
                          alt="Founder Preview"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">Direct image URL for Mr. M. Subburam shown prominently in About Us</p>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Founder Bio / Legacy Quote</label>
                  <textarea
                    rows={3}
                    value={contactForm.founderBio || ''}
                    onChange={(e) => setContactForm({ ...contactForm, founderBio: e.target.value })}
                    placeholder="Brief background on establishing Jeevan Safety Matches in 1979..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-red-700 leading-relaxed text-slate-900"
                  />
                </div>
              </div>

              {/* --- Section: Managing Director Profile (Mr. S. Hariharan) --- */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                  <h4 className="font-bold text-slate-900 text-sm">Managing Director Profile (About Us Page)</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Managing Director Name *</label>
                    <input
                      type="text"
                      value={contactForm.managingDirectorName || ''}
                      onChange={(e) => setContactForm({ ...contactForm, managingDirectorName: e.target.value, managingDirector: e.target.value })}
                      placeholder="e.g. Mr. S. Hariharan"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-red-700 font-bold text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Managing Director Role / Title</label>
                    <input
                      type="text"
                      value={contactForm.managingDirectorRole || ''}
                      onChange={(e) => setContactForm({ ...contactForm, managingDirectorRole: e.target.value })}
                      placeholder="e.g. Managing Director (Son of Mr. M. Subburam)"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-red-700 text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Managing Director Photo URL *</label>
                  <div className="flex gap-3 items-center">
                    <input
                      type="url"
                      value={contactForm.managingDirectorPhoto || ''}
                      onChange={(e) => setContactForm({ ...contactForm, managingDirectorPhoto: e.target.value })}
                      placeholder="https://..."
                      className="flex-1 px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-red-700 text-slate-900 font-mono text-[11px]"
                    />
                    {contactForm.managingDirectorPhoto && (
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-300 relative shrink-0 shadow-2xs">
                        <img
                          src={contactForm.managingDirectorPhoto}
                          alt="Managing Director Preview"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">Direct image URL for Mr. S. Hariharan shown prominently in About Us</p>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Managing Director Leadership Bio</label>
                  <textarea
                    rows={3}
                    value={contactForm.managingDirectorBio || ''}
                    onChange={(e) => setContactForm({ ...contactForm, managingDirectorBio: e.target.value })}
                    placeholder="Leadership bio on expanding modern manufacturing and high-speed machinery..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-red-700 leading-relaxed text-slate-900"
                  />
                </div>
              </div>

              {/* --- Section: Sri Cauveri Travels (Omni Bus Transportation) --- */}
              <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-200/80 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-600"></span>
                  <h4 className="font-bold text-slate-900 text-sm">Sri Cauveri Travels (Omni Bus Passenger Fleet)</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Active Omni Bus Fleet Count *</label>
                    <input
                      type="text"
                      value={contactForm.cauveriTravelsFleet || ''}
                      onChange={(e) => setContactForm({ ...contactForm, cauveriTravelsFleet: e.target.value })}
                      placeholder="e.g. 10+ Omni Buses"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-sky-300 focus:outline-none focus:border-sky-600 font-bold text-slate-900"
                    />
                    <p className="text-[10px] text-slate-500 mt-1">Appears in website footer, About metrics &amp; expansion showcase</p>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Division Summary / Fleet Scope</label>
                    <input
                      type="text"
                      value={contactForm.cauveriTravelsSummary || ''}
                      onChange={(e) => setContactForm({ ...contactForm, cauveriTravelsSummary: e.target.value })}
                      placeholder="e.g. Entered the omni bus transportation sector under the name Sri Cauveri Travels, operating a modern fleet of more than 10 omni buses."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-sky-600 text-slate-900"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs shadow-md shadow-red-900/20 transition-all hover:scale-102 flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Save Company Details Live</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB: MONGODB ATLAS & CLOUDINARY INTEGRATION                  */}
        {/* ============================================================ */}
        {activeTab === 'database' && (
          <div className="space-y-8 max-w-5xl">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  Cloud Infrastructure &bull; Media &amp; Database
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  MongoDB Atlas &amp; Cloudinary Storage
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Manage cloud database persistence with MongoDB Atlas and high-speed media hosting with Cloudinary.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  fetch('/api/db/status')
                    .then((res) => res.json())
                    .then((data) => setDbStatus(data));
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold shrink-0 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Refresh Cloud Status</span>
              </button>
            </div>

            {/* Cloud Services Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service 1: MongoDB Atlas */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center font-black">
                        <Database className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">MongoDB Atlas</h4>
                        <p className="text-[11px] text-slate-400">Cloud Document Database</p>
                      </div>
                    </div>

                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                        dbStatus?.mongodb.connected
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : dbStatus?.mongodb.configured
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          dbStatus?.mongodb.connected
                            ? 'bg-emerald-600'
                            : dbStatus?.mongodb.configured
                            ? 'bg-amber-500'
                            : 'bg-slate-400'
                        }`}
                      />
                      <span>
                        {dbStatus?.mongodb.connected
                          ? 'Atlas Connected'
                          : dbStatus?.mongodb.configured
                          ? 'Connecting...'
                          : 'Local Fallback (Active)'}
                      </span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Stores real customer inquiries, product catalogs, photo metadata, and website configuration in high-availability cloud collections.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                    <span className="font-bold text-slate-700 block text-[11px]">Configuration Key:</span>
                    <code className="block bg-slate-900 text-emerald-400 px-3 py-2 rounded-xl text-[11px] font-mono break-all">
                      MONGODB_URI=mongodb+srv://&lt;username&gt;:&lt;password&gt;@cluster0.mongodb.net/jeevan_safety_matches
                    </code>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                  {dbStatus?.mongodb.connected
                    ? '✓ Connected to Atlas cluster.'
                    : 'Add MONGODB_URI in your Vercel or local environment to sync live.'}
                </p>
              </div>

              {/* Service 2: Cloudinary Media Storage */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 border border-sky-200 flex items-center justify-center font-black">
                        <Cloud className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">Cloudinary CDN</h4>
                        <p className="text-[11px] text-slate-400">Global Image Storage &amp; Optimization</p>
                      </div>
                    </div>

                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                        dbStatus?.cloudinary.configured
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          dbStatus?.cloudinary.configured ? 'bg-emerald-600' : 'bg-slate-400'
                        }`}
                      />
                      <span>
                        {dbStatus?.cloudinary.configured
                          ? `Ready (${dbStatus.cloudinary.cloudName || 'Active'})`
                          : 'Direct URL Mode'}
                      </span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Upload portraits, factory photos, and matchbox packaging directly to Cloudinary for ultra-fast CDN loading.
                  </p>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                    <span className="font-bold text-slate-700 block text-[11px]">Configuration Keys:</span>
                    <div className="bg-slate-900 text-sky-300 p-3 rounded-xl text-[11px] font-mono space-y-1">
                      <div>CLOUDINARY_CLOUD_NAME=&lt;cloud_name&gt;</div>
                      <div>CLOUDINARY_API_KEY=&lt;api_key&gt;</div>
                      <div>CLOUDINARY_API_SECRET=&lt;api_secret&gt;</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <label className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 text-xs font-bold cursor-pointer transition-colors">
                    <Upload className="w-4 h-4" />
                    <span>{uploadingImage ? 'Uploading Image to Cloudinary...' : 'Upload Test Image to Cloudinary'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          try {
                            const url = await handleUploadImage(file);
                            alert(`Upload successful! Cloudinary URL:\n${url}`);
                          } catch (err: unknown) {
                            alert(err instanceof Error ? err.message : 'Upload failed. Check Cloudinary credentials in .env.');
                          }
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 7: ADMIN SECURITY & PASSWORD MANAGEMENT                  */}
        {/* ============================================================ */}
        {activeTab === 'security' && (
          <div className="space-y-6 max-w-4xl">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  Access &amp; Security Controls
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                  Change Administrator Username &amp; Password
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Update your login credentials. Changes are encrypted and saved permanently to your connected MongoDB Atlas database.
                </p>
              </div>

              <div className="px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs flex items-center gap-2 self-start md:self-auto shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Active User: <strong className="text-slate-900 font-mono">{currentAdminUser}</strong></span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Form Card (2 cols) */}
              <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-5">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <KeyRound className="w-5 h-5 text-red-700" />
                  <h3 className="font-bold text-slate-900 text-base">Update Credentials Form</h3>
                </div>

                {securitySuccess && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2.5 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{securitySuccess}</span>
                  </div>
                )}

                {securityError && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2.5 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{securityError}</span>
                  </div>
                )}

                <form onSubmit={handleChangeCredentials} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      New Administrator Username *
                    </label>
                    <input
                      type="text"
                      required
                      value={changeUserForm.newUsername}
                      onChange={(e) => setChangeUserForm({ ...changeUserForm, newUsername: e.target.value })}
                      placeholder="e.g. admin or jeevanadmin"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-700 font-medium"
                    />
                    <p className="text-[10px] text-slate-400 mt-1">Minimum 3 characters. Case-insensitive.</p>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Current Password (To Authorize Change) *
                    </label>
                    <div className="relative">
                      <input
                        type={showCurrentPass ? 'text' : 'password'}
                        required
                        value={changeUserForm.currentPassword}
                        onChange={(e) => setChangeUserForm({ ...changeUserForm, currentPassword: e.target.value })}
                        placeholder="Enter your current password"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-700 pr-10 tracking-wider"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCurrentPass(!showCurrentPass)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                      >
                        {showCurrentPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        New Password *
                      </label>
                      <div className="relative">
                        <input
                          type={showNewPass ? 'text' : 'password'}
                          required
                          value={changeUserForm.newPassword}
                          onChange={(e) => setChangeUserForm({ ...changeUserForm, newPassword: e.target.value })}
                          placeholder="••••••••"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-700 pr-10 tracking-wider"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPass(!showNewPass)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                        >
                          {showNewPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1">Minimum 4 characters</p>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Confirm New Password *
                      </label>
                      <input
                        type={showNewPass ? 'text' : 'password'}
                        required
                        value={changeUserForm.confirmPassword}
                        onChange={(e) => setChangeUserForm({ ...changeUserForm, confirmPassword: e.target.value })}
                        placeholder="••••••••"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-red-700 tracking-wider"
                      />
                      <p className="text-[10px] text-slate-400 mt-1">Re-enter exactly to verify</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isUpdatingSecurity}
                    className="w-full py-3.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-red-900/20 transition-all hover:scale-101 flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isUpdatingSecurity ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Updating in MongoDB Atlas...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        <span>Save New Username &amp; Password</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Security Status Card (1 col) */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-4 text-xs">
                  <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <h4 className="font-bold text-slate-900">Security Architecture</h4>
                  </div>

                  <ul className="space-y-2.5 text-slate-600 text-[11px] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>SHA-256 with Salt:</strong> Passwords are never stored in plain text.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>MongoDB Atlas Storage:</strong> Persists across deployments &amp; server restarts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>Encrypted Cookies:</strong> HttpOnly secure HMAC authentication cookies.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-3 text-xs">
                  <h4 className="font-bold text-slate-900">End Session</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Log out of the administrator control center on this device.
                  </p>
                  <button
                    onClick={handleLogout}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <LogOut className="w-4 h-4 text-red-600" />
                    <span>Log Out Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* PRODUCT MODAL (Add / Edit)                                   */}
        {/* ============================================================ */}
        {showProductModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="bg-white w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-lg">
                  {editingProductId ? 'Edit Matchbox Product' : 'Add New Matchbox Product'}
                </h3>
                <button
                  onClick={() => setShowProductModal(false)}
                  className="text-slate-400 hover:text-slate-700 text-xs font-bold"
                >
                  ✕ Close
                </button>
              </div>

              <form onSubmit={handleSaveProduct} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Product / Brand Name *</label>
                  <input
                    type="text"
                    required
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    placeholder="e.g. JEEVAN Safety Matches (₹1.00)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700 font-bold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Product Code</label>
                    <input
                      type="text"
                      value={productForm.code}
                      onChange={(e) => setProductForm({ ...productForm, code: e.target.value })}
                      placeholder="e.g. VMW-JEV-01"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Average Sticks / Box</label>
                    <input
                      type="number"
                      value={productForm.sticksPerBox}
                      onChange={(e) => setProductForm({ ...productForm, sticksPerBox: Number(e.target.value) })}
                      placeholder="27, 30, 50"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Category</label>
                    <select
                      value={productForm.category}
                      onChange={(e) => setProductForm({ ...productForm, category: e.target.value as MatchProduct['category'] })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                    >
                      <option value="Cardboard Safety Matches">Cardboard Safety Matches</option>
                      <option value="Veneer Safety Matches">Veneer Safety Matches</option>
                      <option value="Wax Matches">Wax Matches</option>
                      <option value="Wholesale & Export Cartons">Wholesale & Export Cartons</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Price / Wholesale Rate</label>
                    <input
                      type="text"
                      value={productForm.priceEstimate}
                      onChange={(e) => setProductForm({ ...productForm, priceEstimate: e.target.value })}
                      placeholder="M.R.P. ₹ 1.00 (Wholesale Bales Available)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Image URL / Path *</label>
                  <input
                    type="text"
                    required
                    value={productForm.image}
                    onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                    placeholder="/products/jeevan-1rs-matches.jpg or https://..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Packaging Standard</label>
                  <input
                    type="text"
                    value={productForm.unit}
                    onChange={(e) => setProductForm({ ...productForm, unit: e.target.value })}
                    placeholder="100 Boxes / Pack • Master Bales Available"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Highlight Badge</label>
                  <input
                    type="text"
                    value={productForm.highlight}
                    onChange={(e) => setProductForm({ ...productForm, highlight: e.target.value })}
                    placeholder="Regd No. 3481060 • Avg. 27 Sticks • Three Fruits Brand"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Description</label>
                  <textarea
                    rows={3}
                    value={productForm.description}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    placeholder="Description of wood splints, striking friction, and packaging..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div className="pt-1">
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={productForm.isHidden}
                      onChange={(e) => setProductForm({ ...productForm, isHidden: e.target.checked })}
                      className="rounded accent-red-700 w-4 h-4"
                    />
                    <span className="font-bold text-slate-800">Hide from Public Website (Keep in admin only)</span>
                  </label>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowProductModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold shadow-md shadow-red-900/20"
                  >
                    {editingProductId ? 'Save Product Changes' : 'Create Product'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* PHOTO MODAL (Add / Edit)                                     */}
        {/* ============================================================ */}
        {showPhotoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="bg-white w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-lg">
                  {editingPhotoId ? 'Edit Factory Photo' : 'Add Factory Photo'}
                </h3>
                <button
                  onClick={() => setShowPhotoModal(false)}
                  className="text-slate-400 hover:text-slate-700 text-xs font-bold"
                >
                  ✕ Close
                </button>
              </div>

              <form onSubmit={handleSavePhoto} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Photo Title *</label>
                  <input
                    type="text"
                    required
                    value={photoForm.title}
                    onChange={(e) => setPhotoForm({ ...photoForm, title: e.target.value })}
                    placeholder="e.g. Unit 1 — High-Speed Chemical Dipping Carousel"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700 font-bold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Category</label>
                    <select
                      value={photoForm.category}
                      onChange={(e) => setPhotoForm({ ...photoForm, category: e.target.value as ManufacturingPhoto['category'] })}
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
                      value={photoForm.unitTag}
                      onChange={(e) => setPhotoForm({ ...photoForm, unitTag: e.target.value })}
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
                    value={photoForm.image}
                    onChange={(e) => setPhotoForm({ ...photoForm, image: e.target.value })}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Caption / Machinery Description</label>
                  <textarea
                    rows={2}
                    value={photoForm.caption}
                    onChange={(e) => setPhotoForm({ ...photoForm, caption: e.target.value })}
                    placeholder="Describe machinery process, temperature control, or plant throughput..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div className="pt-1">
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={photoForm.isHidden}
                      onChange={(e) => setPhotoForm({ ...photoForm, isHidden: e.target.checked })}
                      className="rounded accent-red-700 w-4 h-4"
                    />
                    <span className="font-bold text-slate-800">Hide from Public Gallery (Keep in admin only)</span>
                  </label>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowPhotoModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold shadow-md shadow-red-900/20"
                  >
                    {editingPhotoId ? 'Save Photo Changes' : 'Add Photo'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* INQUIRY MODAL (Add / Edit)                                   */}
        {/* ============================================================ */}
        {showInquiryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
            <div className="bg-white w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-lg">
                  {editingInquiryId ? 'Edit Wholesale Consignment' : 'Log New Dealer Consignment'}
                </h3>
                <button
                  onClick={() => setShowInquiryModal(false)}
                  className="text-slate-400 hover:text-slate-700 text-xs font-bold"
                >
                  ✕ Close
                </button>
              </div>

              <form onSubmit={handleSaveInquiry} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Customer / Dealer Name *</label>
                  <input
                    type="text"
                    required
                    value={inquiryForm.customerName}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, customerName: e.target.value })}
                    placeholder="e.g. S. Murugesan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700 font-bold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Company / Agency Name</label>
                    <input
                      type="text"
                      value={inquiryForm.companyName}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, companyName: e.target.value })}
                      placeholder="e.g. Sri Krishna Match Traders"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      placeholder="+91 98421 XXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700 font-bold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Location / Market Hub</label>
                    <input
                      type="text"
                      value={inquiryForm.location}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, location: e.target.value })}
                      placeholder="e.g. Madurai, Salem, Coimbatore"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Product</label>
                    <select
                      value={inquiryForm.product}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, product: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                    >
                      <option value="JEEVAN Safety Matches (₹1.00 - 27s)">JEEVAN Safety Matches (₹1.00)</option>
                      <option value="JEEVAN Safety Matches (₹2.00 - 50s)">JEEVAN Safety Matches (₹2.00)</option>
                      <option value="TEHLA Safety Matches (₹1.00 - 30s)">TEHLA Safety Matches (₹1.00)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Quantity (Bales / Boxes)</label>
                    <input
                      type="text"
                      value={inquiryForm.quantity}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, quantity: e.target.value })}
                      placeholder="e.g. 50 Master Bales (50,000 Boxes)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Status</label>
                    <select
                      value={inquiryForm.status}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, status: e.target.value as AdminInquiry['status'] })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Quoted">Quoted</option>
                      <option value="Dispatched">Dispatched</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Notes / Instructions</label>
                  <textarea
                    rows={2}
                    value={inquiryForm.notes}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, notes: e.target.value })}
                    placeholder="Delivery timeline, payment terms, or custom master bale stamping..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:border-red-700"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowInquiryModal(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold shadow-md shadow-red-900/20"
                  >
                    {editingInquiryId ? 'Save Consignment' : 'Log Consignment'}
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
