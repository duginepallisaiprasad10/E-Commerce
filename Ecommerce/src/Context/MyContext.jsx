import React, { createContext, useState, useEffect } from 'react';
import { products, discoutProducts } from '../Data/Products';

export const globalContext = createContext();

export default function MyContext({ children }) {
  const [data, setData] = useState([]);
  const [discoutData, setDiscountData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchData = () => {
    setData(products);
    setDiscountData(discoutProducts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ✅ Add to Cart Logic
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);

      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <globalContext.Provider
      value={{ data, discoutData, cartItems, setCartItems, addToCart }}
    >
      {children}
    </globalContext.Provider>
  );
}
