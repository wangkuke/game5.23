export interface FeaturedGame {
  id: string;
  coverImage: string;
  title: string;
  description: string;
  category: string;
}

export interface PopularGame {
  id: string;
  coverImage: string;
  title: string;
  description: string;
  rating: number;
}

export interface GameCategory {
  id: string;
  icon: string;
  name: string;
}

export const featuredGames: FeaturedGame[] = [
  {
    id: '1',
    coverImage: 'https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=action%20game%20cover&sign=839401fd0ec036a78886493462263016',
    title: '冒险世界',
    description: '探索神秘的地下城和古代遗迹',
    category: '冒险'
  },
  {
    id: '2',
    coverImage: 'https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=strategy%20game%20cover&sign=610ced9dbf4e5e963c3025b5a170e2ff',
    title: '帝国争霸',
    description: '建立你的帝国并征服世界',
    category: '策略'
  },
  {
    id: '3',
    coverImage: 'https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=sports%20game%20cover&sign=892cce9c839f85662b541a993619482a',
    title: '极限运动',
    description: '体验各种刺激的极限运动',
    category: '体育'
  },
  {
    id: '4',
    coverImage: 'https://space.coze.cn/api/coze_space/gen_image?image_size=portrait_4_3&prompt=puzzle%20game%20cover&sign=ff3c55363dd214c350c0719527f2e7b3',
    title: '脑力挑战',
    description: '解开各种复杂的谜题',
    category: '解谜'
  }
];

export const popularGames: PopularGame[] = [
  {
    id: '5',
    coverImage: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=rpg%20game%20cover&sign=31e4c64735636eae62d7cfbd30875496',
    title: '魔法传奇',
    description: '扮演魔法师拯救世界',
    rating: 5
  },
  {
    id: '6',
    coverImage: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=racing%20game%20cover&sign=4867f74f6d83e93cc9c1c1d7fada059b',
    title: '极速狂飙',
    description: '体验最刺激的赛车比赛',
    rating: 4
  },
  {
    id: '7',
    coverImage: 'https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=shooter%20game%20cover&sign=bd8d5afbb1eb2a23e1b029c5ce139de1',
    title: '星际战士',
    description: '在外太空与外星人战斗',
    rating: 4
  }
];

export const gameCategories: GameCategory[] = [
  { id: '1', icon: 'fa-solid fa-swords', name: '动作' },
  { id: '2', icon: 'fa-solid fa-chess', name: '策略' },
  { id: '3', icon: 'fa-solid fa-futbol', name: '体育' },
  { id: '4', icon: 'fa-solid fa-puzzle-piece', name: '解谜' },
  { id: '5', icon: 'fa-solid fa-car', name: '竞速' },
  { id: '6', icon: 'fa-solid fa-hat-wizard', name: '角色扮演' }
];
