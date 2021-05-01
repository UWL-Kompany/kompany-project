import { ADD_TO_COMPARE, REMOVE_FROM_COMPARE, CLEAR_COMPARE } from "./types";

export const addToCompare = (items, product, count = 1) => (dispatch) => {
  const compareItems = items.slice();
  let productAlreadyInCompare = false;
  compareItems.forEach((cp) => {
    if (cp.id === product.id) {
      cp.count += count;
      productAlreadyInCompare = true;
    }
  });
  if (!productAlreadyInCompare) {
    compareItems.push({ ...product, count: count });
  }
  localStorage.setItem("compareItems", JSON.stringify(compareItems));
  dispatch({ type: ADD_TO_COMPARE, payload: { compareItems } });
};

export const removeFromCompare = (items, product) => (dispatch) => {
  const compareItems = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("compareItems", JSON.stringify(compareItems));
  dispatch({ type: REMOVE_FROM_COMPARE, payload: { compareItems } });
};

export const clearCompare = (items) => (dispatch) => {
  const compareItems = items.filter((a) => a.id === -1);
  localStorage.setItem("compareItems", compareItems);
  dispatch({ type: CLEAR_COMPARE, payload: { compareItems } });
};
