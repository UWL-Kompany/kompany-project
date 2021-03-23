import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../Images/UWL-Logo.png";
import { Link, useHistory } from "react-router-dom";
import {
  toggleAccountLogin,
  changeDetails,
} from "../Redux/Actions/accountActions";
import logo_big from "../Assets/Images/logo-big.png";

const Register = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const forceNextScreen = () => {
    history.push("/");
  };

  const loginAttempt = () => {
    dispatch(toggleAccountLogin(true));
    forceNextScreen();
  };

  return (
    <div class="flex flex-col h-screen w-full content-center items-center bg-primary">
      <img
        className="flex font-bold text-black text-4xl h-40 rounded-md"
        src={logo_big}
      />
      <div class="flex flex-col w-1/2 rounded-lg justify-evenly items-center mt-10 p-3 from-blue-900 to-blue-700 bg-gradient-to-br">
        <div className="flex font-bold text-white text-4xl mb-4 text-right ">
          Register
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 mb-5">
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
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
            placeholder={"Address"} // this doesn't do anything, just for filler
          />

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
        </div>
        <div class="flex self-start text-sm flex-row">
          <input type="checkbox" class="form-checkbox mr-2"></input>
          <p>I agree to share my data with Kompany</p>
        </div>
        <div class="flex self-start text-sm flex-row">
          <input type="checkbox" class="form-checkbox mr-2"></input>
          <p>
            I would like to recieve emails about advertisements and new stock
          </p>
        </div>
        <div class="flex self-start text-sm flex-row">
          <input type="checkbox" class="form-checkbox mr-2"></input>
          <p>I agree to the terms and conditions</p>
        </div>
        <p class="cursor-pointer self-start text-indigo-700 text-sm underline">
          Already Registerd? Log In
        </p>

        <button
          class="cursor-pointer flex w-3/4 text-xl font-bold border-black border-2 bg-white rounded-xl mb-5"
          onClick={(e) => loginAttempt()}
        >
          <p class="w-full text-center">Register</p>
        </button>
      </div>
    </div>
  );
};

export default Register;
