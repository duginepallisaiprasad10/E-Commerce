import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from '../Data/Products';

export default function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-23 px-4 shadow-md ">
      <Slider {...settings}>
        {SliderData.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 bg-white p-6 md:p-10 rounded-xl">
              <div className="w-[100%] md:w-1/2 text-center md:text-left my-30 py-5">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
                  {item.title}
                </h2>
                <p className="text-lg text-gray-600">{item.desc}</p>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-100 text-gray text-lg rounded cursor-pointer transition"
                >
                  Visit Collection
                </button>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-[100%] h-[430px] object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
