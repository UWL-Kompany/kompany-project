import {
  ADD_TO_COMPARE,
  REMOVE_FROM_COMPARE,
  CLEAR_COMPARE,
} from "../Actions/types";
export default function (state = {}, action) {
  switch (action.type) {
    case ADD_TO_COMPARE:
      return { ...state, items: action.payload.compareItems };
    case REMOVE_FROM_COMPARE:
      return { ...state, items: action.payload.compareItems };
    case CLEAR_COMPARE:
      return { ...state, items: action.payload.compareItems };
    default:
      return state;
  }
}
