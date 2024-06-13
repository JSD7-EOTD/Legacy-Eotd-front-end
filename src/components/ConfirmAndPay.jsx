import React from "react";
import 'boxicons'
import Navbar from "./Navbar";

const ConfirmAndPay = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 md:flex py-12 gap-12 text-zinc-400 text-xs md:gap-6">
        <div className="md:w-3/5 md:grid md:gap-4">
          <div className="text-[#794222] text-3xl font-bold">
            <h1>Confirm and pay</h1>
          </div>
          <div className="grid gap-4">
            <div className="flex justify-between ">
              <div>
                <h2 className="text-black text-2xl font-bold">Pay with</h2>
              </div>
              <div>
                <button className="bg-[#BD8356] text-white rounded-xl p-1 px-2">
                  Paypal
                </button>
                <button className="bg-[#794222] text-white rounded-xl p-1 px-2">
                  Credit Card
                </button>
              </div>
            </div>
            <p>SAVED CONTACT INFO</p>
            <button className="rounded-3xl bg bg-[#BD8356] p-4 text-white w-1/5">
              ★ Button
            </button>
          </div>
          <div className="grid gap-6">
            <div className="flex justify-between text-xl text-black font-semibold">
              <h3>Credit Card</h3>
              <div className="flex justify-between">
              <box-icon name='visa' type='logo'color='#BD8356' ></box-icon>
              <box-icon name='mastercard' type='logo' color='#BD8356'></box-icon>
              </div>
            </div>
            <div>
              <p>CARD NUMBER</p>
              <input
                type="text"
                id="card-number"
                required
                className="border-2 p-2 rounded-lg w-full"
              />
            </div>
            <div>
              <p>CARD HOLDER</p>
              <input
                type="text"
                required
                className="border-2 p-2 rounded-lg w-full"
              />
            </div>
            <div className="flex justify-between">
              <div className="md:w-2/5">
                <p>EXPIRATION DATE</p>
                <input
                  type="number"
                  placeholder="MM/YY"
                  required
                  className="border-2 p-2 rounded-lg w-full "
                />
              </div>
              <div className="md:w-2/5">
                <p>CVC</p>
                <input
                  type="number"
                  required
                  className="border-2 p-2 rounded-lg w-full"
                />
              </div>
            </div>

            <div className="text-black text-sm font-semibold">
              <input type="checkbox" name="save-card" id="save-card" />
              Save Card
            </div>
          </div>
        </div>
        <div className="md:w-2/5 md:pt-12">
          <div className="text-base grid gap-4">
            <div className="text-black text-2xl font-bold">
              <h2>Price details</h2>
            </div>
            <div className="grid gap-4">
              <div className="flex justify-between">
                <p>$20 x 2</p>
                <p className="text-black">$40</p>
              </div>
              <div className="flex justify-between">
                <p>shipping</p>
                <p className="text-black">&0,00</p>
              </div>
              <div className="flex justify-between text-">
                <p>
                  <span className="text-black">Total</span>(USD)
                </p>
                <p className="text-black">$40</p>
              </div>
            </div>
            <button className="rounded-3xl bg bg-[#BD8356] p-2 px-6 text-white w-1/2">
              Confirm and pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAndPay;
