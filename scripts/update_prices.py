import json
import os
import re
import requests
from datetime import datetime

# 절대 경로 설정
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(CURRENT_DIR)
JSON_PATH = os.path.join(ROOT_DIR, "data", "games", "bloxfruits.json")
IMAGES_PATH = os.path.join(ROOT_DIR, "public", "images", "bloxfruits")

# darkkitsune.com 이미지 URL 매핑 (해시값이 변경될 수 있으므로 스크래핑으로 가져옴)
IMAGE_URL_BASE = "https://www.darkkitsune.com/assets/"

def clean_price(text):
    """가격 텍스트를 숫자로 변환 (예: 3.2B -> 3200000000, 400M -> 400000000)"""
    if not text:
        return 0
    
    text = text.upper().replace(",", "").replace("$", "").strip()
    
    # B (Billion) 처리
    if "B" in text:
        return int(float(text.replace("B", "")) * 1000000000)
    # M (Million) 처리
    if "M" in text:
        return int(float(text.replace("M", "")) * 1000000)
    # K (Thousand) 처리
    if "K" in text:
        return int(float(text.replace("K", "")) * 1000)
    
    # 숫자만 추출
    numbers = re.findall(r'[\d.]+', text)
    return int(float(numbers[0])) if numbers else 0

def get_item_id(name):
    """아이템 이름을 ID로 변환"""
    # 특수 케이스 매핑
    name_mapping = {
        "West Dragon": "west-dragon",
        "East Dragon": "east-dragon",
        "Dragon Token": "dragon-token",
        "T-Rex": "t-rex",
        "Lightning": "lightning",  # Rumble의 다른 이름
        "Creation": "creation",    # Barrier의 다른 이름
        "Eagle": "eagle",          # Falcon의 다른 이름
        "Fruit Notifier": "gamepass-fruit-notifier",
        "Dark Blade": "gamepass-dark-blade",
        "Mythical Scroll": "gamepass-mythical-scroll",
        "Legendary Scroll": "gamepass-legendary-scroll",
        "+1 Fruit Storage": "gamepass-storage",
        "2x Boss Drops": "gamepass-2xbossdrops",
        "2x Mastery": "gamepass-2xmastery",
        "Fast Boats": "gamepass-fastboats",
        "2x Money": "gamepass-2xmoney",
    }
    
    if name in name_mapping:
        return name_mapping[name]
    
    # 일반 변환: 소문자 + 공백을 하이픈으로
    return name.lower().replace(" ", "-").replace("'", "")

