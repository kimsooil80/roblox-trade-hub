"use client";

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';

export default function BlogPage() {
  const { t } = useLocale();
  
  const articles = [
    {
      slug: 'blox-fruits-tier-list-2026',
      titleKey: 'article1Title',
      excerptKey: 'article1Excerpt',
      date: '2026-01-29'
    },
    {
      slug: 'how-to-get-kitsune-fruit',
      titleKey: 'article2Title',
      excerptKey: 'article2Excerpt',
      date: '2026-01-29'
    },
    {
      slug: 'trading-tips-beginners',
      titleKey: 'article3Title',
      excerptKey: 'article3Excerpt',
      date: '2026-01-29'
    },
    {
      slug: 'dragon-rework-review',
      titleKey: 'article4Title',
      excerptKey: 'article4Excerpt',
      date: '2026-01-29'
    },
    {
      slug: 'value-calculator-guide',
      titleKey: 'article5Title',
      excerptKey: 'article5Excerpt',
      date: '2026-01-29'
    }
  ];
  
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">{t('blogTitle')}</h1>
        
        <div className="grid gap-6">
          {articles.map((article) => (
            <Link 
              key={article.slug} 
              href={`/blog/${article.slug}`}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow border border-slate-200"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-bold text-slate-800 hover:text-blue-600">
                  {t(article.titleKey as any)}
                </h2>
                <span className="text-sm text-slate-500">{article.date}</span>
              </div>
              <p className="text-slate-600">{t(article.excerptKey as any)}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
