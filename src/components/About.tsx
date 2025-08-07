import React from 'react';
import { Calendar, Award, Users } from 'lucide-react';
import distilleryExterior from '../assets/images/about/distillery-exterior.jpeg';
import masterDistiller from '../assets/images/about/master-distiller.jpeg';

const About = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-yellow-400">
            About Devraj Distillery
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Calendar className="text-yellow-400 mr-3" size={24} />
                <span className="text-yellow-400 font-semibold">Founded 2014</span>
              </div>
              <h3 className="font-playfair text-2xl mb-4">A Legacy Born in Bijnor</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Nestled in the heart of Uttar Pradesh, Devraj Distillery was established in 2014 with a vision to create exceptional spirits that honor traditional craftsmanship while embracing modern distilling innovations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <Award className="text-yellow-400 mx-auto mb-2" size={32} />
                <h4 className="font-semibold mb-1">Premium Quality</h4>
                <p className="text-gray-400 text-sm">Reward of Patience</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <Users className="text-yellow-400 mx-auto mb-2" size={32} />
                <h4 className="font-semibold mb-1">Expert Team</h4>
                <p className="text-gray-400 text-sm">Master distillers</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Our commitment to excellence is reflected in every bottle, where time-honored techniques meet cutting-edge technology to produce spirits of unparalleled quality and character.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg h-64 overflow-hidden">
                <img 
                  src={distilleryExterior} 
                  alt="Devraj Distillery Exterior" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg h-64 overflow-hidden mt-8">
                <img 
                  src={masterDistiller} 
                  alt="Master Distiller Process" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-yellow-400 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;