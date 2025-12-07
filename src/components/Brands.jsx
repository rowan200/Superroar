import React from 'react';

export default function Brands() {
  const categories = [
    { name: "Pressure Washers", image: "https://images.unsplash.com/photo-1605218427360-6961d37485ad?auto=format&fit=crop&q=80&w=300" },
    { name: "Surface Cleaners", image: "https://images.unsplash.com/photo-1585336261022-aa8236314032?auto=format&fit=crop&q=80&w=300" },
    { name: "Accessories", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=300" }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-gray-900">OUR <span className="text-[#D7C4A3]">BRANDS</span></h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition-shadow">
            <div className="w-full aspect-[4/3] mb-6 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
              <img src={category.image} alt={category.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            
            {/* Logo Placeholder */}
            <div className="h-8 mb-4 opacity-50">
               {/* Replace with actual brand logos if available */}
               <span className="font-black text-xl text-gray-400 uppercase">{category.name.split(' ')[0]}</span>
            </div>

            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-900">{category.name}</h3>
            
            <button className="bg-[#D7C4A3] text-white px-8 py-2 rounded w-full hover:bg-[#c5b08d] transition-colors font-bold uppercase text-sm">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
