import { ROUTE } from "./actionTypes";

const initialState = "home";

function navigationReducer(state = initialState, action) {
  if (action.type === ROUTE) {
    return action.payload;
  }
  return state;
}

export default navigationReducer;
