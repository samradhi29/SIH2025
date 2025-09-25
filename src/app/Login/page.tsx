"use client"
import React, { useState, useEffect } from 'react';
import { Shield, Eye, EyeOff, Lock, Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
const SecureWipeLogin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [focusStates, setFocusStates] = useState({
    email: false,
    password: false
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('api/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          rememberMe: formData.rememberMe
        })
      });

      if (!response.ok) {
     
        const data = await response.json().catch(() => null);
        const message = data?.message || 'Login failed. Please try again.';
        throw new Error(message);
      }

      const data = await response.json();

    
      alert('Login successful!');


    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFocus = (field: keyof typeof focusStates, focused: boolean) => {
    setFocusStates(prev => ({
      ...prev,
      [field]: focused
    }));
  };
const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2">

          <div className={`p-8 lg:p-12 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>

         
            <div className="flex items-center space-x-3 mb-12">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">SecureWipe</span>
            </div>

          
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
              <p className="text-gray-600">Please sign in to your account</p>
            </div>

           
            <form onSubmit={handleSubmit} className="space-y-6">

              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">
                  Email Address
                </label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors ${
                    focusStates.email ? 'text-green-500' : 'text-gray-400'
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onFocus={() => handleFocus('email', true)}
                    onBlur={() => handleFocus('email', false)}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                      focusStates.email
                        ? 'border-green-500 bg-green-50/50 shadow-lg shadow-green-500/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

           
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">
                  Password
                </label>
                <div className="relative">
                  <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors ${
                    focusStates.password ? 'text-green-500' : 'text-gray-400'
                  }`}>
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    onFocus={() => handleFocus('password', true)}
                    onBlur={() => handleFocus('password', false)}
                    className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                      focusStates.password
                        ? 'border-green-500 bg-green-50/50 shadow-lg shadow-green-500/10'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

           
              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border-2 rounded transition-all duration-200 mr-3 flex items-center justify-center ${
                    formData.rememberMe
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-300 group-hover:border-green-400'
                  }`}>
                    {formData.rememberMe && <CheckCircle className="w-3 h-3 text-white" />}
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    Remember me
                  </span>
                </label>
                <a href="#" className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors">
                  Forgot password?
                </a>
              </div>

             
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

             
              <button
                type="submit"
                disabled={isLoading}
                className="group w-full bg-gradient-to-r from-green-500 to-blue-600 py-3 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:transform-none flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              
              <div className="text-center pt-4">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <button onClick={() => router.push("/frontend/Register")} className="text-green-600 hover:text-green-700 font-medium transition-colors">
                    sign up
                  </button>
                </p>
              </div>
            </form>
          </div>

       
          <div className={`bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500 p-8 lg:p-12 flex flex-col justify-center items-center text-center text-white relative overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-white/15 to-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            <div className="relative z-10 max-w-md">
             
              <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mb-12 backdrop-blur-sm border border-white/30 shadow-2xl">
                <Shield className="w-12 h-12 text-white" />
              </div>

             
              <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                Secure Your
                <br />
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h2>

              <p className="text-xl text-white/80 font-light leading-relaxed">
                Military-grade data wiping for the digital age
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureWipeLogin;
