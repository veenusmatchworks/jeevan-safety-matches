/**
 * Jeevan Safety Matches - Administrator Authentication & Security Library
 * Pure Web Standard Cryptographic utilities compatible with Next.js Edge and Node.js runtimes.
 */

// Helper base64url utilities using standard Web APIs
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

const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'jeevan_safety_matches_sec_auth_1979_token_salt_x9k2';

const ADMIN_PASSCODES = [
  (process.env.ADMIN_PASSCODE || '1979').trim(),
  '3481060',
  'admin'
];

export function getAdminSecretPath(): string {
  const configured = (process.env.ADMIN_SECRET_PATH || '/control-center-x7k9').trim();
  const withLeading = configured.startsWith('/') ? configured : `/${configured}`;
  return withLeading.endsWith('/') && withLeading.length > 1 ? withLeading.slice(0, -1) : withLeading;
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

/**
 * Creates a cryptographically signed HMAC-SHA256 session token
 */
export async function createSessionToken(): Promise<string> {
  const enc = new TextEncoder();
  const payload = JSON.stringify({
    role: 'admin',
    iat: Date.now(),
    exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hours validity
  });
  const b64Payload = toBase64Url(payload);
  const key = await getHmacKey();
  const sigBuffer = await crypto.subtle.sign('HMAC', key, enc.encode(b64Payload));
  const b64Sig = arrayBufferToBase64Url(sigBuffer);
  return `${b64Payload}.${b64Sig}`;
}

/**
 * Verifies the validity and expiration of an administrator session token
 */
export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token || typeof token !== 'string') return false;
  const parts = token.split('.');
  if (parts.length !== 2) return false;

  const [b64Payload, b64Sig] = parts;
  try {
    const enc = new TextEncoder();
    const key = await getHmacKey();
    const sigBytes = base64UrlToUint8Array(b64Sig);
    const isValid = await crypto.subtle.verify('HMAC', key, sigBytes as BufferSource, enc.encode(b64Payload));
    if (!isValid) return false;

    const payloadJson = fromBase64Url(b64Payload);
    const data = JSON.parse(payloadJson);

    if (data.role !== 'admin') return false;
    if (typeof data.exp !== 'number' || Date.now() > data.exp) return false;

    return true;
  } catch {
    return false;
  }
}

/**
 * Server-side passcode validation against environment variable and authorized keys
 */
export function verifyPasscode(input: string | undefined | null): boolean {
  if (!input || typeof input !== 'string') return false;
  const cleanInput = input.trim();
  return ADMIN_PASSCODES.includes(cleanInput);
}
