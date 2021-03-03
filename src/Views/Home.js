import React from "react";
import { Link } from "react-router-dom";
import DealsBanner from "../Components/DealBanner";
// import logo from "../Images/UWL-Logo.png";

const Home = (props) => {
  // the main home page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling

  let data = [
    { name: "Test Image", id: 0 },
    { name: "Test Image", id: 1 },
    { name: "Test Image", id: 2 },
    { name: "Test Image", id: 3 },
  ];

  function ProductList() {
    // component to display mapped requirements
    const listItems = data.map((item) => (
      <li class="flex h-56 w-56 rounded-xl bg-blue-300 justify-center items-center">
        {item.name}
      </li>
    ));

    return <ul class={"flex justify-between"}>{listItems}</ul>; // return all list items in a unordered list
  }

  return (
    <div class="flex flex-col h-full w-full justify-center justify-items-center content-center items-center place-content-center">
      {/* <div class="bg-uwlGreen w-full pl-5 py-2 rounded-lg text-black">
        <h1 className="font-bold text-4xl font-bold text-left">Home</h1>
      </div> */}
      <DealsBanner />
      <div class="flex flex-row h-screen w-full mt-5">
        <div class="flex flex-col w-full h-full mx-5 rounded-sm p-3">
          <ProductList />
          {/* <div class="flex justify-between">
            <div class="flex h-40 w-40 rounded-xl bg-blue-300 justify-center items-center">
              Test Image
            </div>
            <div class="flex h-40 w-40 rounded-xl bg-blue-300 justify-center items-center">
              Test Image
            </div>
            <div class="flex h-40 w-40 rounded-xl bg-blue-300 justify-center items-center">
              Test Image
            </div>
            <div class="flex h-40 w-40 rounded-xl bg-blue-300 justify-center items-center">
              Test Image
            </div>
          </div> */}
          <div class="font-bold mt-10">Check out our product range!</div>
        </div>
        {/* <div class="flex w-6/12 h-100 mx-5 bg-gray-300 rounded-sm p-3 justify-center">
          <img src={logo} alt="logo" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
