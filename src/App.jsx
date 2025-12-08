import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Brands from './components/Brands';
import Accessories from './components/Accessories';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Services />
        <HowItWorks />
        <Gallery />
        <Info />
        <Brands />
        <Accessories />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          {/* Footer Top */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & About */}
            <div className="md:col-span-2">
              <img 
                src="/logo/Superroar logo.png" 
                alt="SUPEROAR" 
                className="h-12 w-auto brightness-0 invert mb-4"
              />
              <p className="text-gray-500 mb-6 max-w-md">
                Professional-grade pressure washing equipment built for contractors and businesses. 
                North Houston based, shipping nationwide.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-gray-900 transition-colors"><Facebook size={18} /></a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-gray-900 transition-colors"><Instagram size={18} /></a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-gray-900 transition-colors"><Twitter size={18} /></a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-primary hover:text-gray-900 transition-colors"><Linkedin size={18} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#products" className="hover:text-primary transition-colors">Our Products</a></li>
                <li><a href="#why-superoar" className="hover:text-primary transition-colors">Why SUPEROAR</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-primary" />
                  <span>North Houston, TX</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-primary" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-primary" />
                  <span>sales@superoar.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 text-sm">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">Warranty</a>
              <a href="#" className="hover:text-white transition-colors">Returns</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
            <p>&copy; 2025 SUPEROAR Equipment. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
