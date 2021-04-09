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
      <Link to={"/" + link} className="flex justify-between mr-3 ml-3">
        <div class="cursor-pointer flex justify-center ">{name}</div>
      </Link>
    );
  };

  if (!login) return null;

  return (
    // a header component that is always displayed at the top of the page
    // plus a navigation componet
    <header>
      <div className="border-b p-3 flex justify-center items-center h-20 bg-primary">
        <img
          className="flex font-bold text-black text-4xl mr-5 text-right h-20 rounded-md "
          src={logo_big}
        />
        <div class="flex inset-y-5 right-0 flex-col items-center justify-between w-1/4 h-full absolute ">
          <Basket />
        </div>
      </div>
      <div class="flex justify-between border-black border-2">
        <div className="flex">
          <HeaderButton name="Home" link="" />
          <HeaderButton name="Products" link="products" />
          <HeaderButton name="Galactic Items" link="products" />
          <HeaderButton name="My Account" link="account" />
          <HeaderButton name="About Us" link="about" />
        </div>
        <input
          type="text"
          class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-1/4 pl-7 pr-12 sm:text-sm border-gray-200 rounded-md m-1"
          placeholder={"Search"} // this doesn't do anything, just for filler
        />
      </div>
    </header>
  );
}

export default Header;
