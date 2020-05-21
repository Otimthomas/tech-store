import React from "react";
import {ProductContext} from '../../context/ProductContext';
import Title from '../Title';
import Product from '../Product';
import ProductFilter from './ProductFilter';

export default function Products() {
	const {filteredProducts} = React.useContext(ProductContext);
  return (
	  <section className="py-5">
		  <div className="container">
			  <Title title="our products" center />
			  {/* product filter */}
			  <ProductFilter />
			  {/* row */}
			  <div className="row">
				  <div className="col-10 mx-auto">
					  <h6 className="text-title">
						  total products : {filteredProducts.length}
					  </h6>
				  </div>
			  </div>
			  {/* Products */}
			  <div className="row py-5">
				  {filteredProducts.length === 0 ? (
					  <div className="col text-title text-center">
						  sorry, no items matched your search
					  </div>
				  ) : filteredProducts.map(product => {
					  return <Product key={product.id} {...product} />
				  })}
			  </div>
		  </div>
	  </section>
  );
}
