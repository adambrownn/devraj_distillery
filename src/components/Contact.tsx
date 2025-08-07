import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_tcz66wh';
  const EMAILJS_TEMPLATE_ID = 'template_contact_form';
  const EMAILJS_PUBLIC_KEY = 'g1rEMSChPyJS-05CR';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      user_email: formData.email,
      phone_number: formData.phone || 'Not provided',
      subject: formData.subject || 'General Inquiry',
      message: formData.message,
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
      to_email: 'info@devrajdistillery.com',
      reply_to: formData.email
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
        setStatusMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });

        // Optional: Store contact form submission for reference
        const contacts = JSON.parse(localStorage.getItem('devraj_contacts') || '[]');
        const newContact = {
          ...formData,
          timestamp: new Date().toISOString(),
          status: 'sent'
        };
        contacts.push(newContact);
        localStorage.setItem('devraj_contacts', JSON.stringify(contacts));

      } else {
        throw new Error('Message sending failed');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setStatusMessage('Something went wrong. Please try again or contact us directly at info@devrajdistillery.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-yellow-400">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with the DEVRAJ team for partnerships, inquiries, or more information about our premium whisky
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-playfair text-3xl mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="text-yellow-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Our Location</h4>
                  <p className="text-gray-300">
                    DEVRAJ DISTILLERY PRIVATE LIMITED<br />
                    Jalalpur, Bijnor<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-yellow-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Email Us</h4>
                  <p className="text-gray-300">
                    General: info@devrajdistillery.com<br />
                    Partnerships: partnerships@devrajdistillery.com<br />
                    Media: press@devrajdistillery.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-yellow-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Call Us</h4>
                  <p className="text-gray-300">
                    +91-XXXX-XXXXXX<br />
                    <span className="text-sm text-gray-400">Monday to Friday, 9 AM - 6 PM IST</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-yellow-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-400/10 border border-yellow-400 rounded-lg p-4">
              <p className="text-yellow-300 font-semibold mb-1">🔞 Important Notice</p>
              <p className="text-sm text-gray-300">
                All communications regarding alcoholic beverages are restricted to individuals aged 21 years and above. 
                CIN: U15549UP2014PTC062406
              </p>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-2xl">
            <h3 className="font-playfair text-2xl mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                    disabled={isSubmitting}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Distribution">Distribution</option>
                    <option value="Media & Press">Media & Press</option>
                    <option value="Product Information">Product Information</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 text-white resize-none"
                  placeholder="Tell us about your inquiry..."
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center p-3 bg-green-900/30 border border-green-500 rounded-lg">
                  <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={20} />
                  <p className="text-green-300 text-sm">{statusMessage}</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center p-3 bg-red-900/30 border border-red-500 rounded-lg">
                  <AlertCircle className="text-red-400 mr-3 flex-shrink-0" size={20} />
                  <p className="text-red-300 text-sm">{statusMessage}</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 disabled:from-gray-600 disabled:to-gray-500 text-black font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;