'use client';

import React, { createContext, useContext } from 'react';

const CartContext = createContext<any>({});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CartContext.Provider value={{ items: [] }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
