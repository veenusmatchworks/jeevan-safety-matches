import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';
import { isCloudinaryConfigured } from '@/lib/cloudinary';

export async function GET() {
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
      cloudName: process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || null
    }
  });
}
