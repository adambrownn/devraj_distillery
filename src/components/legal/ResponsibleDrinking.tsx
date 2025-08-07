import React from 'react';
import { Shield, AlertTriangle, Heart, Phone, ExternalLink, Info } from 'lucide-react';

const ResponsibleDrinking = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl mb-6 text-yellow-400">
            Responsible Drinking
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg">
            DEVRAJ DISTILLERY PRIVATE LIMITED is committed to promoting responsible consumption of alcoholic beverages
          </p>
        </div>

        <div className="space-y-8">
          {/* Age Verification Section */}
          <section className="bg-red-900/20 border border-red-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="text-red-400 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-red-400">Age Verification - 21+ Only</h2>
            </div>
            <div className="text-gray-300 space-y-3">
              <p className="font-semibold">
                In accordance with Uttar Pradesh Excise Laws, you must be 21 years of age or older to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access this website</li>
                <li>View information about alcoholic beverages</li>
                <li>Purchase or consume DEVRAJ Premium Whisky</li>
                <li>Receive marketing communications about alcohol products</li>
              </ul>
              <p className="text-red-300 font-semibold">
                If you are under 21, you are legally prohibited from accessing this website and must leave immediately.
              </p>
            </div>
          </section>

          {/* Company Responsibility */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <Info className="mr-3" size={24} />
              Our Commitment to Responsible Marketing
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              <h3 className="text-xl font-semibold text-white">DEVRAJ DISTILLERY PRIVATE LIMITED Pledge</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>We market only to adults of legal drinking age (21+ in India)</li>
                <li>We promote moderate and responsible consumption of alcohol</li>
                <li>We comply with all Indian advertising standards for alcoholic beverages</li>
                <li>We never target minors, pregnant women, or individuals with alcohol dependency</li>
                <li>We support community education about alcohol-related risks</li>
              </ul>
              
              <div className="bg-yellow-400/10 border border-yellow-400 rounded-lg p-4 mt-4">
                <p className="text-yellow-300 font-semibold">
                  CIN: U15549UP2014PTC062406 | Licensed Manufacturer | Uttar Pradesh Excise Department
                </p>
              </div>
            </div>
          </section>

          {/* Health Warnings */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <AlertTriangle className="mr-3" size={24} />
              Important Health Information
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              
              <div className="bg-red-900/30 border border-red-500 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-red-300 mb-3">⚠️ Health Warnings</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li><strong>Excessive alcohol consumption is harmful to health</strong></li>
                  <li><strong>Alcohol consumption during pregnancy can cause birth defects</strong></li>
                  <li><strong>Do not drink and drive - it's illegal and dangerous</strong></li>
                  <li><strong>Alcohol can be addictive - seek help if needed</strong></li>
                  <li><strong>Not suitable for individuals with liver, kidney, or heart conditions</strong></li>
                  <li><strong>May interact with medications - consult your doctor</strong></li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-white">Recommended Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold mb-2 text-green-400">For Men</h4>
                  <p>No more than 2 standard drinks per day</p>
                  <p className="text-sm text-gray-400">1 standard drink = 30ml DEVRAJ (42.8% ABV)</p>
                </div>
                <div className="bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold mb-2 text-green-400">For Women</h4>
                  <p>No more than 1 standard drink per day</p>
                  <p className="text-sm text-gray-400">Lower tolerance due to body composition</p>
                </div>
              </div>
            </div>
          </section>

          {/* Don't Drink and Drive */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Don't Drink and Drive</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              <div className="bg-red-900/30 border border-red-500 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-red-300 mb-3">🚫 Never Drive Under the Influence</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Legal blood alcohol limit in India: 0.03% BAC</li>
                  <li>Even small amounts of alcohol can impair judgment and reaction time</li>
                  <li>Use designated drivers, taxis, or ride-sharing services</li>
                  <li>Plan your transportation before you start drinking</li>
                  <li>Penalties include license suspension, fines, and imprisonment</li>
                </ul>
              </div>
              
              <p className="text-yellow-300 font-semibold text-center">
                "Friends don't let friends drink and drive. Be responsible, stay safe."
              </p>
            </div>
          </section>

          {/* When Not to Drink */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <Heart className="mr-3" size={24} />
              When NOT to Consume Alcohol
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Absolutely Prohibited For:</h3>
                  <ul className="space-y-2 list-disc list-inside text-red-300">
                    <li>Persons under 21 years of age</li>
                    <li>Pregnant or breastfeeding women</li>
                    <li>Individuals with alcohol dependency</li>
                    <li>People taking certain medications</li>
                    <li>Those with liver, kidney, or heart disease</li>
                    <li>Before driving or operating machinery</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Use Caution If:</h3>
                  <ul className="space-y-2 list-disc list-inside text-yellow-300">
                    <li>You have a family history of alcoholism</li>
                    <li>You're taking prescription medications</li>
                    <li>You have any medical conditions</li>
                    <li>You're in a stressful life situation</li>
                    <li>You feel pressured to drink</li>
                    <li>You're using alcohol to cope with problems</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Help Resources */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <Phone className="mr-3" size={24} />
              Need Help? Support Resources
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              
              <h3 className="text-xl font-semibold text-white">If You or Someone You Know Has a Drinking Problem:</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-400 mb-3">National Helplines (India)</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Vandrevala Foundation:</strong> +91 9999 666 555</li>
                    <li><strong>NIMHANS Helpline:</strong> 080-4611 0007</li>
                    <li><strong>Parivarthan:</strong> +91 76760 60602</li>
                    <li><strong>iCall:</strong> 9152987821</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-3">Online Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>Alcoholics Anonymous India</li>
                    <li>NIMHANS (National Institute of Mental Health)</li>
                    <li>Indian Psychiatric Society</li>
                    <li>Local rehabilitation centers</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-900/30 border border-blue-500 rounded-lg p-4">
                <p className="text-blue-200 font-semibold text-center">
                  🆘 In case of alcohol poisoning or emergency, immediately call 102 (Ambulance) or 108 (Emergency)
                </p>
              </div>
            </div>
          </section>

          {/* Signs of Problem Drinking */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Recognize the Warning Signs</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300 space-y-4">
              <h3 className="text-xl font-semibold text-white">Signs of Alcohol Dependency:</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold text-orange-400 mb-2">Physical Signs</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Needing alcohol to function daily</li>
                    <li>Withdrawal symptoms</li>
                    <li>Increased tolerance</li>
                    <li>Health problems</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold text-purple-400 mb-2">Behavioral Signs</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Drinking alone frequently</li>
                    <li>Neglecting responsibilities</li>
                    <li>Lying about drinking</li>
                    <li>Unable to control intake</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded">
                  <h4 className="font-semibold text-red-400 mb-2">Social Signs</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Relationship problems</li>
                    <li>Work/school issues</li>
                    <li>Legal problems</li>
                    <li>Social isolation</li>
                  </ul>
                </div>
              </div>

              <p className="text-yellow-300 font-semibold text-center">
                If you recognize these signs, please seek professional help immediately.
              </p>
            </div>
          </section>

          {/* Our Promise */}
          <section className="border-t border-gray-700 pt-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Our Promise to You</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300">
              <p className="text-lg leading-relaxed mb-4">
                DEVRAJ DISTILLERY PRIVATE LIMITED is committed to being a responsible member of the community. 
                We believe that our premium whisky should be enjoyed responsibly by adults of legal drinking age 
                as part of a balanced lifestyle.
              </p>
              
              <p className="text-lg leading-relaxed mb-4">
                We will continue to promote responsible consumption, support education about alcohol-related 
                risks, and comply with all applicable laws and regulations in India.
              </p>

              <div className="bg-yellow-400/10 border border-yellow-400 rounded-lg p-4">
                <p className="text-yellow-300 font-semibold text-center">
                  "Crafted with Legacy, Enjoyed with Responsibility" - DEVRAJ Premium Whisky
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="border-t border-gray-700 pt-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Contact Us About Responsible Drinking</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-gray-300">
              <p>
                For questions about responsible drinking or to report concerns about our marketing practices:
              </p>
              <div className="mt-4 space-y-1">
                <p><strong>Email:</strong> responsibility@devrajdistillery.com</p>
                <p><strong>Company:</strong> DEVRAJ DISTILLERY PRIVATE LIMITED</p>
                <p><strong>Address:</strong> Jalalpur, Bijnor, Uttar Pradesh, India</p>
                <p><strong>CIN:</strong> U15549UP2014PTC062406</p>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN')}
              </p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 mb-4">
            By using our website, you commit to drinking responsibly and following these guidelines.
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

export default ResponsibleDrinking;