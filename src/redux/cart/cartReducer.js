import { ADDTOCART, DECREASE, DELETE } from "./actionTypes";
const initialState = { products: [], totalQuantity: 0 };

function cartReducer(state = initialState, action) {
  let duplicateState = { ...state };

  const product = duplicateState.products.find(
    (product) => product.id === action.payload.id
  );
  switch (action.type) {
    case ADDTOCART:
      // if product is already in cart
      if (product) {
        product.quantity += 1;
        product.stockQuantity -= 1;
        duplicateState.totalQuantity += 1;
        return duplicateState;
      }
      return {
        ...state,
        products: [
          ...state.products,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
        totalQuantity: (state.totalQuantity += 1),
      };

    case DECREASE:
      if (product.quantity === 1) {
        return {
          ...state,
          products: state.products.filter((item) => item.id !== product.id),
          totalQuantity: state.totalQuantity - product.quantity,
        };
      }
      product.quantity -= 1;
      product.stockQuantity += 1;
      return {
        ...duplicateState,
        totalQuantity: (state.totalQuantity -= 1),
      };

    case DELETE:
      duplicateState.products = state.products.filter(
        (item) => item.id !== product.id
      );
      duplicateState.totalQuantity -= product.quantity;
      return duplicateState;

    default:
      return state;
  }
}

export default cartReducer;
