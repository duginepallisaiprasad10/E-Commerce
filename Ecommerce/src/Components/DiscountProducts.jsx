import React, { useContext, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { globalContext } from "../Context/MyContext";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxToolKit/productsSlice";

export default function DiscountProducts() {
  const { discoutData } = useContext(globalContext);
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

              {/* Price and + button */}
              <div className="flex items-center justify-between mt-3">
                <p className="text-xl font-bold text-green-700">
                  ${item.price}
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
        ))}
      </div>
    </div>
  );
}
