import React from 'react';

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1585336261022-aa8236314032?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1598902168854-10e335adac55?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1605218427360-6961d37485ad?auto=format&fit=crop&q=80&w=400"
  ];

  return (
    <section id="gallery" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-black mb-12 text-gray-900">BUILT FOR <span className="text-[#D7C4A3]">ACTION</span></h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow group">
              <img 
                src={src} 
                alt={`Work ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
