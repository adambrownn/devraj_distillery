import React from 'react';
import { Shield, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-black font-bold">DD</span>
              </div>
              <h3 className="font-playfair text-2xl text-yellow-400">Devraj Distillery</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Crafting premium spirits with heritage and passion since 2014. Experience the royal blend of tradition and innovation in every bottle of DEVRAJ.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                Twitter
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-yellow-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#product" className="hover:text-yellow-400 transition-colors duration-300">Our Whisky</a></li>
              <li><a href="#gallery" className="hover:text-yellow-400 transition-colors duration-300">Gallery</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  Terms & Conditions
                  <ExternalLink className="ml-1" size={12} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  Privacy Policy
                  <ExternalLink className="ml-1" size={12} />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center">
                  Responsible Drinking
                  <ExternalLink className="ml-1" size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="text-yellow-400 mr-2" size={20} />
              <span className="text-red-400 font-semibold">18+ ONLY</span>
              <span className="text-gray-400 ml-2">Age verification required</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Devraj Distillery. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Please drink responsibly
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;