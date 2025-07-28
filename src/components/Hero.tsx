import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 0.4)), url('https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Logo Placeholder */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4">
            <span className="text-black font-bold text-2xl">DD</span>
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-yellow-400">
            Devraj Distillery
          </h1>
        </div>
        
        {/* Tagline */}
        <h2 className="font-playfair text-2xl md:text-4xl mb-6 leading-tight">
          Introducing <span className="text-yellow-400">DEVRAJ</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
          Crafted with Legacy, Blended for Royalty
        </p>
        
        {/* CTA Button */}
        <button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Discover the Blend
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;