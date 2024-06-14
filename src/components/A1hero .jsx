const A1hero = () => {
  return (
    <section className=" flex flex-col relative     ">
      <div className="absolute  start-32 bottom-32 ">
        <div className="">
          <h1 className="shadow lg p-5 font-bold text-[#EDBF9A] text-[24px] sm:text-[36px] md:text-[46px] lg:text-[64px]">
            จงเป็นทาสที่ดี
            <br />
            เป็นทาสที่เชื่อฟัง
          </h1>
        </div>

        <div className=" mx-auto">
          <p className="text[16px] shadow lg p-5 text-white">
            เลอใดเล่าจะเท่า เลอเลม Lorem ipsum dolor <br /> sit amet consectetur
            adipisicing elit. Nobis <br />
            assumenda sapiente doloremque, aliquid <br /> porro expedita minus
            libero ex incidunt.
          </p>
        </div>

        <div className=" ">
          <button className="text-xl md:text-2xl px-4 py-2 rounded text-yellow-700 hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1">
            MORE
          </button>
        </div>
      </div>

      <div className="  mx-auto w-full md:w-full flex justify-center lg:w-full">
        <img
          src="../../public/images/A1/Hero_1 Cat.png"
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
};
export default A1hero;
