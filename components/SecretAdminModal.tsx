'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Unlock, X, ShieldCheck, AlertCircle, KeyRound, RefreshCw, Eye, EyeOff } from 'lucide-react';

export const SecretAdminModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const router = useRouter();

  // Listen for global keyboard shortcut and custom events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const isKeyA = e.key === 'a' || e.key === 'A';
      const isKeyX = e.key === 'x' || e.key === 'X';

      if (
        (isCtrlOrCmd && e.altKey && isKeyA) ||
        (isCtrlOrCmd && e.shiftKey && (isKeyA || isKeyX)) ||
        (e.altKey && isKeyA)
      ) {
        e.preventDefault();
        setIsOpen(true);
        setError('');
      }
    };

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

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter password.');
      return;
    }

    setIsAuthorizing(true);
    setError('');

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim()
        })
      });
      const data = await res.json();

      if (res.ok && data.success && data.redirectUrl) {
        try {
          sessionStorage.setItem('vmw_admin_session', 'active');
        } catch (err) {
          console.warn('Session storage write error:', err);
        }
        setIsOpen(false);
        setPassword('');
        setError('');
        router.push(data.redirectUrl);
      } else {
        setError(data.error || 'Invalid administrator credentials.');
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setIsAuthorizing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-white/15 w-full max-w-sm p-6 sm:p-7 rounded-3xl shadow-2xl text-white space-y-5 relative">
        <button
          onClick={() => {
            setIsOpen(false);
            setPassword('');
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

        <form onSubmit={handleUnlock} className="space-y-3.5">
          <div>
            <label className="block text-[11px] font-semibold text-slate-300 mb-1">
              Administrator Username
            </label>
            <input
              type="text"
              required
              disabled={isAuthorizing}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-red-600 transition-colors disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-300 mb-1">
              Administrator Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                autoFocus
                required
                disabled={isAuthorizing}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs tracking-wider placeholder:text-slate-500 focus:outline-none focus:border-red-600 transition-colors disabled:opacity-50 pr-9"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
              >
                {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            </div>
            {error && (
              <p className="text-xs text-rose-400 font-semibold mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{error}</span>
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isAuthorizing}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-900/30 transition-all hover:scale-101 flex items-center justify-center gap-2 disabled:opacity-60 mt-2"
          >
            {isAuthorizing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Verifying...</span>
              </>
            ) : (
              <>
                <Unlock className="w-4 h-4" />
                <span>Authorize & Open Portal</span>
              </>
            )}
          </button>
        </form>

        <div className="text-center pt-2 border-t border-white/10 text-[10px] text-slate-500">
          <span>Protected System &bull; Regd. No. 3481060</span>
        </div>
      </div>
    </div>
  );
};