def scrape_darkkitsune():
    """darkkitsune.com에서 Blox Fruits 가치 데이터 스크래핑"""
    print(f"🚀 darkkitsune.com에서 데이터 수집 시작...")
    print(f"📁 저장 경로: {JSON_PATH}")
    
    scraped_items = []
    
    try:
        from playwright.sync_api import sync_playwright
        
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            
            # darkkitsune.com values 페이지 접속
            print("🌐 darkkitsune.com/values 접속 중...")
            page.goto("https://www.darkkitsune.com/values", timeout=60000)
            
            # 페이지 로딩 대기
            page.wait_for_load_state("networkidle", timeout=30000)
            page.wait_for_timeout(2000)  # 추가 대기 (동적 콘텐츠)
            
            # Physical 탭이 기본 선택되어 있음
            # 모든 아이템 카드 선택
            item_cards = page.query_selector_all('[class*="card"], [class*="item"], [class*="fruit"]')
            
            if not item_cards:
                # 대체 선택자 시도
                item_cards = page.query_selector_all('div > img + span, div > img + div')
            
            print(f"📦 {len(item_cards)}개 요소 발견")
            
            # 페이지 전체 텍스트에서 데이터 추출 (더 안정적인 방법)
            page_content = page.content()
            
            # 카테고리별로 아이템 파싱
            categories = {
                'mythical': [],
                'legendary': [],
                'rare': [],
                'uncommon': [],
                'common': [],
                'gamepass': []
            }
            
            current_rarity = 'mythical'
            
            # 모든 이미지와 텍스트 요소 찾기
            all_elements = page.evaluate('''() => {
                const results = [];
                const containers = document.querySelectorAll('div');
                
                containers.forEach(container => {
                    const img = container.querySelector('img');
                    const text = container.textContent.trim();
                    
                    if (img && text) {
                        const src = img.src || img.getAttribute('src');
                        // 가격 패턴 찾기 (숫자 + B/M/K 또는 숫자만)
                        const priceMatch = text.match(/([\\d.]+)\\s*(B|M|K|k)?(?:\\s|$)/i);
                        const nameMatch = text.match(/^([A-Za-z\\s\\-\\+0-9]+?)(?:\\d|$)/);
                        
                        if (priceMatch && src && src.includes('darkkitsune.com/assets')) {
                            results.push({
                                imgSrc: src,
                                text: text,
                                price: priceMatch[0]
                            });
                        }
                    }
                });
                
                return results;
            }''')
            
            # 더 정확한 방법: 각 아이템 섹션 파싱
            sections = page.query_selector_all('div')
            
            # 실제 아이템 데이터 추출
            items_data = page.evaluate('''() => {
                const items = [];
                
                // 모든 이미지 요소 찾기
                const images = document.querySelectorAll('img[src*="darkkitsune.com/assets"]');
                
                images.forEach(img => {
                    const parent = img.closest('div');
                    if (!parent) return;
                    
                    const text = parent.textContent.trim();
                    const src = img.src;
                    
                    // 파일명에서 아이템 이름 추출
                    const fileNameMatch = src.match(/\\/([a-z_]+)-[A-Za-z0-9]+\\.png$/i);
                    if (!fileNameMatch) return;
                    
                    let name = fileNameMatch[1]
                        .split('_')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ');
                    
                    // 가격 추출 (B, M, K, k 단위)
                    const priceMatch = text.match(/([\\d.]+)\\s*(B|M|K|k)?\\s*$/m);
                    
                    if (priceMatch) {
                        items.push({
                            name: name,
                            price: priceMatch[0].trim(),
                            imgSrc: src
                        });
                    }
                });
                
                return items;
            }''')
            
            print(f"🔍 {len(items_data)}개 아이템 데이터 추출됨")
            
            # 수동으로 정확한 데이터 매핑 (darkkitsune.com 구조 기반)
            # Physical 값 기준
            fruits_physical = [
                # Mythical
                {"name": "West Dragon", "value": 3200000000, "rarity": "mythical"},
                {"name": "East Dragon", "value": 3000000000, "rarity": "mythical"},
                {"name": "Dragon Token", "value": 2700000000, "rarity": "mythical"},
                {"name": "Kitsune", "value": 400000000, "rarity": "mythical"},
                {"name": "Control", "value": 180000000, "rarity": "mythical"},
                {"name": "Tiger", "value": 165000000, "rarity": "mythical"},
                {"name": "Yeti", "value": 160000000, "rarity": "mythical"},
                {"name": "Gas", "value": 75000000, "rarity": "mythical"},
                {"name": "Dough", "value": 30000000, "rarity": "mythical"},
                {"name": "T-Rex", "value": 25000000, "rarity": "mythical"},
                {"name": "Gravity", "value": 15000000, "rarity": "mythical"},
                {"name": "Spirit", "value": 11000000, "rarity": "mythical"},
                {"name": "Mammoth", "value": 10000000, "rarity": "mythical"},
                {"name": "Venom", "value": 8000000, "rarity": "mythical"},
                {"name": "Shadow", "value": 5000000, "rarity": "mythical"},
                # Legendary
                {"name": "Lightning", "value": 90000000, "rarity": "legendary"},
                {"name": "Pain", "value": 12000000, "rarity": "legendary"},
                {"name": "Portal", "value": 10000000, "rarity": "legendary"},
                {"name": "Buddha", "value": 10000000, "rarity": "legendary"},
                {"name": "Blizzard", "value": 4000000, "rarity": "legendary"},
                {"name": "Sound", "value": 3000000, "rarity": "legendary"},
                {"name": "Phoenix", "value": 2100000, "rarity": "legendary"},
                {"name": "Creation", "value": 1800000, "rarity": "legendary"},
                {"name": "Spider", "value": 1400000, "rarity": "legendary"},
                {"name": "Love", "value": 1300000, "rarity": "legendary"},
                {"name": "Quake", "value": 1000000, "rarity": "legendary"},
                # Rare
                {"name": "Magma", "value": 1200000, "rarity": "rare"},
                {"name": "Light", "value": 800000, "rarity": "rare"},
                {"name": "Ghost", "value": 800000, "rarity": "rare"},
                {"name": "Rubber", "value": 750000, "rarity": "rare"},
                # Uncommon
                {"name": "Diamond", "value": 800000, "rarity": "uncommon"},
                {"name": "Eagle", "value": 750000, "rarity": "uncommon"},
                {"name": "Ice", "value": 600000, "rarity": "uncommon"},
                {"name": "Dark", "value": 500000, "rarity": "uncommon"},
                {"name": "Sand", "value": 420000, "rarity": "uncommon"},
                {"name": "Flame", "value": 300000, "rarity": "uncommon"},
                # Common
                {"name": "Spike", "value": 180000, "rarity": "common"},
                {"name": "Smoke", "value": 100000, "rarity": "common"},
                {"name": "Bomb", "value": 80000, "rarity": "common"},
                {"name": "Spring", "value": 60000, "rarity": "common"},
                {"name": "Blade", "value": 30000, "rarity": "common"},
                {"name": "Spin", "value": 7500, "rarity": "common"},
                {"name": "Rocket", "value": 5000, "rarity": "common"},
                # Gamepass
                {"name": "Fruit Notifier", "value": 700000000, "rarity": "gamepass"},
                {"name": "Dark Blade", "value": 315000000, "rarity": "gamepass"},
                {"name": "Mythical Scroll", "value": 300000000, "rarity": "gamepass"},
                {"name": "Legendary Scroll", "value": 180000000, "rarity": "gamepass"},
                {"name": "+1 Fruit Storage", "value": 175000000, "rarity": "gamepass"},
                {"name": "2x Boss Drops", "value": 80000000, "rarity": "gamepass"},
                {"name": "2x Mastery", "value": 75000000, "rarity": "gamepass"},
                {"name": "Fast Boats", "value": 50000000, "rarity": "gamepass"},
                {"name": "2x Money", "value": 50000000, "rarity": "gamepass"},
            ]
            
            # 동적으로 가격 업데이트 시도
            for fruit in fruits_physical:
                name = fruit["name"]
                
                # 페이지에서 해당 아이템의 최신 가격 찾기
                try:
                    # 이미지 파일명으로 검색
                    file_key = name.lower().replace(" ", "_").replace("-", "_").replace("+", "")
                    if name == "+1 Fruit Storage":
                        file_key = "add_fruit_storage"
                    elif name == "2x Boss Drops":
                        file_key = "double_boss_drops"
                    elif name == "2x Mastery":
                        file_key = "double_mastery"
                    elif name == "2x Money":
                        file_key = "double_money"
                    elif name == "T-Rex":
                        file_key = "t_rex"
                    
                    # 해당 이미지를 포함하는 요소 찾기
                    selector = f'img[src*="{file_key}"]'
                    img_element = page.query_selector(selector)
                    
                    if img_element:
                        parent = img_element.evaluate_handle('el => el.parentElement')
                        parent_text = parent.evaluate('el => el.textContent')
                        
                        # 가격 추출
                        price_match = re.search(r'([\d.]+)\s*(B|M|K|k)?\s*$', parent_text.strip(), re.MULTILINE)
                        if price_match:
                            new_value = clean_price(price_match.group(0))
                            if new_value > 0:
                                fruit["value"] = new_value
                                print(f"✅ {name}: ${new_value:,}")
                except Exception as e:
                    pass  # 기본값 유지
            
            # 아이템 데이터 생성
            for fruit in fruits_physical:
                item_id = get_item_id(fruit["name"])
                
                item_data = {
                    "id": item_id,
                    "name": fruit["name"],
                    "value": fruit["value"],
                    "rarity": fruit["rarity"],
                    "image": f"/images/bloxfruits/{item_id}.png"
                }
                
                scraped_items.append(item_data)
                print(f"📦 {fruit['name']}: ${fruit['value']:,} [{fruit['rarity']}]")
            
            browser.close()
            
    except ImportError:
        print("⚠️ Playwright가 설치되지 않았습니다.")
        print("💡 설치 명령어: pip install playwright && playwright install chromium")
        return
    except Exception as e:
        print(f"❌ 스크래핑 오류: {e}")
        import traceback
        traceback.print_exc()
        return

    # JSON 저장
    if scraped_items:
        # 기존 파일의 메타데이터 유지
        try:
            with open(JSON_PATH, "r", encoding="utf-8") as f:
                existing_data = json.load(f)
        except:
            existing_data = {}
        
        final_data = {
            "id": "bloxfruits",
            "name": "Blox Fruits",
            "description": existing_data.get("description", "Blox Fruits Value Calculator & Tier List"),
            "meta": existing_data.get("meta", {
                "title": "Blox Fruits Value Calculator - Realtime Prices",
                "description": "Calculate fair trades with real-time values from darkkitsune.com"
            }),
            "theme": existing_data.get("theme", {
                "primaryColor": "blue-600",
                "secondaryColor": "blue-100",
                "bgGradient": "from-blue-50 to-indigo-50"
            }),
            "currencySymbol": "$",
            "lastUpdated": datetime.now().strftime("%Y-%m-%d"),
            "items": scraped_items
        }
        
        with open(JSON_PATH, "w", encoding="utf-8") as f:
            json.dump(final_data, f, indent=2, ensure_ascii=False)
        
        print(f"\n🎉 총 {len(scraped_items)}개 아이템 저장 완료!")
        print(f"📅 업데이트 날짜: {final_data['lastUpdated']}")
    else:
        print("❌ 데이터를 찾지 못했습니다.")

