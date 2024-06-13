import React from "react";

export default function MatRender() {
  return (
    <div className=" ">
      <div className="grid grid-cols-2 gap-4 md:mb-4">
        {/* Cell 1 */}
        <div className="w-[150px] h-[55px] md:w-[250px] md:h-[55px] bg-white flex pr-[55px]">
          <i>
            <box-icon
              name="leaf"
              color="#bd8356"
              border="circle"
              size="md"
            ></box-icon>
          </i>
          <p className="p-2">Material_1</p>
        </div>
        {/* Cell 2 */}
        <div className="w-[150px] h-[55px] md:w-[250px] md:h-[55px] bg-white flex  pr-[55px]">
          <i>
            <box-icon
              name="blanket"
              type="solid"
              color="#bd8356"
              border="circle"
              size="md"
            ></box-icon>
          </i>
          <p className="p-2">Material_2</p>
        </div>
        {/* Cell 3 */}
        <div className="w-[150px] h-[55px] md:w-[250px] md:h-[55px] bg-white flex  pr-[55px]">
          <i>
            <box-icon
              name="leaf"
              color="#bd8356"
              border="circle"
              size="md"
            ></box-icon>
          </i>
          <p className="p-2">Material_1</p>
        </div>
        {/* Cell 4 */}
        <div className="w-[150px] h-[55px] md:w-[250px] md:h-[55px] bg-white flex   pr-[55px]">
          <i>
            <box-icon
              name="leaf"
              color="#bd8356"
              border="circle"
              size="md"
            ></box-icon>
          </i>
          <p className="p-2">Material_1</p>
        </div>
        {/* Cell 5 */}
        <div className="w-[150px] h-[55px] md:w-[250px] md:h-[55px] bg-white flex   pr-[55px]">
          <i>
            <box-icon
              name="leaf"
              color="#bd8356"
              border="circle"
              size="md"
            ></box-icon>
          </i>
          <p className="p-2">Material_1</p>
        </div>
        {/* Cell 6 */}
        <div className="w-[150px] h-[55px] md:w-[250px] md:h-[55px] bg-white flex   pr-[55px]"></div>
      </div>
      <div className='flex pl-2 gap-4 justify-center md:justify-start'>
        <box-icon name="recycle" color="#a3ba9a"></box-icon>
        <box-icon name="dog" type="solid" color="#917d73"></box-icon>
        <box-icon name="cat" type="solid" color="#917d73"></box-icon>
        <box-icon type="solid" name="face" color="#917d73"></box-icon>
      </div>
    </div>
  );
}
