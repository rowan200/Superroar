import React, { useState } from 'react';
import { MapPin, Truck, CheckCircle, AlertCircle } from 'lucide-react';

// ============================================
// CONFIGURATION - UPDATE WITH YOUR CPANEL URL
// ============================================
// For development: use relative path or localhost
// For production: use your full domain URL
const API_URL = import.meta.env.PROD 
  ? 'https://yourdomain.com/api/contact.php'  // UPDATE: Your production cPanel URL
  : '/api/contact.php';                        // Dev server (with proxy) or full URL

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderType: 'Single Unit',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          orderType: formData.orderType,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        console.log('Message sent successfully:', result);
        setIsSubmitted(true);
        
        // Reset after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            orderType: 'Single Unit',
            message: ''
          });
        }, 3000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (err) {
      console.error('Failed to send message:', err);
      setError(err.message || 'Failed to send message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Text */}
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-black mb-6">CONTACT SALES</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Ready to upgrade your fleet? Get a custom quote or ask about our bulk pricing.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary p-3 rounded-full text-gray-900">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">North Houston Based</h4>
                  <p className="text-gray-400 text-sm">123 Industrial Blvd, Houston, TX</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary p-3 rounded-full text-gray-900">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Nationwide Shipping</h4>
                  <p className="text-gray-400 text-sm">Fast delivery to all 50 states</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full md:w-2/3 bg-white rounded-lg p-8 text-gray-900">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle size={64} className="text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                {error && (
                  <div className="md:col-span-2 bg-red-50 border border-red-200 rounded p-4 flex items-center gap-3 text-red-700">
                    <AlertCircle size={20} />
                    <span>{error}</span>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border-none rounded p-3 focus:ring-2 focus:ring-primary outline-none" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border-none rounded p-3 focus:ring-2 focus:ring-primary outline-none" 
                    placeholder="john@company.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-100 border-none rounded p-3 focus:ring-2 focus:ring-primary outline-none" 
                    placeholder="(555) 123-4567" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Order Type</label>
                  <select 
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleChange}
                    className="w-full bg-gray-100 border-none rounded p-3 focus:ring-2 focus:ring-primary outline-none"
                  >
                    <option>Single Unit</option>
                    <option>Fleet / Bulk</option>
                    <option>Parts & Accessories</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                  <textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-100 border-none rounded p-3 focus:ring-2 focus:ring-primary outline-none" 
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-primary text-white px-8 py-4 w-full font-bold rounded hover:bg-primary-dark transition-colors uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
