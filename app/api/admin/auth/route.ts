import { NextRequest, NextResponse } from 'next/server';
import {
  verifyAdminCredentials,
  createSessionToken,
  verifySessionToken,
  getAdminSecretPath,
  getStoredAdminCredentials
} from '@/lib/admin-auth';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const username = body?.username;
    const password = body?.password || body?.passcode;

    const authResult = await verifyAdminCredentials(username, password);

    if (!authResult.valid) {
      return NextResponse.json(
        { error: 'Invalid administrator username or password.' },
        { status: 401 }
      );
    }

    const token = await createSessionToken(authResult.username);
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
      maxAge: 24 * 60 * 60 // 1 day
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
  const isAuthenticated = await verifySessionToken(token);

  if (!isAuthenticated) {
    return NextResponse.json({
      authenticated: false
    });
  }

  const creds = await getStoredAdminCredentials();

  return NextResponse.json({
    authenticated: true,
    username: creds.username,
    redirectUrl: getAdminSecretPath()
  });
}
