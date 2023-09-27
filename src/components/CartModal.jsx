import React from "react";
import { useCart } from "./CartContext";
import "./CartModal.styles.scss";

function CartModal({ toggleCartModal }) {
  const { cart, removeAllFromCart } = useCart();

  return (
    <div className="cart-modal">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="close-button" onClick={toggleCartModal}>
          ×
        </button>
      </div>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p style={{ color: "black", textAlign: "center" }}>
            Your cart is empty.
          </p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <span className="item-quantity">{item.quantity}x</span>{" "}
              {/* Display quantity */}
              <span className="item-name">{item.title}</span>
              <span className="item-price">${item.price}</span>
              <button
                className="remove-button"
                onClick={() => removeAllFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div className="cart-footer">
        <p>
          Total: $
          {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        </p>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
}

export default CartModal;
