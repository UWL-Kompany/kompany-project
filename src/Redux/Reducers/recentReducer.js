import {
  ADD_TO_RECENT,
  REMOVE_FROM_RECENT,
  CLEAR_RECENT,
} from "../Actions/types";
// const initState = { items: [] };
export default function (state = {}, action) {
  switch (action.type) {
    case ADD_TO_RECENT:
      return { ...state, items: action.payload.recentItems };
    case REMOVE_FROM_RECENT:
      return { ...state, items: action.payload.recentItems };
    case CLEAR_RECENT:
      return { ...state, items: action.payload.recentItems };
    default:
      return state;
  }
}
