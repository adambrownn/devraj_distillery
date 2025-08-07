import React, { useState, useEffect } from 'react';
import { Shield, Calendar, AlertTriangle } from 'lucide-react';
import logoMain from '../assets/logos/logo-main.png';

interface AgeVerificationProps {
  onVerificationComplete: (isVerified: boolean) => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerificationComplete }) => {
  const [birthDate, setBirthDate] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState('');

  // Check if user has already been verified in this session
  useEffect(() => {
    const isVerified = sessionStorage.getItem('age_verified') === 'true';
    if (isVerified) {
      onVerificationComplete(true);
    }
  }, [onVerificationComplete]);

  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setError('');

    if (!birthDate) {
      setError('Please enter your date of birth');
      setIsVerifying(false);
      return;
    }

    const age = calculateAge(birthDate);

    // Add a small delay for UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (age < 21) {
      // User is under 21 - redirect them away
      setError('You must be 21 years of age or older to access this website.');
      
      // Show message for 3 seconds then redirect
      setTimeout(() => {
        // Clear any stored data
        sessionStorage.removeItem('age_verified');
        localStorage.removeItem('age_verified');
        
        // Redirect to a generic search page or close window
        window.location.href = 'https://www.google.com';
      }, 3000);
      
      setIsVerifying(false);
      return;
    }

    // User is 21 or older - grant access
    sessionStorage.setItem('age_verified', 'true');
    sessionStorage.setItem('verification_date', new Date().toISOString());
    
    setIsVerifying(false);
    onVerificationComplete(true);
  };

  const handleLeave = () => {
    // Clear any stored data
    sessionStorage.removeItem('age_verified');
    localStorage.removeItem('age_verified');
    
    // Redirect away from the website
    window.location.href = 'https://www.google.com';
  };

  const getMaxDate = () => {
    // Set max date to 18 years ago (minimum possible legal age anywhere)
    const date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    return date.toISOString().split('T')[0];
  };

  const getMinDate = () => {
    // Set min date to 100 years ago (reasonable maximum age)
    const date = new Date();
    date.setFullYear(date.getFullYear() - 100);
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-8 border border-gray-800">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden mb-4">
            <img
              src={logoMain}
              alt="Devraj Distillery Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-playfair text-2xl text-yellow-400 mb-2">Devraj Distillery</h1>
          <p className="text-gray-400 text-sm">Premium Blended Whisky</p>
        </div>

        {/* Age Verification Warning */}
        <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-2">
            <Shield className="text-red-400 mr-2" size={20} />
            <h2 className="text-red-400 font-bold">Age Verification Required</h2>
          </div>
          <p className="text-gray-300 text-sm">
            You must be <strong>21 years of age or older</strong> to access this website. 
            This site contains information about alcoholic beverages.
          </p>
        </div>

        {/* Verification Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="birthDate" className="flex items-center text-sm font-medium mb-2 text-white">
              <Calendar className="mr-2" size={16} />
              Enter Your Date of Birth
            </label>
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              min={getMinDate()}
              max={getMaxDate()}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
              required
            />
          </div>

          {error && (
            <div className="bg-red-900/30 border border-red-500 rounded-lg p-3">
              <div className="flex items-center">
                <AlertTriangle className="text-red-400 mr-2 flex-shrink-0" size={16} />
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            </div>
          )}

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={isVerifying}
              className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 disabled:from-gray-600 disabled:to-gray-500 text-black font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
            >
              {isVerifying ? 'Verifying...' : 'Enter Site'}
            </button>
            
            <button
              type="button"
              onClick={handleLeave}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
            >
              I'm Under 21
            </button>
          </div>
        </form>

        {/* Legal Notice */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <p className="text-gray-500 text-xs text-center">
            By entering this site, you agree to our Terms & Conditions and confirm that you are of legal drinking age.
            <br />
            <strong>Please drink responsibly.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;