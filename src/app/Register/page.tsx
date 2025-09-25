'use client';

import React, { useState, useEffect } from 'react';
import {
  Shield,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  CheckCircle,
  User,
  Building,
} from 'lucide-react';

const SecureWipeRegister = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [focusStates, setFocusStates] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFocus = (field: string, focused: boolean) => {
    setFocusStates((prev) => ({
      ...prev,
      [field]: focused,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      alert('You must agree to the terms.');
      return;
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert('Please fill all fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/backend/api/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          agreeTerms: formData.agreeTerms,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed.');
      }

      alert(' Registration successful!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
     
        password: '',
        confirmPassword: '',
        agreeTerms: false,
      });
    } catch (err: any) {
      alert(`${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2">
         
          <div
            className={`p-8 lg:p-12 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
         
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">SecureWipe</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600 mb-6">Join the secure data wiping revolution</p>

           
            <form className="space-y-5" onSubmit={handleSubmit}>
         
              <div className="grid grid-cols-2 gap-4">
                {['firstName', 'lastName'].map((field, idx) => (
                  <div key={field}>
                    <label className="text-sm font-medium text-gray-700 block">
                      {field === 'firstName' ? 'First Name' : 'Last Name'}
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors ${
                          focusStates[field as keyof typeof focusStates]
                            ? 'text-green-500'
                            : 'text-gray-400'
                        }`}
                      >
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        value={formData[field as keyof typeof formData] as string}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                        onFocus={() => handleFocus(field, true)}
                        onBlur={() => handleFocus(field, false)}
                        className={`w-full pl-12 pr-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                          focusStates[field as keyof typeof focusStates]
                            ? 'border-green-500 bg-green-50/50 shadow-lg shadow-green-500/10'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder={field === 'firstName' ? 'John' : 'Doe'}
                      />
                    </div>
                  </div>
                ))}
              </div>

            
              <div>
                <label className="text-sm font-medium text-gray-700 block">Email Address</label>
                <div className="relative">
                  <div
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors ${
                      focusStates.email ? 'text-green-500' : 'text-gray-400'
                    }`}
                  >
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
                    placeholder="john@company.com"
                  />
                </div>
              </div>

            
              <div className="grid md:grid-cols-2 gap-4">
                {['password', 'confirmPassword'].map((field) => (
                  <div key={field}>
                    <label className="text-sm font-medium text-gray-700 block">
                      {field === 'password' ? 'Password' : 'Confirm Password'}
                    </label>
                    <div className="relative">
                      <div
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors ${
                          focusStates[field as keyof typeof focusStates]
                            ? 'text-green-500'
                            : 'text-gray-400'
                        }`}
                      >
                        <Lock className="w-5 h-5" />
                      </div>
                      <input
                        type={
                          field === 'password'
                            ? showPassword
                              ? 'text'
                              : 'password'
                            : showConfirmPassword
                            ? 'text'
                            : 'password'
                        }
                        value={formData[field as keyof typeof formData] as string}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                        onFocus={() => handleFocus(field, true)}
                        onBlur={() => handleFocus(field, false)}
                        className={`w-full pl-12 pr-12 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                          focusStates[field as keyof typeof focusStates]
                            ? 'border-green-500 bg-green-50/50 shadow-lg shadow-green-500/10'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder={field === 'password' ? 'Create password' : 'Confirm password'}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          field === 'password'
                            ? setShowPassword(!showPassword)
                            : setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {field === 'password'
                          ? showPassword
                            ? <EyeOff className="w-5 h-5" />
                            : <Eye className="w-5 h-5" />
                          : showConfirmPassword
                          ? <EyeOff className="w-5 h-5" />
                          : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

             
              <div className="flex items-start space-x-3">
                <label className="flex items-start cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 border-2 rounded transition-all duration-200 mt-0.5 flex items-center justify-center flex-shrink-0 ${
                      formData.agreeTerms
                        ? 'bg-green-500 border-green-500'
                        : 'border-gray-300 group-hover:border-green-400'
                    }`}
                  >
                    {formData.agreeTerms && <CheckCircle className="w-3 h-3 text-white" />}
                  </div>
                </label>
                <div className="text-sm text-gray-600 leading-relaxed">
                  I agree to the{' '}
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    Privacy Policy
                  </a>
                </div>
              </div>

            
              <button
                type="submit"
                disabled={isLoading || !formData.agreeTerms}
                className="group w-full bg-gradient-to-r from-green-500 to-blue-600 py-3 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-green-500/25 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:transform-none flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

      
          <div
            className={`bg-gradient-to-br from-green-400 via-cyan-500 to-blue-500 p-8 lg:p-12 flex flex-col justify-center items-center text-center text-white relative overflow-hidden transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <div className="relative z-10 max-w-md">
              <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mb-12 backdrop-blur-sm border border-white/30 shadow-2xl">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
                Join The <br />
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent">
                  Revolution
                </span>
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed">
                Transform e-waste with enterprise-grade security
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureWipeRegister;
