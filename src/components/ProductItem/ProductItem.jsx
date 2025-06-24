// src/components/ProductItem/ProductItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import './ProductItem.css'; // Optional if you have styles

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
