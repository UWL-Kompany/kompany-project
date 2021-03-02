import React, { useState } from "react";
//import Navigation from "./Navigation";

function DealsBanner(props) {
  return (
    // a header component that is always displayed at the top of the page
    // plus a navigation componet
    <header className="border-b p-3 flex justify-between">
      {/* <Navigation /> */}
      <div className="flex font-bold text-indigo-400 text-s mr-5 text-right">
        Check out our exclusive Portal Gun! Limited Stock!
      </div>
      <div class="inset-y-0 right-0 flex items-center"></div>
    </header>
  );
}

export default DealsBanner;
