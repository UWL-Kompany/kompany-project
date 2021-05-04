import { combineReducers } from "redux";
import productReducers from "./productReducer";
import cartReducers from "./cartReducer";
import accountReducers from "./accountReducer";
import compareReducers from "./compareReducer";

export default combineReducers({
  products: productReducers,
  cart: cartReducers,
  account: accountReducers,
  compare: compareReducers,
});
