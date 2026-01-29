"use client";

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';
import { ArrowLeft } from 'lucide-react';

export default function KitsunePage() {
  const { locale, t } = useLocale();

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft size={16} />
          {locale === 'ko' ? '블로그로 돌아가기' : 'Back to Blog'}
        </Link>

        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              {locale === 'ko' 
                ? 'Kitsune 열매 얻는 방법 완벽 가이드' 
                : 'Complete Guide to Getting Kitsune Fruit'
              }
            </h1>
            <p className="text-slate-500">2026-01-29</p>
          </header>

          <div className="prose prose-lg max-w-none">
            {locale === 'ko' ? (
              <>
                <p>
                  Kitsune 과일은 현재 Blox Fruits에서 가장 가치 있는 과일 중 하나입니다. 
                  이 가이드에서는 Kitsune을 효율적으로 얻는 모든 방법을 소개합니다.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. 과일 상점에서 구매</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>확률:</strong> 0.6%</li>
                  <li><strong>가격:</strong> 8,000,000 베리 또는 4,000 로벅스</li>
                  <li><strong>팁:</strong> 매 정시마다 상점이 갱신되니 꾸준히 확인하세요</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. 과일 스폰</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>스폰 확률:</strong> 0.76%</li>
                  <li><strong>스폰 시간:</strong> 매시 정각</li>
                  <li><strong>위치:</strong> 모든 바다에서 랜덤 스폰</li>
                  <li><strong>전략:</strong> 스폰 시간 5분 전부터 대기하세요</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. 트레이딩으로 획득</h2>
                <p><strong>현재 시세 (2026년 1월):</strong></p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Kitsune ≈ $400M</li>
                  <li>필요한 아이템들: Dough + Shadow + Venom + 추가 아이템</li>
                  <li>또는: Dragon + Buddha + 여러 레어 아이템</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. 효율적인 파밍 전략</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>멀티 서버 전략:</strong> 여러 서버를 번갈아가며 확인</li>
                  <li><strong>시간대 활용:</strong> 새벽/늦은 밤에는 경쟁이 적음</li>
                  <li><strong>팀워크:</strong> 친구들과 협력해서 더 많은 서버 체크</li>
                  <li><strong>게임패스 활용:</strong> 2x Money나 Fast Boats로 효율성 증대</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">주의사항</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p>
                    ⚠️ <strong>경고:</strong> 스캠 거래에 주의하세요! 
                    반드시 신뢰할 수 있는 거래자와만 거래하고, 
                    우리 사이트의 계산기를 사용해 공정한 거래인지 확인하세요.
                  </p>
                </div>
              </>
            ) : (
              <>
                <p>
                  Kitsune fruit is one of the most valuable fruits in Blox Fruits currently. 
                  This guide covers all efficient methods to obtain Kitsune.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Purchase from Fruit Shop</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Probability:</strong> 0.6%</li>
                  <li><strong>Price:</strong> 8,000,000 Beli or 4,000 Robux</li>
                  <li><strong>Tip:</strong> Shop refreshes every hour, check consistently</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Fruit Spawning</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Spawn Rate:</strong> 0.76%</li>
                  <li><strong>Spawn Time:</strong> Every hour on the hour</li>
                  <li><strong>Location:</strong> Random spawn in all seas</li>
                  <li><strong>Strategy:</strong> Wait 5 minutes before spawn time</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Trading Acquisition</h2>
                <p><strong>Current Market Value (January 2026):</strong></p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Kitsune ≈ $400M</li>
                  <li>Required items: Dough + Shadow + Venom + additional items</li>
                  <li>Or: Dragon + Buddha + multiple rare items</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Efficient Farming Strategy</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Multi-server Strategy:</strong> Check multiple servers alternately</li>
                  <li><strong>Time Management:</strong> Less competition during dawn/late night</li>
                  <li><strong>Teamwork:</strong> Cooperate with friends to check more servers</li>
                  <li><strong>Gamepass Usage:</strong> Use 2x Money or Fast Boats for efficiency</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">Warnings</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p>
                    ⚠️ <strong>Warning:</strong> Beware of scam trades! 
                    Only trade with trusted traders and use our site's calculator 
                    to verify fair trades.
                  </p>
                </div>
              </>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}