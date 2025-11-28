import React from 'react';
import { SPECIAL_OFFERS, EXTRA_SERVICES } from '../constants';
import { Amenity } from '../types';
import * as LucideIcons from 'lucide-react';

const AmenityCard: React.FC<{ amenity: Amenity; detailed?: boolean }> = ({ amenity, detailed }) => {
  // Dynamic icon rendering
  const Icon = (LucideIcons as any)[amenity.iconName] || LucideIcons.Star;

  return (
    <div className={`group bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 ${detailed ? 'text-center' : 'text-left'}`}>
      <div className={`inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-brand-light text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors ${detailed ? 'mx-auto' : ''}`}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-serif font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">
        {amenity.title}
      </h3>
      <p className="text-gray-500 leading-relaxed text-sm">
        {amenity.description}
      </p>
    </div>
  );
};

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main USP Section */}
        <div className="text-center mb-16">
          <span className="text-brand-accent font-serif italic text-lg">Signature</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            Exclusive Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            더조은 펜션만의 특별한 3가지 시그니처 서비스를 경험해보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {SPECIAL_OFFERS.map((offer) => (
             <div key={offer.id} className="relative group overflow-hidden h-[400px]">
                <img 
                  src={offer.imageUrl} 
                  alt={offer.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2">{offer.title}</h3>
                  <p className="text-sm text-gray-200 opacity-90">{offer.description}</p>
                </div>
             </div>
          ))}
        </div>

        {/* Extra Services Section */}
        <div className="bg-brand-light rounded-2xl p-8 md:p-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Curated Services</h3>
            <p className="text-gray-600">당신의 휴식을 완벽하게 만들어줄 추가 서비스</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {EXTRA_SERVICES.map((service) => (
              <AmenityCard key={service.id} amenity={service} detailed={true} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Amenities;