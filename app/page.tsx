"use client";

import { getGameData } from '@/lib/game-data';
import { TradeCalculator } from '@/components/features/calculator/trade-calculator';

export default function Home() {
  const gameData = getGameData('bloxfruits');
  if (!gameData) return <div>Game not found</div>;

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <h1 className="text-3xl font-black text-center mb-2 text-slate-800">
        {gameData.name} Calculator
      </h1>
      <p className="text-center text-slate-500 mb-8">
        실시간 시세로 공정한 거래인지 확인하세요
      </p>
      
      <TradeCalculator gameData={gameData} />
    </main>
  );
}
