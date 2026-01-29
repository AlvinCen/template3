import React from 'react';
import { TIMELINE, FIGHTER_BRANDS, COMPANY_INFO } from '../constants';
import { GlassPanel } from '../components/GlassPanel';
import { Briefcase, Users, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-4xl font-display font-bold mb-6">Tentang Kami</h1>
        <p className="text-xl text-stone-500 leading-relaxed">
          "{COMPANY_INFO.vision}"
        </p>
      </div>

      {/* Split Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Left: Timeline */}
        <div className="lg:col-span-5 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-stone-200"></div>
          <div className="space-y-12">
            {TIMELINE.map((event, idx) => (
              <div key={idx} className="relative pl-12 group">
                <div className="absolute left-0 top-1.5 w-8 h-8 bg-white border border-stone-200 rounded-full flex items-center justify-center shadow-sm group-hover:border-orange-500 transition-colors">
                  <div className="w-2 h-2 bg-stone-300 rounded-full group-hover:bg-orange-500"></div>
                </div>
                <span className="block text-5xl font-bold text-stone-100 absolute -top-4 right-0 -z-10 select-none group-hover:text-orange-50 transition-colors">{event.year}</span>
                <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-bold mb-2">{event.year}</span>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{event.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Profile & Brands */}
        <div className="lg:col-span-7 space-y-12">
          
          <GlassPanel className="p-8 bg-orange-50/50 border-orange-100">
             <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-700">
                 <Users size={24} />
               </div>
               <div>
                 <p className="text-sm text-stone-500">CEO & Founder</p>
                 <h3 className="text-lg font-bold">{COMPANY_INFO.ceo}</h3>
               </div>
             </div>
             <p className="text-stone-600">
               Berkomitmen menghadirkan solusi perkandangan yang tidak hanya kokoh, tapi juga memperhatikan kesejahteraan hewan (animal welfare) dan profitabilitas peternak.
             </p>
          </GlassPanel>

          <div>
            <h3 className="text-2xl font-bold mb-6 font-display">Our Fighter Brands</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FIGHTER_BRANDS.map((brand, i) => (
                <GlassPanel key={i} hoverEffect className={`p-6 ${i === 0 ? 'md:col-span-2' : ''}`}>
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg text-stone-800">{brand.name}</h4>
                    <span className="text-xs font-bold bg-stone-100 px-2 py-1 rounded text-stone-500">{brand.target}</span>
                  </div>
                  <p className="text-sm text-stone-500">{brand.description}</p>
                </GlassPanel>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};