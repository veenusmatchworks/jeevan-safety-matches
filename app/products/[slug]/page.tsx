'use client';

import React, { useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';

function RedirectInner() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/products');
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center text-xs text-slate-500">
      Redirecting to Venus Matchbox Catalogue...
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <RedirectInner />
    </Suspense>
  );
}
