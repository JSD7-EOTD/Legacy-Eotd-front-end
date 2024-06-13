import React from "react";

// Factory function to create category items
const createCategoryItem = (src, alt, label) => {
  return (
    <div className="mb-16">
      <img
        src={src}
        alt={alt}
        className="w-[98px] h-[142px] rounded-full overflow-hidden border-4 border-orange-900 border-solid divide-x shadow-xl object-scale-down"
      />
      <p className="mt-2 text-brown-500 text-orange-900 text-center font-bold">
        {label}
      </p>
    </div>
  );
};

const Test = () => {
  return (
    <section className="h-[580px] mx-10 justify-items-center  ">
      {" "}
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-0 sm:flex-row sm:gap-0">
        <h2 className="text-2xl font-semibold text-orange-900 mt-8 w-[354px] h-[32px] mb-16 text-center sm:text-[32px]  ">
          Category
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-0 sm:flex-row sm:gap-0">
        <h1 className="text-2xl font-semibold text-orange-900 mt-2 w-[354px] h-[90px] mb-16 text-center sm:text-[32px]">
          สินค้าคัดสรรจากคนรักสัตว์เพื่อสัตว์เลี้ยงของคุณ
        </h1>
      </div>
      <div className="flex flex-wrap justify-center space-x-8 mt-6">
        {createCategoryItem(
          "../../public/images/CategoryA1/Toys.png",
          "Toys",
          "Toys"
        )}
        {createCategoryItem(
          "../../public/images/CategoryA1/Towers.png",
          "Towers",
          "Towers"
        )}
        {createCategoryItem(
          "../../public/images/CategoryA1/toilets.png",
          "Toilets",
          "Toilets"
        )}
        {createCategoryItem(
          "../../public/images/CategoryA1/feeder.png",
          "Feeder",
          "Feeder"
        )}
      </div>
    </section>
  );
};

export default Test;
