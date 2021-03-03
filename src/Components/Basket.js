import React, { Component } from "react";
import { connect } from "react-redux";

//import util from "../util";

import { addToCart, removeFromCart } from "../Redux/Actions/cartActions";

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  render() {
    const { cartItems } = this.props;
    return (
      <div className="static alert alert-info">
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div
            onClick={() => this.setState({ visible: !this.state.visible })}
            class="cursor-pointer"
          >
            You have {cartItems.length} items in the basket.
            <i className="fa fa-2x fa-shopping-cart"></i>
            <hr />
          </div>
        )}
        {cartItems.length > 0 && this.state.visible && (
          <div class="bg-gray-100 w-1/4 absolute right-3">
            <ul style={{ marginLeft: -25 }}>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <b>{item.name}</b>
                  <button
                    style={{ float: "right" }}
                    className="btn btn-danger btn-xs"
                    onClick={(e) =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }
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
              onClick={() => alert("Todo: Implement checkout page.")}
              className="btn btn-primary ml-5"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ cartItems: state.cart.items });
export default connect(mapStateToProps, { addToCart, removeFromCart })(Basket);
