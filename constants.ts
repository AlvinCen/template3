import { Product, TimelineEvent, Partner, FighterBrand, FaqItem } from './types';

export const COMPANY_INFO = {
  name: "CV LAQUILA INDONESIA",
  brandName: "LAQUILA",
  tagline: "SiPaling Kandang — Mengerti Kebutuhan Hewan Anda",
  ceo: "Imam Alfarisyi Indradi, S.ST.",
  vision: "Tumbuh bersama peternak & pecinta hewan; adaptif & inovatif dari feedback; fokus kualitas & fungsionalitas.",
  address: "Workshop Laquila, Indonesia", // Generic based on prompt
  whatsapp: "6281234567890", // Placeholder
  shopeeUrl: "https://shopee.co.id/laquilastore1"
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kandang Baterai Ayam Petelur 4 Pintu',
    category: 'Ayam',
    priceRange: 'Rp 150.000 - Rp 250.000',
    description: 'Kandang galvanis anti-karat standar peternakan modern. Kapasitas optimal untuk produktivitas telur.',
    image: 'https://picsum.photos/id/200/800/600',
    link: 'https://shopee.co.id/laquilastore1',
    features: ['Galvanis Hot Dip', '4 Pintu', 'Sekat Kokoh']
  },
  {
    id: '2',
    name: 'Kandang Baterai Ayam Petelur 6 Pintu',
    category: 'Ayam',
    priceRange: 'Rp 200.000 - Rp 350.000',
    description: 'Efisiensi ruang maksimal dengan desain 6 pintu. Cocok untuk kandang closed house maupun open.',
    image: 'https://picsum.photos/id/201/800/600',
    link: 'https://shopee.co.id/laquilastore1',
    features: ['Efisiensi Tinggi', 'Mudah Rakit', 'Awet 10+ Tahun']
  },
  {
    id: '3',
    name: 'Fullset Kandang Layer Modern',
    category: 'Ayam',
    priceRange: 'Rp 1.500.000 - Rp 5.000.000',
    description: 'Set lengkap termasuk nipple drinker, talang pakan, dan rangka support. Tinggal pasang.',
    image: 'https://picsum.photos/id/202/800/600',
    link: 'https://shopee.co.id/laquilastore1',
    features: ['Fullset System', 'Nipple Drinker', 'Talang PVC']
  },
  {
    id: '4',
    name: 'Kandang Burung Aviary Premium',
    category: 'Burung',
    priceRange: 'Rp 800.000 - Rp 2.500.000',
    description: 'Desain estetis untuk burung hias. Luas dan nyaman untuk pergerakan burung.',
    image: 'https://picsum.photos/id/203/800/600',
    link: 'https://shopee.co.id/laquilastore1',
    features: ['Kawat Ram Hijau', 'Atap Galvalum', 'Luas']
  },
  {
    id: '5',
    name: 'Kandang Puyuh Petelur Bertingkat',
    category: 'Puyuh',
    priceRange: 'Rp 300.000 - Rp 600.000',
    description: 'Optimalkan panen puyuh dengan sistem bertingkat yang higienis dan mudah dibersihkan.',
    image: 'https://picsum.photos/id/204/800/600',
    link: 'https://shopee.co.id/laquilastore1',
    features: ['Tray Kotoran', 'Tempat Telur', 'Hemat Ruang']
  },
  {
    id: '6',
    name: 'Kandang Sugar Glider Fun House',
    category: 'Sugar Glider',
    priceRange: 'Rp 150.000 - Rp 300.000',
    description: 'Tinggi dan luas, cocok untuk hewan yang suka memanjat. Coating aman untuk hewan.',
    image: 'https://picsum.photos/id/206/800/600',
    link: 'https://shopee.co.id/laquilastore1',
    features: ['Coating Aman', 'Tinggi', 'Aksesoris']
  }
];

export const TIMELINE: TimelineEvent[] = [
  { year: '2010', title: 'Awal Mula', description: 'Memulai usaha bengkel las konvensional skala rumahan.' },
  { year: '2014', title: 'Ekspansi', description: 'Mulai fokus memproduksi kandang hewan ternak lokal.' },
  { year: '2020', title: 'Go Digital', description: 'Merambah pasar online marketplace di tengah pandemi.' },
  { year: '2021', title: 'Rebranding LAQUILA', description: 'Lahirnya brand LAQUILA dengan visi modern dan profesional.' },
];

export const PARTNERS: Partner[] = [
  { name: 'Shopee', type: 'Marketplace', url: 'https://shopee.co.id/laquilastore1', isPrimary: true },
  { name: 'Tokopedia', type: 'Marketplace', url: null },
  { name: 'Blibli', type: 'Marketplace', url: null },
  { name: 'Lazada', type: 'Marketplace', url: null },
  { name: 'eCatalogue', type: 'B2B', url: null },
  { name: 'LKPP', type: 'Government', url: null },
  { name: 'SIPLah', type: 'Government', url: null },
];

export const FIGHTER_BRANDS: FighterBrand[] = [
  { name: 'LAQUILA STORE', description: 'Fokus pada kebutuhan industri dan grosir skala besar.', target: 'B2B / Farm Besar' },
  { name: 'GALVA PROJECT', description: 'Spesifikasi umum yang sudah teruji di lapangan.', target: 'Peternak Menengah' },
  { name: 'KAWANI ID', description: 'Lini ekonomis dengan harga paling kompetitif.', target: 'Pemula / Hobi' },
];

export const FAQS: FaqItem[] = [
  { question: "Apakah bisa custom ukuran kandang?", answer: "Tentu, kami menyediakan layanan custom untuk kebutuhan spesifik farm Anda. Silakan hubungi admin." },
  { question: "Berapa lama proses pengiriman?", answer: "Untuk barang ready stock, pengiriman H+1. Untuk pre-order, estimasi 3-7 hari kerja tergantung antrian." },
  { question: "Apakah kandang anti karat?", answer: "Produk kami menggunakan kawat galvanis (hot dip/electro) yang memiliki ketahanan karat jauh lebih baik dari besi biasa." },
  { question: "Bagaimana cara merakitnya?", answer: "Setiap pembelian disertai video tutorial perakitan. Desain kami knock-down sehingga mudah dirakit." },
];