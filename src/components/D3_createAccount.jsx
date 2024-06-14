import React from "react";
import D1_logoPic from "./D1_logoPic";
import "boxicons";

const D3_createAccount = () => {
  return (
    <div className="md:flex">
      <D1_logoPic />
      <div className=" p-6 flex flex-col gap-8 font-semibold text-zinc-600 md:w-1/2 md:flex md:place-content-center h-[100vh]">
        <div>
          <h2 className="text-xl font-bold text-[#794222]">
            Create your account
          </h2>
          <p className="text-[#BD8356]">It's free and easy</p>
        </div>
        <form className="flex flex-col gap-8">
          <div>
            <label>FULL NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="bg-slate-100 rounded p-2 w-full"
            />
          </div>
          <div>
            <label>EMAIL OR PHONE NUMBER</label>
            <input
              type="text"
              id="e-mail"
              name="e-mail"
              placeholder="Type your e-mail or phone number"
              className="bg-slate-100 rounded p-2 w-full"
            />
          </div>
          <div>
            <label>PASSWORD</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Type your password"
              className="bg-slate-100 rounded p-2 w-full"
            />
            <p className="text-xs text-zinc-400">
              Must be 8 characters at least
            </p>
          </div>
          <div className="text-zinc-400 -white">
            <input type="checkbox" className="" />
            By creating an account means you agree to the
            <a href="" className="text-black">
              {" "}
              Terms{" "}
            </a>
            and
            <a href="" className="text-black">
              {" "}
              Conditions{" "}
            </a>
            , and our
            <a href="" className="text-black">
              {" "}
              Privacy Policy.
            </a>
          </div>
        </form>

        <div className="bg-[#BD8356] text-white rounded-full text-center p-2 w-full">
          <button>Sign Up</button>
        </div>
        <div className="flex flex-col items-center gap-8 text-zinc-400 text-sm">
          <div>
            <p>or do it via other accounts</p>
          </div>
          <div>
            <nav>
              <ul className="flex gap-5">
                <li>
                  <box-icon
                    name="google"
                    type="logo"
                    color="#BD8356"
                  ></box-icon>
                </li>
                <li>
                  <box-icon name="apple" type="logo" color="#BD8356"></box-icon>
                </li>
                <li>
                  <box-icon
                    type="logo"
                    name="facebook"
                    color="#BD8356"
                  ></box-icon>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p>
              Aldready have an account?
              <a href="/d_login.html" className="text-black">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default D3_createAccount;
