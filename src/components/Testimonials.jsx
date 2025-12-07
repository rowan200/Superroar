import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Mike Thompson",
      role: "Thompson Pressure Washing",
      text: "The 304 stainless frame is a game changer. No more rust stains on my truck bed. This machine is a beast.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Clean & Clear Services",
      text: "Shipping was incredibly fast. Ordered on Tuesday, arrived in Houston on Wednesday. Ready to work right out of the box.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      role: "Pro Wash LLC",
      text: "Best value for money in the market. The PSI is true to spec and the pump runs cool even after 8 hours of continuous use.",
      rating: 5
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-black text-center mb-16">TRUSTED BY PROFESSIONALS</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#D7C4A3] relative">
            <Quote className="absolute top-4 right-4 text-gray-100 w-12 h-12" />
            <div className="flex gap-1 mb-4 text-[#D7C4A3]">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-600 mb-6 italic relative z-10">"{review.text}"</p>
            <div>
              <p className="font-bold text-gray-900">{review.name}</p>
              <p className="text-sm text-gray-500">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
