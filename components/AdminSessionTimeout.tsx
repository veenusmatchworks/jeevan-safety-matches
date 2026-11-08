'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AlertCircle, Clock, RefreshCw, LogOut, ShieldAlert } from 'lucide-react';

interface AdminSessionTimeoutProps {
  isAuthenticated: boolean;
  onSessionExpired: (reason: string) => void;
  onSessionRenewed?: () => void;
}

const INACTIVITY_TIMEOUT_MS = 15 * 60 * 1000; // 15 Minutes
const WARNING_THRESHOLD_MS = 14 * 60 * 1000;  // 14 Minutes
const WARNING_DURATION_SEC = 60;              // 60 Seconds warning countdown

const STORAGE_KEY = 'vmw_admin_last_activity';

export const AdminSessionTimeout: React.FC<AdminSessionTimeoutProps> = ({
  isAuthenticated,
  onSessionExpired,
  onSessionRenewed
}) => {
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(WARNING_DURATION_SEC);
  const [isRenewing, setIsRenewing] = useState<boolean>(false);

  const lastActivityRef = useRef<number>(Date.now());
  const throttleRef = useRef<number>(0);

  // Record user activity (debounced every 5 seconds)
  const recordUserActivity = useCallback(() => {
    if (!isAuthenticated) return;
    const now = Date.now();
    if (now - throttleRef.current < 5000) return; // Throttle writes

    throttleRef.current = now;
    lastActivityRef.current = now;

    try {
      localStorage.setItem(STORAGE_KEY, String(now));
    } catch {}
  }, [isAuthenticated]);

  // Handle logout
  const handleLogoutNow = useCallback(async () => {
    setShowWarning(false);
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
    } catch {}

    try {
      localStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem('vmw_admin_session');
    } catch {}

    onSessionExpired('You have logged out.');
  }, [onSessionExpired]);

  // Handle Session Renewal ("Continue Session")
  const handleContinueSession = async () => {
    setIsRenewing(true);
    try {
      const res = await fetch('/api/admin/renew-session', { method: 'POST' });
      if (res.ok) {
        const now = Date.now();
        lastActivityRef.current = now;
        try {
          localStorage.setItem(STORAGE_KEY, String(now));
        } catch {}
        setShowWarning(false);
        setSecondsRemaining(WARNING_DURATION_SEC);
        if (onSessionRenewed) onSessionRenewed();
      } else {
        handleLogoutNow();
      }
    } catch {
      handleLogoutNow();
    } finally {
      setIsRenewing(false);
    }
  };

  // Cross-tab synchronization
  useEffect(() => {
    if (!isAuthenticated) return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        const newTimestamp = parseInt(e.newValue, 10);
        if (!isNaN(newTimestamp)) {
          lastActivityRef.current = newTimestamp;
          const elapsed = Date.now() - newTimestamp;
          if (elapsed < WARNING_THRESHOLD_MS) {
            setShowWarning(false);
            setSecondsRemaining(WARNING_DURATION_SEC);
          }
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [isAuthenticated]);

  // Meaningful User Interaction Listeners
  useEffect(() => {
    if (!isAuthenticated) return;

    // Initialize activity timestamp
    const now = Date.now();
    lastActivityRef.current = now;
    try {
      localStorage.setItem(STORAGE_KEY, String(now));
    } catch {}

    const events: Array<keyof WindowEventMap> = [
      'mousemove',
      'mousedown',
      'keydown',
      'touchstart',
      'scroll',
      'click'
    ];

    const handler = () => recordUserActivity();

    events.forEach((ev) => window.addEventListener(ev, handler, { passive: true }));

    return () => {
      events.forEach((ev) => window.removeEventListener(ev, handler));
    };
  }, [isAuthenticated, recordUserActivity]);

  // Inactivity Interval Checker (runs every second)
  useEffect(() => {
    if (!isAuthenticated) {
      setShowWarning(false);
      return;
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const last = lastActivityRef.current;
      const elapsed = now - last;

      // 1. Timeout Exceeded (15 Minutes) -> Automatic Logout
      if (elapsed >= INACTIVITY_TIMEOUT_MS) {
        clearInterval(interval);
        setShowWarning(false);
        try {
          fetch('/api/admin/logout', { method: 'POST' }).catch(() => {});
          localStorage.removeItem(STORAGE_KEY);
          sessionStorage.removeItem('vmw_admin_session');
        } catch {}
        onSessionExpired('Your session expired due to inactivity. Please log in again.');
        return;
      }

      // 2. Warning Threshold (14 Minutes) -> Show Warning Modal
      if (elapsed >= WARNING_THRESHOLD_MS) {
        setShowWarning(true);
        const remaining = Math.max(0, Math.ceil((INACTIVITY_TIMEOUT_MS - elapsed) / 1000));
        setSecondsRemaining(remaining);
      } else {
        if (showWarning) setShowWarning(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isAuthenticated, showWarning, onSessionExpired]);

  if (!isAuthenticated || !showWarning) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-amber-500/40 w-full max-w-md p-6 sm:p-8 rounded-3xl shadow-2xl text-white space-y-6 relative text-center">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-inner animate-pulse">
          <Clock className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30">
            Security Warning &bull; Session Expiring
          </span>
          <h3 className="text-xl font-black text-white">
            Admin Session Timeout
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Your admin session will expire in <strong className="text-amber-400 font-mono text-sm underline">{secondsRemaining} seconds</strong> due to inactivity.
          </p>
        </div>

        {/* Circular Countdown Progress Indicator */}
        <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400">Remaining Time:</span>
          <span className="font-mono font-black text-2xl text-amber-400">
            00:{secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={handleContinueSession}
            disabled={isRenewing}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/30 transition-all hover:scale-101 flex items-center justify-center gap-1.5 disabled:opacity-60"
          >
            {isRenewing ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Renewing...</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Continue Session</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleLogoutNow}
            disabled={isRenewing}
            className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5 text-rose-400" />
            <span>Logout Now</span>
          </button>
        </div>

        <p className="text-[10px] text-slate-500">
          Factory Control Center Protected System &bull; Inactivity Limit: 15 Minutes
        </p>
      </div>
    </div>
  );
};
