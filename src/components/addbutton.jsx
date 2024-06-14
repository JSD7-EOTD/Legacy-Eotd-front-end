import React, { useState } from 'react';

export default function Options() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="flex items-center space-x-4 mt-10 justify-center md:justify-start">
        <button
          onClick={decreaseQuantity}
          className="text-yellow-700 bg-stone-300 lg:text-xl rounded-3xl hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 w-[54px] h-[54px]"
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          onClick={increaseQuantity}
          className="text-yellow-700 bg-stone-300 lg:text-xl rounded-3xl hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 w-[54px] h-[54px]"
        >
          +
        </button>
      </div>
      <div className="flex items-center space-x-4 mt-10 justify-center md:justify-start">
        <button className="text-white bg-yellow-700 lg:text-xl px-4 py-2 rounded-2xl hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 whitespace-nowrap">
          order now
        </button>
        <button className="text-white bg-yellow-700 lg:text-xl px-4 py-2 rounded-2xl hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 whitespace-nowrap">
          add to cart
        </button>
      </div>
    </div>
  );
}
