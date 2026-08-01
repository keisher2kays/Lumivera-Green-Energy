import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    const priceValue = product.priceValue || parseInt(String(product.price || '0').replace(/[^0-9]/g,'')) || 0;
    setCartItems(prev => {
      const id = product.id || product.name;
      const existing = prev.find(p => (p.id || p.name) === id);
      if (existing) {
        return prev.map(p => (p.id || p.name) === id? {...p, quantity: (p.quantity||1)+1 } : p);
      }
      return [...prev, {...product, priceValue, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(p => (p.id || p.name)!== id));
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((a, c) => a + (c.quantity || 1), 0);

  // These 2 names are what your Navbar.js expects
  const totalItems = cartCount;
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider value={{
      cartItems, setCartItems,
      isCartOpen, setIsCartOpen,
      isOpen: isCartOpen, setIsOpen: setIsCartOpen,
      totalItems, cartCount,
      openCart, closeCart,
      addToCart, removeFromCart, clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;