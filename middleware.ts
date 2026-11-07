import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. HARD BLOCK old /admin route and all subpaths
  // Any request to /admin returns a 404 (Not Found)
  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    const url = request.nextUrl.clone();
    url.pathname = '/not-found';
    return NextResponse.rewrite(url, { status: 404 });
  }

  // 2. Custom Configurable Admin Route Support
  const configuredSecret = (process.env.ADMIN_SECRET_PATH || '/control-center-x7k9').trim();
  const canonicalSecret = configuredSecret.startsWith('/') ? configuredSecret : `/${configuredSecret}`;

  // If a custom route is configured (not the default /control-center-x7k9)
  if (canonicalSecret !== '/control-center-x7k9') {
    // If user accesses the custom secret route, rewrite to internal /control-center-x7k9
    if (pathname === canonicalSecret || pathname.startsWith(`${canonicalSecret}/`)) {
      const subpath = pathname.slice(canonicalSecret.length);
      const url = request.nextUrl.clone();
      url.pathname = `/control-center-x7k9${subpath}`;
      return NextResponse.rewrite(url);
    }

    // Since custom secret route is active, block direct access to default /control-center-x7k9
    if (pathname === '/control-center-x7k9' || pathname.startsWith('/control-center-x7k9/')) {
      const url = request.nextUrl.clone();
      url.pathname = '/not-found';
      return NextResponse.rewrite(url, { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, icons)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
