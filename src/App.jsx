import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductCatalog from './components/ProductCatalog';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Info from './components/Info';
import Brands from './components/Brands';
import Accessories from './components/Accessories';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white font-sans text-gray-900">
        <Header />
        <CartDrawer />
        <main>
          <Hero />
          <Categories />
          {/* <ProductCatalog /> */}
          <Services />
          <HowItWorks />
          <Gallery />
          <Info />
          <Brands />
          <Accessories />
          {/* <Testimonials /> */}
          <Contact />
        </main>
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
              <img 
                src="/logo/Superroar logo.png" 
                alt="SUPEROAR" 
                className="h-10 w-auto brightness-0 invert"
              />
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
            
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
    </CartProvider>
  );
}

export default App;
