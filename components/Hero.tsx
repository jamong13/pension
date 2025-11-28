import React from 'react';
import { SLOGANS, CTA_TEXT } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="The Joeun Pension View" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="font-serif italic text-xl md:text-2xl mb-4 text-brand-accent animate-fade-in-up">
          The Joeun Private Villas
        </h2>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
          {SLOGANS[0].main}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light">
          {SLOGANS[0].sub}
        </p>

        <button 
          onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-brand-accent hover:bg-white hover:text-brand-dark text-white font-semibold py-4 px-8 rounded-none transition-all duration-300 transform hover:scale-105 shadow-lg tracking-widest uppercase text-sm"
        >
          {CTA_TEXT}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/70" />
      </div>
    </section>
  );
};

export default Hero;