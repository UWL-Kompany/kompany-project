import React, { useState } from "react";
//import Navigation from "./Navigation";

function Header(props) {
  return (
    // a header component that is always displayed at the top of the page
    // plus a navigation componet
    <header className="border-b p-3 flex justify-between">
      {/* <Navigation /> */}
      <div className="border-b p-3 flex ">
        <div>
          <div>Login</div>
          <div>About Us</div>
        </div>
        <div>
          <div>Register</div>
          <div>Products</div>
        </div>
      </div>
      <div className="flex font-bold text-black text-xl mr-5 text-right">
        Kompany
      </div>
      <div class="inset-y-0 right-0 flex items-center">
        <input
          type="text"
          class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-200 rounded-md"
          placeholder={"Search"} // this doesn't do anything, just for filler
        />
      </div>
    </header>
  );
}

export default Header;
