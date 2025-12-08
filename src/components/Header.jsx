import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        NORTH HOUSTON BASED • NATIONWIDE SHIPPING • PROFESSIONAL GRADE EQUIPMENT
      </div>

      {/* Main Header */}
      <div className={`bg-primary shadow-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-5">
            <img 
              src="/logo/Superroar logo.png" 
              alt="SUPEROAR" 
              className={`transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-14 md:h-16'} w-auto`}
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
            <a href="tel:5551234567" className="hidden md:flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
              <Phone size={18} />
              <span className="font-bold text-sm">(555) 123-4567</span>
            </a>

            <a 
              href="#contact" 
              className="hidden md:inline-block bg-white text-gray-900 px-6 py-2.5 rounded font-bold text-sm hover:bg-gray-100 transition-colors uppercase tracking-wider shadow-md"
            >
              Get a Quote
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
                className="bg-white text-gray-900 px-5 py-3 rounded font-bold text-center mt-2 shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
              <a 
                href="tel:5551234567" 
                className="bg-gray-900 text-white px-5 py-3 rounded font-bold text-center flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={18} />
                Call Us Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
