import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../Images/UWL-Logo.png";

import {
  toggleAccountLogin,
  changeDetails,
} from "../Redux/Actions/accountActions";

const Login = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const login = useSelector((state) => state.account.login);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("login status: " + login.toString());
  }, []);

  return (
    <div class="flex flex-col h-screen w-full justify-start justify-items-center content-center items-center place-content-center">
      <div className="flex font-bold text-black text-4xl mr-5 text-right ">
        Login
      </div>
      <div class="flex flex-col h-1/3 w-1/3 rounded-sm justify-evenly items-center mt-10 p-3 border-black border-2">
        <div class="flex self-start">Welcome</div>
        <input
          type="text"
          class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
          placeholder={"Username/Email"} // this doesn't do anything, just for filler
        />
        <input
          type="text"
          class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
          placeholder={"Password"} // this doesn't do anything, just for filler
        />
        <p class="cursor-pointer self-start text-indigo-700 text-sm underline">
          Forgot Usename/Password
        </p>
        <div class="flex self-start text-sm flex-row">
          <input type="checkbox" class="form-checkbox mr-2"></input>
          <p>Remember Me</p>
        </div>
        <button
          class="cursor-pointer flex w-1/4 border-black border-2 bg-gray-200 rounded-l self-start"
          onClick={(e) => dispatch(toggleAccountLogin(true))}
        >
          <p class="w-full text-center">Login</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
