import { combineReducers } from "redux";
import productReducers from "./productReducer";
import cartReducers from "./cartReducar";
export default combineReducers({
  products: productReducers,
  cart: cartReducers,
});
