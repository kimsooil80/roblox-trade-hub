"use client";

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';
import { ArrowLeft } from 'lucide-react';

export default function CalculatorGuidePage() {
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
                ? '트레이드 계산기 사용법' 
                : 'How to Use the Trade Calculator'
              }
            </h1>
            <p className="text-slate-500">2026-01-29</p>
          </header>

          <div className="prose prose-lg max-w-none">
            {locale === 'ko' ? (
              <>
                <p>
                  우리 사이트의 트레이드 계산기는 Blox Fruits 거래에서 공정한 거래를 
                  판단할 수 있도록 도와주는 핵심 도구입니다. 이 가이드에서는 
                  계산기의 모든 기능과 효과적인 사용법을 설명합니다.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">🎯 계산기의 핵심 기능</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">실시간 가격 반영</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>매일 업데이트되는 최신 시세 정보</li>
                  <li>신뢰할 수 있는 소스에서 가져온 정확한 데이터</li>
                  <li>메타 변화와 업데이트를 즉시 반영</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">직관적인 거래 시뮬레이션</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>드래그 앤 드롭으로 쉬운 아이템 추가</li>
                  <li>실제 거래 환경과 유사한 인터페이스</li>
                  <li>즉시 계산되는 거래 결과</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">📱 사용법 단계별 가이드</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">1단계: 거래 대상 선택</h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                  <p>
                    화면 상단에서 "나의 제안" 또는 "상대방 제안" 박스를 클릭하여 
                    어느 쪽에 아이템을 추가할지 선택하세요.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">2단계: 아이템 추가</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>하단의 아이템 목록에서 원하는 과일을 클릭</li>
                  <li>선택한 박스에 자동으로 아이템이 추가됨</li>
                  <li>같은 아이템을 여러 개 추가 가능</li>
                  <li>잘못 추가한 아이템은 X 버튼으로 제거</li>
                </ol>

                <h3 className="text-xl font-semibold mt-6 mb-3">3단계: 결과 해석</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-700">공정 거래 (FAIR)</h4>
                    <p>양쪽 가치 차이가 1,000 이하인 경우. 안전한 거래입니다.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700">이득 (WIN)</h4>
                    <p>상대방 제안이 더 가치있는 경우. 좋은 거래입니다!</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-yellow-700">손해 (LOSE)</h4>
                    <p>내 제안이 더 가치있는 경우. 신중히 고려해보세요.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-700">개손해 (BIG LOSE)</h4>
                    <p>큰 손해가 예상되는 거래. 거절하는 것을 추천합니다.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">💡 실전 활용 팁</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">거래 전 체크리스트</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li>✅ 계산기에서 거래 시뮬레이션 완료</li>
                    <li>✅ 결과가 FAIR 또는 WIN인지 확인</li>
                    <li>✅ 상대방이 신뢰할 수 있는 거래자인지 검증</li>
                    <li>✅ 급하게 거래하지 않고 충분히 고민</li>
                    <li>✅ 여러 제안을 비교해본 후 결정</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">고급 전략</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>미래 가치 고려:</strong> 업데이트 예정인 과일은 가치 상승 가능성</li>
                  <li><strong>유동성 확인:</strong> 인기 있는 과일은 재거래가 쉬움</li>
                  <li><strong>개인 선호도:</strong> 내가 실제로 사용할 과일인지 고려</li>
                  <li><strong>시장 트렌드:</strong> 최근 가격 변동 추세 파악</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">⚠️ 주의사항</h2>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="text-lg font-semibold mb-2">계산기 한계점</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>시장 가격은 계속 변동됩니다</li>
                    <li>개인적 선호도는 반영되지 않습니다</li>
                    <li>특별한 상황(이벤트 등)은 고려되지 않을 수 있습니다</li>
                    <li>최종 거래 결정은 본인의 판단에 따라 하세요</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">🔄 자주 묻는 질문</h2>

                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Q: 가격 정보는 얼마나 자주 업데이트되나요?</h3>
                    <p>A: 매일 정기적으로 업데이트되며, 큰 시장 변화가 있을 때는 즉시 반영됩니다.</p>
                  </div>
                  
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Q: 게임패스도 계산에 포함되나요?</h3>
                    <p>A: 네, 모든 게임패스의 가치도 포함되어 계산됩니다.</p>
                  </div>
                  
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Q: FAIR 거래라면 무조건 해도 되나요?</h3>
                    <p>A: FAIR는 가격적으로 공정하다는 의미이지만, 본인의 필요와 선호도도 고려해서 결정하세요.</p>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-8">
                  <p>
                    💡 <strong>마지막 팁:</strong> 계산기는 도구일 뿐입니다. 
                    항상 본인의 판단을 믿고, 성급한 거래보다는 신중한 결정을 내리세요. 
                    궁금한 점이 있다면 커뮤니티에서 다른 플레이어들의 의견도 참고해보세요!
                  </p>
                </div>
              </>
            ) : (
              <>
                <p>
                  Our site's trade calculator is a core tool that helps determine fair trades 
                  in Blox Fruits trading. This guide explains all features and effective usage methods.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">🎯 Core Calculator Features</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Real-time Price Updates</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Latest market information updated daily</li>
                  <li>Accurate data from trusted sources</li>
                  <li>Immediate reflection of meta changes and updates</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Intuitive Trade Simulation</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Easy item addition with drag and drop</li>
                  <li>Interface similar to actual trading environment</li>
                  <li>Instantly calculated trade results</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">📱 Step-by-Step Usage Guide</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Step 1: Select Trading Side</h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                  <p>
                    Click on either "Your Offer" or "Their Offer" box at the top of the screen 
                    to select which side to add items to.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Step 2: Add Items</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Click desired fruit from the item list at bottom</li>
                  <li>Item automatically added to selected box</li>
                  <li>Multiple same items can be added</li>
                  <li>Remove incorrectly added items with X button</li>
                </ol>

                <h3 className="text-xl font-semibold mt-6 mb-3">Step 3: Interpret Results</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-700">FAIR TRADE</h4>
                    <p>When value difference is under 1,000. Safe to trade.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-700">WIN</h4>
                    <p>When their offer is more valuable. Good trade!</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-yellow-700">LOSE</h4>
                    <p>When your offer is more valuable. Consider carefully.</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-red-700">BIG LOSE</h4>
                    <p>Expected big loss from trade. Recommend declining.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">💡 Practical Usage Tips</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Pre-Trade Checklist</h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li>✅ Complete trade simulation in calculator</li>
                    <li>✅ Verify result is FAIR or WIN</li>
                    <li>✅ Verify trading partner is trustworthy</li>
                    <li>✅ Don't rush, think thoroughly</li>
                    <li>✅ Compare multiple offers before deciding</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Advanced Strategies</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Future Value Consideration:</strong> Fruits scheduled for updates may increase in value</li>
                  <li><strong>Liquidity Check:</strong> Popular fruits are easier to retrade</li>
                  <li><strong>Personal Preference:</strong> Consider if you'll actually use the fruit</li>
                  <li><strong>Market Trends:</strong> Understand recent price movement trends</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">⚠️ Important Notes</h2>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <h3 className="text-lg font-semibold mb-2">Calculator Limitations</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Market prices continuously fluctuate</li>
                    <li>Personal preferences are not reflected</li>
                    <li>Special situations (events, etc.) may not be considered</li>
                    <li>Final trading decisions should be based on your judgment</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">🔄 Frequently Asked Questions</h2>

                <div className="space-y-4">
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Q: How often is price information updated?</h3>
                    <p>A: Updated daily on a regular basis, with immediate updates during major market changes.</p>
                  </div>
                  
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Q: Are gamepasses included in calculations?</h3>
                    <p>A: Yes, all gamepass values are included in calculations.</p>
                  </div>
                  
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Q: Should I always trade if it shows FAIR?</h3>
                    <p>A: FAIR means price-wise balanced, but consider your needs and preferences before deciding.</p>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-8">
                  <p>
                    💡 <strong>Final Tip:</strong> The calculator is just a tool. 
                    Always trust your judgment and make careful decisions rather than rushing trades. 
                    If you have questions, consider getting opinions from other players in the community!
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