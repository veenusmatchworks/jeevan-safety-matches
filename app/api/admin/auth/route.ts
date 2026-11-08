import { NextRequest, NextResponse } from 'next/server';
import {
  verifyAdminCredentials,
  createSessionToken,
  verifySessionToken,
  getAdminSecretPath,
  getStoredAdminCredentials,
  checkRateLimit,
  recordFailedAttempt,
  clearRateLimit
} from '@/lib/admin-auth';

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIp = req.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  return '127.0.0.1';
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const rateCheck = checkRateLimit(ip);

    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          error: `Too many failed login attempts. Access temporarily locked for security. Please try again in ${Math.ceil(
            (rateCheck.retryAfterSec || 900) / 60
          )} minutes.`
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const username = body?.username;
    const password = body?.password || body?.passcode;

    if (!password) {
      return NextResponse.json(
        { error: 'Administrator password is required.' },
        { status: 400 }
      );
    }

    const authResult = await verifyAdminCredentials(username, password);

    if (!authResult.valid) {
      const failStatus = recordFailedAttempt(ip);
      const remaining = 5 - (failStatus.locked ? 5 : 1);
      return NextResponse.json(
        {
          error: failStatus.locked
            ? 'Too many failed login attempts. Account locked for 15 minutes.'
            : 'Invalid administrator credentials. Access denied.'
        },
        { status: 401 }
      );
    }

    // Clear failed attempts upon successful authentication
    clearRateLimit(ip);

    // Create a 15-minute sliding session token
    const token = await createSessionToken(authResult.username, authResult.sessionVersion);
    const redirectUrl = getAdminSecretPath();

    const response = NextResponse.json({
      success: true,
      redirectUrl,
      username: authResult.username
    });

    response.cookies.set({
      name: 'admin_session',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 15 * 60 // 15 minutes
    });

    return response;
  } catch (error) {
    console.error('Admin authentication error:', error);
    return NextResponse.json(
      { error: 'Internal server error during authentication.' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get('admin_session')?.value;
  const sessionCheck = await verifySessionToken(token);

  if (!sessionCheck.valid || !sessionCheck.payload) {
    const response = NextResponse.json({
      authenticated: false,
      expired: sessionCheck.expired || false
    });
    if (sessionCheck.expired) {
      response.cookies.delete('admin_session');
    }
    return response;
  }

  const creds = await getStoredAdminCredentials();

  return NextResponse.json({
    authenticated: true,
    username: creds.username,
    redirectUrl: getAdminSecretPath(),
    lastActive: sessionCheck.payload.lastActive,
    expiresAt: sessionCheck.payload.exp
  });
}
