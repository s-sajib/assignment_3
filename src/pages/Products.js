import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import ProductInputForm from "../components/ProductInputForm";

function Products() {
  const products = useSelector((state) => state.product);

  return (
    <main className="py-16">
      <div className="productWrapper">
        {/* <!-- products container --> */}
        <div className="productContainer" id="lws-productContainer">
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
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
