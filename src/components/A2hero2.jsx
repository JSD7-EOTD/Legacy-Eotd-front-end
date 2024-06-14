const A2hero2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 sm:px-10 md:px-10 lg:px-10">
      <div className="shadow-lg w-full md:w-1/2 p-5 md:pr-20 md:pl-0 px-10">
        <img
          src="../../public/images/A1/Hero2_Dog.png"
          alt="Hero2 Dog"
          className="object-center w-full"
        />
      </div>

      <div className="shadow-lg w-full md:w-1/2 p-5 space-y-6 md:space-y-4">
        <h1 className="text-4xl md:text-6xl text-orange-800 text-center font-bold">
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
