import React from 'react';
import { Shield, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/logos/logo-icon.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden mr-3">
                <img 
                  src={logoIcon} 
                  alt="Devraj Distillery Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-playfair text-2xl text-yellow-400">Devraj Distillery</h3>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Crafting premium spirits with heritage and passion since 2014. Experience the royal blend of tradition and innovation in every bottle of DEVRAJ.
            </p>
            <nav aria-label="Social Media Links">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300" aria-label="Facebook">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300" aria-label="Instagram">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300" aria-label="Twitter">
                  Twitter
                </a>
              </div>
            </nav>
          </div>
          
          <nav aria-label="Quick Links">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('#about')} 
                  className="hover:text-yellow-400 transition-colors duration-300 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#product')} 
                  className="hover:text-yellow-400 transition-colors duration-300 text-left"
                >
                  Our Whisky
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#gallery')} 
                  className="hover:text-yellow-400 transition-colors duration-300 text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#contact')} 
                  className="hover:text-yellow-400 transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          
          <nav aria-label="Legal Links">
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link 
                  to="/terms-conditions" 
                  className="hover:text-yellow-400 transition-colors duration-300 flex items-center"
                >
                  Terms & Conditions
                  <ExternalLink className="ml-1" size={12} />
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="hover:text-yellow-400 transition-colors duration-300 flex items-center"
                >
                  Privacy Policy
                  <ExternalLink className="ml-1" size={12} />
                </Link>
              </li>
              <li>
                <Link 
                  to="/responsible-drinking" 
                  className="hover:text-yellow-400 transition-colors duration-300 flex items-center"
                >
                  Responsible Drinking
                  <ExternalLink className="ml-1" size={12} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="text-yellow-400 mr-2" size={20} />
              <span className="text-red-400 font-semibold">21+ ONLY</span>
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