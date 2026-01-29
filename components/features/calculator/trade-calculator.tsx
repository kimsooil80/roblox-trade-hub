"use client";

import { useState } from 'react';
import { GameConfig, GameItem } from '@/lib/types';
import { useTradeStore } from '@/lib/store';
import { formatValue } from '@/lib/game-data';
import { ItemCard } from './item-card';
import { Button } from '@/components/ui/button';
import { ArrowRightLeft, Trash2 } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { getTranslation, TranslationKey } from '@/lib/i18n';

interface CalculatorProps {
  gameData: GameConfig;
}

export function TradeCalculator({ gameData }: CalculatorProps) {
  const { myOffer, theirOffer, addToMyOffer, addToTheirOffer, removeFromMyOffer, removeFromTheirOffer, reset } = useTradeStore();
  const { locale } = useLocale();
  const t = (key: TranslationKey) => getTranslation(locale, key);
  
  // 현재 누구의 인벤토리를 보고 있는지 (true: 나, false: 상대)
  const [isSelectingForMe, setIsSelectingForMe] = useState(true);

  // 총 가치 계산
  const myTotal = myOffer.reduce((sum, item) => sum + item.value, 0);
  const theirTotal = theirOffer.reduce((sum, item) => sum + item.value, 0);
  const diff = theirTotal - myTotal; // 양수면 이득, 음수면 손해

  // 결과 판정 텍스트
  const getResult = () => {
    if (myTotal === 0 && theirTotal === 0) return t('selectItems');
    if (Math.abs(diff) < 1000) return t('fairTrade');
    
    // 이득/손해 퍼센트
    const base = myTotal === 0 ? 1 : myTotal;
    const percent = (diff / base) * 100;
    
    if (percent > 10) return t('bigWin');
    if (percent > 0) return t('win');
    if (percent > -10) return t('lose');
    return t('bigLose');
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto p-4">
      {/* 1. 결과 상태창 */}
      <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-slate-200 sticky top-2 z-10">
        <h2 className="text-2xl font-black text-slate-800">{getResult()}</h2>
        <p className={`text-sm font-bold ${diff >= 0 ? 'text-green-600' : 'text-red-500'}`}>
          {t('difference')}: {diff > 0 ? '+' : ''}{formatValue(diff)}
        </p>
      </div>

      {/* 2. 트레이드 박스 (좌우 대칭) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 내 박스 (왼쪽) */}
        <div 
          className={`bg-blue-50 rounded-xl p-4 border-2 transition-colors ${isSelectingForMe ? 'border-blue-500 ring-2 ring-blue-200' : 'border-blue-100'}`}
          onClick={() => setIsSelectingForMe(true)}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-blue-800">{t('myOffer')}</h3>
            <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm font-bold">${formatValue(myTotal)}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-2 min-h-[100px]">
            {myOffer.map((item, idx) => (
              <div key={idx} className="relative group">
                <ItemCard item={item} />
                <button 
                  onClick={(e) => { e.stopPropagation(); removeFromMyOffer(idx); }}
                  className="absolute -top-1 -right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            ))}
            {myOffer.length === 0 && <div className="col-span-3 text-center text-gray-400 py-8">{t('clickToAdd')}</div>}
          </div>
        </div>

        {/* 상대 박스 (오른쪽) */}
        <div 
          className={`bg-red-50 rounded-xl p-4 border-2 transition-colors ${!isSelectingForMe ? 'border-red-500 ring-2 ring-red-200' : 'border-red-100'}`}
          onClick={() => setIsSelectingForMe(false)}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-red-800">{t('theirOffer')}</h3>
            <span className="bg-red-200 text-red-800 px-2 py-1 rounded text-sm font-bold">${formatValue(theirTotal)}</span>
          </div>
          
          <div className="grid grid-cols-3 gap-2 min-h-[100px]">
            {theirOffer.map((item, idx) => (
              <div key={idx} className="relative group">
                <ItemCard item={item} />
                <button 
                  onClick={(e) => { e.stopPropagation(); removeFromTheirOffer(idx); }}
                  className="absolute -top-1 -right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            ))}
             {theirOffer.length === 0 && <div className="col-span-3 text-center text-gray-400 py-8">{t('clickToAdd')}</div>}
          </div>
        </div>
      </div>
      
      {/* 초기화 버튼 */}
      <div className="flex justify-center">
         <Button variant="outline" onClick={reset} className="gap-2">
            <ArrowRightLeft size={16} /> {t('reset')}
         </Button>
      </div>

      {/* 3. 아이템 선택 리스트 (Inventory) */}
      <div className="bg-white rounded-xl p-6 border shadow-sm">
        <h3 className="font-bold text-lg mb-4">{t('selectItem')} ({isSelectingForMe ? t('addToMe') : t('addToThem')})</h3>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {gameData.items.map((item) => (
            <ItemCard 
              key={item.id} 
              item={item} 
              onClick={() => isSelectingForMe ? addToMyOffer(item) : addToTheirOffer(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
