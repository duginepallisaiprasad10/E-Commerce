import React from 'react';
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cart = useSelector((state) => state.products.cart);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
     <header className="bg-white shadow-md px-8 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <Link to="/" className="flex items-center gap-2 mx-[50px]">
        <FaShoppingBag className="text-black-600 text-3xl" />
        <h1 className="text-3xl font-bold">Mart</h1>
      </Link>

      <ul className="flex gap-10 mx-[70px] items-center text-gray-700 text-2xl font-medium">
        <li className='hover:text-red-500'><Link to="/">Home</Link></li>
        <li className='hover:text-red-500'><Link to="/shop">Shop</Link></li>
        <li className='hover:text-red-500'><Link to="/cart">Cart</Link></li>
        <li className='hover:text-red-500'><FaUser className="text-2xl cursor-pointer" /></li>
        <li className="relative hover:text-red-500">
          <Link to="/cart">
            <FaShoppingCart className="text-2xl cursor-pointer hover:text-red-700" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-sm px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </header>
 );
}

export default Header;
