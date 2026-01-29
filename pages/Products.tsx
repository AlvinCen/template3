import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { GlassPanel } from '../components/GlassPanel';
import { Filter, ShoppingBag } from 'lucide-react';

export const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = activeFilter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-display font-bold mb-4">Katalog Produk</h1>
        <p className="text-stone-500 max-w-2xl">Koleksi lengkap kandang berkualitas dari Laquila. Didesain untuk kenyamanan hewan dan kemudahan peternak.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeFilter === cat 
                ? 'bg-stone-900 text-white shadow-lg' 
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <GlassPanel key={product.id} hoverEffect className="group flex flex-col h-full">
            <div className="relative h-64 overflow-hidden rounded-t-2xl bg-stone-100">
               <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-sm">
                 {product.category}
               </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-stone-900 mb-2">{product.name}</h3>
              <p className="text-stone-500 text-sm mb-4 line-clamp-3 flex-grow">{product.description}</p>
              
              <ul className="mb-6 space-y-1">
                {product.features.slice(0, 2).map((feature, idx) => (
                  <li key={idx} className="text-xs text-stone-400 flex items-center gap-2">
                    <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                 <div className="text-sm font-bold text-stone-900">{product.priceRange}</div>
                 <a 
                   href={product.link}
                   target="_blank" 
                   rel="noreferrer"
                   className="p-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-600 hover:text-white transition-colors"
                 >
                   <ShoppingBag size={18} />
                 </a>
              </div>
            </div>
          </GlassPanel>
        ))}
      </div>
    </div>
  );
};