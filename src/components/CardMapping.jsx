import React from "react";

function CardMapping({ productList }) {
  return (
    <div className="pt-8 flex flex-wrap justify-center lg:justify-between lg:items-between ">
      {productList.map((product) => (
        <div
          key={product.id}
          className="card border-2 w-full sm:w-[300px] md:w-[350px] lg:w-[368px] xl:w-[368px] 2xl:w-[368px] h-[480px] bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        >
          <figure className="h-48 w-full overflow-hidden">
            <img
              src={product.sprites.front_default}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="p-4">
            <h2 className="card-title text-2xl font-bold mb-2 text-gray-800">
              {product.name}
            </h2>
            <p className="text-gray-600 mb-4">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions flex justify-between items-center">
              <p className="text-xl font-bold text-[#BD8356]">$10</p>
              <button className="text-yellow-700 lg:text-xl px-2 py-1 rounded hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardMapping;
