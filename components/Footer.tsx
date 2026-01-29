import React from 'react';
import { COMPANY_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold font-display mb-4">LAQUILA</h2>
            <p className="text-stone-500 max-w-sm mb-6">
              {COMPANY_INFO.name} — {COMPANY_INFO.tagline}.
              Menciptakan hunian terbaik untuk hewan kesayangan dan ternak Anda dengan kualitas galvanis teruji.
            </p>
            <p className="text-stone-400 text-sm">© {new Date().getFullYear()} CV LAQUILA INDONESIA.</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-stone-900">Navigasi</h3>
            <ul className="space-y-2 text-stone-500 text-sm">
              <li><a href="/" className="hover:text-orange-600">Home</a></li>
              <li><a href="/#/produk" className="hover:text-orange-600">Katalog Produk</a></li>
              <li><a href="/#/cara-pesan" className="hover:text-orange-600">Cara Pesan</a></li>
              <li><a href="/#/tentang" className="hover:text-orange-600">Tentang Kami</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-stone-900">Hubungi Kami</h3>
            <ul className="space-y-2 text-stone-500 text-sm">
              <li>{COMPANY_INFO.address}</li>
              <li>WhatsApp: +62 812-XXXX-XXXX</li>
              <li>Email: info@laquila.id</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};