import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../Images/UWL-Logo.png";

import { removeFromCart, clearCart } from "../Redux/Actions/cartActions";

import {
  toggleAccountLogin,
  changeDetails,
} from "../Redux/Actions/accountActions";

const Checkout = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const cartItems = useSelector((state) => state.cart.items);
  const [orderItems, setOrderItems] = useState({});
  const login = useSelector((state) => state.account.login);
  const [section, setSection] = useState({ status: "cart", level: 1 });
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  // cart -> address -> payment -> confirm

  function completePurchase() {
    setSection({ status: "Review", level: 4 });
    setOrderItems(cartItems);
    dispatch(clearCart(cartItems));
  }

  const ProgressLevel = ({ level, name }) => {
    return (
      <div
        class={
          level <= section.level
            ? "bg-indigo-400 rounded-md cursor-pointer"
            : ""
        }
        onClick={() => setSection({ status: name, level: level })}
      >
        {name}
      </div>
    );
  };
  const ProgressBar = () => {
    return (
      <>
        <div class="flex w-1/2 justify-between">
          <ProgressLevel name={"Cart"} level={1} />
          <div class="flex w-1/4 h-0 self-center border-b-4 border-indigo-400" />
          <ProgressLevel name={"Address"} level={2} />
          <div class="flex w-1/4 h-0 self-center border-b-4 border-indigo-400" />
          <ProgressLevel name={"Payment"} level={3} />
          <div class="flex w-1/4 h-0 self-center border-b-4 border-indigo-400" />
          <ProgressLevel name={"Review"} level={4} />
        </div>
      </>
    );
  };

  function SectionComponent() {
    if (section.level == 1) {
      return (
        <div class="bg-gray-100 w-2/4">
          <ul style={{}}>
            {cartItems.map((item) => (
              <li key={item.id}>
                <b>{item.name}</b>
                <button
                  style={{ float: "right" }}
                  className="btn btn-danger btn-xs"
                  onClick={(e) => removeFromCart(cartItems, item)}
                >
                  X
                </button>
                <br />
                {/* {item.count} X {util.formatCurrency(item.price)} */}
                {item.count} X {item.price}
              </li>
            ))}
          </ul>
          <b>
            Sum:
            {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
            {/* {util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )} */}
          </b>
          <button
            onClick={() => setSection({ status: "Address", level: 2 })}
            className="btn btn-primary ml-5"
          >
            Next
          </button>
        </div>
      );
    }

    if (section.level == 2) {
      return (
        <div class="bg-gray-100 w-2/4 items-center">
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-2/3 pl-7 pr-12 sm:text-xl ring-black rounded-sm mt-3"
            placeholder={"Address Line 1"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-2/3 pl-7 pr-12 sm:text-xl ring-black rounded-sm mt-3"
            placeholder={"Address Line 2"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-2/3 pl-7 pr-12 sm:text-xl ring-black rounded-sm mt-3"
            placeholder={"Address Line 3"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-2/3 pl-7 pr-12 sm:text-xl ring-black rounded-sm mt-3"
            placeholder={"Postcode"} // this doesn't do anything, just for filler
          />
          <button
            onClick={() => setSection({ status: "Payment", level: 3 })}
            className="btn btn-primary mt-3"
          >
            Next
          </button>
        </div>
      );
    }

    if (section.level == 3) {
      return (
        <div class="bg-gray-100 w-2/4 items-center">
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-2/3 pl-7 pr-12 sm:text-xl ring-black rounded-sm mt-3"
            placeholder={"Name on Card"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-2/3 pl-7 pr-12 sm:text-xl ring-black rounded-sm mt-3"
            placeholder={"Card Number"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-2/3 pl-7 pr-12 sm:text-xl ring-black rounded-sm mt-3"
            placeholder={"CVC"} // this doesn't do anything, just for filler
          />
          <input
            type="text"
            class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-2/3 pl-7 pr-12 sm:text-xl ring-black rounded-sm mt-3"
            placeholder={"Expire Date"} // this doesn't do anything, just for filler
          />
          <button
            onClick={() => completePurchase()}
            className="btn btn-primary mt-3"
          >
            Confirm Payment
          </button>
        </div>
      );
    }

    if (section.level == 4) {
      return (
        <div class="bg-gray-100 w-2/4">
          <a>Purchase Complete! Many Thanks!</a>
          <ul style={{}}>
            {orderItems.map((item) => (
              <li key={item.id}>
                <b>{item.name}</b>
                <br />
                {/* {item.count} X {util.formatCurrency(item.price)} */}
                {item.count} X {item.price}
              </li>
            ))}
          </ul>
          <b>
            Sum:
            {orderItems.reduce((a, c) => a + c.price * c.count, 0)}
            {/* {util.formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )} */}
          </b>
        </div>
      );
    }

    return <div>SOMETHING MESSED UP</div>;
  }

  return (
    <div className="flex h-screen flex-col items-center">
      <ProgressBar />
      {/* <div class="cursor-pointer">
        You have {cartItems.length} items in the basket.
        <i className="fa fa-2x fa-shopping-cart"></i>
        <hr />
      </div> */}
      <SectionComponent />
    </div>
  );
};

export default Checkout;
