import React from 'react';

export default function Categories() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Residential */}
        <div className="relative h-[500px] group overflow-hidden rounded-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=800")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
            <div className="mt-8">
              <h3 className="text-3xl font-black mb-2 uppercase tracking-wider">RESIDENTIAL</h3>
              <div className="h-1 w-20 bg-[#D7C4A3] mb-4"></div>
              <p className="max-w-sm text-gray-200 font-medium">
                Perfect for driveways, patios, decks, and home maintenance. 
                Our residential units deliver professional results for homeowners.
              </p>
            </div>
            <button className="bg-[#D7C4A3] text-white px-8 py-3 font-bold hover:bg-[#c5b08d] transition-colors w-full md:w-auto self-start rounded uppercase tracking-wider">
              Shop Residential
            </button>
          </div>
        </div>

        {/* Commercial */}
        <div className="relative h-[500px] group overflow-hidden rounded-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?auto=format&fit=crop&q=80&w=800")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
            <div className="mt-8">
              <h3 className="text-3xl font-black mb-2 uppercase tracking-wider">COMMERCIAL</h3>
              <div className="h-1 w-20 bg-[#D7C4A3] mb-4"></div>
              <p className="max-w-sm text-gray-200 font-medium">
                Built for contractors and fleet operations. 
                High GPM units designed for daily commercial use and maximum efficiency.
              </p>
            </div>
            <button className="bg-[#D7C4A3] text-white px-8 py-3 font-bold hover:bg-[#c5b08d] transition-colors w-full md:w-auto self-start rounded uppercase tracking-wider">
              Shop Commercial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
