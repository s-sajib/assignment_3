import React from "react";
import Product from "../components/Product";
import ProductInputForm from "../components/ProductInputForm";

function Products() {
  return (
    <main class="py-16">
      <div class="productWrapper">
        {/* <!-- products container --> */}
        <div class="productContainer" id="lws-productContainer">
          <Product />
          <Product />
        </div>
        {/* <!-- products container ends --> */}
        <div>
          <ProductInputForm />
        </div>
      </div>
    </main>
  );
}

export default Products;
