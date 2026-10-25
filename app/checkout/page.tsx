'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/contact');
  }, [router]);

  return <div className="min-h-screen bg-slate-50" />;
}
