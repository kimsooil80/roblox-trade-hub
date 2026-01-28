// src/lib/types.ts

export interface GameItem {
  id: string;
  name: string;
  type: 'fruit' | 'sword' | 'accessory' | 'gamepass'; // 필요하면 더 추가
  rarity: string;
  value: number;
  demand: number; // 1~10 (수요도)
  image: string;
}

export interface GameConfig {
  id: string;
  name: string;
  description: string;
  meta: {
    title: string;
    description: string;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    bgGradient: string;
  };
  currencySymbol: string;
  lastUpdated: string;
  items: GameItem[];
}
