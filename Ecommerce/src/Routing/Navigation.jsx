import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../Pages/Homepage';
import ShopPage from '../Pages/ShopPage';
import CartPage from '../Pages/CartPage'; //  Corrected
import ProductsDetails from '../Pages/ProductsDetails';

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product/:id" element={<ProductsDetails />} />
    </Routes>
  );
}

export default Navigation;
