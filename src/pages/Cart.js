import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "../components/BillDetails";
import CartItem from "../components/CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  // const cartProducts = cartItems.map;
  return (
    <main class="py-16">
      <div class="container 2xl:px-8 px-2 mx-auto">
        <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div class="cartListContainer">
          <div class="space-y-6">
            {cartItems.products?.map((item) => (
              <CartItem product={item} />
            ))}
          </div>

          <div>
            <BillDetails />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
