import React from 'react';
import './SingleProduct.css';

export default function SingleProduct() {
  return (
    <div className="container">
      <div className="top-bar">
        <span className='link'>View Product</span>
        <span className='link'>View Cart</span>
      </div>

      <div className="content">
        <div className="product-image">
          <div className="main-image">Product Image</div>
          <div className="thumbnails">
            <div>Image 1</div>
            <div>Image 2</div>
            <div>Image 3</div>
          </div>
        </div>

        <div className="product-details">
          <p><strong>Product Name:</strong></p>
          <p><strong>Category:</strong></p>
          <p><strong>Price:</strong></p>
          <p><strong>Vendor:</strong></p>
          <p><strong>Manufacturer:</strong></p>
          <p><strong>In stock:</strong></p>
          <p><strong>Colour:</strong></p>
          <p><strong>Size:</strong></p>
          <p><strong>Description:</strong></p>
        </div>
      </div>

      <div className="reviews-section">
        <p><strong>Rating:</strong></p>
        <p><strong>Reviews:</strong></p>
      </div>

      <div className="add-to-cart-container">
        <button className="add-to-cart">ADD TO CART</button>
      </div>
    </div>
  );
}

//export default SingleProduct;
