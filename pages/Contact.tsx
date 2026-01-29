import React from 'react';
import { GlassPanel } from '../components/GlassPanel';
import { COMPANY_INFO } from '../constants';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6 flex items-center justify-center min-h-[80vh]">
      <GlassPanel className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl">
        
        {/* Left: Info */}
        <div className="p-10 bg-stone-900 text-white flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold mb-2">Hubungi Kami</h1>
            <p className="text-stone-400 mb-8">Siap membantu kebutuhan kandang hewan Anda.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-orange-500 mt-1" />
                <div>
                  <h4 className="font-bold">WhatsApp</h4>
                  <p className="text-stone-400 text-sm">0812-XXXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-orange-500 mt-1" />
                <div>
                  <h4 className="font-bold">Workshop</h4>
                  <p className="text-stone-400 text-sm">{COMPANY_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-orange-500 mt-1" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-stone-400 text-sm">info@laquila.id</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer"><Instagram size={20} /></div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"><Facebook size={20} /></div>
          </div>
        </div>

        {/* Right: Map Placeholder / Visual */}
        <div className="relative bg-stone-100 min-h-[400px]">
          <img 
             src="https://picsum.photos/id/1062/800/800" 
             alt="Map Location" 
             className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 bg-white/90 backdrop-blur rounded-full text-stone-900 font-bold shadow-lg pointer-events-auto hover:scale-105 transition-transform"
            >
              Lihat di Google Maps
            </a>
          </div>
        </div>

      </GlassPanel>
    </div>
  );
};