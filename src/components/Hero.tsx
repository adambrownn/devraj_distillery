import React from 'react';
import { ChevronDown } from 'lucide-react';
import logoMain from '../assets/logos/logo-main.png';
import heroBackground from '../assets/images/hero-background.jpeg';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('${heroBackground}')`
        }}
      />
      
      {/* Additional Subtle Overlay for Extra Control */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-16">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-36 h-36 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden mb-4 shadow-2xl">
            <img
              src={logoMain} 
              alt="Devraj Distillery Logo" 
              className="w-full h-full object-cover filter drop-shadow-lg"
            />
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-yellow-400 mb-4 drop-shadow-lg">
            Devraj Distillery
          </h1>
        </div>
        
        {/* Tagline */}
        <h2 className="font-playfair text-2xl md:text-4xl mb-6 leading-tight drop-shadow-md">
          Introducing <span className="text-yellow-400">DEVRAJ</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">
          Crafted with Legacy, Blended for Royalty
        </p>
        
        {/* CTA Button */}
        <button 
          onClick={scrollToNext}
          className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg mb-16"
        >
          Discover the Blend
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer drop-shadow-lg"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;