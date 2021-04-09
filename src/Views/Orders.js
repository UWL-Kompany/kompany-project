import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../Images/UWL-Logo.png";
import { Link, useHistory } from "react-router-dom";
import {
  toggleAccountLogin,
  changeDetails,
} from "../Redux/Actions/accountActions";
import logo_big from "../Assets/Images/logo-big.png";

const Register = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const history = useHistory();
  const dispatch = useDispatch();

  let data = [
    {
      date: "01/01/2021",
      orderNo: "5641065",
      total: "71.99",
      items: [
        {
          name: "A Clone Trooper",
          id: 0,
          price: "30.00",
          count: 0,
          description: "",
        },
        {
          name: "The Infinity Gauntlet",
          id: 1,
          price: "30.00",
          count: 0,
          description: "",
        },
      ],
    },
    {
      date: "01/01/2021",
      orderNo: "5641065",
      total: "71.99",
      items: [
        {
          name: "The Tumbler",
          id: 6,
          price: "30.00",
          count: 0,
          description: "",
        },
        {
          name: "Iron Man MKLXXXV",
          id: 7,
          price: "30.00",
          count: 0,
          price: "30.00",
          count: 0,
          description: "",
        },
        {
          name: "Captain America's Shield",
          id: 8,
          price: "30.00",
          count: 0,
          description: "",
        },
        { name: "Grogu", id: 9, price: "30.00", count: 0, description: "" },
      ],
    },
    {
      date: "01/01/2021",
      orderNo: "5641065",
      total: "71.99",
      items: [
        {
          name: "Stormbreaker",
          id: 2,
          price: "30.00",
          count: 0,
          description: "",
        },
        {
          name: "Just Cause Grapple",
          id: 3,
          price: "30.00",
          count: 0,
          description: "",
        },
        {
          name: "A Lightsaber",
          id: 4,
          price: "30.00",
          count: 0,
          description: "",
        },
        {
          name: "The Dark Knight Suit",
          id: 5,
          price: "30.00",
          count: 0,
          description: "",
        },
      ],
    },
  ];

  useEffect(() => {}, []);

  function ProductList({ products }) {
    // component to display mapped requirements
    let trimedProducts = products.slice(0, 3);
    const listItems = trimedProducts.map((item) => (
      <div class="flex flex-col w-full items-center">
        <img
          class="h-40 w-40 bg-gray-700"
          src={require("../Assets/Images/port-gun.jpeg").default}
        />
        <div class="flex flex-col">
          <b>{item.name}</b>
          <b class="text-yellow-600">£{item.price}</b>
        </div>
      </div>
    ));

    return (
      <div
        class={"grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4"}
      >
        {listItems}
      </div>
    ); // return all list items in a unordered list
  }

  function OrderList() {
    // component to display mapped requirements
    const listItems = data.map((item) => (
      <div class="flex flex-col border-2 border-gray-400 mb-5">
        <div class="flex flex-row bg-gray-200 border-b-2 border-gray-400 justify-between">
          <div class="flex w-1/3 self-center pt-2 pb-2 border-r-2 border-gray-400 justify-center">
            {item.date}
          </div>
          <div class="flex flex-col items-start">
            <div class="flex-row">
              <a>Order No: </a>
              <a class="font-bold">{item.orderNo}</a>
            </div>
            <div class="flex-row">
              <a>Total: </a>
              <a class="font-bold">£{item.total}</a>
            </div>
          </div>
          <Link
            class="flex flex-col p-2 text-blue-600 font-bold text-right"
            //to={{ pathname: "/product/" + item.id, state: item }} // TODO add link to order page
          >
            {"View Order Details >"}
          </Link>
        </div>
        <ProductList products={item.items} />
      </div>
    ));

    return <div class={"flex flex-col w-1/2"}>{listItems}</div>; // return all list items in a unordered list
  }

  return (
    <div class="flex flex-col w-full content-center items-center">
      <div className="flex font-bold text-black text-4xl mb-4 text-right ">
        My Orders
      </div>
      <OrderList />
    </div>
  );
};

export default Register;
