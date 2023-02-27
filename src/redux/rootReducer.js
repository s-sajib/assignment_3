import { combineReducers } from "redux";
import navigationReducer from "./navigation/navigationReducer";
import cartReducer from "./cart/cartReducer";
import productReducer from "./product/productReducer";
const rootReducer = combineReducers({
  navigation: navigationReducer,
  cart: cartReducer,
  product: productReducer,
});

export default rootReducer;
