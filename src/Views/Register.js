import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../Images/UWL-Logo.png";

const Register = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div class="flex flex-col h-screen w-full justify-start justify-items-center content-center items-center place-content-center">
      <div className="flex font-bold text-black text-4xl mr-5 text-right ">
        Register
      </div>
      <div class="flex flex-col h-full w-2/3 rounded-sm justify-evenly items-start mt-10 p-3 border-black border-2">
        <div class="flex self-start">Welcome</div>
        <input
          type="text"
          class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-2/3 pl-7 pr-12 sm:text-xl ring-black rounded-sm"
          placeholder={"Email"} // this doesn't do anything, just for filler
        />
        <input
          type="text"
          class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-2/3 pl-7 pr-12 sm:text-xl ring-black rounded-sm"
          placeholder={"Phone Number"} // this doesn't do anything, just for filler
        />
        <input
          type="text"
          class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-2/3 pl-7 pr-12 sm:text-xl ring-black rounded-sm"
          placeholder={"Address"} // this doesn't do anything, just for filler
        />
        <input
          type="text"
          class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-2/3 pl-7 pr-12 sm:text-xl ring-black rounded-sm"
          placeholder={"Full Name"} // this doesn't do anything, just for filler
        />
        <input
          type="text"
          class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-2/3 pl-7 pr-12 sm:text-xl ring-black rounded-sm"
          placeholder={"Username"} // this doesn't do anything, just for filler
        />
        <input
          type="text"
          class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-2/3 pl-7 pr-12 sm:text-xl ring-black rounded-sm"
          placeholder={"Password"} // this doesn't do anything, just for filler
        />
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

        <div class="flex w-1/4 border-black border-2 bg-gray-200 rounded-l self-start ">
          <div class="w-full text-center">Register</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
