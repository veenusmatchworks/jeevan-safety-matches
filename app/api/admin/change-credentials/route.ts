import { NextRequest, NextResponse } from 'next/server';
import {
  verifySessionToken,
  updateAdminCredentials,
  getStoredAdminCredentials,
  createSessionToken
} from '@/lib/admin-auth';

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('admin_session')?.value;
    const sessionCheck = await verifySessionToken(token);

    if (!sessionCheck.valid || !sessionCheck.payload) {
      return NextResponse.json(
        { error: 'Unauthorized: Valid administrator session required.' },
        { status: 401 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { currentPassword, newUsername, newPassword } = body;

    if (!currentPassword || !newUsername || !newPassword) {
      return NextResponse.json(
        { error: 'Current password, new username, and new password are required.' },
        { status: 400 }
      );
    }

    const result = await updateAdminCredentials(currentPassword, newUsername, newPassword);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to update admin credentials.' },
        { status: 400 }
      );
    }

    // Retrieve updated session version to rotate active session
    const updatedCreds = await getStoredAdminCredentials();
    const newToken = await createSessionToken(updatedCreds.username, updatedCreds.sessionVersion);

    const response = NextResponse.json({
      success: true,
      message: 'Admin username and password updated successfully in MongoDB Atlas.',
      username: newUsername.trim()
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
    console.error('Change credentials error:', error);
    return NextResponse.json(
      { error: 'Internal server error while changing admin credentials.' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('admin_session')?.value;
    const sessionCheck = await verifySessionToken(token);

    if (!sessionCheck.valid) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const creds = await getStoredAdminCredentials();
    return NextResponse.json({
      username: creds.username
    });
  } catch (error) {
    console.error('Error fetching admin username:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve admin details.' },
      { status: 500 }
    );
  }
}
