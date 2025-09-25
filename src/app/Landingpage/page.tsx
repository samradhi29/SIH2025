"use client"
import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle, Smartphone, Laptop, Award, Users, TrendingUp, Lock, Eye, FileCheck, ArrowRight, Play } from 'lucide-react';
import { useRouter } from 'next/navigation'

const EWasteLandingPage: React.FC = () => {
    const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Military-Grade Encryption",
      description: "DoD 5220.22-M standard wiping with cryptographic verification"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Tamper-Proof Certificates",
      description: "Blockchain-verified erasure certificates for complete audit trail"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description: "Live progress tracking with detailed sector-by-sector reporting"
    }
  ];

  const stats = [
    { number: "1.75M", label: "Tonnes E-Waste/Year", subtext: "India's growing crisis" },
    { number: "₹50K Cr", label: "Hoarded IT Assets", subtext: "Due to data fears" },
    { number: "99.9%", label: "Recovery Prevention", subtext: "Certified erasure" },
    { number: "10 Min", label: "Average Wipe Time", subtext: "Per smartphone" }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "IT Director, TechCorp India",
      content: "SecureWipe gave us the confidence to properly dispose of 500+ laptops. The audit trail is impeccable.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      role: "CSO, GreenTech Solutions",
      content: "Finally, a solution that balances security with environmental responsibility. Game-changing for our ESG goals.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b2e4f904?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900 overflow-hidden">
    
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 border-b border-gray-200 backdrop-blur-sm bg-white/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">SecureWipe</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
            {/* <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors">Pricing</a> */}
          <button onClick={() => router.push("/Login")} className="bg-gradient-to-r from-green-500 to-blue-600 px-6 py-2 rounded-full text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200">
  Get Started
</button>

          </div>
        </div>
      </nav>

      <section className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="inline-flex items-center bg-red-100 border border-red-300 rounded-full px-6 py-2 mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></span>
              <span className="text-red-700 text-sm font-medium">CRITICAL: 1.75M tonnes e-waste generated annually in India</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-medium mb-8 leading-tight text-gray-900">
              Stop Hoarding.
              <br />
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                Start Recycling.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              The only <strong className="text-gray-900">tamper-proof, auditable data wiping solution</strong> designed for India's e-waste crisis. 
              Unlock ₹50,000 crore worth of hoarded IT assets with military-grade security.
            </p>

        
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">The Hidden Cost of Data Fear</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              While India drowns in e-waste, millions of devices sit unused because users fear data recovery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200 hover:border-red-300 transition-colors">
              <div className="w-16 h-16 bg-red-200 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-800">Growing Crisis</h3>
              <p className="text-gray-700 leading-relaxed">
                India generates 1.75M tonnes of e-waste annually, with only 20% being formally recycled due to data security concerns.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200 hover:border-orange-300 transition-colors">
              <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-800">Data Paralysis</h3>
              <p className="text-gray-700 leading-relaxed">
                ₹50,000 crore worth of IT assets remain hoarded in homes and offices, creating environmental and economic waste.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:border-purple-300 transition-colors">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Trust Gap</h3>
              <p className="text-gray-700 leading-relaxed">
                Existing solutions lack transparency, verifiable proof, and user-friendly interfaces needed for mass adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Built for Indian Enterprises</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The only data wiping solution designed specifically for India's regulatory environment and scale requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/80 p-8 rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

       
          <div className="bg-white/80 rounded-3xl p-8 md:p-12 border border-gray-200 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">Universal Device Support</h3>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  From smartphones to enterprise servers, SecureWipe handles all major device types with specialized algorithms for each storage technology.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-6 h-6 text-green-600" />
                    <span className="text-gray-800">Smartphones & Tablets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Laptop className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-800">Laptops & Desktops</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                    <span className="text-gray-800">SSDs & HDDs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-orange-600" />
                    <span className="text-gray-800">Enterprise Servers</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border border-gray-300">
                  <div className="grid grid-cols-3 gap-6 p-8">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl border border-green-300 flex items-center justify-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative z-10 px-6 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Simple, Secure, Verifiable</h2>
            <p className="text-xl text-gray-700">Three steps to complete peace of mind</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Connect & Scan", description: "Plug in your device. Our AI instantly identifies storage type and optimal wiping protocol.", icon: <Smartphone className="w-8 h-8" /> },
              { step: "02", title: "Secure Wipe", description: "Military-grade algorithms overwrite every sector with cryptographic verification in real-time.", icon: <Shield className="w-8 h-8" /> },
              { step: "03", title: "Get Certificate", description: "Receive tamper-proof blockchain certificate with complete audit trail for compliance.", icon: <FileCheck className="w-8 h-8" /> }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white/80 p-8 rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 group backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-4 text-white">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-green-600 group-hover:text-blue-600 group-hover:bg-gray-200 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-500 to-blue-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

     
    

      
      <section className="relative z-10 px-6 py-20 bg-gradient-to-r from-green-100 to-blue-100 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Ready to Unlock Your E-Waste Value?</h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Join the movement to transform India's e-waste crisis into a circular economy opportunity. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
  onClick={() => router.push('/Register')} 
  className="bg-gradient-to-r from-green-500 to-blue-600 px-12 py-4 rounded-full text-xl font-semibold text-white hover:shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
>
  Start Free 
</button>

            <button className="border border-gray-400 px-12 py-4 rounded-full text-xl font-semibold text-gray-800 hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-8">
            No credit card required • 24/7 support • SOC 2 Type II certified
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">SecureWipe</span>
              </div>
              <p className="text-gray-600">Transforming India's e-waste crisis through secure, verifiable data wiping.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Product</h4>
              <div className="space-y-2 text-gray-600">
                <div className="hover:text-gray-900 cursor-pointer">Features</div>
                <div className="hover:text-gray-900 cursor-pointer">Pricing</div>
                <div className="hover:text-gray-900 cursor-pointer">Enterprise</div>
                <div className="hover:text-gray-900 cursor-pointer">API</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Company</h4>
              <div className="space-y-2 text-gray-600">
                <div className="hover:text-gray-900 cursor-pointer">About</div>
                <div className="hover:text-gray-900 cursor-pointer">Careers</div>
                <div className="hover:text-gray-900 cursor-pointer">Blog</div>
                <div className="hover:text-gray-900 cursor-pointer">Contact</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Legal</h4>
              <div className="space-y-2 text-gray-600">
                <div className="hover:text-gray-900 cursor-pointer">Privacy</div>
                <div className="hover:text-gray-900 cursor-pointer">Terms</div>
                <div className="hover:text-gray-900 cursor-pointer">Security</div>
                <div className="hover:text-gray-900 cursor-pointer">Compliance</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            © 2025 SecureWipe. All rights reserved. Made in India for India's digital future.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EWasteLandingPage;