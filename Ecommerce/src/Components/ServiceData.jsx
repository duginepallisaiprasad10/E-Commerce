import React from 'react';
import {
  IoCarOutline,
  IoCardOutline,
  IoShieldCheckmarkOutline,
  IoHeadsetOutline,
} from 'react-icons/io5';

function ServiceData() {
  const serviceData = [
    {
      icon: <IoCarOutline className="text-3xl text-white" />,
      title: "Free Shipping",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#fdefe6",
      iconBg: "bg-blue-600",
    },
    {
      icon: <IoCardOutline className="text-3xl text-white" />,
      title: "Safe Payment",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#ceebe9",
      iconBg: "bg-green-600",
    },
    {
      icon: <IoShieldCheckmarkOutline className="text-3xl text-white" />,
      title: "Secure Payment",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#e2f2b2",
      iconBg: "bg-yellow-500",
    },
    {
      icon: <IoHeadsetOutline className="text-3xl text-white" />,
      title: "Back Guarantee",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#d6e5fb",
      iconBg: "bg-indigo-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 px-6 mb-5">
      {serviceData.map((item, index) => (
        <div
          key={index}
          className="p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          style={{ backgroundColor: item.bg }}
        >
          <div className={`p-4 rounded-full ${item.iconBg} flex items-center justify-center`}>
            {item.icon}
          </div>
          <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
          <p className="text-gray-600 mt-2">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}

export default ServiceData;
