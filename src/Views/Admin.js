import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../Images/UWL-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons"; // the icons used
import { Link } from "react-router-dom";

const Admin = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div class="flex flex-col h-screen w-full justify-start justify-items-center content-center items-center place-content-center">
      <div className="flex font-bold text-black text-4xl mr-5 text-right ">
        Admin Page
      </div>
      <div class="flex flex-row w-full justify-evenly mt-5">
        <Link
          to={"/adminUsers"}
          class="flex flex-col h-56 w-56 rounded-xl justify-center items-center p-3 bg-blue-100 shadow-lg"
        >
          <FontAwesomeIcon
            class="flex fill-current text-black "
            icon={faUser}
            size="6x"
          />
          <a class="text-xl mt-5">User Accounts</a>
        </Link>
        <Link
          to={"/adminDb"}
          class="flex flex-col h-56 w-56 rounded-xl justify-center items-center p-3 bg-blue-100 shadow-lg"
        >
          <FontAwesomeIcon
            class="flex fill-current text-black "
            size="9x"
            icon={faShoppingCart}
          />
          <a class="text-xl mt-5">Database</a>
        </Link>
        <Link
          to={"/adminOrders"}
          class="flex flex-col h-56 w-56 rounded-xl justify-center items-center p-3 bg-blue-100 shadow-lg"
        >
          <FontAwesomeIcon
            class="flex fill-current text-black "
            size="6x"
            icon={faClipboardList}
          />
          <a class="text-xl mt-5">User Orders & Sales Reports</a>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
