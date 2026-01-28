export const runtime = 'edge'; 

export default function BlogArticle({ params }: { params: { slug: string } }) {
  // 실제로는 여기서 slug에 맞는 마크다운 파일을 불러오겠지만,
  // 일단 애드센스 승인용으로는 더미 콘텐츠만 있어도 됩니다.
  
  const content = {
    'blox-fruits-tier-list-2026': {
      title: 'Blox Fruits 최신 티어표 (2026년 1월)',
      content: `
## S 티어 (최강)
현재 메타에서 가장 강력한 과일들입니다.

### 1. Dragon (Rework)
리워크 이후 PVP와 PVE 모두 최상급 성능을 자랑합니다. 특히 변신 후 공중 기동성이 뛰어나며, 광역 딜링이 압도적입니다.

**장점:**
- 넓은 범위의 화염 공격
- 비행 능력으로 기동성 우수
- 보스전에서 최고 효율

**단점:**
- 숙련도가 낮으면 다루기 어려움
- 에너지 소모가 심함

### 2. Kitsune
2026년 1월 기준 가장 비싼 과일로, 수요도가 매우 높습니다.

## A 티어
Leopard, Dough 등이 여기에 속합니다.

(이하 생략... 실제로는 최소 300단어 이상의 텍스트를 채워넣으세요)
      `
    },
    'how-to-get-kitsune-fruit': {
      title: 'Kitsune 열매 얻는 방법',
      content: `
## Kitsune 과일 소개
Kitsune는 현재 Blox Fruits에서 가장 인기 있는 신화 등급 과일입니다.

## 획득 방법

### 1. 상점에서 구매
- 확률: 0.6%
- 가격: 8,000,000 벨리

### 2. 트레이드
가장 현실적인 방법입니다. 현재 시세는...

(최소 400단어 이상 작성)
      `
    }
    // 나머지 글도 비슷하게 추가
  };

  const article = content[params.slug as keyof typeof content] || {
    title: '준비 중인 글입니다',
    content: '곧 업데이트 예정입니다.'
  };

  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <article className="max-w-3xl mx-auto prose prose-slate lg:prose-lg">
        <h1>{article.title}</h1>
        <div className="whitespace-pre-wrap">{article.content}</div>
      </article>
    </main>
  );
}
