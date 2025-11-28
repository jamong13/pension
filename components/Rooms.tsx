import React from 'react';
import { ROOMS } from '../constants';

const Rooms: React.FC = () => {
  return (
    <section id="rooms" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-serif italic text-lg">Accommodation</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            Private Sanctuaries
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            자연 속에 숨겨진 두 개의 보석 같은 공간을 만나보세요.
          </p>
        </div>

        <div className="space-y-24">
          {ROOMS.map((room, index) => (
            <div 
              key={room.id} 
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] relative overflow-hidden shadow-2xl group">
                <img 
                  src={room.imageUrl} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="border-l-4 border-brand-accent pl-6">
                  <h3 className="text-3xl font-serif font-bold text-brand-dark mb-2">{room.name}</h3>
                  <p className="text-brand-primary font-medium">{room.tagline}</p>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-justify">
                  {room.description}
                </p>
                
                <div className="pt-4">
                  <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-3">Room Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-500 text-sm">
                        <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                   <button className="text-brand-dark border-b border-brand-dark pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors text-sm uppercase font-semibold tracking-widest">
                    View Details
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;