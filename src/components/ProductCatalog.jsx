import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCatalog() {
  const scrollRef = useRef(null);
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Professional Series 4000",
      price: "$899",
      gpm: "4.0 GPM",
      psi: "4000 PSI",
      image: "https://images.unsplash.com/photo-1605218427360-6961d37485ad?auto=format&fit=crop&q=80&w=600",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Heavy-Duty HD-5500",
      price: "$1,299",
      gpm: "5.5 GPM",
      psi: "5500 PSI",
      image: "https://images.unsplash.com/photo-1585336261022-aa8236314032?auto=format&fit=crop&q=80&w=600",
      badge: "New"
    },
    {
      id: 3,
      name: "Contractor Pro 3500",
      price: "$749",
      gpm: "3.5 GPM",
      psi: "3500 PSI",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600",
      badge: "Sale"
    },
    {
      id: 4,
      name: "Industrial Max 6000",
      price: "$1,599",
      gpm: "6.0 GPM",
      psi: "6000 PSI",
      image: "https://images.unsplash.com/photo-1598902168854-10e335adac55?auto=format&fit=crop&q=80&w=600",
      badge: "Pro Choice"
    },
    {
      id: 5,
      name: "Surface Cleaner X1",
      price: "$299",
      gpm: "Universal",
      psi: "4000 PSI",
      image: "https://images.unsplash.com/photo-1533460004989-acf88a8bc499?auto=format&fit=crop&q=80&w=600",
      badge: "Accessory"
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="products" className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black text-gray-900">PRODUCT CATALOG</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll('left')} className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <button onClick={() => scroll('right')} className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[300px] md:min-w-[350px] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all snap-start group">
            <div className="relative h-64 bg-gray-100 p-4 flex items-center justify-center">
              {product.badge && (
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">
                  {product.badge}
                </span>
              )}
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="p-6">
              <div className="flex gap-2 mb-3">
                <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded text-gray-600">{product.gpm}</span>
                <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded text-gray-600">{product.psi}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="bg-gray-900 text-white p-3 rounded-lg hover:bg-primary transition-colors"
                >
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
