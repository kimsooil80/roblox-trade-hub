"use client";

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';
import { ArrowLeft } from 'lucide-react';

export default function DragonReviewPage() {
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
                ? 'Dragon 리워크 성능 분석' 
                : 'Dragon Rework Performance Analysis'
              }
            </h1>
            <p className="text-slate-500">2026-01-29</p>
          </header>

          <div className="prose prose-lg max-w-none">
            {locale === 'ko' ? (
              <>
                <p>
                  2026년 1월 대규모 업데이트로 Dragon 과일이 완전히 리워크되었습니다. 
                  West Dragon과 East Dragon으로 분리되면서 각각 독특한 특성을 갖게 되었습니다. 
                  이번 분석에서는 리워크 후 Dragon의 성능을 자세히 살펴보겠습니다.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">🐉 West Dragon 분석</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">핵심 특징</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>타입:</strong> 로기아 (Logia)</li>
                  <li><strong>현재 가치:</strong> ~$3.2B (최고 등급)</li>
                  <li><strong>전문 분야:</strong> PvP 특화</li>
                  <li><strong>주요 강점:</strong> 극강의 단일 대상 데미지</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">스킬 분석</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">Z스킬 - Dragon Rage</h4>
                    <p>엄청난 화염 브레스 공격. 기존 대비 데미지 300% 증가</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">X스킬 - Inferno Blast</h4>
                    <p>광역 폭발 공격. 새로 추가된 화상 도트 데미지</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">C스킬 - Western Storm</h4>
                    <p>이동기와 공격을 결합한 신규 스킬</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">F스킬 - Dragon Form</h4>
                    <p>완전체 드래곤 변신. 모든 스탯 대폭 상승</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">🐲 East Dragon 분석</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">핵심 특징</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>타입:</strong> 로기아 (Logia)</li>
                  <li><strong>현재 가치:</strong> ~$3.0B</li>
                  <li><strong>전문 분야:</strong> PvE & PvP 균형형</li>
                  <li><strong>주요 강점:</strong> 다재다능함과 광역 공격</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">스킬 분석</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Z스킬 - Thunder Roar</h4>
                    <p>번개와 바람이 결합된 공격. 스턴 효과 추가</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">X스킬 - Storm Cyclone</h4>
                    <p>회오리바람 생성. 적을 끌어당기는 효과</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">C스킬 - Eastern Wind</h4>
                    <p>빠른 이동과 치유 효과를 제공하는 서포트 스킬</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">F스킬 - Celestial Dragon</h4>
                    <p>하늘을 나는 드래곤으로 변신. 비행 능력 획득</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">📊 성능 비교</h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-300">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 p-2">항목</th>
                        <th className="border border-slate-300 p-2">West Dragon</th>
                        <th className="border border-slate-300 p-2">East Dragon</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 p-2 font-semibold">PvP 성능</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐⭐⭐</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-semibold">PvE 성능</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐⭐</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-semibold">기동성</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-semibold">데미지</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐⭐⭐</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-semibold">사용 난이도</td>
                        <td className="border border-slate-300 p-2">어려움</td>
                        <td className="border border-slate-300 p-2">보통</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">💰 투자 가치 분석</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">West Dragon</h3>
                    <ul className="text-sm space-y-1">
                      <li>✅ 최고의 PvP 성능</li>
                      <li>✅ 높은 투자 가치</li>
                      <li>❌ 높은 획득 난이도</li>
                      <li>❌ 복잡한 컨트롤</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">East Dragon</h3>
                    <ul className="text-sm space-y-1">
                      <li>✅ 균형잡힌 성능</li>
                      <li>✅ 초보자 친화적</li>
                      <li>✅ 우수한 기동성</li>
                      <li>❌ 특화 성능 부족</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">🎯 추천 사항</h2>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <p>
                    <strong>PvP 중심 플레이어:</strong> West Dragon 추천<br/>
                    <strong>올라운드 플레이어:</strong> East Dragon 추천<br/>
                    <strong>투자 목적:</strong> 둘 다 높은 가치 상승 예상
                  </p>
                </div>
              </>
            ) : (
              <>
                <p>
                  The Dragon fruit received a complete rework in January 2026's major update. 
                  Split into West Dragon and East Dragon, each now has unique characteristics. 
                  This analysis examines Dragon's performance after the rework.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">🐉 West Dragon Analysis</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Type:</strong> Logia</li>
                  <li><strong>Current Value:</strong> ~$3.2B (Top Tier)</li>
                  <li><strong>Specialty:</strong> PvP Focused</li>
                  <li><strong>Main Strength:</strong> Extreme single-target damage</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Skill Analysis</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">Z-Skill - Dragon Rage</h4>
                    <p>Massive fire breath attack. 300% damage increase from previous version</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">X-Skill - Inferno Blast</h4>
                    <p>Area explosion attack. New burn DOT damage added</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">C-Skill - Western Storm</h4>
                    <p>New skill combining movement and attack</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">F-Skill - Dragon Form</h4>
                    <p>Full dragon transformation. Massive stat boost</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">🐲 East Dragon Analysis</h2>

                <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Type:</strong> Logia</li>
                  <li><strong>Current Value:</strong> ~$3.0B</li>
                  <li><strong>Specialty:</strong> Balanced PvE & PvP</li>
                  <li><strong>Main Strength:</strong> Versatility and area attacks</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">Skill Analysis</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Z-Skill - Thunder Roar</h4>
                    <p>Lightning and wind combined attack. Stun effect added</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">X-Skill - Storm Cyclone</h4>
                    <p>Creates tornado. Pulling effect on enemies</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">C-Skill - Eastern Wind</h4>
                    <p>Support skill providing fast movement and healing</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">F-Skill - Celestial Dragon</h4>
                    <p>Sky-flying dragon transformation. Flight ability gained</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">📊 Performance Comparison</h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-300">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 p-2">Category</th>
                        <th className="border border-slate-300 p-2">West Dragon</th>
                        <th className="border border-slate-300 p-2">East Dragon</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 p-2 font-semibold">PvP Performance</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐⭐⭐</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-semibold">PvE Performance</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐⭐</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-semibold">Mobility</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-semibold">Damage</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐⭐⭐</td>
                        <td className="border border-slate-300 p-2">⭐⭐⭐⭐</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-2 font-semibold">Difficulty</td>
                        <td className="border border-slate-300 p-2">Hard</td>
                        <td className="border border-slate-300 p-2">Medium</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">💰 Investment Value Analysis</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-red-800 mb-2">West Dragon</h3>
                    <ul className="text-sm space-y-1">
                      <li>✅ Best PvP performance</li>
                      <li>✅ High investment value</li>
                      <li>❌ High acquisition difficulty</li>
                      <li>❌ Complex controls</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">East Dragon</h3>
                    <ul className="text-sm space-y-1">
                      <li>✅ Balanced performance</li>
                      <li>✅ Beginner friendly</li>
                      <li>✅ Excellent mobility</li>
                      <li>❌ Lacks specialized performance</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">🎯 Recommendations</h2>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <p>
                    <strong>PvP-focused Players:</strong> West Dragon recommended<br/>
                    <strong>All-round Players:</strong> East Dragon recommended<br/>
                    <strong>Investment Purpose:</strong> Both expected to have high value appreciation
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