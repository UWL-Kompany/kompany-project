import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import Navigation from "./Navigation";

import Basket from "./Basket";

import logo_small from "../Assets/Images/logo-small.png";
import logo_big from "../Assets/Images/logo-big.png";

function Header(props) {
  const login = useSelector((state) => state.account.login);

  const HeaderButton = ({ name, link }) => {
    return (
      <Link to={"/" + link} className="flex justify-between">
        <div class="cursor-pointer flex w-20 justify-center bg-gray-200 m-2 border-black border-2">
          {name}
        </div>
      </Link>
    );
  };

  return (
    // a header component that is always displayed at the top of the page
    // plus a navigation componet
    <header className="border-b p-3 flex justify-between items-center h-20">
      {/* <Navigation /> */}
      <div className="p-3 flex ">
        <div>
          {login ? (
            <HeaderButton name="Account" link="account" />
          ) : (
            <HeaderButton name="Login" link="login" />
          )}
          <HeaderButton name="About Us" link="products" />
        </div>
        <div>
          {login ? null : <HeaderButton name="Register" link="register" />}
          <HeaderButton name="Products" link="products" />
        </div>
      </div>
      <img
        className="flex font-bold text-black text-4xl mr-5 text-right h-20 rounded-md"
        src={logo_big}
      />
      <div class="flex inset-y-0 right-0 flex-col items-center justify-between w-1/4 h-full">
        <input
          type="text"
          class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-200 rounded-md"
          placeholder={"Search"} // this doesn't do anything, just for filler
        />
        <Basket />
      </div>
    </header>
  );
}

export default Header;
