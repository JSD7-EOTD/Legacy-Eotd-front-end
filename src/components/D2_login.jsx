import React from "react";
import D1_logoPic from "./D1_logoPic";

const D2_login = () => {
  return (
    <div className="md:flex h-[100vh]">
      <D1_logoPic />
      <div class=" p-6 flex flex-col gap-8 font-semibold text-zinc-600 md:w-1/2 md:place-content-center ">
        <div>
          <h2 class="text-xl font-bold text-[#794222]">Welcome back!</h2>
          <p className="text-[#BD8356]">Meet the good taste today</p>
        </div>
        <form className="flex flex-col gap-8">
          <div>
            <label>EMAIL OR PHONE NUMBER</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type your e-mail or phone number"
              required
              class="bg-slate-100 rounded p-2 w-full"
            />
          </div>
          <div>
            <label>PASSWORD</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Type your password"
              required
              class="bg-slate-100 rounded p-2 w-full"
            />
            <a href="" class="text-xs text-zinc-400">
              Forgot Password?
            </a>
          </div>
          <div class="bg-[#BD8356] text-white rounded-full text-center p-2 w-full">
            <button>Sign In</button>
          </div>
        </form>
        <div class="flex flex-col items-center gap-8 text-zinc-400 text-sm">
          <div>
            <p>or do it via other accounts</p>
          </div>

          <div>
            <nav>
              <ul class="flex gap-5">
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
              Don't have an account?
              <a href="/d_create_account.html" class="text-black">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default D2_login;
