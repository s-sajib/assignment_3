import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "../components/BillDetails";
import CartItem from "../components/CartItem";

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  // const cartProducts = cartItems.map;
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {cartItems.products.length > 0
              ? cartItems.products?.map((item) => (
                  <CartItem product={item} key={item.id} />
                ))
              : "No Product Added Yet"}
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
