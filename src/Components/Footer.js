import React, { useState } from "react";
import logo_small from "../Assets/Images/logo-small.png";
function Footer(props) {
  return (
    // a footer component that is always displayed at the bottom of the page
    <footer className="flex justify-center items-center bg-primary p-3 w-full ">
      <img className="flex h-8 rounded-md " src={logo_small} />
      <a class="text-xs">&copy; Copyright 2021</a>
    </footer>
  );
}

export default Footer;
