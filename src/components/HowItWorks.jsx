import React from 'react';
import { ShoppingCart, Truck, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: <ShoppingCart size={32} />, title: "Order Online", desc: "Select your perfect model" },
    { icon: <Truck size={32} />, title: "Fast Shipping", desc: "Direct from North Houston" },
    { icon: <Zap size={32} />, title: "Start Cleaning", desc: "Professional results instantly" }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="lg:w-1/2">
          <span className="text-[#D7C4A3] font-bold uppercase tracking-wider text-sm">Simple Process</span>
          <h2 className="text-4xl font-black mt-2 mb-10 text-gray-900">HOW IT WORKS</h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gray-900 text-white rounded-lg flex-shrink-0 flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-gray-900">{step.title}</h3>
                  <p className="text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-12 bg-[#D7C4A3] text-white px-8 py-3 rounded font-bold uppercase tracking-wider hover:bg-[#c5b08d] transition-colors">
            Start Now
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800" 
              alt="Worker" 
              className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white p-4 rounded shadow-lg max-w-xs border-l-4 border-[#D7C4A3]">
              <p className="font-bold text-gray-900">Professional Support</p>
              <p className="text-xs text-gray-500">We are here to help you set up.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
