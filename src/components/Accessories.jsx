import React from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Accessories() {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = React.useState({});

  const products = [
    { 
      id: 'acc-1',
      name: "50ft High Pressure Hose", 
      price: 89, 
      image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&q=80&w=300" 
    },
    { 
      id: 'acc-2',
      name: "Turbo Nozzle Kit", 
      price: 129, 
      image: "https://images.unsplash.com/photo-1621236378699-8597fab6a0b2?auto=format&fit=crop&q=80&w=300" 
    },
    { 
      id: 'acc-3',
      name: "Surface Cleaner Attachment", 
      price: 299, 
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=300" 
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section id="accessories" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-black mb-8 text-center text-gray-900">
        <span className="text-primary">ACCESSORIES</span> & PARTS
      </h2>
      
      <div className="bg-primary text-white text-center py-3 font-bold mb-12 rounded uppercase tracking-wider">
        Free Shipping on Orders Over $500
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 p-4 rounded-lg flex flex-col items-center text-center hover:shadow-lg transition-shadow relative bg-white">
            <div className="absolute top-4 right-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
              NEW
            </div>
            <div className="h-48 w-full flex items-center justify-center mb-4">
              <img src={product.image} alt={product.name} className="max-h-full object-contain" />
            </div>
            <h3 className="font-bold mb-2 h-12 overflow-hidden text-gray-900">{product.name}</h3>
            <p className="text-2xl font-black mb-1 text-primary">${product.price}</p>
            <p className="text-xs text-gray-500 mb-4">+ Free Shipping</p>
            <button 
              onClick={() => handleAddToCart(product)}
              className={`${
                addedItems[product.id] 
                  ? 'bg-green-600' 
                  : 'bg-gray-900 hover:bg-primary'
              } text-white px-8 py-2 rounded w-full transition-colors mt-auto font-bold flex items-center justify-center gap-2`}
            >
              {addedItems[product.id] ? (
                <>
                  <Check size={18} />
                  Added!
                </>
              ) : (
                <>
                  <ShoppingCart size={18} />
                  Add to Cart
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
