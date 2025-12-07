import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('superoar-cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('superoar-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getCartCount = () => items.reduce((sum, item) => sum + item.quantity, 0);
  
  const getCartTotal = () => items.reduce((sum, item) => {
    // Handle both number and string prices
    const price = typeof item.price === 'number' 
      ? item.price 
      : parseFloat(String(item.price).replace(/[^0-9.]/g, ''));
    return sum + (price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      openCart,
      closeCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartCount,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}
