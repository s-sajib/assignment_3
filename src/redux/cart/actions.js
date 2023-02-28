import { ADDTOCART, DECREASE, DELETE } from "./actionTypes";

export function addToCart(product) {
  return {
    type: ADDTOCART,
    payload: product,
  };
}
export function decreaseQuantity(product) {
  return {
    type: DECREASE,
    payload: product,
  };
}
export function deleteProduct(product) {
  return {
    type: DELETE,
    payload: product,
  };
}
