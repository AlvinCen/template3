import React from 'react';
import { GlassPanel } from '../components/GlassPanel';
import { FAQS, COMPANY_INFO } from '../constants';
import { ShoppingCart, MessageCircle, Truck, PackageCheck, Star } from 'lucide-react';

export const HowToOrder: React.FC = () => {
  const steps = [
    { icon: <MessageCircle />, title: "1. Konsultasi / Pilih", desc: "Pilih produk di katalog atau hubungi admin untuk custom order." },
    { icon: <ShoppingCart />, title: "2. Checkout", desc: "Lakukan pembelian aman via Shopee, Tokopedia, atau Marketplace partner." },
    { icon: <PackageCheck />, title: "3. Produksi & Packing", desc: "Barang disiapkan (QC passed) dan dipacking aman (kayu/bubble)." },
    { icon: <Truck />, title: "4. Pengiriman", desc: "Dikirim via kargo rekanan untuk ongkir termurah ke seluruh Indonesia." },
    { icon: <Star />, title: "5. Terima & Review", desc: "Barang sampai, rakit dengan panduan video, dan beri ulasan." },
  ];

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl font-display font-bold mb-4">Cara Pemesanan</h1>
        <p className="text-stone-500">Proses mudah, aman, dan terpercaya.</p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-24 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-stone-200 -z-10"></div>
        
        {steps.map((step, i) => (
          <GlassPanel key={i} className="p-6 text-center h-full flex flex-col items-center bg-white">
            <div className="w-16 h-16 bg-white border-4 border-stone-50 rounded-full flex items-center justify-center text-orange-600 mb-4 shadow-sm z-10">
              {step.icon}
            </div>
            <h3 className="font-bold text-stone-900 mb-2">{step.title}</h3>
            <p className="text-xs text-stone-500">{step.desc}</p>
          </GlassPanel>
        ))}
      </div>

      <div className="flex justify-center mb-24">
         <a href={COMPANY_INFO.shopeeUrl} target="_blank" rel="noreferrer" className="px-8 py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 hover:bg-orange-700 transition-colors">
           Buka Official Store Shopee
         </a>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center font-display">Sering Ditanyakan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAQS.map((faq, idx) => (
            <GlassPanel key={idx} className="p-6 hover:border-orange-200 transition-colors">
              <h4 className="font-bold text-stone-900 mb-2 flex gap-3">
                <span className="text-orange-500">Q.</span> {faq.question}
              </h4>
              <p className="text-stone-500 text-sm pl-7 leading-relaxed">{faq.answer}</p>
            </GlassPanel>
          ))}
        </div>
      </div>

    </div>
  );
};