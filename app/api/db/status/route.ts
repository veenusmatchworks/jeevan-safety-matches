import { NextRequest, NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { isCloudinaryConfigured } from '@/lib/cloudinary';
import { verifySessionToken } from '@/lib/admin-auth';

export async function GET(req: NextRequest) {
  const sessionToken = req.cookies.get('admin_session')?.value;
  const sessionCheck = await verifySessionToken(sessionToken);

  if (!sessionCheck.valid) {
    return NextResponse.json(
      { error: 'Unauthorized: Admin authentication required.' },
      { status: 401 }
    );
  }

  const mongoStatus = await getDatabase();
  const cloudinaryStatus = isCloudinaryConfigured();

  return NextResponse.json({
    mongodb: {
      connected: mongoStatus.isConnected,
      error: mongoStatus.error || null,
      configured: Boolean(process.env.MONGODB_URI)
    },
    cloudinary: {
      configured: cloudinaryStatus,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME || null
    }
  });
}
