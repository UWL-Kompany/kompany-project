import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../Images/UWL-Logo.png";
import { Link, useHistory } from "react-router-dom";
import {
  toggleAccountLogin,
  changeDetails,
} from "../Redux/Actions/accountActions";
import logo_big from "../Assets/Images/logo-big.png";

const MyDetails = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const forceNextScreen = () => {
    history.push("/");
  };

  return (
    <div class="flex flex-col w-full content-center items-center">
      <div className="flex font-bold text-black text-4xl mb-4 text-right ">
        Edit My Details
      </div>
      <div class="flex flex-col w-1/2 rounded-lg justify-evenly items-center mt-10 p-3">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 mb-5">
          <div className="flex font-bold text-black text-2xl text-right border-black border-b-2">
            Personal Details
          </div>
          <div></div>
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"Full Name"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"Email"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"Phone Number"} // this doesn't do anything, just for filler
          />
          <div></div>
          <div className="flex font-bold text-black text-2xl text-right border-black border-b-2">
            Address
          </div>
          <div></div>
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"Address Line 1"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"Address Line 2"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"Address Line 3"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"City"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"Post Code"} // this doesn't do anything, just for filler
          />
          <div></div>
          <div className="flex font-bold text-black text-2xl text-right border-black border-b-2">
            Security
          </div>
          <div></div>
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"Username"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"Password"} // this doesn't do anything, just for filler
          />

          <div className="flex font-bold text-black text-2xl text-right border-black border-b-2">
            Payment
          </div>
          <div></div>
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"Name on Card"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"Card Number"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"Expiry Date"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"Back Number"} // this doesn't do anything, just for filler
          />
        </div>
      </div>
      <button
        class="cursor-pointer flex w-1/6 text-xl font-bold border-black border-2 bg-white rounded-xl mb-5"
        //onClick={(e) => loginAttempt()}
      >
        <p class="w-full text-center">Save Changes</p>
      </button>
    </div>
  );
};

export default MyDetails;
