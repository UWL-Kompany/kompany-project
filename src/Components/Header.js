import React, { useState } from "react";
//import Navigation from "./Navigation";

function Header(props) {
  return (
    // a header component that is always displayed at the top of the page
    // plus a navigation componet
    <header className="border-b p-3 flex justify-between items-center bg-blue">
      {/* <Navigation /> */}
      <div className="flex font-bold text-black text-xl mr-5">Kompany</div>
    </header>
  );
}

export default Header;
