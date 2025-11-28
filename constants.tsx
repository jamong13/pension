import { Room, Amenity, Slogan } from './types';
import { 
  Waves, 
  ChefHat, 
  BedDouble, 
  Coffee, 
  Sparkles, 
  Film, 
  UtensilsCrossed 
} from 'lucide-react';

export const BRAND_NAME = "The Joeun";

export const SLOGANS: Slogan[] = [
  {
    main: "산과 바다가 맞닿은 곳, 당신만을 위한 프라이빗 럭셔리",
    sub: "숲속의 고요함과 끝없는 수평선이 만나는 순간을 경험하세요."
  },
  {
    main: "오롯이 당신에게 집중하는 시간, 더조은",
    sub: "일상의 소음을 끄고, 자연의 소리에 귀 기울이는 완벽한 휴식."
  },
  {
    main: "숲의 숨결과 바다의 파노라마를 동시에",
    sub: "모든 객실에서 펼쳐지는 압도적인 오션뷰와 프라이빗 인피니티 풀."
  }
];

export const CTA_TEXT = "프라이빗 스테이 예약하기";

export const ROOMS: Room[] = [
  {
    id: 'suite-sunrise',
    name: "Sunrise Forest Suite",
    tagline: "아침 햇살과 파도 소리가 깨우는 아늑한 공간",
    description: "새벽녘 숲 사이로 떠오르는 태양을 가장 먼저 맞이할 수 있는 스위트룸입니다. 화이트와 우드 톤의 인테리어는 자연 그대로의 편안함을 선사하며, 침대에 누워 통창 너머로 펼쳐지는 파노라마 오션뷰를 감상할 수 있습니다. 최고급 구스다운 침구와 어메니티는 당신의 휴식을 더욱 깊고 달콤하게 만들어줄 것입니다. 오직 두 분만을 위한 프라이빗 테라스에서 잊지 못할 아침을 맞이하세요.",
    features: ["킹사이즈 구스 침구", "오션뷰 테라스", "독립형 욕조", "하만카돈 스피커"],
    imageUrl: "https://picsum.photos/800/600?random=1"
  },
  {
    id: 'villa-moonlight',
    name: "Moonlight Cliff Villa",
    tagline: "별빛 아래, 바다 위를 부유하는 듯한 신비로운 경험",
    description: "절벽 끝에 위치하여 바다 위에 떠 있는 듯한 착각을 불러일으키는 프라이빗 풀빌라입니다. 해질 무렵 붉게 물드는 노을과 밤하늘을 수놓는 별빛을 인피니티 풀에서 온전히 소유할 수 있습니다. 셰프의 다이닝을 객실에서 편안하게 즐길 수 있는 다이닝 공간이 별도로 마련되어 있으며, 외부와 완벽히 차단된 설계로 그 누구의 방해 없이 둘만의 로맨틱한 시간을 완성합니다.",
    features: ["개별 인피니티 풀(온수)", "프라이빗 다이닝 룸", "빔 프로젝터", "와인 셀러"],
    imageUrl: "https://picsum.photos/800/600?random=2"
  }
];

export const SPECIAL_OFFERS: Amenity[] = [
  {
    id: 'infinity-pool',
    title: "Private Infinity Pool",
    description: "숲속에서 바다로 이어지는 듯한 환상적인 뷰를 자랑하는 개별 온수 인피니티 풀입니다. 사계절 내내 따뜻하게, 자연과 하나 되는 유영을 즐겨보세요.",
    iconName: "Waves",
    imageUrl: "https://picsum.photos/400/300?random=3"
  },
  {
    id: 'welcome-dinner',
    title: "Chef's Welcome Dinner",
    description: "미슐랭 출신 셰프가 제철 식재료로 준비한 코스 요리를 룸 서비스로 제공합니다. 캔들라이트와 함께 로맨틱한 저녁을 완성하세요.",
    iconName: "ChefHat",
    imageUrl: "https://picsum.photos/400/300?random=4"
  },
  {
    id: 'premium-bedding',
    title: "Premium Bedding",
    description: "최고급 호텔 수준의 헝가리 구스다운 이불과 순면 100% 60수 린넨으로 구름 위에 누운 듯한 최상의 수면 경험을 제공합니다.",
    iconName: "BedDouble",
    imageUrl: "https://picsum.photos/400/300?random=5"
  }
];

// Additional proposed services
export const EXTRA_SERVICES: Amenity[] = [
  {
    id: 'floating-breakfast',
    title: "Floating Breakfast",
    description: "인피니티 풀 위에서 즐기는 이색적인 아침 식사. 갓 구운 빵과 신선한 과일, 스파클링 와인으로 하루를 특별하게 시작하세요.",
    iconName: "Coffee"
  },
  {
    id: 'aroma-spa',
    title: "Private Aroma Spa",
    description: "천연 에센셜 오일과 히말라야 핑크 솔트를 이용한 프라이빗 입욕 서비스. 숲의 향기를 맡으며 여행의 피로를 씻어냅니다.",
    iconName: "Sparkles"
  },
  {
    id: 'starlight-cinema',
    title: "Starlight Cinema",
    description: "테라스에 준비되는 야외 시네마 세트. 파도 소리를 배경음악 삼아 쏟아지는 별빛 아래서 로맨틱한 영화 한 편을 감상하세요.",
    iconName: "Film"
  }
];
