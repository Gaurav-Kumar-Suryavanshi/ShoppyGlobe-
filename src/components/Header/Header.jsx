import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cartCount = useSelector(state => 
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  
  return (
    <header className="header">
      <Link to="/" className="logo">ShoppyGlobe</Link>
      <Link to="/cart" className="cart-link">
        🛒 Cart ({cartCount})
      </Link>
    </header>
  );
}