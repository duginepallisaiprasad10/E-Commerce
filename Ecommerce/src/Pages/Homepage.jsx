import React from 'react';
import MySlider from './Slider';
import ServiceData from '../Components/ServiceData';
import DiscountProducts from '../Components/DiscountProducts';
import NewArrivals from '../Components/NewArrivals';
import BestSales from '../Components/BestSales';
import ProductDetails from './ProductsDetails';

function Homepage() {
  return (
    <div>
      <MySlider />
      <ServiceData />
      <DiscountProducts />
      <NewArrivals />
      <BestSales />
      <ProductDetails/>
    </div>
  );
}

export default Homepage;
