import React from "react";
import {ProductContext} from "../context/ProductContext";
import Hero from '../components/Hero';
import Products from '../components/ProductsPage/Products';
import productsBcg from '../images/productsBcg.jpeg';

export default function ProductsPage() {
  // console.log(React.useContext(ProductContext));
  return (
    <>
      <Hero img={productsBcg} />
      <Products />
    </>
  );
}
