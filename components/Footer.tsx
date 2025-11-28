import React from 'react';
import { BRAND_NAME } from '../constants';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif font-bold text-brand-accent">{BRAND_NAME}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              산과 바다가 맞닿은 곳에서 경험하는<br/>
              가장 완벽한 휴식.<br/>
              당신만을 위한 프라이빗 럭셔리 스테이.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center">
                <MapPin size={16} className="mr-3 text-brand-primary" />
                강원도 어느 깊은 산속, 바다가 보이는 곳 123-45
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-brand-primary" />
                010-1234-5678 (예약문의 09:00 - 20:00)
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-brand-primary" />
                reservation@thejoeun.com
              </li>
            </ul>
          </div>

          {/* Newsletter / Map Placeholder */}
          <div className="space-y-4">
             <h4 className="text-lg font-bold uppercase tracking-widest">Location</h4>
             <div className="w-full h-32 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                Map Interface Loading...
             </div>
             <button className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-2 px-4 rounded transition-colors text-sm uppercase tracking-wider">
               Get Directions
             </button>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME} Pension. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;