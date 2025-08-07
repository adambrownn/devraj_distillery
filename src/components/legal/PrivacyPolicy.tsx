import React from 'react';
import { Shield, Database, Mail, Eye, Lock, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl mb-6 text-yellow-400">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        <div className="space-y-8">
          {/* Age Verification Privacy */}
          <section className="bg-red-900/20 border border-red-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <UserCheck className="text-red-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-red-400">Age Verification & Privacy</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p className="font-semibold">
                This website is intended only for individuals who are 21 years of age or older.
              </p>
              <p>
                We collect date of birth information solely for age verification purposes. Users under 21 
                are automatically redirected away from our website and their information is not stored.
              </p>
              <p>
                Age verification data is processed locally in your browser and is not transmitted to our servers 
                unless you are verified as 21 years or older.
              </p>
            </div>
          </section>

          {/* Company Information */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <Shield className="mr-3" size={24} />
              Data Controller Information
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Company:</strong> DEVRAJ DISTILLERY PRIVATE LIMITED</p>
                  <p><strong>CIN:</strong> U15549UP2014PTC062406</p>
                  <p><strong>Registration:</strong> Registrar of Companies, Kanpur</p>
                </div>
                <div>
                  <p><strong>Address:</strong> Jalalpur, Bijnor, Uttar Pradesh, India</p>
                  <p><strong>Contact:</strong> info@devrajdistillery.com</p>
                  <p><strong>Data Protection Officer:</strong> As appointed</p>
                </div>
              </div>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <Database className="mr-3" size={24} />
              Information We Collect
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              
              <h3 className="text-xl font-semibold text-white">1. Personal Information</h3>
              <div className="bg-gray-800 p-4 rounded">
                <p><strong>Email Addresses:</strong> When you subscribe to our launch list or newsletter</p>
                <p><strong>Date of Birth:</strong> For age verification (21+ requirement)</p>
                <p><strong>Communication Preferences:</strong> Your marketing communication choices</p>
              </div>

              <h3 className="text-xl font-semibold text-white">2. Automatically Collected Information</h3>
              <div className="bg-gray-800 p-4 rounded space-y-2">
                <p><strong>Analytics Data:</strong> Via Google Analytics including:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>IP addresses (anonymized)</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Page views and session duration</li>
                  <li>Geographic location (country/state level)</li>
                  <li>Referral sources</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white">3. Cookies and Tracking Technologies</h3>
              <div className="bg-gray-800 p-4 rounded">
                <p><strong>Essential Cookies:</strong> For age verification and website functionality</p>
                <p><strong>Analytics Cookies:</strong> Google Analytics for website performance analysis</p>
                <p><strong>Marketing Cookies:</strong> For social media advertising (when implemented)</p>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <Eye className="mr-3" size={24} />
              How We Use Your Information
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              
              <h3 className="text-xl font-semibold text-white">Primary Uses</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Age Verification:</strong> Ensuring compliance with legal drinking age requirements</li>
                <li><strong>Marketing Communications:</strong> Sending updates about DEVRAJ products and launch information</li>
                <li><strong>Website Analytics:</strong> Understanding user behavior to improve website experience</li>
                <li><strong>Legal Compliance:</strong> Meeting regulatory requirements for alcohol advertising</li>
              </ul>

              <h3 className="text-xl font-semibold text-white">Marketing Communications</h3>
              <div className="bg-gray-800 p-4 rounded">
                <p>If you subscribe to our launch list, we will send you:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Product launch notifications</li>
                  <li>Availability updates in your region</li>
                  <li>Company news and events</li>
                  <li>Responsible drinking information</li>
                </ul>
                <p className="mt-3 text-yellow-400">
                  <strong>You can unsubscribe at any time</strong> using the link in our emails.
                </p>
              </div>
            </div>
          </section>

          {/* Data Storage and Security */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <Lock className="mr-3" size={24} />
              Data Storage & Security
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              
              <h3 className="text-xl font-semibold text-white">Data Storage</h3>
              <p>
                Your personal information is stored securely on servers located in India and may be processed 
                by trusted third-party services that comply with international data protection standards.
              </p>

              <h3 className="text-xl font-semibold text-white">Security Measures</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls limiting who can view your information</li>
                <li>Secure hosting environment with regular backups</li>
              </ul>

              <h3 className="text-xl font-semibold text-white">Data Retention</h3>
              <div className="bg-gray-800 p-4 rounded">
                <p><strong>Email Addresses:</strong> Retained until you unsubscribe or request deletion</p>
                <p><strong>Analytics Data:</strong> Retained for 26 months as per Google Analytics standard</p>
                <p><strong>Age Verification:</strong> Not stored - processed locally in browser only</p>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Data Sharing & Third Parties</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              
              <h3 className="text-xl font-semibold text-white">Third-Party Services</h3>
              <div className="bg-gray-800 p-4 rounded space-y-2">
                <p><strong>Google Analytics:</strong> Website traffic analysis and user behavior insights</p>
                <p><strong>Email Service Providers:</strong> For sending marketing communications (when implemented)</p>
                <p><strong>Social Media Platforms:</strong> For advertising purposes (Facebook, Instagram - when implemented)</p>
              </div>

              <h3 className="text-xl font-semibold text-white">We DO NOT Share Personal Data With:</h3>
              <ul className="space-y-2 list-disc list-inside text-green-400">
                <li>Other alcohol companies or competitors</li>
                <li>Data brokers or marketing lists</li>
                <li>Unauthorized third parties</li>
                <li>Anyone for purposes other than those stated in this policy</li>
              </ul>

              <h3 className="text-xl font-semibold text-white">Legal Disclosures</h3>
              <p>
                We may disclose information when required by law, court order, or to comply with 
                regulatory requirements from excise departments or other government authorities.
              </p>
            </div>
          </section>

          {/* Your Privacy Rights */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <Shield className="mr-3" size={24} />
              Your Privacy Rights
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              
              <h3 className="text-xl font-semibold text-white">You Have the Right To:</h3>
              <ul className="space-y-3 list-disc list-inside">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Rectification:</strong> Ask us to correct inaccurate personal information</li>
                <li><strong>Erasure:</strong> Request deletion of your personal information</li>
                <li><strong>Unsubscribe:</strong> Opt-out of marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request your data in a portable format</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
              </ul>

              <h3 className="text-xl font-semibold text-white">How to Exercise Your Rights</h3>
              <div className="bg-gray-800 p-4 rounded">
                <p>Contact us at: <strong className="text-yellow-400">info@devrajdistillery.com</strong></p>
                <p>Subject line: "Privacy Rights Request"</p>
                <p>We will respond to your request within 30 days.</p>
              </div>
            </div>
          </section>

          {/* Cookies Policy */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Cookie Policy</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              
              <h3 className="text-xl font-semibold text-white">Types of Cookies We Use:</h3>
              
              <div className="space-y-3">
                <div className="bg-gray-800 p-3 rounded">
                  <p><strong className="text-green-400">Essential Cookies</strong> (Always Active)</p>
                  <p className="text-sm">Required for age verification and basic website functionality</p>
                </div>
                
                <div className="bg-gray-800 p-3 rounded">
                  <p><strong className="text-blue-400">Analytics Cookies</strong> (Google Analytics)</p>
                  <p className="text-sm">Help us understand how visitors use our website</p>
                </div>
                
                <div className="bg-gray-800 p-3 rounded">
                  <p><strong className="text-yellow-400">Marketing Cookies</strong> (Future Implementation)</p>
                  <p className="text-sm">For social media advertising and remarketing</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white">Managing Cookies</h3>
              <p>
                You can control cookies through your browser settings. However, disabling essential cookies 
                may affect website functionality, particularly age verification.
              </p>
            </div>
          </section>

          {/* International Users */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">International Users</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300">
              <p>
                DEVRAJ DISTILLERY PRIVATE LIMITED is based in India. If you are accessing our website 
                from outside India, please note that your information may be transferred to and processed in India.
              </p>
              <p className="mt-3">
                We comply with applicable data protection laws and implement appropriate safeguards for 
                international data transfers.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Changes to This Policy</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or 
                legal requirements. We will notify users of significant changes via email (if you've subscribed) 
                or by posting a notice on our website.
              </p>
              
              <p className="text-sm text-gray-400 mt-4">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN')}
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="border-t border-gray-700 pt-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <Mail className="mr-3" size={24} />
              Contact Us About Privacy
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300">
              <p>
                If you have any questions about this Privacy Policy or how we handle your personal information:
              </p>
              <div className="mt-4 space-y-1">
                <p><strong>Email:</strong> info@devrajdistillery.com</p>
                <p><strong>Subject:</strong> Privacy Policy Inquiry</p>
                <p><strong>Company:</strong> DEVRAJ DISTILLERY PRIVATE LIMITED</p>
                <p><strong>Address:</strong> Jalalpur, Bijnor, Uttar Pradesh, India</p>
                <p><strong>CIN:</strong> U15549UP2014PTC062406</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 mb-4">
            By using our website, you acknowledge that you have read and understood this Privacy Policy.
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

export default PrivacyPolicy;