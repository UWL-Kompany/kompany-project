import React, { useState } from "react";

function Footer(props) {
  return (
    // a footer component that is always displayed at the bottom of the page
    <footer
      className="bg-gray-200 text-center text-xs p-3 relative
     mb-auto w-full bottom-0"
    >
      &copy; Copyright 2020
    </footer>
  );
}

export default Footer;
