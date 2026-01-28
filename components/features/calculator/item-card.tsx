// src/components/features/calculator/item-card.tsx
"use client";

import { GameItem } from '@/lib/types';
import { formatValue } from '@/lib/game-data';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ImageOff } from 'lucide-react'; // 아이콘

interface ItemCardProps {
  item: GameItem;
  onClick?: (item: GameItem) => void;
  isSelected?: boolean;
}

export function ItemCard({ item, onClick, isSelected }: ItemCardProps) {
  // 희귀도에 따른 배경색 (Tailwind v4)
  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case 'mythical': return 'bg-red-100 border-red-300 text-red-700';
      case 'legendary': return 'bg-purple-100 border-purple-300 text-purple-700';
      case 'rare': return 'bg-blue-100 border-blue-300 text-blue-700';
      default: return 'bg-gray-100 border-gray-200 text-gray-700';
    }
  };

  return (
    <Card 
      className={cn(
        "cursor-pointer transition-all hover:scale-105 active:scale-95 border-2 flex flex-col items-center p-2 gap-2",
        isSelected ? "border-blue-500 ring-2 ring-blue-200" : "border-transparent",
        getRarityColor(item.rarity)
      )}
      onClick={() => onClick?.(item)}
    >
      {/* 이미지 영역 (이미지 없으면 아이콘 표시) */}
      <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center overflow-hidden">
        {item.image ? (
            // next/image 대신 일반 img 태그 사용 (초반 세팅 편의성)
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" 
                 onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
        ) : null}
        <ImageOff className={cn("w-6 h-6 opacity-40", item.image ? "hidden" : "block")} />
      </div>

      {/* 정보 영역 */}
      <div className="text-center w-full">
        <h3 className="font-bold text-sm truncate">{item.name}</h3>
        <p className="text-xs font-mono font-semibold opacity-80">
          ${formatValue(item.value)}
        </p>
      </div>
    </Card>
  );
}
