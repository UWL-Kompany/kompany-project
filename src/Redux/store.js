import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./Reducers/combineReducers";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const compareItems = localStorage.getItem("compareItems")
  ? JSON.parse(localStorage.getItem("compareItems"))
  : [];
const initState = {
  cart: { items: cartItems },
  compare: { items: compareItems },
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  initState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
