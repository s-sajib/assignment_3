import { useSelector } from "react-redux";

function calculateSum(sum, value) {
  return sum + value;
}
function BillDetails() {
  const cartItems = useSelector((state) => state.cart);

  const totalBill = cartItems.products
    ?.map((item) => item.quantity * item.price)
    ?.reduce(calculateSum, 0);
  return (
    <div class="billDetailsCard">
      <h4 class="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
      <div class="space-y-4">
        {/* <!-- sub total --> */}
        <div class="flex items-center justify-between">
          <p>Sub Total</p>
          <p>
            BDT <span class="lws-subtotal">{totalBill}</span>
          </p>
        </div>
        {/* <!-- Discount --> */}
        <div class="flex items-center justify-between">
          <p>Discount</p>
          <p>
            BDT <span class="lws-discount">0</span>
          </p>
        </div>
        {/* <!-- VAT --> */}
        <div class="flex items-center justify-between">
          <p>VAT</p>
          <p>
            BDT <span class="vat">0</span>
          </p>
        </div>
        {/* <!-- Total --> */}
        <div class="flex items-center justify-between pb-4">
          <p class="font-bold">TOTAL</p>
          <p class="font-bold">
            BDT <span class="lws-total">{totalBill}</span>
          </p>
        </div>
        <button class="placeOrderbtn">place order</button>
      </div>
    </div>
  );
}

export default BillDetails;
