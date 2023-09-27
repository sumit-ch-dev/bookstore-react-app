import { useState } from "react";
import "./ProductCard.styles.scss";
import ProductModal from "./ProductModal";
import { useCart } from "./CartContext";

function ProductCard({ product }) {
  // const [cartItems, setCartItems] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart, removeFromCart } = useCart();

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleAddToCart = () => {
    console.log("adding product to cart");
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
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
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button
            className="remove-from-cart-button"
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
