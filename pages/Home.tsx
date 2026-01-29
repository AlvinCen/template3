import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Box, ShieldCheck, PenTool } from 'lucide-react';
import { GlassPanel } from '../components/GlassPanel';
import { PRODUCTS, PARTNERS, COMPANY_INFO } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      
      {/* 1. HERO SPOTLIGHT */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-[100px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-300/30 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-stone-200 text-sm font-semibold text-stone-600">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Laquila Animal Cages Workshop
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-stone-900 leading-[1.1]">
              SiPaling <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Kandang.</span>
            </h1>
            
            <p className="text-xl text-stone-500 max-w-lg leading-relaxed">
              Mengerti kebutuhan hewan Anda. Produsen kandang galvanis premium untuk peternak cerdas dan pecinta hewan.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href={COMPANY_INFO.shopeeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2"
              >
                Beli di Shopee <ArrowRight size={20} />
              </a>
              <Link 
                to="/produk"
                className="px-8 py-4 bg-white/50 hover:bg-white text-stone-800 border border-stone-200 backdrop-blur rounded-full font-bold transition-all"
              >
                Lihat Katalog
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="pt-8 border-t border-stone-200/50">
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">Tersedia di Marketplace</p>
              <div className="flex flex-wrap gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                 {/* Generic textual representation for trust strip */}
                 {['Shopee', 'Tokopedia', 'Lazada'].map(p => (
                   <span key={p} className="text-lg font-bold font-display text-stone-800">{p}</span>
                 ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* 3D-ish composition */}
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-200 to-transparent rounded-[3rem] transform rotate-3"></div>
            <GlassPanel className="absolute inset-4 z-10 overflow-hidden flex items-center justify-center p-8 !bg-white/40">
               <img 
                 src="https://picsum.photos/id/200/800/1000" 
                 alt="Kandang Ayam Premium" 
                 className="w-full h-full object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-xl z-20">
                 <p className="text-sm text-stone-500">Best Seller</p>
                 <p className="font-bold text-lg">Baterai 6 Pintu</p>
               </div>
            </GlassPanel>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED CAROUSEL */}
      <section className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-stone-900 mb-2">Produk Unggulan</h2>
            <p className="text-stone-500">Pilihan favorit para peternak Indonesia.</p>
          </div>
          <Link to="/produk" className="text-orange-600 font-semibold hover:underline">Lihat Semua</Link>
        </div>

        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {PRODUCTS.slice(0, 4).map((product) => (
            <GlassPanel key={product.id} className="min-w-[300px] md:min-w-[350px] snap-center flex-shrink-0 group relative overflow-hidden">
               <div className="h-64 overflow-hidden rounded-t-2xl">
                 <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-duration-500 transition-transform" />
               </div>
               <div className="p-6">
                 <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-md mb-2 inline-block uppercase">{product.category}</span>
                 <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">{product.name}</h3>
                 <p className="text-stone-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                 <div className="flex justify-between items-center">
                   <span className="font-semibold text-stone-900 text-sm">{product.priceRange}</span>
                   <button className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
                     <ArrowRight size={14} />
                   </button>
                 </div>
               </div>
            </GlassPanel>
          ))}
        </div>
      </section>

      {/* 3. STACKED CATEGORIES (Glass Showcase) */}
      <section className="container mx-auto px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-900 rounded-3xl p-10 text-white flex flex-col justify-center min-h-[300px]">
              <h3 className="text-3xl font-display font-bold mb-4">Kandang Custom?</h3>
              <p className="text-stone-400 mb-8 max-w-sm">Kami siap mewujudkan spesifikasi kandang impian untuk farm Anda. Konsultasikan gratis.</p>
              <Link to="/kontak" className="self-start px-6 py-3 bg-white text-stone-900 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-colors">
                Hubungi Admin
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Puyuh', 'Burung', 'Kelinci', 'Sugar Glider'].map((cat, idx) => (
                <GlassPanel key={cat} hoverEffect className="flex flex-col items-center justify-center p-6 text-center h-full">
                   <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-3">
                     <Star size={20} />
                   </div>
                   <h4 className="font-bold text-stone-800">{cat}</h4>
                </GlassPanel>
              ))}
            </div>
         </div>
      </section>

      {/* 4. COMPARISON TILES (Why Us) */}
      <section className="container mx-auto px-6 py-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">Mengapa Laquila?</h2>
          <p className="text-stone-500">Standar kualitas yang tidak kami kompromikan.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck className="w-8 h-8"/>, title: "Material Galvanis", desc: "Anti karat, tahan lama, investasi jangka panjang untuk farm Anda." },
            { icon: <Box className="w-8 h-8"/>, title: "Desain Fungsional", desc: "Dirancang berdasarkan feedback nyata peternak untuk kemudahan operasional." },
            { icon: <PenTool className="w-8 h-8"/>, title: "Mudah Dirakit", desc: "Sistem knock-down dengan tutorial lengkap. Hemat biaya pengiriman." }
          ].map((item, i) => (
            <GlassPanel key={i} className="p-8 border-t-4 border-t-orange-500">
              <div className="text-orange-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      {/* 5. PARTNER WALL */}
      <section className="bg-white py-20 border-y border-stone-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-10 text-stone-400 uppercase tracking-widest">Official Partners</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {PARTNERS.map((partner) => (
              <a 
                key={partner.name}
                href={partner.url || '#'}
                className={`
                  px-8 py-4 rounded-full font-bold text-lg transition-all border
                  ${partner.isPrimary 
                    ? 'bg-orange-600 text-white border-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-500/30 scale-110' 
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-400 hover:bg-white'}
                `}
              >
                {partner.name}
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-stone-400">Tersedia juga di eCatalogue, LKPP & SIPLah untuk pengadaan pemerintah.</p>
        </div>
      </section>

      {/* 6. MASONRY GALLERY (Simulated) */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-bold mb-8">Galeri Aktivitas</h2>
        <div className="columns-2 md:columns-3 gap-6 space-y-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="break-inside-avoid relative group rounded-2xl overflow-hidden">
              <img 
                src={`https://picsum.photos/400/${300 + (i % 3) * 100}`} 
                alt="Activity" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium">Produksi Batch #{i}2024</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="container mx-auto px-6 pb-20">
        <GlassPanel className="p-12 text-center bg-gradient-to-br from-orange-100/50 to-white">
          <h2 className="text-4xl font-display font-bold mb-6 text-stone-900">Mulai Upgrade Kandang Anda</h2>
          <p className="text-stone-600 mb-8 max-w-xl mx-auto">Dapatkan penawaran terbaik dan konsultasi gratis seputar kebutuhan kandang hewan ternak maupun hias.</p>
          <a 
            href={COMPANY_INFO.shopeeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-4 bg-stone-900 text-white rounded-full font-bold hover:bg-orange-600 transition-colors"
          >
            Beli Sekarang
          </a>
        </GlassPanel>
      </section>

    </div>
  );
};