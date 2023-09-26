// ProductModal.js
import React, { useState, useEffect } from "react";
import Spinner from "./Spinner"; // Import the Spinner component
import "./ProductModal.styles.scss"; // Import the corresponding SCSS file

function ProductModal({ isOpen, onClose, product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImagesLoading, setIsImagesLoading] = useState(true);

  useEffect(() => {
    setCurrentImageIndex(0);
    setIsImagesLoading(true); // Initially set loading to true
  }, [isOpen]);

  const handleImageLoad = () => {
    setIsImagesLoading(false); // When an image is loaded, set loading to false
  };

  if (!isOpen) return null;

  const nextImage = () => {
    if (currentImageIndex < product.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="product-modal-background">
      <div className={`product-modal-container ${isOpen ? "open" : ""}`}>
        <button className="product-modal-close-button" onClick={onClose}>
          X
        </button>
        <div className="product-modal-content">
          <div className="product-modal-details">
            <div className="product-modal-image">
              {isImagesLoading && <Spinner />}
              <img
                src={product.images[currentImageIndex]}
                alt={product.title}
                onLoad={handleImageLoad}
              />
              <div className="product-modal-slideshow">
                <button
                  className="product-modal-prev-button"
                  onClick={prevImage}
                >
                  &#10094;
                </button>
                <button
                  className="product-modal-next-button"
                  onClick={nextImage}
                >
                  &#10095;
                </button>
              </div>
            </div>

            <div className="product-modal-info">
              <h1 className="product-modal-title">{product.title}</h1>
              <p className="product-modal-description">{product.description}</p>
              <div className="product-modal-additional-details">
                <p className="product-modal-price">Price: ${product.price}</p>
                <p className="product-modal-rating">Rating: {product.rating}</p>
                <p className="product-modal-stock">
                  In Stock: {product.stock} units
                </p>
                <p className="product-modal-brand">Brand: {product.brand}</p>
                <p className="product-modal-category">
                  Category: {product.category}
                </p>
                {/* Add more product details here */}
              </div>
            </div>
          </div>
        </div>
        {/* Rest of your modal content */}
      </div>
    </div>
  );
}

export default ProductModal;
