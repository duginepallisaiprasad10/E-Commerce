import React from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-2 ">
            <FaShoppingBag className="text-3xl" />
            <h3 className="text-3xl font-semibold">Mart</h3>
          </div>
          <p className="text-1sm text-gray-300 ">
            We provide top quality products at the best prices. Shop with confidence and enjoy fast delivery.
          </p>
        </div>

        {/* About Links */}
        <div className='ml-13'>
          <h3 className="text-2xl font-semibold mb-3">About Us</h3>
          <ul className="space-y-2 text-1sm text-gray-300 ">
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Our Cares</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Customer Care Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Customer Care</h3>
          <ul className="space-y-2 text-1sm text-gray-300">
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Track Your Order</li>
            <li>Corporate & Bulk Purchasing</li>
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-1sm text-gray-300 mb-4">
            <li>3-142, Sairam Colony, Puttaparthi, Andhra Pradesh</li>
            <li>Email: duginepallisaiprasad1025@gmail.com</li>
            <li>Phone: +91 93915 94125</li>
          </ul>
          <div className="flex space-x-4 text-white text-lg">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-8 text-sm text-white-500">
         <div className="mt-1">Made by <span className="font-semibold text-white text-1xl">Saiprasad Duginepalli ❤️</span></div>
        @Mart. All rights reserved.
      </div>
    </footer>
  );
}
