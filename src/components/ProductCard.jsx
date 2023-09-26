import { useState } from "react";
import "./ProductCard.styles.scss";
import ProductModal from "./ProductModal";

function ProductCard({ product }) {
  const [cartItems, setCartItems] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  const removeFromCart = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
    }
  };
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-rating">Rating: {product.rating}</div>
        <div className="product-price">Price: ${product.price}</div>
        <div className="product-stock">Stock: {product.stock} available</div>
        <button className="view-details-button" onClick={openModal}>
          View Details
        </button>

        {isModalOpen && (
          <ProductModal
            isOpen={isModalOpen}
            onClose={closeModal}
            product={product}
          />
        )}

        <div className="cart-buttons">
          <button className="add-to-cart-button" onClick={addToCart}>
            Add to Cart
          </button>
          <button className="remove-from-cart-button" onClick={removeFromCart}>
            Remove from Cart
          </button>
        </div>
      </div>

      <div className="cart-count">Cart Items: {cartItems}</div>
    </div>
  );
}

export default ProductCard;
