import { combineReducers } from "redux";
import productReducers from "./productReducer";
import cartReducers from "./cartReducar";
import accountReducers from "./accountReducer";
import compareReducers from "./compareReducar";

export default combineReducers({
  products: productReducers,
  cart: cartReducers,
  account: accountReducers,
  compare: compareReducers,
});
