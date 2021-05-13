import React, { useEffect, useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DealsBanner from "../Components/DealBanner";
import { formatPrice } from "../Utils/format";
import axios from "axios";

const Home = (props) => {
  // the main home page, displays products and some product sections
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const history = useHistory();
  //const login = useSelector((state) => state.account.login);
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    //console.log("login status: " + login.toString());
    // if (!login) {
    //   forceNextScreen();
    // }
    fetchProducts();
  }, []);

  const fetchProducts = useCallback(() => {
    // Send GET request to 'courses/all'
    axios
      .get("http://localhost:4001/product/all")
      .then((response) => {
        // set product state
        setProducts(response.data);
        generateLists(response.data);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the product list: ${error}`
        )
      );
  }, []);

  const generateLists = (prods) => {
    // generate recent products
    let tempList = [];
    let numList = [];
    let rnd = Math.floor(Math.random() * 6);
    for (let i = 0; i < rnd; i++) {
      let pos = Math.floor(Math.random() * prods.length);
      while (numList.includes(pos)) {
        pos = Math.floor(Math.random() * prods.length);
      }
      numList.push(pos);
      tempList.push(prods[pos]);
    }
    setRecentProducts(tempList);
    // generate featured products
    tempList = [];
    numList = [];
    for (let i = 0; i < 4; i++) {
      let pos = Math.floor(Math.random() * prods.length);
      while (numList.includes(pos)) {
        pos = Math.floor(Math.random() * prods.length);
      }
      numList.push(pos);
      tempList.push(prods[pos]);
    }
    setFeaturedProducts(tempList);
    // generate featured products
    tempList = [];
    numList = [];
    for (let i = 0; i < 6; i++) {
      let pos = Math.floor(Math.random() * prods.length);
      while (numList.includes(pos)) {
        pos = Math.floor(Math.random() * prods.length);
      }
      numList.push(pos);
      tempList.push(prods[pos]);
    }
    setTrendingProducts(tempList);
  };

  const forceNextScreen = () => {
    history.push("/login");
  };

  function ProductList({ items }) {
    // component to display mapped requirements
    const listItems = items.map((item) => (
      <Link
        class="flex flex-col rounded-xl justify-center items-center p-2 shadow-xl mr-2 ml-2 bg-white"
        to={{ pathname: "/product/" + item.id, state: item }} // navigate to specified id and pass course data to next screen
      >
        <img class="h-40 w-40 bg-white object-cover" src={item.imageUrl} />
        <div class="flex flex-col items-start self-start">
          <b>{item.name}</b>
          <b class="text-yellow-600">£{formatPrice(item.price)}</b>
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
          <ProductList items={featuredProducts} />
        </div>
        <div class="flex flex-col h-full mx-5 rounded-sm p-3">
          <div class="font-bold mt-10 text-2xl">Recently Viewed</div>
          {recentProducts.length > 0 ? (
            <ProductList items={recentProducts} />
          ) : (
            <div class="text-2xl text-blue-600">No Recently Viewed</div>
          )}
        </div>
        <div class="flex flex-col h-full mx-5 rounded-sm p-3">
          <div class="font-bold mt-10 text-2xl">Deals</div>
          <ProductList items={trendingProducts} />
        </div>
      </div>
    </div>
  );
};

export default Home;
