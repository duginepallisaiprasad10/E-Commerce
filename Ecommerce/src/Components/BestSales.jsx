import React, { useContext, useState } from "react";
import { globalContext } from "../Context/MyContext";
import { FaHeart } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxToolKit/productsSlice";

export default function BestSales() {
  const { data } = useContext(globalContext);
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch(); // ✅ Initialize dispatch

  const handleAddToCart = (item) => {
    const product = {
      ...item,
      quantity: 1,
    };
    dispatch(addToCart(product)); // ✅ Add to cart via Redux

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sales = data.filter(
    (item) => item.category === "sofa" || item.category === "chairs"
  );

  return (
    <div className="px-[1%] lg:px-[2%] ml-8">
      {showMessage && ( //message
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          Product added to cart!
        </div>
      )}
      {/* Heading */}
      <div className="flex justify-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Best Sales</h1>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {sales.map((item, index) => {
          const isLastCardCentered =
            sales.length % 3 === 1 && index === sales.length - 1;

          return (
            <div
              key={item.id}
              className={`bg-white shadow-lg rounded-xl w-90 max-w-sm overflow-hidden group relative ${
                isLastCardCentered ? "md:col-start-2" : ""
              }`}
            >
              {/* Image Section */}
              <div className="relative">
                {/* Heart Icon */}
                <span className="absolute top-3 right-3 text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition">
                  <FaHeart size={20} />
                </span>

                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.imgUrl}
                    alt={item.productName}
                    className="w-full h-78 object-contain p-4"
                  />
                </Link>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {item.productName}
                </h2>

                {/* Rating */}
                <div className="flex items-center text-yellow-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <IoStarSharp key={i} />
                  ))}
                </div>

                {/* Price and + Button */}
                <div className="flex items-center justify-between mt-3">
                  <p className="text-xl font-bold text-green-700">
                    ₹{item.price}
                  </p>
                  <button
                    onClick={() => handleAddToCart(item)} // ✅ Pass the item to the function
                    className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-1 rounded-full text-lg font-medium cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
