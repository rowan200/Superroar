import React, { useState } from 'react';
import { MapPin, Truck, CheckCircle, AlertCircle } from 'lucide-react';

// ============================================
// CONFIGURATION - YOUR CPANEL URL
// ============================================
const API_URL = 'https://superoar.com/api/contact.php';

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
    <section id="contact" className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">GET IN <span className="text-primary">TOUCH</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to upgrade your equipment? Our team is here to help you find the perfect solution for your business.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-800 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg text-gray-900 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-gray-400">North Houston, TX</p>
                    <p className="text-gray-500 text-sm">Serving all 50 states</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-lg text-gray-900 flex-shrink-0">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Shipping</h4>
                    <p className="text-gray-400">Nationwide Delivery</p>
                    <p className="text-gray-500 text-sm">Fast & reliable shipping</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-bold mb-3">Business Hours</h4>
                <div className="text-gray-400 text-sm space-y-1">
                  <p>Monday - Friday: 8AM - 6PM</p>
                  <p>Saturday: 9AM - 2PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3 bg-white rounded-xl p-8 text-gray-900 shadow-2xl">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="bg-green-100 p-4 rounded-full mb-6">
                  <CheckCircle size={64} className="text-green-500" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                <p className="text-gray-600 text-lg">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                {error && (
                  <div className="md:col-span-2 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 text-red-700">
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
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                    placeholder="Your full name" 
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
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                    placeholder="your@email.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                    placeholder="(555) 123-4567" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">I'm interested in</label>
                  <select 
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  >
                    <option>Single Unit</option>
                    <option>Fleet / Bulk Order</option>
                    <option>Parts & Accessories</option>
                    <option>Service & Support</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                  <textarea 
                    rows="5" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" 
                    placeholder="Tell us about your project or what you're looking for..."
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-primary text-gray-900 px-8 py-4 w-full font-bold rounded-lg hover:bg-primary-dark transition-all uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="text-center text-gray-500 text-sm mt-4">
                    We typically respond within 24 hours
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
