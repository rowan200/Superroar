import React from 'react';
import { ArrowRight, Shield, Award, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[700px] w-full mt-[100px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="inline-block bg-primary text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
            Professional Grade Equipment
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            INDUSTRIAL POWER.<br />
            <span className="text-primary">BUILT TO LAST.</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            High-performance OEM pressure washing equipment engineered for contractors and professionals. 
            Experience the difference of quality that delivers results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#contact" 
              className="bg-primary text-gray-900 px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors rounded shadow-lg flex items-center justify-center gap-2"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </a>
            <a 
              href="#products" 
              className="bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors rounded flex items-center justify-center"
            >
              View Products
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-primary" />
              <span>2-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={20} className="text-primary" />
              <span>OEM Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck size={20} className="text-primary" />
              <span>Nationwide Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
