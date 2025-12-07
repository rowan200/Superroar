
import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutModal from './CheckoutModal';

export default function CartDrawer() {
  const { items, getCartTotal, isOpen, closeCart, removeFromCart, updateQuantity } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const cartTotal = getCartTotal();

  if (!isOpen && !isCheckoutOpen) return null;

  const handleCheckout = () => {
    closeCart();
    setIsCheckoutOpen(true);
  };

  return (
    <>
      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />

      {/* Cart Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={closeCart}
          />
          
          {/* Drawer */}
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-40 shadow-2xl flex flex-col animate-slide-in">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-black flex items-center gap-2">
                <ShoppingBag size={24} />
                YOUR CART
              </h2>
              <button 
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                  <ShoppingBag size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Your cart is empty</p>
                  <button 
                    onClick={closeCart}
                    className="mt-4 text-primary font-bold hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-4 border-b pb-6">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-sm">{item.name}</h3>
                        <p className="text-primary font-bold">${item.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded border flex items-center justify-center hover:bg-gray-100"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded border flex items-center justify-center hover:bg-gray-100"
                          >
                            <Plus size={14} />
                          </button>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-red-500 text-sm hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500">Shipping & tax calculated at checkout</p>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                >
                  <Lock size={18} />
                  Secure Checkout
                </button>
                <button 
                  onClick={closeCart}
                  className="w-full border border-gray-300 text-gray-700 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
