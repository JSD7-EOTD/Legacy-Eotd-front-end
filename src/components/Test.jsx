import React from "react";

const Test = () => {
  return (
    <section className="relative flex justify-center items-center z-10">
      <div className="absolute lg:bottom-24 bottom-24 xl:mb-28 xl:mr-[604px]">
        <h1 className="font-bold text-[#EDBF9A] text-[32px] px-4  lg:w-2/3    sm:text-[36px] md:text-[46px] lg:text-[64px]">
          จงเป็นทาสที่ดี
          <br />
          เป็นทาสที่เชื่อฟัง
        </h1>
        <p className="text-[16px] text-white px-4  w-full">
          เลอใดเล่าจะเท่า เลอเลม Lorem ipsum dolor <br /> sit amet consectetur
          adipisicing elit. Nobis <br />
          assumenda sapiente doloremque, aliquid <br /> porro expedita minus
          libero ex incidunt.
        </p>
        <div>
          <button className="text-xl md:text-2xl px-4 py-2 rounded text-yellow-700 hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1">
            MORE
          </button>
        </div>
      </div>
      <div className="w-full md:w-[1600px] h-[700px] flex justify-center ">
        <div className="w-full h-full">
          <img
            className="h-full w-full object-cover"
            src="../../public/images/A1/Hero_1 Cat.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Test;
