'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  VEENUS_MATCH_PRODUCTS,
  MANUFACTURING_15_PHOTOS,
  COMPANY_CONTACT,
  INITIAL_ADMIN_INQUIRIES,
  INITIAL_ADMIN_INVENTORY,
  INITIAL_MACHINERY_LINES,
  MatchProduct,
  ManufacturingPhoto,
  AdminInquiry,
  AdminInventoryItem,
  MachineryLineStatus
} from '@/lib/data';

interface FactoryContextType {
  products: MatchProduct[];
  photos: ManufacturingPhoto[];
  inquiries: AdminInquiry[];
  inventory: AdminInventoryItem[];
  machinery: MachineryLineStatus[];
  companyContact: typeof COMPANY_CONTACT;
  
  // Product Actions
  addProduct: (product: Omit<MatchProduct, 'id'>) => void;
  updateProduct: (id: string, product: Partial<MatchProduct>) => void;
  deleteProduct: (id: string) => void;
  toggleHideProduct: (id: string) => void;

  // Photo Actions
  addPhoto: (photo: Omit<ManufacturingPhoto, 'id'>) => void;
  updatePhoto: (id: string, photo: Partial<ManufacturingPhoto>) => void;
  deletePhoto: (id: string) => void;
  toggleHidePhoto: (id: string) => void;

  // Inquiry Actions
  addInquiry: (inquiry: Omit<AdminInquiry, 'id' | 'date'>) => void;
  updateInquiry: (id: string, updated: Partial<AdminInquiry>) => void;
  deleteInquiry: (id: string) => void;

  // Inventory & Machinery Actions
  updateStock: (id: string, delta: number) => void;
  updateMachineryStatus: (id: string, status: MachineryLineStatus['status']) => void;

  // Company Contact Actions
  updateCompanyContact: (updated: Partial<typeof COMPANY_CONTACT>) => void;

  // Reset
  resetAllDefaults: () => void;
}

const FactoryContext = createContext<FactoryContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PRODUCTS: 'vmw_products_v2',
  PHOTOS: 'vmw_photos_v2',
  INQUIRIES: 'vmw_inquiries_v2',
  INVENTORY: 'vmw_inventory_v2',
  MACHINERY: 'vmw_machinery_v2',
  CONTACT: 'vmw_contact_v3'
};

