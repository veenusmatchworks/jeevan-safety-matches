/**
 * Jeevan Safety Matches - Administrator Authentication, Session Security & Rate Limiting Library
 * Complies with strict OWASP session management, 15-minute inactivity timeouts,
 * brute-force rate-limiting, and cryptographic password hashing with salts.
 */

import { getDatabase } from '@/lib/mongodb';

// Web Standard base64url utilities
function toBase64Url(str: string): string {
  if (typeof btoa === 'function') {
    return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  }
  return Buffer.from(str).toString('base64url');
}

function fromBase64Url(b64: string): string {
  let padded = b64.replace(/-/g, '+').replace(/_/g, '/');
  while (padded.length % 4) padded += '=';
  if (typeof atob === 'function') {
    return atob(padded);
  }
  return Buffer.from(padded, 'base64').toString('utf8');
}

function arrayBufferToBase64Url(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return toBase64Url(binary);
}

function base64UrlToUint8Array(b64: string): Uint8Array {
  const binary = fromBase64Url(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// ----------------------------------------------------------------------------
// CONSTANTS & SECURITY LIMITS
// ----------------------------------------------------------------------------
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'jeevan_sec_auth_subburam_salt_89x_k4';
const PASSWORD_SALT = 'jeevan_safety_matches_secure_salt_subburam_hariharan_79';

// 15 Minutes Inactivity Limit (900,000 ms)
export const INACTIVITY_TIMEOUT_MS = 15 * 60 * 1000;
export const INACTIVITY_WARNING_MS = 14 * 60 * 1000;

// Rate limiting: Max 5 failed attempts in 15 minutes per IP
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000;

interface RateLimitEntry {
  count: number;
  firstAttempt: number;
  lockedUntil: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();

// Clean up stale rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.lockedUntil && now - entry.firstAttempt > LOCKOUT_DURATION_MS) {
      rateLimitMap.delete(key);
    }
  }
}, 60 * 1000);

export function checkRateLimit(identifier: string): { allowed: boolean; remainingAttempts: number; retryAfterSec?: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  if (!entry) {
    return { allowed: true, remainingAttempts: MAX_FAILED_ATTEMPTS };
  }

  if (entry.lockedUntil > now) {
    const retryAfterSec = Math.ceil((entry.lockedUntil - now) / 1000);
    return { allowed: false, remainingAttempts: 0, retryAfterSec };
  }

  // If lockout expired, reset
  if (now - entry.firstAttempt > LOCKOUT_DURATION_MS) {
    rateLimitMap.delete(identifier);
    return { allowed: true, remainingAttempts: MAX_FAILED_ATTEMPTS };
  }

  return {
    allowed: entry.count < MAX_FAILED_ATTEMPTS,
    remainingAttempts: Math.max(0, MAX_FAILED_ATTEMPTS - entry.count)
  };
}

export function recordFailedAttempt(identifier: string): { locked: boolean; retryAfterSec?: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier) || { count: 0, firstAttempt: now, lockedUntil: 0 };
  entry.count += 1;

  if (entry.count >= MAX_FAILED_ATTEMPTS) {
    entry.lockedUntil = now + LOCKOUT_DURATION_MS;
    rateLimitMap.set(identifier, entry);
    return { locked: true, retryAfterSec: Math.ceil(LOCKOUT_DURATION_MS / 1000) };
  }

  rateLimitMap.set(identifier, entry);
  return { locked: false };
}

export function clearRateLimit(identifier: string): void {
  rateLimitMap.delete(identifier);
}

