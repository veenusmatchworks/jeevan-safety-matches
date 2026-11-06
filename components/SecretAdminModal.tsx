'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Unlock, X, ShieldCheck, AlertCircle, KeyRound } from 'lucide-react';

export const SecretAdminModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Listen for global keyboard shortcut and custom events
  useEffect(() => {
    // 1. Keyboard Shortcut: Ctrl + Shift + A OR Alt + A
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) ||
          (e.altKey && (e.key === 'A' || e.key === 'a'))) {
        e.preventDefault();
        setIsOpen(true);
        setError('');
      }
    };

    // 2. Custom Event triggered by secret clicks on logo or footer
    const handleOpenSecret = () => {
      setIsOpen(true);
      setError('');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-secret-admin', handleOpenSecret);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-secret-admin', handleOpenSecret);
    };
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '1979' || passcode === '3481060' || passcode === 'admin') {
      try {
        sessionStorage.setItem('vmw_admin_session', 'active');
      } catch (err) {
        console.warn('Session storage write error:', err);
      }
      setIsOpen(false);
      setPasscode('');
      setError('');
      router.push('/admin');
    } else {
      setError('Invalid authorization code.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-white/15 w-full max-w-sm p-6 sm:p-7 rounded-3xl shadow-2xl text-white space-y-5 relative">
        <button
          onClick={() => {
            setIsOpen(false);
            setPasscode('');
            setError('');
          }}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-2 pt-2">
          <div className="w-14 h-14 rounded-2xl bg-red-950/80 text-red-400 border border-red-800/60 flex items-center justify-center mx-auto shadow-inner">
            <KeyRound className="w-7 h-7" />
          </div>
          <h3 className="font-black text-lg text-white">Factory Management Gate</h3>
          <p className="text-xs text-slate-400">
            Confidential administrator access for Jeevan Safety Matches.
          </p>
        </div>

        <form onSubmit={handleUnlock} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 text-center">
              Enter Secret Passcode
            </label>
            <input
              type="password"
              autoFocus
              required
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="••••"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-center text-lg tracking-widest placeholder:text-slate-500 focus:outline-none focus:border-red-600 transition-colors"
            />
            {error && (
              <p className="text-xs text-rose-400 font-semibold mt-1.5 flex items-center justify-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{error}</span>
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-900/30 transition-all hover:scale-101 flex items-center justify-center gap-2"
          >
            <Unlock className="w-4 h-4" />
            <span>Authorize & Open Portal</span>
          </button>
        </form>

        <div className="text-center pt-2 border-t border-white/10 text-[10px] text-slate-500">
          <span>Protected System &bull; Regd. No. 3481060</span>
        </div>
      </div>
    </div>
  );
};
