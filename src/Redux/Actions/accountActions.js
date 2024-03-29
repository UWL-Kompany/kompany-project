import { TOGGLE_ACCOUNT_LOGIN, CHANGE_DETAILS } from "./types";

export const toggleAccountLogin = (status) => (dispatch) => {
  localStorage.setItem("login", JSON.stringify(status));
  dispatch({ type: TOGGLE_ACCOUNT_LOGIN, payload: { status } });
};

export const changeDetails = (details) => (dispatch) => {
  localStorage.setItem("accountDetails", JSON.stringify(details));
  dispatch({ type: CHANGE_DETAILS, payload: { details } });
};

// export const addToCart = (items, product) => (dispatch) => {
//   const cartItems = items.slice();
//   let productAlreadyInCart = false;
//   cartItems.forEach((cp) => {
//     if (cp.id === product.id) {
//       cp.count += 1;
//       productAlreadyInCart = true;
//     }
//   });
//   if (!productAlreadyInCart) {
//     cartItems.push({ ...product, count: 1 });
//   }
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   dispatch({ type: ADD_TO_CART, payload: { cartItems } });
// };

// export const removeFromCart = (items, product) => (dispatch) => {
//   const cartItems = items.slice().filter((a) => a.id !== product.id);
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
// };
