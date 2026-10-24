import Link from 'next/link';
import { Flame, ArrowLeft, Package } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-[#171717] min-h-[75vh] text-white flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#C62828]/20 border border-[#C62828]/40 flex items-center justify-center mx-auto text-[#C62828]">
          <Flame className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="text-xs font-mono uppercase tracking-widest text-[#C7A56B]">
            Error 404 • Page Not Found
          </div>
          <h1 className="text-3xl font-black text-white">Match Has Burned Out</h1>
          <p className="text-sm text-neutral-400">
            The requested industrial page or product code could not be located in the current catalogue directory.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C62828] hover:bg-[#8B0000] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-colors"
          >
            <Package className="w-4 h-4" />
            <span>Explore Catalogue</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
