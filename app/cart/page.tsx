'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CartRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/products');
  }, [router]);

  return <div className="min-h-screen bg-slate-50" />;
}
