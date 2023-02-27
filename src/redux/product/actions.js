import { ADD } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD,
    payload: {
      ...product,
      // name
      // category
      // image URL
      // price
      //quantity
    },
  };
};
