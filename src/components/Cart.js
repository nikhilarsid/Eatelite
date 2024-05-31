// src/components/Cart.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";


const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h2>Cart ({cart.length})</h2>
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <span>
              {item.card.info.name} - Rs.{" "}
              {item.card.info.price === undefined
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </span>
            <button
              onClick={() => removeFromCart(item)}
              className="remove-button"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="total-price">
        Total Price: Rs. {cart.reduce((acc, item) => acc + (item.card.info.price === undefined ? item.card.info.defaultPrice / 100 : item.card.info.price / 100), 0)}
      </div>
      <button className="buy-now-button">
        Buy Now
      </button>
    </div>
  );
};

export default Cart;


