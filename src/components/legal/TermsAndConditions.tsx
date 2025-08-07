import React from 'react';
import { Shield, AlertTriangle, Scale, FileText } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl mb-6 text-yellow-400">
            Terms & Conditions
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            Please read these terms and conditions carefully before using our website or services
          </p>
        </div>

        <div className="space-y-8">
          {/* Age Verification Section */}
          <section className="bg-red-900/20 border border-red-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="text-red-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-red-400">Age Verification Required</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p className="font-semibold">
                You must be 21 years of age or older to access this website or purchase our products.
              </p>
              <p>
                By accessing this website, you confirm that you are of legal drinking age in your jurisdiction, 
                and specifically 21+ if you are in Uttar Pradesh, India or any other location where the legal 
                drinking age is 21 or higher.
              </p>
              <p>
                If you are under the legal drinking age, you are prohibited from accessing this website 
                and must leave immediately.
              </p>
            </div>
          </section>

          {/* Company Information */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <FileText className="mr-3" size={24} />
              Company Information
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Company Name:</strong> DEVRAJ DISTILLERY PRIVATE LIMITED</p>
                  <p><strong>CIN:</strong> U15549UP2014PTC062406</p>
                  <p><strong>Registration Number:</strong> 62406</p>
                </div>
                <div>
                  <p><strong>Registered Office:</strong> Jalalpur, Bijnor, Uttar Pradesh, India</p>
                  <p><strong>Registration Authority:</strong> Registrar of Companies, Kanpur</p>
                  <p><strong>Authorized Capital:</strong> ₹10,00,000</p>
                </div>
              </div>
            </div>
          </section>

          {/* Website Usage Terms */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Website Usage Terms</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              <h3 className="text-xl font-semibold text-white">1. Acceptance of Terms</h3>
              <p>
                By accessing and using this website (devrajdistillery.com), you accept and agree to be bound by 
                the terms and conditions of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>

              <h3 className="text-xl font-semibold text-white">2. Website Content</h3>
              <p>
                The content of this website is for general information purposes only. It is subject to change 
                without notice. We make no warranties about the completeness, reliability, and accuracy of this information.
              </p>

              <h3 className="text-xl font-semibold text-white">3. Email Collection & Marketing</h3>
              <p>
                By subscribing to our launch list or providing your email address, you consent to receive 
                marketing communications from DEVRAJ DISTILLERY PRIVATE LIMITED. You may unsubscribe at any time 
                using the link provided in our emails.
              </p>

              <h3 className="text-xl font-semibold text-white">4. Age Verification Compliance</h3>
              <p>
                We implement age verification measures including date of birth entry. Users under 21 will be 
                automatically redirected away from the website. Bypassing age verification measures is prohibited 
                and may result in legal action.
              </p>
            </div>
          </section>

          {/* Product Information */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Product Information</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              <h3 className="text-xl font-semibold text-white">DEVRAJ Premium Whisky Specifications</h3>
              <div className="bg-gray-800 p-4 rounded">
                <p><strong>Product Name:</strong> DEVRAJ Premium Blended Whisky</p>
                <p><strong>Alcohol by Volume:</strong> 42.8%</p>
                <p><strong>Classification:</strong> Premium Blended Whisky</p>
                <p><strong>Manufacturing License:</strong> Held by DEVRAJ DISTILLERY PRIVATE LIMITED</p>
              </div>
              
              <h3 className="text-xl font-semibold text-white">Availability & Distribution</h3>
              <p>
                DEVRAJ whisky will be available through authorized retailers across India in compliance with 
                state-specific excise regulations. We hold PAN India manufacturing rights but comply with 
                individual state distribution requirements.
              </p>
            </div>
          </section>

          {/* Legal Compliance */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <Scale className="mr-3" size={24} />
              Legal Compliance & Regulations
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              <h3 className="text-xl font-semibold text-white">Excise Law Compliance</h3>
              <p>
                DEVRAJ DISTILLERY PRIVATE LIMITED operates under valid manufacturing licenses from the 
                Uttar Pradesh Excise Department and complies with all applicable Central and State excise laws.
              </p>

              <h3 className="text-xl font-semibold text-white">State-Specific Regulations</h3>
              <p>
                Our operations comply with the excise laws of Uttar Pradesh and other states where we operate. 
                Product availability and advertising content may vary by state based on local regulations.
              </p>

              <h3 className="text-xl font-semibold text-white">Advertising Guidelines</h3>
              <p>
                All our marketing and advertising activities comply with the Cable Television Networks 
                (Regulation) Act, 1995, and other applicable advertising standards for alcoholic beverages in India.
              </p>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <AlertTriangle className="mr-3" size={24} />
              Prohibited Activities
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300">
              <ul className="space-y-2 list-disc list-inside">
                <li>Access by persons under 21 years of age</li>
                <li>Providing false information during age verification</li>
                <li>Attempting to purchase alcohol through unauthorized channels</li>
                <li>Reproducing or distributing website content without permission</li>
                <li>Using the website for any illegal or unauthorized purpose</li>
                <li>Promoting irresponsible alcohol consumption</li>
              </ul>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Limitation of Liability</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              <p>
                DEVRAJ DISTILLERY PRIVATE LIMITED shall not be liable for any direct, indirect, incidental, 
                special, or consequential damages that result from the use of, or inability to use, this website 
                or our products.
              </p>
              
              <p>
                We do not guarantee uninterrupted or error-free operation of this website and reserve the right 
                to modify or discontinue the website at any time without notice.
              </p>
            </div>
          </section>

          {/* Data Collection */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Data Collection & Analytics</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              <p>
                We use Google Analytics and similar tools to analyze website traffic and improve user experience. 
                This may involve collecting anonymous usage data, IP addresses, and browsing patterns.
              </p>
              
              <p>
                Email addresses collected through our launch list signup are used exclusively for marketing 
                communications related to DEVRAJ products and company updates.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Governing Law & Jurisdiction</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              <p>
                These terms and conditions are governed by the laws of India and specifically by the 
                excise laws of Uttar Pradesh where our company is registered.
              </p>
              
              <p>
                Any disputes arising from these terms or your use of this website shall be subject to 
                the exclusive jurisdiction of the courts in Bijnor, Uttar Pradesh, India.
              </p>
            </div>
          </section>

          {/* Updates & Modifications */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Updates & Modifications</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300">
              <p>
                DEVRAJ DISTILLERY PRIVATE LIMITED reserves the right to modify these terms and conditions 
                at any time without prior notice. Changes will be effective immediately upon posting to this website.
              </p>
              
              <p className="text-sm text-gray-400 mt-4">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN')}
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="border-t border-gray-700 pt-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Contact Information</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300">
              <p>
                For questions regarding these terms and conditions, please contact us at:
              </p>
              <div className="mt-4 space-y-1">
                <p><strong>Email:</strong> info@devrajdistillery.com</p>
                <p><strong>Address:</strong> DEVRAJ DISTILLERY PRIVATE LIMITED</p>
                <p className="ml-8">Jalalpur, Bijnor, Uttar Pradesh, India</p>
                <p><strong>CIN:</strong> U15549UP2014PTC062406</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 mb-4">
            By continuing to use this website, you acknowledge that you have read and agree to these Terms & Conditions.
          </p>
          <button 
            onClick={() => window.history.back()} 
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300"
          >
            Back to Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;