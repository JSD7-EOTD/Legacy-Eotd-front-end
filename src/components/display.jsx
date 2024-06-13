import React from "react";
import "boxicons";
import MatRender from "./mat_render";
import Options from "./options";
import Addbutton from "./addbutton";

export default function Display() {
  return (
    <div className="flex flex-col items-center w-full md:flex-row md:justify-start md:items-start">
      <div className ="">
      <div>
      <img
        src="/images/pet_toys/pet_toys17.jpeg"
        alt="Pet Toy"
        className="w-[316px] h-[288px] rounded-3xl mt-8 md:ml-[11%] md:w-[760px] md:h-[640px] "
      />
      </div>
      </div>
      
      <section className="flex flex-col items-center mt-8 md:ml-[14%] md:justify-start md:items-start md:mt-8 ">
        <div className="flex items-center justify-center mb-10 ">
          <h1 className="font-semibold text-2xl md:text-3xl text-[#BD8356]">
            'useless'
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
            $20.99
          </h1>
          </div>
         
        <MatRender />
        <Options />
        <Addbutton/>
      </section>
     
    </div>
  );
}
