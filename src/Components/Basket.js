import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // the icons used

import { addToCart, removeFromCart } from "../Redux/Actions/cartActions";

const Basket = ({ props }) => {
  const [visible, setVisible] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="static alert alert-info items-center ">
      <div
        class="flex cursor-pointer"
        onClick={() => setVisible(!visible)} // function called to remove this requirement
      >
        <FontAwesomeIcon
          class="flex h-12 fill-current text-black "
          icon={faShoppingCart}
        />
        <div class="flex self-end border-black border-2 bg-yellow-300 w-6 h-6 items-center justify-center">
          {cartItems.length}
          {/* <i className="fa fa-2x fa-shopping-cart"></i>
        <hr /> */}
        </div>
      </div>
      {cartItems.length > 0 && visible && (
        <div class="bg-gray-100 w-full absolute right-3 rounded-md mt-2 shadow-lg">
          <div class="w-full rounded-t-md border-primary border-b-2 pt-1 pb-1 text-xl font-bold">
            Total:{"  £"}
            {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
            {/* {util.formatCurrency(
              cartItems.reduce((a, c) => a + c.price * c.count, 0)
            )} */}
          </div>
          <ul style={{ marginLeft: 0, marginBottom: 10 }}>
            {cartItems.map((item) => (
              <li key={item.id} class="mr-2 items-center">
                <b>{item.name}</b>
                <button
                  style={{ float: "right" }}
                  className="btn btn-danger btn-xs"
                  onClick={(e) => dispatch(removeFromCart(cartItems, item))}
                >
                  X
                </button>
                <br />
                {/* {item.count} X {util.formatCurrency(item.price)} */}
                {item.count} X {item.price}
              </li>
            ))}
          </ul>

          <Link
            to={"/checkout"}
            className="cursor-pointer btn btn-primary ml-5 self-center bg-primary text-white pl-10 pr-10 pt-1 pb-1 rounded-md shadow-lg"
            onClick={() => setVisible(false)}
          >
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
};
//   constructor(props) {
//     super(props);
//     this.state = { visible: false };
//   }
//   render() {

//     let temp = window.location.href.split("/");
//     console.log(temp[temp.length - 1]);
//     return (
//       <div className="static alert alert-info">
//         {cartItems.length === 0 ? (
//           "Basket is empty"
//         ) : (
//           <div
//             onClick={() => this.setState({ visible: !this.state.visible })}
//             class="cursor-pointer"
//           >
//             You have {cartItems.length} items in the basket.
//             <i className="fa fa-2x fa-shopping-cart"></i>
//             <hr />
//           </div>
//         )}
//         {cartItems.length > 0 && this.state.visible && (
//           <div class="bg-gray-100 w-1/4 absolute right-3">
//             <ul style={{ marginLeft: -25 }}>
//               {cartItems.map((item) => (
//                 <li key={item.id}>
//                   <b>{item.name}</b>
//                   <button
//                     style={{ float: "right" }}
//                     className="btn btn-danger btn-xs"
//                     onClick={(e) =>
//                       this.props.removeFromCart(this.props.cartItems, item)
//                     }
//                   >
//                     X
//                   </button>
//                   <br />
//                   {/* {item.count} X {util.formatCurrency(item.price)} */}
//                   {item.count} X {item.price}
//                 </li>
//               ))}
//             </ul>
//             <b>
//               Sum:
//               {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
//               {/* {util.formatCurrency(
//                 cartItems.reduce((a, c) => a + c.price * c.count, 0)
//               )} */}
//             </b>
//             <Link
//               to={"/checkout"}
//               className="cursor-pointer btn btn-primary ml-5"
//             >
//               Checkout
//             </Link>
//           </div>
//         )}
//       </div>
//     );
//   }
// }
const mapStateToProps = (state) => ({ cartItems: state.cart.items });
export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);
