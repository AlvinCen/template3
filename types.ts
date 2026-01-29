export interface Product {
  id: string;
  name: string;
  category: 'Ayam' | 'Puyuh' | 'Burung' | 'Kelinci' | 'Sugar Glider' | 'Aksesoris';
  priceRange: string;
  description: string;
  image: string;
  link: string;
  features: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Partner {
  name: string;
  type: 'Marketplace' | 'Government' | 'B2B';
  url: string | null;
  isPrimary?: boolean;
}

export interface FighterBrand {
  name: string;
  description: string;
  target: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}