import React from "react";
import {ProductContext} from "../context/ProductContext";

export default function ProductsPage() {
  console.log(React.useContext(ProductContext));
  return (
    <>
      <h1>Hello from Products page</h1>
    </>
  );
}
