const A2hero2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-0">
      <div className="shadow-lg w-full md:w-1/2 p-5 md:pr-20 md:pl-0 object-center">
        <img src="../../public/images/A1/Hero2_Dog.png" alt="Hero2 Dog" />
      </div>

      <div className="shadow-lg w-full md:text-3xl md:w-1/2 p-5 md:pr-0  space-y-10 md:space-y-4">
        <h1 className=" md:text-4xl
         text-orange-800 text-center font-bold lg:w-1020 text-6xl">
          เพื่อนซี่สีขาบ้านหมาคุณภาพ
        </h1>
        <p className="text-lg md:text-xl text-orange-800 text-center">
          เลอใดเล่าจะเท่า เลอเลม Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Recusandae dolore nemo perspiciatis ipsa veritatis
          eligendi facere aspernatur consequuntur voluptates!
        </p>
        <div className="flex justify-center w-full">
          <button className="text-xl md:text-2xl px-4 py-2 rounded text-yellow-700 hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1">
            MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default A2hero2;
