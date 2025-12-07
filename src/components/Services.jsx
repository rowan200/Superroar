import React from 'react';
import { Shield, Zap, Star, Truck } from 'lucide-react';

export default function Services() {
  const benefits = [
    { 
      icon: <Shield size={32} />, 
      title: "304 Stainless Steel Frames", 
      desc: "Industrial grade durability that resists rust and corrosion in the harshest environments." 
    },
    { 
      icon: <Zap size={32} />, 
      title: "Leak-Proof O-Ring System", 
      desc: "Advanced engineering ensures zero pressure loss and maximum cleaning efficiency." 
    },
    { 
      icon: <Star size={32} />, 
      title: "OEM Quality Pricing", 
      desc: "Direct-to-consumer pricing on professional equipment without the middleman markup." 
    },
    { 
      icon: <Truck size={32} />, 
      title: "Fast North Houston Shipping", 
      desc: "Same-day dispatch from our central warehouse for nationwide delivery." 
    }
  ];

  return (
    <section id="why-superoar" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2">
            <span className="text-[#D7C4A3] font-bold uppercase tracking-wider text-sm mb-2 block">Our Expertise</span>
            <h2 className="text-4xl font-black text-gray-900 mb-6">DISCOVER OUR SERVICES</h2>
            <p className="text-gray-600 mb-10 text-lg">
              We don't just assemble parts; we engineer solutions for professionals who demand reliability.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="bg-[#D7C4A3]/10 text-[#D7C4A3] w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center group-hover:bg-[#D7C4A3] group-hover:text-white transition-colors">
                    {React.cloneElement(benefit.icon, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-gray-900 text-white px-8 py-3 rounded font-bold uppercase tracking-wider hover:bg-[#D7C4A3] transition-colors">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" 
                alt="Services" 
                className="w-full h-full object-cover"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#D7C4A3] rounded-full -z-10 hidden md:block"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-[#D7C4A3] rounded-full -z-10 hidden md:block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
