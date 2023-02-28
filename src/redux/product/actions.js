import { ADD, DECREASE, INCREASE } from "./actionTypes";

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

export const decreaseStock = (product) => {
  return {
    type: DECREASE,
    payload: {
      ...product,
    },
  };
};

export const increaseStock = (product, quantity) => {
  return {
    type: INCREASE,
    payload: {
      product: product,
      quantity: quantity,
    },
  };
};
