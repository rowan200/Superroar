import React from 'react';
import { Zap } from 'lucide-react';

export default function Info() {
  return (
    <section className="container mx-auto px-4 py-16 text-center max-w-3xl">
      <h2 className="text-3xl font-black mb-8 text-gray-900">OEM <span className="text-[#D7C4A3]">QUALITY</span></h2>
      
      <div className="space-y-6 text-gray-600 leading-relaxed text-base">
        <p>
          At SUPEROAR, we specialize exclusively in high-performance pressure washing equipment 
          designed for professionals who demand reliability. We source and deliver equipment 
          that meets the highest industry standards.
        </p>
        
        <p className="font-bold text-gray-800 text-lg">
          Our commitment to you:
        </p>
        
        <p>
          When your equipment arrives, you'll have everything you need to get started immediately.
          Our machines are pre-tested and ready to perform right out of the box.
          No hidden costs, no surprises – just industrial-grade power.
        </p>
        
        <p>
          We offer comprehensive support including setup guides, troubleshooting assistance, 
          and access to replacement parts. Our team in North Houston is always ready to help.
        </p>
        
        <p>
          Whether you're a solo operator or running a fleet, we provide the same level of 
          service and quality equipment trusted by professionals nationwide.
        </p>
      </div>

      <div className="flex justify-center mt-12">
         {/* Decorative element similar to the grass patch in the design */}
         <div className="w-24 h-1 bg-[#D7C4A3] rounded-full"></div>
      </div>
    </section>
  );
}
