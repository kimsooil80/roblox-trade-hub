"use client";

import { getGameData } from '@/lib/game-data';
import { TradeCalculator } from '@/components/features/calculator/trade-calculator';
import { useLocale } from '@/lib/locale-context';
import { formatDate } from '@/lib/i18n';
import { Calendar, Globe } from 'lucide-react';

export default function Home() {
  const gameData = getGameData('bloxfruits');
  const { locale, setLocale, t } = useLocale();
  
  if (!gameData) return <div>Game not found</div>;

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      {/* 언어 선택 버튼 */}
      <div className="flex justify-end px-4 mb-4 max-w-6xl mx-auto">
        <button
          onClick={() => setLocale(locale === 'ko' ? 'en' : 'ko')}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors bg-white px-3 py-1.5 rounded-full shadow-sm border"
        >
          <Globe size={14} />
          {locale === 'ko' ? 'English' : '한국어'}
        </button>
      </div>

      <h1 className="text-3xl font-black text-center mb-2 text-slate-800">
        {gameData.name} {t('calculator')}
      </h1>
      <p className="text-center text-slate-500 mb-2">
        {t('subtitle')}
      </p>
      
      {/* 업데이트 날짜 표시 */}
      {gameData.lastUpdated && (
        <div className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-8">
          <Calendar size={14} />
          <span>{t('priceUpdate')}: {formatDate(gameData.lastUpdated, locale)}</span>
        </div>
      )}
      
      <TradeCalculator gameData={gameData} />
    </main>
  );
}
