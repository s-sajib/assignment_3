import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  deleteProduct,
} from "../redux/cart/actions";
import { decreaseStock, increaseStock } from "../redux/product/actions";
function CartItem({ product }) {
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(addToCart(product));
    dispatch(decreaseStock(product));
  }
  function handleDecrement() {
    dispatch(decreaseQuantity(product));
    dispatch(increaseStock(product, 1));
  }

  function removeItem() {
    dispatch(deleteProduct(product));
    dispatch(increaseStock(product, product.quantity));
  }

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={product?.imageURL} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{product?.name}</h4>
          <p className="lws-cartCategory">{product?.category}</p>
          <p>
            BDT <span className="lws-cartPrice">{product?.price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={handleIncrement}
            disabled={product.stockQuantity === 0}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{product?.quantity}</span>
          <button className="lws-decrementQuantity" onClick={handleDecrement}>
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT
          <span className="lws-calculatedPrice">
            {product?.quantity * product?.price}
          </span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="lws-removeFromCart" onClick={removeItem}>
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
