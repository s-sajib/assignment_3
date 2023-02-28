import { ADD } from "./actionTypes";
const initialState = [
  {
    id: 0,
    name: "Logitech G304 Hero Lightspeed Wireless Gaming Mouse",
    imageURL:
      "https://www.startech.com.bd/image/cache/catalog/mouse/logitech/g304/g304-01-500x500.jpg",
    price: 3500,
    quantity: 250,
  },
];

function getNewID(state) {
  if (state.length > 0) {
    return (
      state.reduce(
        (currentMax, object) => Math.max(currentMax, object.id),
        -1
      ) + 1
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
          quantity: action.payload.quantity,
        },
      ];

    default:
      return state;
  }
}
