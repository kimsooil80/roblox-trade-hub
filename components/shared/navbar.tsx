"use client";

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';

export function Navbar() {
  const { t } = useLocale();
  
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-200">
          Roblox Trade Hub
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-200">
            {t('navCalculator')}
          </Link>
          <Link href="/blog" className="hover:text-blue-200">
            {t('navGuide')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
