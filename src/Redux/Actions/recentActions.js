import { ADD_TO_RECENT, REMOVE_FROM_RECENT, CLEAR_RECENT } from "./types";

export const addToRecent = (items, product, count = 1) => (dispatch) => {
  const recentItems = items.slice();
  let productAlreadyInRecent = false;
  recentItems.forEach((cp) => {
    if (cp.id === product.id) {
      cp.count += count;
      productAlreadyInRecent = true;
    }
  });
  if (!productAlreadyInRecent) {
    recentItems.push({ ...product, count: count });
  }
  localStorage.setItem("recentItems", JSON.stringify(recentItems));
  dispatch({ type: ADD_TO_RECENT, payload: { recentItems } });
};

export const removeFromRecent = (items, product) => (dispatch) => {
  const recentItems = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("recentItems", JSON.stringify(recentItems));
  dispatch({ type: REMOVE_FROM_RECENT, payload: { recentItems } });
};

export const clearRecent = (items) => (dispatch) => {
  const recentItems = items.filter((a) => a.id === -1);
  localStorage.setItem("recentItems", recentItems);
  dispatch({ type: CLEAR_RECENT, payload: { recentItems } });
};
