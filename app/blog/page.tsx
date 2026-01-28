import Link from 'next/link';

const articles = [
  {
    slug: 'blox-fruits-tier-list-2026',
    title: 'Blox Fruits 최신 티어표 (2026년 1월)',
    excerpt: '현재 메타에서 가장 강력한 과일 TOP 10을 정리했습니다.',
    date: '2026-01-28'
  },
  {
    slug: 'how-to-get-kitsune-fruit',
    title: 'Kitsune 열매 얻는 방법 완벽 가이드',
    excerpt: '가장 비싼 Kitsune 과일을 효율적으로 얻는 팁을 공유합니다.',
    date: '2026-01-27'
  },
  {
    slug: 'trading-tips-beginners',
    title: '초보자를 위한 Blox Fruits 트레이딩 팁',
    excerpt: '손해 보지 않고 거래하는 방법을 알려드립니다.',
    date: '2026-01-26'
  },
  {
    slug: 'dragon-rework-review',
    title: 'Dragon 리워크 성능 분석',
    excerpt: '업데이트 후 Dragon 과일이 얼마나 강해졌는지 분석합니다.',
    date: '2026-01-25'
  },
  {
    slug: 'value-calculator-guide',
    title: '트레이드 계산기 사용법',
    excerpt: '계산기를 활용해 공정한 거래를 하는 방법을 설명합니다.',
    date: '2026-01-24'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Blox Fruits 가이드</h1>
        
        <div className="grid gap-6">
          {articles.map((article) => (
            <Link 
              key={article.slug} 
              href={`/blog/${article.slug}`}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow border border-slate-200"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-bold text-slate-800 hover:text-blue-600">
                  {article.title}
                </h2>
                <span className="text-sm text-slate-500">{article.date}</span>
              </div>
              <p className="text-slate-600">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
