import React from "react";
import {ProductContext} from "../context/ProductContext";

export default function HomePage() {
  console.log(React.useContext(ProductContext));
  return (
    <>
      <h1>Hello from Home page</h1>
    </>
  );
}
