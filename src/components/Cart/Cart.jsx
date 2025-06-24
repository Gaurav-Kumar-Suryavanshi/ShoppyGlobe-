// src/components/Cart/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';
import './Cart.css';

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="cart-title">Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-info">
            <h3>{item.title}</h3>
            <p>Price: ₹{item.price} × {item.quantity}</p>
            <p>Total: ₹{item.price * item.quantity}</p>
          </div>
          <button className="remove-btn" onClick={() => handleRemove(item.id)}>
            Remove
          </button>
        </div>
      ))}
      <h3 className="cart-total">Grand Total: ₹{total.toFixed(2)}</h3>
    </div>
  );
}
