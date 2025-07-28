import React from 'react';
import { Star, Award, Clock } from 'lucide-react';

const Product = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-yellow-400">
            The Whisky: DEVRAJ
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A masterpiece of blending artistry, where premium grain spirits meet carefully aged malts
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="DEVRAJ Premium Whisky Bottle"
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
              PREMIUM
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-3xl mb-6">Premium Blended Whisky</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Star className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Premium Grain Spirit</h4>
                  <p className="text-gray-300">Carefully selected grains distilled to perfection, creating a smooth and refined base spirit.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Oak Barrel Aged</h4>
                  <p className="text-gray-300">Matured malts aged in premium oak barrels, developing complex flavors and rich character.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Award className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Master Blended</h4>
                  <p className="text-gray-300">Expert craftsmanship ensures perfect harmony between all components.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h4 className="font-playfair text-xl mb-4 text-yellow-400">Tasting Notes</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Appearance</h5>
                  <p className="text-gray-300 text-sm">Warm amber hues with golden highlights</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Aroma</h5>
                  <p className="text-gray-300 text-sm">Hints of caramel and vanilla with subtle spice</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Finish</h5>
                  <p className="text-gray-300 text-sm">Smooth, lingering warmth with oak undertones</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">Quality Assured</span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Premium Blend</span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Handcrafted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;