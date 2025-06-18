import React, { useContext, useState } from "react";
import banner from "../Images/table.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { globalContext } from "../Context/MyContext";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxToolKit/productsSlice";


export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const { data } = useContext(globalContext);
  const[showMessage,setShowMessage]=useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  

  const filteredData = data.filter((item) => {
    const categoryMatch =
      selectedCategory === "default" ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();

    const searchMatch =
      item.productName
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(searchTerm.toLowerCase().replace(/\s/g, "")) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div>

{showMessage && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
          Product added to cart!
        </div>
      )}

      {/* Banner */}
            <div className="relative w-full mb-10">
        <img src={banner} alt="Banner" className="w-full h-[250px] object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold bg-opacity-10 px-6 py-3 rounded-lg shadow-1lg mt-15">
            Products
          </h1>
        </div>
      </div>

      {/* Filters */}
      <div className="flex mx-5 py-6 gap-10 ">
        {/* Dropdown */}
        <div className="relative w-[350px] ml-4 ">
          <div className="flex justify-between items-center border border-gray-500 rounded-xl bg-gray-700 text-white font-bolder shadow-md px-4 py-3 ">
            <span className="whitespace-nowrap text-lg">Select your Category</span>
            <span className="border-l-2 border-gray-400 h-5 mx-4"></span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-[280px] bg-white text-gray-700 font-medium py-2 px-3 rounded-md cursor-pointer focus:outline-none"
            >
              <option value="default">All</option>
              <option value="sofa">Sofa</option>
              <option value="chair">Chair</option>
              <option value="watch">Watch</option>
              <option value="mobile">Mobile</option>
              <option value="wireless">Wireless</option>
            </select>
          </div>
        </div>


        {/* Search Box */}
        <div className="relative w-[550px] ml-50">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl px-4 h-[50px] focus:outline-none shadow-md pr-12 mt-2"
          />
          <IoSearchOutline className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-700 text-2xl" />
        </div>
      </div>

      {/* Product List */}
      <div className="px-6">
        {filteredData.length === 0 ? (
          <p className="text-red-500 text-xl col-span-full text-center">No products found.</p>
        ) : (
          Array.from({ length: Math.ceil(filteredData.length / 3) }).map((_, rowIndex) => {
            const rowItems = filteredData.slice(rowIndex * 3, rowIndex * 3 + 3);

            return (
