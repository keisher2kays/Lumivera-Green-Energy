
// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product) => {
    setItems((prev) => {
      // Differentiate items by name AND region so UK and Zim items don't collide
      const existing = prev.find((i) => i.name === product.name && i.region === product.region);
      if (existing) {
        return prev.map((i) =>
          i.name === product.name && i.region === product.region
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (idKey) => {
    setItems((prev) => prev.filter((i) => `${i.name}-${i.region}` !== idKey));
  };

  const updateQuantity = (idKey, quantity) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((i) => (`${i.name}-${i.region}` === idKey ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => setItems([]);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isOpen,
        openCart,
        closeCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};