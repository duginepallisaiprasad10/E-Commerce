import React from 'react';
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cart = useSelector((state) => state.products.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
  );
}

export default Header;
