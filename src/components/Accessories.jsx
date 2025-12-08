import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Accessories() {
  const products = [
    { 
      id: 'acc-1',
      name: "50ft High Pressure Hose", 
      description: "Heavy-duty hose rated for 4000+ PSI",
      image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=300" 
    },
    { 
      id: 'acc-2',
      name: "Turbo Nozzle Kit", 
      description: "Professional 5-piece nozzle set",
      image: "https://images.unsplash.com/photo-1621236378699-8597fab6a0b2?auto=format&fit=crop&q=80&w=300" 
    },
    { 
      id: 'acc-3',
      name: "Surface Cleaner Attachment", 
      description: "20\" diameter for fast coverage",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=300" 
    }
  ];

  return (
    <section id="accessories" className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
          <span className="text-primary">ACCESSORIES</span> & PARTS
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Complete your setup with professional-grade accessories designed to maximize performance and efficiency.
        </p>
      </div>
      
      <div className="bg-primary text-gray-900 text-center py-4 font-bold mb-12 rounded-lg uppercase tracking-wider shadow-md">
        ✓ Premium Quality &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Fast Shipping &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Expert Support
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group border border-gray-200 p-6 rounded-xl flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 relative bg-white hover:border-primary">
            <div className="absolute top-4 right-4 bg-primary text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase">
              In Stock
            </div>
            <div className="h-48 w-full flex items-center justify-center mb-6 overflow-hidden rounded-lg">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{product.description}</p>
            <a 
              href="#contact"
              className="bg-gray-900 hover:bg-primary text-white px-6 py-3 rounded-lg w-full transition-colors font-bold flex items-center justify-center gap-2 mt-auto"
            >
              Request Quote
              <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Need something specific? We carry a full range of parts and accessories.</p>
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
        >
          Contact us for availability
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
