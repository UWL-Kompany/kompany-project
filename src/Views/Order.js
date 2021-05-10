import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../Images/UWL-Logo.png";
import { Link, useLocation } from "react-router-dom";
import {
  toggleAccountLogin,
  changeDetails,
} from "../Redux/Actions/accountActions";
import logo_big from "../Assets/Images/logo-big.png";

const Order = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  let order = useLocation().state; // get passed course data, assigns each const based n passsed data
  const [id] = useState(order.id);
  //const [id, setId] = useState(1);
  const [currOrder, setOrderItem] = useState(order);

  useEffect(() => {}, []);

  function OrderItems({ order }) {
    // component to display mapped requirements
    const listItems = order.items.map((item) => (
      <tr class="border-t-2 border-black">
        <td class="flex flex-row justify-between items-center ">
          <b>{item.name}</b>
          <img class="h-40 w-40 ml-10" src={item.imageUrl} />
        </td>
        <td class="">£{item.price}</td>
        <td class="">£{5.0}</td>
        <td>10/10/2020</td>
        <td>10/10/2020</td>
      </tr>
    ));

    return (
      <table class={"table-auto"}>
        <thead>
          <tr>
            <th class="w-2/6">Item</th>
            <th class="w-1/6">Price</th>
            <th class="w-1/6">Delivery</th>
            <th class="w-1/6">Dispatch Date</th>
            <th class="w-1/6">Estimated Arrival Date</th>
          </tr>
        </thead>
        <tbody class="">{listItems}</tbody>
      </table>
    ); // return all list items in a unordered list
  }

  return (
    <div class="flex flex-col h-full w-full content-center items-center pb-60">
      <div className="flex font-bold text-black text-4xl mb-4 text-right ">
        Order #{currOrder.id}
      </div>
      <OrderItems order={currOrder} />
    </div>
  );
};

export default Order;
