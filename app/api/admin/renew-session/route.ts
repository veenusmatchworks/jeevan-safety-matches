import { NextRequest, NextResponse } from 'next/server';
import { renewSessionToken } from '@/lib/admin-auth';

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('admin_session')?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'No active session token to renew.' },
        { status: 401 }
      );
    }

    const newToken = await renewSessionToken(token);

    if (!newToken) {
      const response = NextResponse.json(
        { error: 'Session expired or invalid. Please log in again.' },
        { status: 401 }
      );
      response.cookies.delete('admin_session');
      return response;
    }

    const response = NextResponse.json({
      success: true,
      message: 'Session renewed successfully for 15 minutes.'
    });

    response.cookies.set({
      name: 'admin_session',
      value: newToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 15 * 60 // 15 minutes
    });

    return response;
  } catch (error) {
    console.error('Session renewal error:', error);
    return NextResponse.json(
      { error: 'Internal server error while renewing session.' },
      { status: 500 }
    );
  }
}
