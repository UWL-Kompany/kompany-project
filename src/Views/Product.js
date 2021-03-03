import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Actions/cartActions";
// import logo from "../Images/UWL-Logo.png";

const Product = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling

  const cartItems = useSelector((state) => state.cart.items);
  let data = useLocation().state; // get passed course data, assigns each const based n passsed data
  const [id] = useState(data.id);
  //const [id, setId] = useState(1);
  const [currItem, setCurrItem] = useState({});

  const dispatch = useDispatch();
  let tempData = [
    { name: "A Clone Trooper", id: 0, price: "30.00", count: 0 },
    { name: "The Infinity Gauntlet", id: 1, price: "30.00", count: 0 },
    { name: "Stormbreaker", id: 2, price: "30.00", count: 0 },
    { name: "Just Cause Grapple", id: 3, price: "30.00", count: 0 },
    { name: "A Lightsaber", id: 4, price: "30.00", count: 0 },
    { name: "The Dark Knight Suit", id: 5, price: "30.00", count: 0 },
    { name: "The Tumbler", id: 6, price: "30.00", count: 0 },
    {
      name: "Iron Man MKLXXXV",
      id: 7,
      price: "30.00",
      count: 0,
      price: "30.00",
      count: 0,
    },
    { name: "Captain America's Shield", id: 8, price: "30.00", count: 0 },
    { name: "Grogu", id: 9, price: "30.00", count: 0 },
  ];

  useEffect(() => {
    console.log(cartItems);
    setCurrItem(tempData[id]);
  }, []);

  return (
    <div class="flex flex-col h-screen w-full justify-center justify-items-center content-center items-center place-content-center">
      <div class="flex flex-col h-full w-1/2 rounded-xl justify-between items-center p-3">
        <div>{currItem.name}</div>
        <div class="flex h-2/3 w-1/2 bg-gray-200">image</div>

        <button
          class="flex w-1/3 justify-center bg-gray-200 m-2 border-black border-2"
          onClick={(e) => dispatch(addToCart(cartItems, currItem))}
        >
          Add to Basket
        </button>
        {/* <p>{currItem.description}</p> */}
        <p class="border-black border-2 bg-gray-200 rounded-l">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Product;
