import { TOGGLE_ACCOUNT_LOGIN, CHANGE_DETAILS } from "../Actions/types";

const initState = {
  details: { name: "Rhys" },
  login: false,
};
export default function (state = initState, action) {
  switch (action.type) {
    case TOGGLE_ACCOUNT_LOGIN:
      return { ...state, login: action.payload.status };
    case CHANGE_DETAILS:
      return { ...state, details: action.payload.details };
    default:
      return state;
  }
}
