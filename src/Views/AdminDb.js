import React, { useEffect, useState, useCallback } from "react";
// import logo from "../Images/UWL-Logo.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const AdminDb = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = useCallback(() => {
    // Send GET request to 'courses/all'
    axios
      .get("http://localhost:4001/product/all")
      .then((response) => {
        // set product state
        setProducts(response.data);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the product list: ${error}`
        )
      );
  }, []);

  function Products() {
    // component to display mapped requirements
    if (products.length < 1) {
      return null;
    }
    const listItems = products.map((item) => (
      <tr class="border-t-2 border-black">
        <td class="">
          <img class="h-20 ml-10" src={item.imageUrl} />
        </td>

        <td class="">
          <b>{item.name}</b>
        </td>
        <td class="">
          <a>
            {item.description.substring(0, 50) +
              (item.description.length > 50 ? "..." : "")}
          </a>
        </td>
        <td class="">£{item.price}</td>
        <td class="">£{5.0}</td>
        <td>{item.id}</td>
        <td>{item.stock}</td>
        <td>Yes</td>
      </tr>
    ));

    return (
      <table class={"table-auto"}>
        <thead>
          <tr>
            <th class="w-1/12">Picture</th>
            <th class="w-2/12">Name</th>
            <th class="w-2/12">Description</th>
            <th class="w-1/12">Price</th>
            <th class="w-1/12">Supplier Price</th>
            <th class="w-1/12">Item Number</th>
            <th class="w-1/12">Stock Level</th>
            <th class="w-1/12">Order?</th>
          </tr>
        </thead>
        <tbody class="">{listItems}</tbody>
      </table>
    ); // return all list items in a unordered list
  }

  return (
    <div class="flex flex-col h-full w-full content-center items-center pb-60">
      <div className="flex font-bold text-black text-4xl mb-4 text-right ">
        Database
      </div>
      <Products />
    </div>
  );
};

export default AdminDb;
