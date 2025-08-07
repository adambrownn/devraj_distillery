import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AgeVerification from './components/AgeVerification';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Craftsmanship from './components/Craftsmanship';
import WhereToBuy from './components/WhereToBuy';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TermsAndConditions from './components/legal/TermsAndConditions';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import ResponsibleDrinking from './components/legal/ResponsibleDrinking';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="product">
          <Product />
        </section>
        <section id="craftsmanship">
          <Craftsmanship />
        </section>
        <section id="where-to-buy">
          <WhereToBuy />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

    // Check if age verification exists in session
    const verified = sessionStorage.getItem('age_verified') === 'true';
    const verificationDate = sessionStorage.getItem('verification_date');
    
    // Check if verification is from today (optional: you can make it last longer)
    if (verified && verificationDate) {
      const verDate = new Date(verificationDate);
      const now = new Date();
      const hoursDiff = (now.getTime() - verDate.getTime()) / (1000 * 60 * 60);
      
      // Verification lasts for 24 hours
      if (hoursDiff < 24) {
        setIsAgeVerified(true);
      } else {
        // Clear expired verification
        sessionStorage.removeItem('age_verified');
        sessionStorage.removeItem('verification_date');
      }
    }
    
    setIsLoading(false);
  }, []);

  const handleAgeVerification = (verified: boolean) => {
    setIsAgeVerified(verified);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-yellow-400 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      {!isAgeVerified && <AgeVerification onVerificationComplete={handleAgeVerification} />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/responsible-drinking" element={<ResponsibleDrinking />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;