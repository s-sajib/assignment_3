import { ADDTOCART, DECREASE, DELETE } from "./actionTypes";
const initialState = [];

function cartReducer(state = initialState, action) {
  const product = state.filter((product) => product.id === action.payload);

  switch (action.type) {
    case ADDTOCART:
      if (product) {
        return [
          ...state,
          {
            ...product,
            quantity: product.quantity + 1,
          },
        ];
      }
      return [
        ...state,
        {
          ...product,
          quantity: 1,
        },
      ];

    case DECREASE:
      if (product.quantity === 1) {
        return state.filter((item) => item.id !== product.id);
      }
      return [
        ...state,
        {
          ...product,
          quantity: product.quantity - 1,
        },
      ];

    case DELETE:
      return state.filter((item) => item.id !== product.id);

    default:
      return state;
  }
}

export default cartReducer;