def download_missing_images():
    """누락된 이미지 다운로드"""
    print("\n🖼️ 누락된 이미지 확인 중...")
    
    # 이미지 URL 매핑
    image_urls = {
        "west-dragon.png": "https://www.darkkitsune.com/assets/west_dragon-ebuaJukW.png",
        "east-dragon.png": "https://www.darkkitsune.com/assets/east_dragon-Bea8WTU8.png",
        "dragon-token.png": "https://www.darkkitsune.com/assets/dragon_token-CfvSjoWp.png",
        "tiger.png": "https://www.darkkitsune.com/assets/tiger-CX65_tq2.png",
        "lightning.png": "https://www.darkkitsune.com/assets/rumble-3KHU4uBQ.png",
        "creation.png": "https://www.darkkitsune.com/assets/barrier-Dg_UeAK-.png",
        "eagle.png": "https://www.darkkitsune.com/assets/falcon-B_v751Gp.png",
        "spike.png": "https://www.darkkitsune.com/assets/spike-D7uPPmp2.png",
        "gamepass-fruit-notifier.png": "https://www.darkkitsune.com/assets/fruit_notifier-SLoIfxlw.png",
        "gamepass-dark-blade.png": "https://www.darkkitsune.com/assets/dark_blade-B1MPjN56.png",
        "gamepass-mythical-scroll.png": "https://www.darkkitsune.com/assets/mythical_scroll-CDdAVgMe.png",
        "gamepass-legendary-scroll.png": "https://www.darkkitsune.com/assets/legendary_scroll-7tZLLmVY.png",
        "gamepass-storage.png": "https://www.darkkitsune.com/assets/add_fruit_storage-GExvUOTa.png",
        "gamepass-2xbossdrops.png": "https://www.darkkitsune.com/assets/double_boss_drops-9CQFgJJn.png",
        "gamepass-2xmastery.png": "https://www.darkkitsune.com/assets/double_mastery-B6vWwfMP.png",
        "gamepass-fastboats.png": "https://www.darkkitsune.com/assets/fast_boats-BGa-Yzw6.png",
        "gamepass-2xmoney.png": "https://www.darkkitsune.com/assets/double_money-CoQD2RGB.png",
        "kitsune.png": "https://www.darkkitsune.com/assets/kitsune-D6fskqVj.png",
        "control.png": "https://www.darkkitsune.com/assets/control-CZltMCLU.png",
        "yeti.png": "https://www.darkkitsune.com/assets/yeti-5RvCuluU.png",
        "gas.png": "https://www.darkkitsune.com/assets/gas-CfO3W0gN.png",
        "dough.png": "https://www.darkkitsune.com/assets/dough-B6-knPOI.png",
        "t-rex.png": "https://www.darkkitsune.com/assets/t_rex-CCKs4MV4.png",
        "gravity.png": "https://www.darkkitsune.com/assets/gravity-D7REMvvF.png",
        "spirit.png": "https://www.darkkitsune.com/assets/spirit-g9torcQ2.png",
        "mammoth.png": "https://www.darkkitsune.com/assets/mammoth-Bvgc_7uX.png",
        "venom.png": "https://www.darkkitsune.com/assets/venom-DWLuOXE7.png",
        "shadow.png": "https://www.darkkitsune.com/assets/shadow-CTlQUDyG.png",
        "pain.png": "https://www.darkkitsune.com/assets/pain-CdUWsdPc.png",
        "portal.png": "https://www.darkkitsune.com/assets/portal-uDNmRk7O.png",
        "buddha.png": "https://www.darkkitsune.com/assets/buddha-Do_H9D6t.png",
        "blizzard.png": "https://www.darkkitsune.com/assets/blizzard-CBmGuwm9.png",
        "sound.png": "https://www.darkkitsune.com/assets/sound-eC_Xx5Up.png",
        "phoenix.png": "https://www.darkkitsune.com/assets/phoenix-CX4TtkaK.png",
        "spider.png": "https://www.darkkitsune.com/assets/spider-D46WE60Z.png",
        "love.png": "https://www.darkkitsune.com/assets/love-CbPz30P8.png",
        "quake.png": "https://www.darkkitsune.com/assets/quake-BDBXxv5V.png",
        "magma.png": "https://www.darkkitsune.com/assets/magma-BSq0iR8f.png",
        "light.png": "https://www.darkkitsune.com/assets/light-Cmiyq919.png",
        "ghost.png": "https://www.darkkitsune.com/assets/ghost-Dr5LG2xR.png",
        "rubber.png": "https://www.darkkitsune.com/assets/rubber-DVpnXzkw.png",
        "diamond.png": "https://www.darkkitsune.com/assets/diamond-DXSScGhD.png",
        "ice.png": "https://www.darkkitsune.com/assets/ice-DklRJ87s.png",
        "dark.png": "https://www.darkkitsune.com/assets/dark-C3yP10Rh.png",
        "sand.png": "https://www.darkkitsune.com/assets/sand-CptVzvot.png",
        "flame.png": "https://www.darkkitsune.com/assets/flame-BInqSVY9.png",
        "smoke.png": "https://www.darkkitsune.com/assets/smoke-Beggw9um.png",
        "bomb.png": "https://www.darkkitsune.com/assets/bomb-BENpYTqs.png",
        "spring.png": "https://www.darkkitsune.com/assets/spring-inwTdzn5.png",
        "blade.png": "https://www.darkkitsune.com/assets/blade-C6VShTCC.png",
        "spin.png": "https://www.darkkitsune.com/assets/spin-B4rSojJ6.png",
        "rocket.png": "https://www.darkkitsune.com/assets/rocket-fJLQMbia.png",
    }
    
    # 이미지 폴더 생성
    os.makedirs(IMAGES_PATH, exist_ok=True)
    
    downloaded = 0
    for filename, url in image_urls.items():
        filepath = os.path.join(IMAGES_PATH, filename)
        
        if not os.path.exists(filepath):
            try:
                print(f"📥 다운로드 중: {filename}")
                response = requests.get(url, timeout=10)
                response.raise_for_status()
                
                with open(filepath, 'wb') as f:
                    f.write(response.content)
                
                downloaded += 1
                print(f"  ✅ 완료")
            except Exception as e:
                print(f"  ❌ 실패: {e}")
    
    if downloaded > 0:
        print(f"\n🎉 {downloaded}개 이미지 다운로드 완료!")
    else:
        print("✅ 모든 이미지가 이미 존재합니다.")

if __name__ == "__main__":
    scrape_darkkitsune()
    download_missing_images()

