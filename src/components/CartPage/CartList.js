import React from "react";
import CartItem from "./CartItem";
import {ProductContext} from "../../context/ProductContext";

export default function CartList() {
  const {cart, increment, decrement, removeItem} = React.useContext(
    ProductContext
  );

  if (cart.length === 0) {
    return (
      <h1 className='text-title text-center my-4'>
        your cart is currently empty
      </h1>
    );
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          {cart.map((item) => {
            return (
              <CartItem
                key={item.id}
                cartItem={item}
                increment={increment}
                decrement={decrement}
                removeItem={removeItem}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
