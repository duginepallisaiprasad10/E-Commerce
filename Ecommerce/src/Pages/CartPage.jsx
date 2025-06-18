import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../ReduxToolKit/productsSlice";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Empty Cart UI
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] bg-[#f5f9fd] text-center space-y-6">
        <p className="text-3xl font-semibold text-red-600">Your cart is empty.</p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
         ← Continue Shopping
        </Link>
      </div>
    );
  }

  return (
<div className="flex flex-col md:flex-row p-6 bg-[#f5f9fd] min-h-screen gap-8 mt-[100px]">      {/* Left - Cart Items */}
      <div className="w-full md:w-2/3 ml-4 ">
        <h1 className="text-3xl font-bold mb-4 ml-7 text-gray-800">Shopping Cart</h1>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col md:flex-row items-center justify-between bg-white shadow-md p-5 rounded-2xl mb-5 h-50 w-190"
          >
            {/* Remove Button */}
            <button
              onClick={() => dispatch(removeFromCart({ id: item.id }))}
              className="absolute top-4 right-4 text-black-800 "
            >
              <IoClose size={22} />
            </button>

            {/* Product Info */}
            <div className="flex items-center gap-6 md:w-2/3">
              <img
                src={item.imgUrl}
                alt={item.productName}
                className="w-[180px] h-[200px] object-contain"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800 ">
                  {item.productName}
                </h2>

                <div className="flex items-center gap-6 mt-2">
                  <p className="text-gray-600">${item.price} × {item.quantity}</p>
                  <p className="text-md text-blue-700 font-bold">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 mt-6 md:mt-8">
              <button
                onClick={() => dispatch(decrementQuantity({ id: item.id }))}
                className="bg-gray-200 px-3 py-1 rounded text-gray-800 hover:bg-gray-300"
              >
                -
              </button>
              <span className="text-lg font-medium">{item.quantity}</span>
              <button
                onClick={() => dispatch(incrementQuantity({ id: item.id }))}
                className="bg-gray-200 px-3 py-1 rounded text-gray-800 hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right - Cart Summary */}
      <div className="w-full md:w-1/3 mr-10 bg-white shadow-xl p-6 rounded-2xl h-fit mt-4 md:mt-10 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Cart Summary</h2>
        <hr className="border-black-300 my-4" />
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between text-gray-700">
              <span>{item.productName}</span>
              <span>${item.price} × {item.quantity}</span>
            </div>
          ))}
          <hr className="border-gray-300 my-4" />
          <div className="flex justify-between text-xl font-semibold">
            <span>Total Price:</span>
            <span className="text-black-700">${grandTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