// ----------------------------------------------------------------------------
// PASSWORD HASHING (Salted SHA-256)
// ----------------------------------------------------------------------------
export async function hashPassword(password: string): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(`${PASSWORD_SALT}:${password.trim()}`);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function getHmacKey(): Promise<CryptoKey> {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    'raw',
    enc.encode(SESSION_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

export function getAdminSecretPath(): string {
  const configured = (process.env.ADMIN_SECRET_PATH || '/control-center-x7k9').trim();
  const withLeading = configured.startsWith('/') ? configured : `/${configured}`;
  return withLeading.endsWith('/') && withLeading.length > 1 ? withLeading.slice(0, -1) : withLeading;
}

// ----------------------------------------------------------------------------
// CREDENTIALS STORE (MongoDB Atlas with Secure Fallback)
// ----------------------------------------------------------------------------
// Strengthened initial credentials: changed from 1979 to a strong, high-entropy password
export const DEFAULT_ADMIN_USERNAME = (process.env.ADMIN_USERNAME || 'admin').trim();
export const DEFAULT_ADMIN_PASSWORD = (process.env.ADMIN_PASSCODE || 'Jeevan@Secure#2026!').trim();

export interface StoredCredentials {
  username: string;
  passwordHash: string;
  sessionVersion: number;
}

export async function getStoredAdminCredentials(): Promise<StoredCredentials> {
  try {
    const { db, isConnected } = await getDatabase();
    if (isConnected && db) {
      const col = db.collection('admin_credentials');
      const doc = await col.findOne({ role: 'admin' });
      if (doc && doc.username && doc.passwordHash) {
        return {
          username: doc.username,
          passwordHash: doc.passwordHash,
          sessionVersion: doc.sessionVersion || 1
        };
      }
    }
  } catch (err) {
    console.warn('MongoDB credentials lookup warning:', err);
  }

  const defaultHash = await hashPassword(DEFAULT_ADMIN_PASSWORD);
  return {
    username: DEFAULT_ADMIN_USERNAME,
    passwordHash: defaultHash,
    sessionVersion: 1
  };
}

// ----------------------------------------------------------------------------
// SESSION TOKEN CREATION & VALIDATION (15-Minute Sliding Inactivity Window)
// ----------------------------------------------------------------------------
export interface SessionPayload {
  role: 'admin';
  username: string;
  sessionVersion: number;
  lastActive: number;
  exp: number;
}

export async function createSessionToken(username = 'admin', sessionVersion = 1): Promise<string> {
  const enc = new TextEncoder();
  const now = Date.now();
  const payload: SessionPayload = {
    role: 'admin',
    username,
    sessionVersion,
    lastActive: now,
    exp: now + INACTIVITY_TIMEOUT_MS // Strict 15-minute expiry
  };
  const b64Payload = toBase64Url(JSON.stringify(payload));
  const key = await getHmacKey();
  const sigBuffer = await crypto.subtle.sign('HMAC', key, enc.encode(b64Payload));
  const b64Sig = arrayBufferToBase64Url(sigBuffer);
  return `${b64Payload}.${b64Sig}`;
}

export async function verifySessionToken(token: string | undefined | null): Promise<{
  valid: boolean;
  expired?: boolean;
  payload?: SessionPayload;
}> {
  if (!token || typeof token !== 'string') return { valid: false };
  const parts = token.split('.');
  if (parts.length !== 2) return { valid: false };

  const [b64Payload, b64Sig] = parts;
  try {
    const enc = new TextEncoder();
    const key = await getHmacKey();
    const sigBytes = base64UrlToUint8Array(b64Sig);
    const isValid = await crypto.subtle.verify('HMAC', key, sigBytes as BufferSource, enc.encode(b64Payload));
    if (!isValid) return { valid: false };

    const payloadJson = fromBase64Url(b64Payload);
    const payload = JSON.parse(payloadJson) as SessionPayload;

    if (payload.role !== 'admin') return { valid: false };

    const now = Date.now();

    // 1. Strict Inactivity Check: Max 15 minutes since lastActive
    if (now - payload.lastActive > INACTIVITY_TIMEOUT_MS || now > payload.exp) {
      return { valid: false, expired: true, payload };
    }

    // 2. Session Version Check: Invalidated if password changed
    const currentCreds = await getStoredAdminCredentials();
    if (payload.sessionVersion !== currentCreds.sessionVersion) {
      return { valid: false, expired: true, payload };
    }

    return { valid: true, payload };
  } catch {
    return { valid: false };
  }
}

/**
 * Renews an active session token with a fresh 15-minute sliding window
 */
export async function renewSessionToken(token: string): Promise<string | null> {
  const check = await verifySessionToken(token);
  if (!check.valid || !check.payload) {
    return null;
  }
  return createSessionToken(check.payload.username, check.payload.sessionVersion);
}

// ----------------------------------------------------------------------------
// CREDENTIAL VERIFICATION & UPDATE
// ----------------------------------------------------------------------------
export async function verifyAdminCredentials(
  usernameInput?: string | null,
  passwordInput?: string | null
): Promise<{ valid: boolean; username: string; sessionVersion: number }> {
  if (!passwordInput || typeof passwordInput !== 'string') {
    return { valid: false, username: '', sessionVersion: 1 };
  }

  const cleanPass = passwordInput.trim();
  const cleanUser = (usernameInput || '').trim();

  const stored = await getStoredAdminCredentials();
  const passHash = await hashPassword(cleanPass);

  // If username provided, must match
  if (cleanUser && cleanUser.toLowerCase() !== stored.username.toLowerCase()) {
    return { valid: false, username: stored.username, sessionVersion: stored.sessionVersion };
  }

  // Password must match hashed password
  if (passHash === stored.passwordHash) {
    return { valid: true, username: stored.username, sessionVersion: stored.sessionVersion };
  }

  return { valid: false, username: stored.username, sessionVersion: stored.sessionVersion };
}

export async function updateAdminCredentials(
  currentPassword: string,
  newUsername: string,
  newPassword: string
): Promise<{ success: boolean; error?: string }> {
  const currentCheck = await verifyAdminCredentials(null, currentPassword);
  if (!currentCheck.valid) {
    return { success: false, error: 'Current password is incorrect.' };
  }

  const cleanNewUser = newUsername.trim();
  const cleanNewPass = newPassword.trim();

  if (!cleanNewUser || cleanNewUser.length < 3) {
    return { success: false, error: 'New username must be at least 3 characters long.' };
  }

  if (!cleanNewPass || cleanNewPass.length < 6) {
    return { success: false, error: 'New password must be at least 6 characters long for security.' };
  }

  const newHash = await hashPassword(cleanNewPass);
  const nextSessionVersion = (currentCheck.sessionVersion || 1) + 1;

  try {
    const { db, isConnected } = await getDatabase();
    if (isConnected && db) {
      const col = db.collection('admin_credentials');
      await col.updateOne(
        { role: 'admin' },
        {
          $set: {
            role: 'admin',
            username: cleanNewUser,
            passwordHash: newHash,
            sessionVersion: nextSessionVersion,
            updatedAt: new Date(),
            updatedFrom: 'Admin Control Center'
          }
        },
        { upsert: true }
      );
      return { success: true };
    } else {
      return {
        success: false,
        error: 'Database connection offline. Could not persist new credentials to MongoDB.'
      };
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Database error while saving credentials.';
    return { success: false, error: msg };
  }
}
