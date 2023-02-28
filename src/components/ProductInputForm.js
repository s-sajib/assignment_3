import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/product/actions";

function ProductInputForm() {
  const formValues = useRef({});

  const dispatch = useDispatch();
  function handleForm(event) {
    event.preventDefault();
    if (event.type === "submit") {
      dispatch(addProduct(formValues.current));
      event.target.reset();
    } else {
      if (event.target.type === "number") {
        formValues.current[event.target.name] = Number(event.target.value);
      } else {
        formValues.current[event.target.name] = event.target.value;
      }
    }
  }
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={handleForm}
      >
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            name="name"
            type="text"
            required
            onChange={handleForm}
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            name="category"
            required
            onChange={handleForm}
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            name="imageURL"
            type="url"
            required
            onChange={handleForm}
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              name="price"
              required
              onChange={handleForm}
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              name="quantity"
              required
              onChange={handleForm}
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default ProductInputForm;
