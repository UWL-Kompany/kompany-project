import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Actions/cartActions";
import { formatPrice } from "../Utils/format";
// import logo from "../Images/UWL-Logo.png";

const products = require("../Data/products-data.js");

const Products = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const cartItems = useSelector((state) => state.cart.items);
  const [data, setData] = useState(products);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cartItems);
  }, []);

  function ProductList() {
    // component to display mapped requirements
    const listItems = data.map((item) => (
      <Link
        class="flex flex-col rounded-xl justify-center items-center p-2 shadow-xl mr-2 ml-2 bg-white"
        to={{ pathname: "/product/" + item.id, state: item }} // navigate to specified id and pass course data to next screen
      >
        <img
          class="h-40 w-40 bg-white object-cover"
          src={item.imageUrl !== "" ? item.imageUrl : ""}
          //src={require("../Assets/Images/port-gun.jpeg").default}
        />
        <div class="flex flex-col items-start self-start">
          <b>{item.name}</b>
          <b class="text-yellow-600">£{formatPrice(item.price)}</b>
        </div>
      </Link>
    ));

    return (
      <div
        class={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4"}
      >
        {listItems}
      </div>
    ); // return all list items in a unordered list
  }

  return (
    <div class="flex flex-col h-full w-full justify-center justify-items-center content-center items-center place-content-center">
      <div className="flex font-bold text-black text-4xl mr-5 text-right">
        Our Products
      </div>
      <div class="flex flex-row h-full w-full mt-5">
        <div class="flex flex-col w-full h-full mx-5 rounded-sm p-3">
          <ProductList />
          <div class="font-bold mt-10">Check out our product range!</div>
        </div>
        {/* <div class="flex w-6/12 h-100 mx-5 bg-gray-300 rounded-sm p-3 justify-center">
          <img src={logo} alt="logo" />
        </div> */}
      </div>
    </div>
  );
};

export default Products;
