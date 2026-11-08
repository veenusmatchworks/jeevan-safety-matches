import { NextRequest, NextResponse } from 'next/server';
import { uploadToCloudinary, isCloudinaryConfigured } from '@/lib/cloudinary';
import { verifySessionToken } from '@/lib/admin-auth';

export async function POST(req: NextRequest) {
  try {
    // Strict authentication check: Only authenticated admins can upload
    const sessionToken = req.cookies.get('admin_session')?.value;
    const sessionCheck = await verifySessionToken(sessionToken);

    if (!sessionCheck.valid) {
      return NextResponse.json(
        { error: 'Unauthorized: Valid administrator session required to upload factory media.' },
        { status: 401 }
      );
    }

    if (!isCloudinaryConfigured()) {
      return NextResponse.json(
        {
          error: 'Cloudinary storage is not configured. Please check environment credentials.'
        },
        { status: 503 }
      );
    }

    const formData = await req.formData();
    const file = formData.get('file') as File | null;
    const folder = (formData.get('folder') as string) || 'jeevan-matches';

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString('base64')}`;

    const result = await uploadToCloudinary(base64, folder);

    return NextResponse.json({
      success: true,
      url: result.url,
      publicId: result.public_id
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Upload failed';
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
