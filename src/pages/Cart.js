import React from "react";
import BillDetails from "../components/BillDetails";
import CartItem from "../components/CartItem";

function Cart() {
  return (
    <main class="py-16">
      <div class="container 2xl:px-8 px-2 mx-auto">
        <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div class="cartListContainer">
          <div class="space-y-6">
            <CartItem />
            <CartItem />
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
