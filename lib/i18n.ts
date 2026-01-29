// 다국어 지원 (i18n)

export type Locale = 'ko' | 'en';

export const translations = {
  ko: {
    // 메인 페이지
    calculator: '계산기',
    subtitle: '실시간 시세로 공정한 거래인지 확인하세요',
    priceUpdate: '가격 업데이트',
    
    // 네비게이션
    navCalculator: '계산기',
    navGuide: '가이드',
    
    // 블로그 페이지
    blogTitle: 'Blox Fruits 가이드',
    
    // 블로그 아티클
    article1Title: 'Blox Fruits 최신 티어표 (2026년 1월)',
    article1Excerpt: '현재 메타에서 가장 강력한 과일 TOP 10을 정리했습니다.',
    article2Title: 'Kitsune 열매 얻는 방법 완벽 가이드',
    article2Excerpt: '가장 비싼 Kitsune 과일을 효율적으로 얻는 팁을 공유합니다.',
    article3Title: '초보자를 위한 Blox Fruits 트레이딩 팁',
    article3Excerpt: '손해 보지 않고 거래하는 방법을 알려드립니다.',
    article4Title: 'Dragon 리워크 성능 분석',
    article4Excerpt: '업데이트 후 Dragon 과일이 얼마나 강해졌는지 분석합니다.',
    article5Title: '트레이드 계산기 사용법',
    article5Excerpt: '계산기를 활용해 공정한 거래를 하는 방법을 설명합니다.',
    
    // 트레이드 계산기
    selectItems: '아이템을 선택하세요',
    fairTrade: '공정 거래 (FAIR)',
    bigWin: '개이득 (BIG WIN) 🚀',
    win: '이득 (WIN) 😊',
    lose: '손해 (LOSE) 😢',
    bigLose: '개손해 (BIG LOSE) 😱',
    difference: '차이',
    myOffer: '나의 제안 (You)',
    theirOffer: '상대방 제안 (Them)',
    clickToAdd: '여기를 클릭하고 아이템을 추가하세요',
    reset: '초기화',
    selectItem: '아이템 선택',
    addToMe: '나에게 추가',
    addToThem: '상대에게 추가',
    
    // 희귀도
    mythical: '신화',
    legendary: '전설',
    rare: '레어',
    uncommon: '언커먼',
    common: '커먼',
    gamepass: '게임패스',
    
    // 필터
    all: '전체',
    searchPlaceholder: '아이템 검색...',
  },
  en: {
    // Main page
    calculator: 'Calculator',
    subtitle: 'Check if your trade is fair with real-time prices',
    priceUpdate: 'Price Updated',
    
    // Navigation
    navCalculator: 'Calculator',
    navGuide: 'Guide',
    
    // Blog page
    blogTitle: 'Blox Fruits Guide',
    
    // Blog articles
    article1Title: 'Blox Fruits Latest Tier List (January 2026)',
    article1Excerpt: 'We\'ve compiled the TOP 10 most powerful fruits in the current meta.',
    article2Title: 'Complete Guide to Getting Kitsune Fruit',
    article2Excerpt: 'Share tips for efficiently obtaining the most expensive Kitsune fruit.',
    article3Title: 'Blox Fruits Trading Tips for Beginners',
    article3Excerpt: 'Learn how to trade without losing value.',
    article4Title: 'Dragon Rework Performance Analysis',
    article4Excerpt: 'Analyze how much stronger the Dragon fruit has become after the update.',
    article5Title: 'How to Use the Trade Calculator',
    article5Excerpt: 'Explains how to make fair trades using the calculator.',
    
    // Trade calculator
    selectItems: 'Select items',
    fairTrade: 'FAIR TRADE',
    bigWin: 'BIG WIN 🚀',
    win: 'WIN 😊',
    lose: 'LOSE 😢',
    bigLose: 'BIG LOSE 😱',
    difference: 'Difference',
    myOffer: 'Your Offer',
    theirOffer: 'Their Offer',
    clickToAdd: 'Click here and add items',
    reset: 'Reset',
    selectItem: 'Select Items',
    addToMe: 'Add to yours',
    addToThem: 'Add to theirs',
    
    // Rarity
    mythical: 'Mythical',
    legendary: 'Legendary',
    rare: 'Rare',
    uncommon: 'Uncommon',
    common: 'Common',
    gamepass: 'Gamepass',
    
    // Filter
    all: 'All',
    searchPlaceholder: 'Search items...',
  }
} as const;

export type TranslationKey = keyof typeof translations.en;

// 브라우저 언어 감지
export function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
  
  // 한국어인 경우만 ko, 나머지는 en
  if (browserLang.startsWith('ko')) {
    return 'ko';
  }
  
  return 'en';
}

// 번역 함수
export function getTranslation(locale: Locale, key: TranslationKey): string {
  return translations[locale][key] || translations.en[key] || key;
}

// 날짜 포맷팅
export function formatDate(dateStr: string, locale: Locale): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === 'ko' ? 'ko-KR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
