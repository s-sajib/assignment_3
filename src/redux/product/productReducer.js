import { ADD } from "./actionTypes";
const initialState = [];

function getNewID(state) {
  if (state.length > 0) {
    return state.reduce(
      (currentMax, object) => Math.max(currentMax, object.id),
      -1
    );
  }
  return 0;
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: getNewID(state),
          name: action.payload.name,
          category: action.payload.category,
          imageURL: action.payload.imageURL,
          price: action.payload.price,
        },
      ];

    default:
      return state;
  }
}
