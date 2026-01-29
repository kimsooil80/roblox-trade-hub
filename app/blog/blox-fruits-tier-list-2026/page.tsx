"use client";

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';
import { ArrowLeft } from 'lucide-react';

export default function TierListPage() {
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
                ? 'Blox Fruits 최신 티어표 (2026년 1월)' 
                : 'Blox Fruits Latest Tier List (January 2026)'
              }
            </h1>
            <p className="text-slate-500">2026-01-29</p>
          </header>

          <div className="prose prose-lg max-w-none">
            {locale === 'ko' ? (
              <>
                <p>
                  2026년 1월 현재, Blox Fruits의 메타가 크게 변화했습니다. 
                  최신 업데이트와 리워크를 반영한 현재 가장 강력한 과일 TOP 10을 소개합니다.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">S급 (최고 등급)</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>West Dragon</strong> - 최고의 PvP 성능, 엄청난 데미지</li>
                  <li><strong>East Dragon</strong> - 균형잡힌 PvP/PvE 성능</li>
                  <li><strong>Kitsune</strong> - 독특한 스킬셋과 높은 기동성</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">A급 (우수 등급)</h2>
                <ol className="list-decimal list-inside space-y-2" start={4}>
                  <li><strong>Yeti</strong> - 강력한 얼음 스킬과 광역 데미지</li>
                  <li><strong>Gas</strong> - 지속 데미지와 디버프 효과</li>
                  <li><strong>Tiger</strong> - 빠른 연계와 높은 데미지</li>
                  <li><strong>Dough V2</strong> - 여전히 강력한 올라운더</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">B급 (양호 등급)</h2>
                <ol className="list-decimal list-inside space-y-2" start={8}>
                  <li><strong>Venom</strong> - 독 데미지의 강자</li>
                  <li><strong>Shadow</strong> - 어둠 스킬의 다재다능함</li>
                  <li><strong>Spirit</strong> - 원거리 공격의 달인</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">트레이딩 팁</h2>
                <p>
                  현재 시장에서는 West Dragon과 East Dragon의 가치가 급상승하고 있습니다. 
                  Kitsune도 여전히 높은 인기를 유지하고 있으며, 새로운 과일들인 Yeti, Gas, Tiger도 
                  좋은 투자 대상이 될 수 있습니다.
                </p>
              </>
            ) : (
              <>
                <p>
                  As of January 2026, the Blox Fruits meta has undergone significant changes. 
                  Here are the current TOP 10 most powerful fruits reflecting the latest updates and reworks.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">S-Tier (Top Tier)</h2>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>West Dragon</strong> - Supreme PvP performance, tremendous damage</li>
                  <li><strong>East Dragon</strong> - Balanced PvP/PvE performance</li>
                  <li><strong>Kitsune</strong> - Unique skillset and high mobility</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">A-Tier (Excellent)</h2>
                <ol className="list-decimal list-inside space-y-2" start={4}>
                  <li><strong>Yeti</strong> - Powerful ice skills and area damage</li>
                  <li><strong>Gas</strong> - Damage over time and debuff effects</li>
                  <li><strong>Tiger</strong> - Fast combos and high damage</li>
                  <li><strong>Dough V2</strong> - Still a powerful all-rounder</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">B-Tier (Good)</h2>
                <ol className="list-decimal list-inside space-y-2" start={8}>
                  <li><strong>Venom</strong> - Poison damage specialist</li>
                  <li><strong>Shadow</strong> - Versatile dark skills</li>
                  <li><strong>Spirit</strong> - Ranged attack master</li>
                </ol>

                <h2 className="text-2xl font-bold mt-8 mb-4">Trading Tips</h2>
                <p>
                  In the current market, West Dragon and East Dragon values are skyrocketing. 
                  Kitsune remains highly popular, and the new fruits like Yeti, Gas, and Tiger 
                  can also be good investment targets.
                </p>
              </>
            )}
          </div>
        </article>
      </div>
    </main>
  );
}