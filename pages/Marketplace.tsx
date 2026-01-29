import React from 'react';
import { PARTNERS } from '../constants';
import { GlassPanel } from '../components/GlassPanel';
import { ExternalLink } from 'lucide-react';

export const Marketplace: React.FC = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-display font-bold mb-4">Official Partners</h1>
        <p className="text-stone-500 max-w-xl mx-auto">
          Temukan produk Laquila di platform kesayangan Anda. Kami juga melayani pengadaan pemerintah via LKPP/SIPLah.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PARTNERS.map((partner, idx) => (
          <GlassPanel key={idx} hoverEffect className="p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  partner.type === 'Government' ? 'bg-blue-50 text-blue-600' : 
                  partner.type === 'B2B' ? 'bg-purple-50 text-purple-600' : 'bg-orange-50 text-orange-600'
                }`}>
                  {partner.type}
                </span>
                {partner.isPrimary && <span className="text-xs text-stone-400 font-medium">Primary</span>}
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">{partner.name}</h3>
              <p className="text-sm text-stone-500 mb-6">
                {partner.type === 'Government' 
                  ? 'Saluran resmi pengadaan barang/jasa pemerintah.' 
                  : partner.type === 'B2B' 
                  ? 'Platform pengadaan korporat dan industri.' 
                  : 'Belanja aman dengan garansi marketplace dan gratis ongkir.'}
              </p>
            </div>

            {partner.url ? (
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 border border-stone-200 rounded-xl flex items-center justify-center gap-2 text-stone-700 font-bold hover:bg-stone-900 hover:text-white transition-all"
              >
                Kunjungi Toko <ExternalLink size={16} />
              </a>
            ) : (
              <button disabled className="w-full py-3 border border-stone-100 bg-stone-50 text-stone-400 rounded-xl font-medium cursor-not-allowed">
                Link Menyusul
              </button>
            )}
          </GlassPanel>
        ))}
      </div>
    </div>
  );
};