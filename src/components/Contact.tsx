import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6 text-yellow-400">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for inquiries, partnerships, or to learn more about DEVRAJ Premium Whisky
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-playfair text-3xl mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Distillery Address</h4>
                  <p className="text-gray-400">
                    Jalalpur, Bijnor<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-gray-400">info@devrajdistillery.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-gray-400">+91 XXX XXX XXXX</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="font-playfair text-xl mb-4 text-yellow-400">Business Hours</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-2xl">
            <h3 className="font-playfair text-2xl mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 text-white resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
            
            {isSubmitted && (
              <div className="mt-4 p-3 bg-green-800 rounded-lg text-center">
                <p className="text-green-200">Thank you for your message. We'll get back to you soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;