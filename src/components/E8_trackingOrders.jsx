import React from "react";
import "boxicons";
import E6_upcomingOrders from "./E6_upcomingOrders";
import E7_previousOrders from "./E7_previousOrders";

const E8_trackingOrders = () => {
  return (
    <div className="container mx-auto">
      <div className="px-4 py-4 flex flex-col gap-20">
        {/* Upcoming orders */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#BD8356]">
          Upcoming orders
        </h1>
        <div className="flex gap-5 flex-wrap">
          <E6_upcomingOrders />
          <E6_upcomingOrders />
          <E6_upcomingOrders />
        </div>
        {/* Previous orders */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#BD8356]">
          Previous orders
        </h1>
        <div className="flex gap-5 flex-wrap">
          <E7_previousOrders />
          <E7_previousOrders />
          <E7_previousOrders />
        </div>
      </div>
    </div>
  );
};

export default E8_trackingOrders;
