import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Actions/cartActions";
// import logo from "../Images/UWL-Logo.png";

const Products = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  let data = [
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
    { name: "Stormbreaker", id: 2, price: "30.00", count: 0, description: "" },
    {
      name: "Just Cause Grapple",
      id: 3,
      price: "30.00",
      count: 0,
      description: "",
    },
    { name: "A Lightsaber", id: 4, price: "30.00", count: 0, description: "" },
    {
      name: "The Dark Knight Suit",
      id: 5,
      price: "30.00",
      count: 0,
      description: "",
    },
    { name: "The Tumbler", id: 6, price: "30.00", count: 0, description: "" },
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
  ];

  useEffect(() => {
    console.log(cartItems);
  }, []);

  function ProductList() {
    // component to display mapped requirements
    const listItems = data.map((item) => (
      <div class="flex flex-col h-64 w-56 rounded-xl bg-blue-300 justify-between items-center p-3">
        <div class="flex h-2/3 w-full bg-gray-200">image</div>
        <div>{item.name}</div>
        <Link
          to={{ pathname: "/product/" + item.id, state: item }} // navigate to specified id and pass course data to next screen
          className="flex justify-center"
        >
          <div>View Item</div>
        </Link>
        <button
          class="flex w-2/3 justify-center bg-gray-200 m-2 border-black border-2"
          onClick={(e) => dispatch(addToCart(cartItems, item))}
        >
          Add to Basket
        </button>
      </div>
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
      <div class="flex flex-row h-screen w-full mt-5">
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
