import React from "react";
import "./CartModal.styles.scss"; // Import your CartModal styles

function CartModal({ toggleCartModal }) {
  return (
    <div className="cart-modal">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="close-button" onClick={toggleCartModal}>
          ×
        </button>
      </div>
      <div className="cart-items">
        <div className="cart-item">
          <span className="item-name">Product Name</span>
          <span className="item-price">$10.99</span>
          <button className="remove-button">Remove</button>
        </div>
        {/* Repeat the above structure for each cart item */}
      </div>
      <div className="cart-footer">
        <p>Total: $99.99</p>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
}

export default CartModal;
