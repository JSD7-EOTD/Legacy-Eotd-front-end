const A1hero = () => {
  return (
    <div className="h-960px flex- sm:flex-row sm:px-[40px] md:px-[40px] lg:px-[40px] ">
      <div className="flex justify-center w-full">
        <h1
          className="text-orange-800  sm:w-[425px] sm:font-bold text-center   text-3xl md:flex sm:space-y-52 sm:px-[40px] 
           "
        >
          จงเป็นทาสที่ดี<br></br>และทาสที่เชื่อฟัง
        </h1>
      </div>
      <div>
        <p className=" text-center sm:space-y-52 sm:px-[40px] sm:pt-6 ">
          เลอใดเล่าจะเท่า เลอเลม Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laudantium, repellendus illum! Accusantium nesciunt
          deserunt fugiat commodi, eaque ipsa minima?
        </p>
      </div>
      <div className="flex justify-center w-full ">
        <button className="text-xl md:text-2xl px-4 py-2 rounded text-yellow-700 hover:bg-gradient-to-r from-[#794222] to-[#BD8356] hover:text-white transition-all duration-300 transform hover:translate-x-1 space-y-12 sm:pt-6 ">
          MORE
        </button>
      </div>

      <div className="flex shadow-sm sm:space-y-12 sm:p-8 ">
        <img src="../../public/images/A1/Hero_1 Cat.png" alt="" />
      </div>
    </div>
  );
};

export default A1hero;
