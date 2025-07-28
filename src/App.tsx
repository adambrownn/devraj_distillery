import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Craftsmanship from './components/Craftsmanship';
import WhereToBuy from './components/WhereToBuy';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title and meta description
    document.title = 'Devraj Distillery – Premium Blended Whisky from India';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover DEVRAJ, a handcrafted premium whisky from Devraj Distillery, rooted in heritage and crafted with passion in Bijnor, India.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover DEVRAJ, a handcrafted premium whisky from Devraj Distillery, rooted in heritage and crafted with passion in Bijnor, India.';
      document.head.appendChild(meta);
    }
    
    // Add meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Indian premium whisky, Devraj whisky, blended whisky India, Devraj Distillery, Bijnor distillery');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'Indian premium whisky, Devraj whisky, blended whisky India, Devraj Distillery, Bijnor distillery';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <About />
      <Product />
      <Craftsmanship />
      <WhereToBuy />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;