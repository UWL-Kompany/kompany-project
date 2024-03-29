import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Actions/cartActions";
import {
  addToCompare,
  removeFromCompare,
} from "../Redux/Actions/compareActions";
import { formatPrice } from "../Utils/format";
// import logo from "../Images/UWL-Logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // the icons used

const Product = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const compareItems = useSelector((state) => state.compare.items);
  const cartItems = useSelector((state) => state.cart.items);
  let data = useLocation().state; // get passed product data, assigns each const based n passsed data
  const [id] = useState(data.id);
  //const [id, setId] = useState(1);
  const [currItem, setCurrItem] = useState(data);
  const [quantity, setQuantity] = useState(1);
  const [comparedItem, setComparedItem] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    //setCurrItem(tempData[id]);
    checkCompare();
  }, []);

  const checkCompare = () => {
    if (compareItems.length > 0) {
      compareItems.forEach((item) => {
        if (item.id === currItem.id) {
          setComparedItem(true);
        }
      });
    }
  };

  const addCompare = async () => {
    dispatch(addToCompare(compareItems, currItem, 1));
    setComparedItem(true);
  };

  const removeCompare = async () => {
    dispatch(removeFromCompare(compareItems, currItem));
    setComparedItem(false);
  };

  const StarRating = ({ count }) => {
    const listStars = [];
    for (let i = 0; i < count; i++) {
      listStars.push(
        <FontAwesomeIcon
          class="flex h-12 fill-current text-black text-yellow-400 "
          icon={faStar}
        />
      );
    }
    return <div class={"flex flex-row mb-2"}>{listStars}</div>; // return all list items in a unordered list
  };

  const addAllToCart = async (amount) => {
    dispatch(addToCart(cartItems, currItem, amount));
  };

  const Dropdown = (count) => {
    const items = [];
    for (let i = 0; i < 9; i++) {
      items.push(<option onClick={() => setQuantity(i + 1)}>{i + 1}</option>);
    }

    return (
      <div class="relative inline-flex">
        <svg
          class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#648299"
            //fill-rule="nonzero"
          />
        </svg>
        <select
          class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          value={quantity}
        >
          {items}
        </select>
      </div>
    );
  };
  return (
    <div class="flex flex-col h-screen w-full bg-gray-100 ">
      <div class="flex flex-row w-full rounded-xl p-3">
        <div class="flex flex-col w-1/2 bg-white shadow-lg p-2 mr-2">
          <div class="font-bold text-2xl self-start mb-2">{currItem.name}</div>
          <img
            class="flex h-56 w-1/2 bg-white object-cover"
            src={currItem.imageUrl}
            //src={require("../Assets/Images/port-gun.jpeg").default}
          />
        </div>
        <div class="flex flex-col w-1/2 items-start bg-white shadow-lg  p-2 ml-2">
          <div class="mb-2 ">
            <a class="text-black font-bold text-2xl">Price: </a>
            <a class="text-yellow-500 font-bold text-2xl">
              £{formatPrice(currItem.price)}
            </a>
          </div>
          <StarRating count={currItem.rating} />
          {currItem.stock > 0 ? (
            <a class="flex mb-2 ">In Stock</a>
          ) : (
            <a class="flex mb-2 ">Out of Stock</a>
          )}
          <div class="mb-2">
            <a>Quantity: </a>
            <Dropdown count={9} />
          </div>
          <button
            class="flex w-1/3 justify-center bg-primary border-black border-2 text-white mb-2"
            onClick={(e) => addAllToCart(quantity)}
          >
            Add to Basket
          </button>
          <button
            class="flex w-1/3 justify-center bg-primary border-black border-2 text-white mb-2"
            onClick={(e) => addCompare()}
          >
            Add to Compare
          </button>

          {comparedItem ? (
            <div class="flex w-1/3 justify-center text-black">
              <input
                type="checkbox"
                class="form-checkbox mr-2"
                onClick={() => removeCompare()}
              ></input>
              <Link
                class="flex w-1/3 justify-center bg-primary border-black border-2 text-white mb-2"
                to={{ pathname: "/compare" }}
              >
                Go Compare
              </Link>
            </div>
          ) : (
            <div class="flex w-1/3 justify-center text-black">
              <input
                type="checkbox"
                class="form-checkbox mr-2"
                onClick={() => addCompare()}
              ></input>
              <p class="text-black">Compare</p>
            </div>
          )}
        </div>
      </div>
      {/* <p>{currItem.description}</p> */}
      <p class="bg-white shadow-lg rounded-l ml-2 mr-2">
        {currItem.description}
      </p>
    </div>
  );
};

export default Product;
