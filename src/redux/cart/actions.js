import { ADDTOCART, DECREASE, DELETE } from "./actionTypes";

export function addToCart(product) {
  return {
    type: ADDTOCART,
    payload: product.id,
  };
}
export function decreaseQuantity(product) {
  return {
    type: DECREASE,
    payload: product.id,
  };
}
export function deleteProduct(product) {
  return {
    type: DELETE,
    payload: product.id,
  };
}
