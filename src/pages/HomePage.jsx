import React from "react";
import {ProductContext} from "../context/ProductContext";
import Hero from "../components/Hero";
import {Link} from "react-router-dom";

export default function HomePage() {
  console.log(React.useContext(ProductContext));
  return (
    <>
      <Hero title='awesome gadgets' max='true'>
        <Link to='/products' className="main-link m-4">our products</Link>
      </Hero>
    </>
  );
}
