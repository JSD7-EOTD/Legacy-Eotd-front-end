import "boxicons";
import React from "react";

const E2_categories = () => {
  return (
    <div>
      <div className="md:flex-1 mr-32">
        <div className="p-10 shadow-lg border rounded-2xl text-yellow-700 font-bold max-sm:hidden">
          <nav className="flex gap-6 items-center mb-5">
            <box-icon name="user"></box-icon>
            <p>Personal info</p>
          </nav>

          <nav className="flex gap-6 items-center mb-5">
            <box-icon name="lock"></box-icon>
            <p>Login and security</p>
          </nav>

          <nav className="flex gap-6 items-center mb-5">
            <box-icon name="credit-card-alt"></box-icon>
            <p>My payments</p>
          </nav>

          <nav className="flex gap-6 items-center mb-5">
            <box-icon name="bell"></box-icon>
            <p>My orders</p>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default E2_categories;
