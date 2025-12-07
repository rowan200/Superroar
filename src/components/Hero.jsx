import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-[700px] w-full mt-[100px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=2000")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 h-full flex items-center justify-end relative z-10">
        <div className="bg-white p-8 max-w-md shadow-2xl rounded-lg relative mt-20 md:mt-0 mr-0 md:mr-20">
          {/* Price Tag Simulation (using existing colors) */}
          <div className="absolute -top-4 right-4 bg-white border border-gray-200 px-4 py-1 shadow-sm text-sm font-bold text-gray-900 transform rotate-2">
            PREMIUM QUALITY
          </div>
          
          <h1 className="text-3xl font-black text-gray-900 mb-4 leading-tight uppercase">
            INDUSTRIAL POWER.<br />
            <span className="text-[#D7C4A3]">BUILT FOR PROFESSIONALS.</span>
          </h1>
          <p className="text-gray-600 mb-6 text-sm font-medium leading-relaxed">
            High-performance OEM pressure-washing gear engineered for the toughest jobs.
            Experience the difference of professional grade equipment.
          </p>
          <button className="bg-[#D7C4A3] text-white px-8 py-3 w-full font-bold text-sm uppercase tracking-wider hover:bg-[#c5b08d] transition-colors rounded shadow-md">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
