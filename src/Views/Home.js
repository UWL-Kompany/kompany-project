import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DealsBanner from "../Components/DealBanner";
// import logo from "../Images/UWL-Logo.png";

import test_image from "../Assets/Images/port-gun.jpeg";

const Home = (props) => {
  // the main home page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const history = useHistory();
  const login = useSelector((state) => state.account.login);

  useEffect(() => {
    //console.log("login status: " + login.toString());
    // if (!login) {
    //   forceNextScreen();
    // }
  }, []);

  const forceNextScreen = () => {
    history.push("/login");
  };

  let data = [
    {
      name: "Portal Gun",
      id: 0,
      price: 40,
      image: "../Assets/Images/port-gun.jpeg",
    },
    {
      name: "Test Image",
      id: 1,
      price: 40,
      image: "../Assets/Images/port-gun.jpeg",
    },
    {
      name: "Test Image",
      id: 2,
      price: 40,
      image: "../Assets/Images/port-gun.jpeg",
    },
    {
      name: "Test Image",
      id: 3,
      price: 40,
      image: "../Assets/Images/port-gun.jpeg",
    },
  ];

  function ProductList({ items }) {
    // component to display mapped requirements
    const listItems = items.map((item) => (
      <Link
        class="flex flex-col rounded-xl justify-center items-center p-2 shadow-xl mr-2 ml-2 bg-white"
        to={{ pathname: "/product/" + item.id, state: item }} // navigate to specified id and pass course data to next screen
      >
        <img
          class="h-40 w-40 bg-gray-700"
          src={require("../Assets/Images/port-gun.jpeg").default}
        />
        <div class="flex flex-col items-start self-start">
          <b>{item.name}</b>
          <b class="text-yellow-600">£{item.price}</b>
        </div>
      </Link>
    ));

    return <ul class={"flex justify-between"}>{listItems}</ul>; // return all list items in a unordered list
  }

  return (
    <div class="flex flex-col h-auto w-full pb-56 justify-center justify-items-center content-center items-center place-content-center">
      {/* <DealsBanner /> */}
      <div class="flex flex-col items-center h-screen w-full">
        <div class="flex flex-col h-full mx-5 rounded-sm p-3">
          <div class="font-bold text-2xl">Featured Products</div>
          <ProductList items={data} />
        </div>
        <div class="flex flex-col h-full mx-5 rounded-sm p-3">
          <div class="font-bold mt-10 text-2xl">Recently View</div>
          <ProductList items={data} />
        </div>
        <div class="flex flex-col h-full mx-5 rounded-sm p-3">
          <div class="font-bold mt-10 text-2xl">Trending</div>
          <ProductList items={data} />
        </div>
      </div>
    </div>
  );
};

export default Home;
