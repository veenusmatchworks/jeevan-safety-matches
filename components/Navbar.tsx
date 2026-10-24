'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import { Flame, ShoppingBag, Search, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing route
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
    { name: 'Admin Preview', href: '/admin', isBadge: true },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#171717]/95 backdrop-blur-md shadow-2xl border-b border-neutral-800 py-3'
            : 'bg-[#171717] border-b border-neutral-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C62828] to-[#8B0000] p-0.5 shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-white text-lg sm:text-xl leading-none">
                  PRIME MATCH
                </span>
                <span className="text-[10px] font-semibold tracking-[0.28em] text-[#C7A56B] uppercase leading-tight mt-0.5">
                  INDUSTRIES
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-md relative ${
                      isActive
                        ? 'text-white'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.isBadge && (
                      <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-[#C7A56B]/20 text-[#C7A56B] rounded border border-[#C7A56B]/30">
                        DEMO
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C7A56B] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons & CTA */}
            <div className="flex items-center space-x-3">
              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search products"
                className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-full transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Shopping Cart Icon with Badge */}
              <Link
                href="/cart"
                aria-label="View shopping cart"
                className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-full transition-colors relative"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C62828] text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-md">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Get a Quote Button */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#C62828] hover:bg-[#A82020] text-white px-4 py-2 rounded text-sm font-semibold tracking-wide transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="lg:hidden p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-md transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        {searchOpen && (
          <div className="border-t border-neutral-800 bg-[#1D1D1D] px-4 py-3 animate-fade-in">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search products by name, code (e.g., Classic Red, PMI-PLM-002)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-neutral-900 text-white placeholder-neutral-400 pl-11 pr-24 py-2.5 rounded-lg border border-neutral-700 focus:outline-none focus:border-[#C7A56B] text-sm"
                />
                <Search className="w-5 h-5 text-neutral-400 absolute left-3.5" />
                <button
                  type="submit"
                  className="absolute right-2 px-3 py-1.5 bg-[#C62828] hover:bg-[#8B0000] text-white text-xs font-semibold rounded transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-800 bg-[#171717] px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-2xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-neutral-800 text-[#C7A56B] border-l-4 border-[#C7A56B]'
                      : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.isBadge && (
                    <span className="text-[10px] bg-[#C7A56B]/20 text-[#C7A56B] px-2 py-0.5 rounded font-bold border border-[#C7A56B]/30">
                      DEMO
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-neutral-800">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-[#C62828] text-white py-3 rounded-lg font-semibold text-sm shadow-md"
              >
                <span>Request Bulk Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer so page content does not hide behind fixed navbar */}
      <div className="h-16 sm:h-20" />
    </>
  );
};
