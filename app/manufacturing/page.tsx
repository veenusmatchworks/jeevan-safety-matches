'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ManufacturingRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/products');
  }, [router]);

  return <div className="min-h-screen bg-slate-50" />;
}
