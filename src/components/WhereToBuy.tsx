import React, { useState } from 'react';
import { MapPin, Mail, Bell, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const WhereToBuy = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_tcz66wh';
  const EMAILJS_TEMPLATE_ID = 'template_launch_list';
  const EMAILJS_PUBLIC_KEY = 'g1rEMSChPyJS-05CR';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Prepare template parameters
    const templateParams = {
      user_email: email,
      timestamp: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
      user_agent: navigator.userAgent,
      to_email: 'info@devrajdistillery.com' // Your email to receive notifications
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setMessage('Thank you! You\'ll be the first to know when DEVRAJ becomes available in your area.');
        setEmail('');
        
        // Optional: Store email in localStorage for future reference
        const subscribers = JSON.parse(localStorage.getItem('devraj_subscribers') || '[]');
        const newSubscriber = {
          email,
          timestamp: new Date().toISOString(),
          source: 'launch_list'
        };
        subscribers.push(newSubscriber);
        localStorage.setItem('devraj_subscribers', JSON.stringify(subscribers));
        
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setMessage('Something went wrong. Please try again or contact us directly at info@devrajdistillery.com');
    } finally {
      setIsSubmitting(false);
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
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            DEVRAJ Premium Whisky will soon be available at select premium retailers across India
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-playfair text-3xl mb-6">Coming Soon</h3>
            
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
                  <p className="text-gray-400">Soon you will be able to locate every retailer information regarding our availability.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-2xl">
            <div className="text-center mb-6">
              <Bell className="text-yellow-400 mx-auto mb-4" size={48} />
              <h3 className="font-playfair text-2xl mb-4">Join the Launch List</h3>
              <p className="text-gray-400">Be the first to know when DEVRAJ becomes available in your area</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-yellow-400 text-white"
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 disabled:from-gray-600 disabled:to-gray-500 text-black font-semibold px-6 py-3 rounded-r-lg transition-all duration-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Joining...' : 'Notify Me'}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center p-3 bg-green-900/30 border border-green-500 rounded-lg">
                  <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <p className="text-green-300 text-sm">{message}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center p-3 bg-red-900/30 border border-red-500 rounded-lg">
                  <AlertCircle className="text-red-400 mr-3 flex-shrink-0" size={20} />
                  <p className="text-red-300 text-sm">{message}</p>
                </div>
              )}

              <p className="text-gray-500 text-xs">
                By subscribing, you confirm you are 21+ and agree to receive marketing emails from DEVRAJ DISTILLERY PRIVATE LIMITED. 
                You can unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;