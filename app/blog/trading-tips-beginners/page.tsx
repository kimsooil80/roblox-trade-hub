"use client";

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';
import { ArrowLeft } from 'lucide-react';

export default function TradingTipsPage() {
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
                ? '초보자를 위한 Blox Fruits 트레이딩 팁' 
                : 'Blox Fruits Trading Tips for Beginners'
              }
            </h1>
            <p className="text-slate-500">2026-01-29</p>
          </header>

          <div className="prose prose-lg max-w-none">
            {locale === 'ko' ? (
              <>
                <p>
                  Blox Fruits에서 성공적인 트레이딩을 하려면 시장의 흐름을 이해하고 
                  올바른 전략을 사용하는 것이 중요합니다. 이 가이드는 초보자들이 
                  손해를 최소화하고 이익을 극대화할 수 있는 방법을 소개합니다.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. 기본 원칙들</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">🔍 시장 조사하기</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>각 과일의 현재 시세를 파악하세요</li>
                  <li>트레이딩 디스코드나 커뮤니티에서 정보를 수집하세요</li>
                  <li>우리 사이트의 계산기를 활용해 공정한 거래인지 확인하세요</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">📈 가치 변동 이해하기</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>업데이트 영향:</strong> 리워크나 버프/너프로 인한 가치 변화</li>
                  <li><strong>메타 변화:</strong> PvP 메타에 따른 수요 변동</li>
                  <li><strong>희귀도:</strong> 스폰율이 낮을수록 높은 가치</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. 트레이딩 전략</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">🟢 안전한 거래 (초보자 추천)</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>공정한 거래만 진행하기 (W/F 거래)</li>
                  <li>조급하게 거래하지 않기</li>
                  <li>여러 제안을 받아보고 비교하기</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">🟡 중급 전략</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>추세 거래:</strong> 상승세인 과일에 투자하기</li>
                  <li><strong>업데이트 예측:</strong> 다가올 업데이트 정보 활용</li>
                  <li><strong>시즌 거래:</strong> 특정 시기에 수요가 높아지는 아이템 활용</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. 피해야 할 실수들</h2>

                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                  <h3 className="text-lg font-semibold mb-2">❌ 흔한 실수들</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>감정적 거래 (FOMO, 조급함)</li>
                    <li>시세 확인 없이 거래하기</li>
                    <li>스캠 거래자와 거래하기</li>
                    <li>한 번에 모든 것을 걸기</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. 추천 거래 순서</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">단계별 가이드</h3>
                <ol className="list-decimal list-inside space-y-3">
                  <li><strong>1단계:</strong> 기본 로기아 과일들 수집 (Light, Magma, Ice)</li>
                  <li><strong>2단계:</strong> 중급 과일로 업그레이드 (Dough, Venom, Shadow)</li>
                  <li><strong>3단계:</strong> 고급 과일 획득 (Dragon, Leopard, Spirit)</li>
                  <li><strong>4단계:</strong> 최상급 과일 도전 (Kitsune, West/East Dragon)</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. 유용한 도구들</h2>
                
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>우리 사이트 계산기:</strong> 거래 가치 분석</li>
                  <li><strong>디스코드 서버:</strong> 실시간 거래 정보</li>
                  <li><strong>YouTube/스트리밍:</strong> 최신 메타 정보</li>
                  <li><strong>커뮤니티 사이트:</strong> 가격 동향 파악</li>
                </ul>

                <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-8">
                  <p>
                    💡 <strong>핵심 팁:</strong> 성급하게 거래하지 마세요! 
                    시간을 두고 여러 제안을 비교하고, 항상 우리 계산기로 
                    거래가 공정한지 확인한 후 결정하세요.
                  </p>
                </div>
              </>
            ) : (
              <>
                <p>
                  Successful trading in Blox Fruits requires understanding market trends and 
                  using the right strategies. This guide helps beginners minimize losses 
                  and maximize profits.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Basic Principles</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">🔍 Market Research</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Learn current market values for each fruit</li>
                  <li>Gather information from trading Discord servers and communities</li>
                  <li>Use our site's calculator to verify fair trades</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">📈 Understanding Value Changes</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Update Impact:</strong> Value changes from reworks or buffs/nerfs</li>
                  <li><strong>Meta Shifts:</strong> Demand fluctuations based on PvP meta</li>
                  <li><strong>Rarity:</strong> Lower spawn rates mean higher values</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. Trading Strategies</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">🟢 Safe Trading (Recommended for Beginners)</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Only proceed with fair trades (W/F trades)</li>
                  <li>Don't rush into trades</li>
                  <li>Receive and compare multiple offers</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">🟡 Intermediate Strategies</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Trend Trading:</strong> Invest in fruits with upward trends</li>
                  <li><strong>Update Prediction:</strong> Utilize upcoming update information</li>
                  <li><strong>Seasonal Trading:</strong> Use items with high seasonal demand</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Common Mistakes to Avoid</h2>

                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                  <h3 className="text-lg font-semibold mb-2">❌ Common Mistakes</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Emotional trading (FOMO, impatience)</li>
                    <li>Trading without checking market values</li>
                    <li>Trading with scammers</li>
                    <li>Putting everything at stake at once</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Recommended Trading Progression</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Step-by-Step Guide</h3>
                <ol className="list-decimal list-inside space-y-3">
                  <li><strong>Stage 1:</strong> Collect basic Logia fruits (Light, Magma, Ice)</li>
                  <li><strong>Stage 2:</strong> Upgrade to intermediate fruits (Dough, Venom, Shadow)</li>
                  <li><strong>Stage 3:</strong> Acquire high-tier fruits (Dragon, Leopard, Spirit)</li>
                  <li><strong>Stage 4:</strong> Challenge top-tier fruits (Kitsune, West/East Dragon)</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Useful Tools</h2>
                
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Our Site Calculator:</strong> Trade value analysis</li>
                  <li><strong>Discord Servers:</strong> Real-time trading information</li>
                  <li><strong>YouTube/Streaming:</strong> Latest meta information</li>
                  <li><strong>Community Sites:</strong> Price trend tracking</li>
                </ul>

                <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-8">
                  <p>
                    💡 <strong>Key Tip:</strong> Don't rush into trades! 
                    Take time to compare multiple offers and always verify 
                    fair trading with our calculator before making decisions.
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