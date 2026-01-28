// src/lib/game-data.ts
import { GameConfig } from './types';
import bloxFruitsData from '@/data/games/bloxfruits.json';

// 게임 데이터를 ID로 찾아오는 맵
const gamesMap: Record<string, GameConfig> = {
  bloxfruits: bloxFruitsData as GameConfig,
  // 나중에 'petsim99': petSimData, 처럼 추가하면 됨
};

export function getGameData(gameId: string): GameConfig | null {
  return gamesMap[gameId] || null;
}

export function getAllGameIds(): string[] {
  return Object.keys(gamesMap);
}

// 숫자 포맷팅 (15000000 -> 15,000,000)
export function formatValue(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}
