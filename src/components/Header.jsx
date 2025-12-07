import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount, openCart } = useCart();
  const cartCount = getCartCount();

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Why SUPEROAR', href: '#why-superoar' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 text-center text-xs font-medium tracking-wide">
        <span className="hidden sm:inline">🚚 </span>
        NORTH HOUSTON BASED • NATIONWIDE SHIPPING • FREE SHIPPING OVER $500
      </div>

      {/* Main Header */}
      <div className="bg-primary shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-5">
            <img 
              src="/logo/Superroar logo.png" 
              alt="SUPEROAR" 
              className="h-14 md:h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-bold text-sm uppercase tracking-wider text-white">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-gray-200 transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a href="#" className="hidden md:flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
              <Package size={18} />
              <span className="font-bold text-sm">Track</span>
            </a>
            
            <button 
              onClick={openCart}
              className="relative p-2 text-white hover:text-gray-200 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            <a 
              href="#contact" 
              className="hidden md:inline-block bg-white text-primary px-5 py-2 rounded font-bold text-sm hover:bg-gray-100 transition-colors uppercase tracking-wider"
            >
              Contact Sales
            </a>

            <a 
              href="#products" 
              className="hidden lg:inline-block bg-gray-900 text-white px-5 py-2 rounded font-bold text-sm hover:bg-gray-800 transition-colors uppercase tracking-wider"
            >
              Shop Now
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-primary border-t border-white/20 pb-4">
            <nav className="container mx-auto px-4 flex flex-col gap-4 py-4">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-white font-bold text-lg py-2 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-white text-primary px-5 py-3 rounded font-bold text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Sales
              </a>
              <a 
                href="#products" 
                className="bg-gray-900 text-white px-5 py-3 rounded font-bold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
