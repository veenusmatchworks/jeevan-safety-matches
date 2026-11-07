import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken, getAdminSecretPath } from '@/lib/admin-auth';

export async function GET(req: NextRequest) {
  const token = req.cookies.get('admin_session')?.value;
  const isAuthenticated = await verifySessionToken(token);

  if (!isAuthenticated) {
    return NextResponse.json(
      { error: 'Unauthorized: Administrator session required.' },
      { status: 401 }
    );
  }

  return NextResponse.json({
    secretPath: getAdminSecretPath()
  });
}
