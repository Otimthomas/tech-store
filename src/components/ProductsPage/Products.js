import React from "react";
import {ProductContext} from '../../context/ProductContext';
import Title from '../Title';
import Product from '../Product';

export default function Products() {
	const {filteredProducts} = React.useContext(ProductContext);
  return (
	  <section className="py-5">
		  <div className="container">
			  <Title title="our products" center />
			  {/* Products */}
			  <div className="row py-5">
				  {filteredProducts.map(product => {
					  return <Product key={product.id} {...product} />
				  })}
			  </div>
		  </div>
	  </section>
  );
}
