import React, { useEffect, useState } from "react";
import "boxicons";
import MatRender from "./mat_render";
import Options from "./options";
import Addbutton from "./addbutton";
import { useParams } from "react-router-dom";
import axios from "axios";
import Description from "./description";

export default function Display() {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  console.log(id);
  async function getProduct() {
    try {
      const response = await axios.get(
        "https://store-crud.onrender.com/api/product/" + id
      );
      const data = await response.data;
      setProduct(data);
      console.log(product);
    } catch (error) {
      console.error("Failed", error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex flex-col items-center w-full md:flex-row md:justify-start md:items-start">
      <div className="">
        <div>
          <img
            src={product.image}
            alt="Pet Toy"
            className="w-[316px] h-[288px] object-cover rounded-3xl mt-8 md:ml-[11%] md:w-[760px] md:h-[640px] "
          />
        </div>
      </div>

      <section className="flex flex-col items-center mt-8 md:ml-[14%] md:justify-start md:items-start md:mt-8 ">
        <div className="flex items-center justify-center mb-10 ">
          <h1 className="font-semibold text-2xl md:text-3xl text-[#BD8356]">
            {product.name}
          </h1>
          <div className=" md: ml-4">
            <box-icon
              name="bookmark-heart"
              color="#794222"
              // type = "solid"
              size="md"
            ></box-icon>
          </div>
        </div>

        <div className="flex items-center justify-center mb-8 md:mb-10 md:justify-start">
          <h1 className="font-semibold text-2xl md:text-3xl text-[#794222]">
            {product.price}
          </h1>
        </div>

        <MatRender />
        <Options />
        <Addbutton />
        <Description product={product} />
      </section>
    </div>
  );
}
