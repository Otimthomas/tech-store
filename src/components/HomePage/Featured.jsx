import React from "react";
import {Link} from "react-router-dom";
import Title from "../Title";
import {ProductContext} from "../../context/ProductContext";
import Product from "../../components/Product";

export default function Featured() {
  const {featuredProducts} = React.useContext(ProductContext);
  return (
    <section className='py-5'>
      <div className='container'>
        {/* title */}
        <Title title='featured products' center />
        {/* products */}
        <div className='row my-5'>
          {featuredProducts.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
        <div className='row mt-5'>
          <div className='col text-center'>
            <Link to='/products' className='main-link'>
              our products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
