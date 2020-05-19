import React from 'react';
import {ProductContext} from '../../context/ProductContext';

export default function CartTotals() {
	const {clearCart, cartSubTotal, cartTax, cartTotal} = React.useContext(ProductContext);
	return (
		<div className="row">
			<div className="col text-title text-center my-4">
				<button className="btn btn-outline-danger text-capitalize mb-4" onClick={clearCart}>
					clear cart
				</button>
				<h3>subtotal : ${cartSubTotal}</h3>
				<h3>tax : ${cartTax}</h3>
				<h3>subtotal : ${cartTotal}</h3>
			</div>
		</div>
	)
}
