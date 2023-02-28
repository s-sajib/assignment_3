import { ADDTOCART, DECREASE, DELETE } from "./actionTypes";
const initialState = { products: [], totalQuantity: 0 };

function cartReducer(state = initialState, action) {
  const product = state.products.find(
    (product) => product.id === action.payload
  );

  switch (action.type) {
    case ADDTOCART:
      if (product) {
        product.quantity += 1;
        return { ...state, totalQuantity: (state.totalQuantity += 1) };
      }
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: action.payload,
            quantity: 1,
          },
        ],
        totalQuantity: (state.totalQuantity += 1),
      };

    case DECREASE:
      if (product.quantity === 1) {
        return state.products.filter((item) => item.id !== product.id);
      }
      product.quantity -= 1;
      return {
        ...state,
        totalQuantity: (state.totalQuantity -= 1),
      };

    case DELETE:
      return state.products.filter((item) => item.id !== product.id);

    default:
      return state;
  }
}

export default cartReducer;
