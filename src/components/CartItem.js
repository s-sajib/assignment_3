import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  deleteProduct,
} from "../redux/cart/actions";
import { manageStock } from "../redux/product/actions";
function CartItem({ product }) {
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(addToCart(product));
    dispatch(manageStock(product));
  }
  function handleDecrement() {
    dispatch(decreaseQuantity(product));
    // dispatch(manageStock(product));
  }

  function removeItem() {
    dispatch(deleteProduct(product));
  }

  return (
    <div class="cartCard">
      <div class="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img class="lws-cartImage" src={product?.imageURL} alt="product" />
        {/* <!-- cart item info --> */}
        <div class="space-y-2">
          <h4 class="lws-cartName">{product?.name}</h4>
          <p class="lws-cartCategory">{product?.category}</p>
          <p>
            BDT <span class="lws-cartPrice">{product?.price}</span>
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div class="flex items-center space-x-4">
          <button
            class="lws-incrementQuantity"
            onClick={handleIncrement}
            disabled={product.stockQuantity === 0}
          >
            <i class="text-lg fa-solid fa-plus"></i>
          </button>
          <span class="lws-cartQuantity">{product?.quantity}</span>
          <button class="lws-decrementQuantity" onClick={handleDecrement}>
            <i class="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p class="text-lg font-bold">
          BDT
          <span class="lws-calculatedPrice">
            {product?.quantity * product?.price}
          </span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button class="lws-removeFromCart" onClick={removeItem}>
          <i class="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
