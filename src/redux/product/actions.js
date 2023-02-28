import { ADD, STOCK } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD,
    payload: {
      ...product,
      // name
      // category
      // image URL
      // price
      //stockQuantity
    },
  };
};

export const manageStock = (product) => {
  return {
    type: STOCK,
    payload: {
      ...product,
    },
  };
};
