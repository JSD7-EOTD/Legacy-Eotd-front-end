import React, { useState } from "react";

function AddToCart() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  return (
    <tr className="border-2">
      <th className="border-2">
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td className="border-2">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="../../public/images/pet_tower/Pet_tower01.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold text-center md:text-left">Pet tower</div>
            <div className="text-sm opacity-50 text-center md:text-left">
              United States
            </div>
          </div>
        </div>
      </td>
      <td className="border-2 text-center md:text-left">
        <span className="badge badge-ghost badge-lg">$500.00</span>
      </td>
      <td className="border-2">
        <div className="flex items-center space-x-2 justify-center md:justify-start">
          <button
            onClick={decreaseQuantity}
            className="text-yellow-700 bg-stone-300 lg:text-xl rounded-3xl hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 w-8 h-8 md:w-10 md:h-10"
          >
            -
          </button>
          <p className="text-center md:text-left">{quantity}</p>
          <button
            onClick={increaseQuantity}
            className="text-yellow-700 bg-stone-300 lg:text-xl rounded-3xl hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 w-8 h-8 md:w-10 md:h-10"
          >
            +
          </button>
        </div>
      </td>
      <th className="border-2 text-center md:text-left">
        <button className="badge badge-ghost badge-lg">$1000.00</button>
      </th>
    </tr>
  );
}

export default AddToCart;