export const FactoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<MatchProduct[]>(VEENUS_MATCH_PRODUCTS);
  const [photos, setPhotos] = useState<ManufacturingPhoto[]>(MANUFACTURING_15_PHOTOS);
  const [inquiries, setInquiries] = useState<AdminInquiry[]>(INITIAL_ADMIN_INQUIRIES);
  const [inventory, setInventory] = useState<AdminInventoryItem[]>(INITIAL_ADMIN_INVENTORY);
  const [machinery, setMachinery] = useState<MachineryLineStatus[]>(INITIAL_MACHINERY_LINES);
  const [companyContact, setCompanyContact] = useState<typeof COMPANY_CONTACT>(COMPANY_CONTACT);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const storedProducts = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
      if (storedProducts) setProducts(JSON.parse(storedProducts));

      const storedPhotos = localStorage.getItem(STORAGE_KEYS.PHOTOS);
      if (storedPhotos) setPhotos(JSON.parse(storedPhotos));

      const storedInquiries = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
      if (storedInquiries) setInquiries(JSON.parse(storedInquiries));

      const storedInventory = localStorage.getItem(STORAGE_KEYS.INVENTORY);
      if (storedInventory) setInventory(JSON.parse(storedInventory));

      const storedMachinery = localStorage.getItem(STORAGE_KEYS.MACHINERY);
      if (storedMachinery) setMachinery(JSON.parse(storedMachinery));

      const storedContact = localStorage.getItem(STORAGE_KEYS.CONTACT);
      if (storedContact) {
        setCompanyContact({ ...COMPANY_CONTACT, ...JSON.parse(storedContact) });
      }
    } catch (e) {
      console.warn('Failed to load factory data from storage:', e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage helpers
  const saveProducts = (newProds: MatchProduct[]) => {
    setProducts(newProds);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(newProds));
    }
  };

  const savePhotos = (newPhotos: ManufacturingPhoto[]) => {
    setPhotos(newPhotos);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.PHOTOS, JSON.stringify(newPhotos));
    }
  };

  const saveInquiries = (newInqs: AdminInquiry[]) => {
    setInquiries(newInqs);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(newInqs));
    }
  };

  const saveInventory = (newInv: AdminInventoryItem[]) => {
    setInventory(newInv);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.INVENTORY, JSON.stringify(newInv));
    }
  };

  const saveMachinery = (newMach: MachineryLineStatus[]) => {
    setMachinery(newMach);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.MACHINERY, JSON.stringify(newMach));
    }
  };

  const saveContact = (newContact: typeof COMPANY_CONTACT) => {
    setCompanyContact(newContact);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(newContact));
    }
  };

  // Product Handlers
  const addProduct = (prod: Omit<MatchProduct, 'id'>) => {
    const newId = `vm-${Date.now().toString().slice(-4)}`;
    const fullProd: MatchProduct = { ...prod, id: newId, isHidden: false };
    saveProducts([...products, fullProd]);
  };

  const updateProduct = (id: string, updated: Partial<MatchProduct>) => {
    const updatedList = products.map((p) => (p.id === id ? { ...p, ...updated } : p));
    saveProducts(updatedList);
  };

  const deleteProduct = (id: string) => {
    const updatedList = products.filter((p) => p.id !== id);
    saveProducts(updatedList);
  };

  const toggleHideProduct = (id: string) => {
    const updatedList = products.map((p) => (p.id === id ? { ...p, isHidden: !p.isHidden } : p));
    saveProducts(updatedList);
  };

  // Photo Handlers
  const addPhoto = (photo: Omit<ManufacturingPhoto, 'id'>) => {
    const newId = `m-${Date.now().toString().slice(-4)}`;
    const fullPhoto: ManufacturingPhoto = { ...photo, id: newId, isHidden: false };
    savePhotos([...photos, fullPhoto]);
  };

  const updatePhoto = (id: string, updated: Partial<ManufacturingPhoto>) => {
    const updatedList = photos.map((p) => (p.id === id ? { ...p, ...updated } : p));
    savePhotos(updatedList);
  };

  const deletePhoto = (id: string) => {
    const updatedList = photos.filter((p) => p.id !== id);
    savePhotos(updatedList);
  };

  const toggleHidePhoto = (id: string) => {
    const updatedList = photos.map((p) => (p.id === id ? { ...p, isHidden: !p.isHidden } : p));
    savePhotos(updatedList);
  };

  // Inquiry Handlers
  const addInquiry = (inquiry: Omit<AdminInquiry, 'id' | 'date'>) => {
    const newId = `INQ-${Math.floor(1000 + Math.random() * 9000)}`;
    const fullInq: AdminInquiry = {
      ...inquiry,
      id: newId,
      date: new Date().toISOString().split('T')[0]
    };
    saveInquiries([fullInq, ...inquiries]);
  };

  const updateInquiry = (id: string, updated: Partial<AdminInquiry>) => {
    const updatedList = inquiries.map((i) => (i.id === id ? { ...i, ...updated } : i));
    saveInquiries(updatedList);
  };

  const deleteInquiry = (id: string) => {
    const updatedList = inquiries.filter((i) => i.id !== id);
    saveInquiries(updatedList);
  };

  // Inventory & Machinery Handlers
  const updateStock = (id: string, delta: number) => {
    const updatedList = inventory.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(0, item.balesInStock + delta);
        return {
          ...item,
          balesInStock: newQty,
          status: (newQty <= item.reorderLevel ? 'Low Stock' : 'In Stock') as AdminInventoryItem['status']
        };
      }
      return item;
    });
    saveInventory(updatedList);
  };

  const updateMachineryStatus = (id: string, status: MachineryLineStatus['status']) => {
    const updatedList = machinery.map((m) => (m.id === id ? { ...m, status } : m));
    saveMachinery(updatedList);
  };

  // Company Contact Handler
  const updateCompanyContact = (updated: Partial<typeof COMPANY_CONTACT>) => {
    saveContact({ ...companyContact, ...updated });
  };

  // Reset to Factory Defaults
  const resetAllDefaults = () => {
    if (confirm('Reset all products, photos, inventory, and inquiries to factory defaults?')) {
      saveProducts(VEENUS_MATCH_PRODUCTS);
      savePhotos(MANUFACTURING_15_PHOTOS);
      saveInquiries(INITIAL_ADMIN_INQUIRIES);
      saveInventory(INITIAL_ADMIN_INVENTORY);
      saveMachinery(INITIAL_MACHINERY_LINES);
      saveContact(COMPANY_CONTACT);
      localStorage.clear();
      alert('All factory data restored to default settings!');
    }
  };

  return (
    <FactoryContext.Provider
      value={{
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
      }}
    >
      {children}
    </FactoryContext.Provider>
  );
};

export const useFactory = () => {
  const context = useContext(FactoryContext);
  if (!context) {
    throw new Error('useFactory must be used within a FactoryProvider');
  }
  return context;
};
