import React, { useState } from 'react';
import { MapPin, Mail, Bell } from 'lucide-react';

const WhereToBuy = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-yellow-400">
            Where to Buy
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-playfair text-3xl mb-6">Available Soon</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              DEVRAJ Premium Blended Whisky will soon be available at select premium liquor stores and authorized retailers across India. We're also working on bringing you a seamless online shopping experience.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Premium Retail Partners</h4>
                  <p className="text-gray-400">Carefully selected stores that share our commitment to quality and customer experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Online Platform</h4>
                  <p className="text-gray-400">Direct-to-consumer e-commerce platform launching soon for convenient home delivery.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-2xl">
            <div className="text-center mb-6">
              <Bell className="text-yellow-400 mx-auto mb-4" size={48} />
              <h3 className="font-playfair text-2xl mb-4">Join Our Launch List</h3>
              <p className="text-gray-400">Be the first to know when DEVRAJ becomes available. Get exclusive updates, launch notifications, and special offers.</p>
            </div>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {isSubscribed ? 'Thank You!' : 'Join Launch List'}
              </button>
            </form>
            
            {isSubscribed && (
              <div className="mt-4 p-3 bg-green-800 rounded-lg text-center">
                <p className="text-green-200">Successfully subscribed! We'll keep you updated.</p>
              </div>
            )}
            
            <p className="text-gray-500 text-xs mt-4 text-center">
              We respect your privacy and will never spam you. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;