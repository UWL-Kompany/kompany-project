import { combineReducers } from "redux";
import productReducers from "./productReducer";
import cartReducers from "./cartReducar";
import accountReducers from "./accountReducer";

export default combineReducers({
  products: productReducers,
  cart: cartReducers,
  account: accountReducers,
});
