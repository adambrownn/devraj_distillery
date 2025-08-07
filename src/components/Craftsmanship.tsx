import React from 'react';
import { Droplets, Wheat, Clock } from 'lucide-react';
import distillationProcess from '../assets/images/craftsmanship/distillation-process.jpeg';
import waterSource from '../assets/images/craftsmanship/water-source.jpeg';
import grainSelection from '../assets/images/craftsmanship/grain-selection.jpeg';
import barrelAging from '../assets/images/craftsmanship/barrel-aging.jpeg';
import masterBlending from '../assets/images/craftsmanship/master-blending.jpeg';

const Craftsmanship = () => {
  const steps = [
    {
      icon: <Droplets className="text-blue-400" size={32} />,
      title: "Pure Water Selection",
      description: "We source the purest water from natural springs, ensuring the perfect foundation for our whisky.",
      image: waterSource
    },
    {
      icon: <Wheat className="text-yellow-400" size={32} />,
      title: "Premium Grain Selection",
      description: "Only the finest grains are chosen, each batch carefully inspected for quality and consistency.",
      image: grainSelection
    },
    {
      icon: <Clock className="text-orange-400" size={32} />,
      title: "Oak Barrel Aging",
      description: "Our spirits mature in premium oak barrels, developing complex flavors and rich character over time.",
      image: barrelAging
    },
    {
      icon: <Clock className="text-green-400" size={32} />,
      title: "Master Blending",
      description: "Expert craftsmen blend aged spirits with precision, creating the perfect harmony of flavors.",
      image: masterBlending
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-yellow-400">
            Craftsmanship & Process
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every drop of DEVRAJ whisky is a testament to our unwavering commitment to traditional craftsmanship and modern innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group relative">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="bg-gray-800/80 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
              </div>
              <h3 className="font-playfair text-xl mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-playfair text-3xl mb-6">Traditional Meets Modern</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our distillation process honors time-tested traditions while incorporating state-of-the-art technology. This perfect marriage ensures consistent quality while preserving the authentic character that makes DEVRAJ truly exceptional.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              From the careful selection of raw materials to the final bottling process, every step is meticulously monitored by our master distillers who bring decades of experience to their craft.
            </p>
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-6 rounded-lg">
              <h4 className="text-black font-bold text-lg mb-2">Quality Promise</h4>
              <p className="text-black">Every bottle carries our guarantee of excellence, backed by rigorous quality control and testing at every stage of production.</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl overflow-hidden">
              <img 
                src={distillationProcess} 
                alt="Distillation Process at Devraj Distillery" 
                className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;