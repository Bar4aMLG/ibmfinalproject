import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">GreenLeaf</Link>
        <nav className="navbar-nav flex-row gap-3">
          <Link className="nav-link" to="/products">Products</Link>
          <Link className="nav-link position-relative" to="/cart">
            <span className="me-2">Cart</span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              {totalCount}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .485.379L2.89 6H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 15H4a.5.5 0 0 1-.491-.408L1.01 2H.5a.5.5 0 0 1-.5-.5zm3.14 5l1.25 6.5h7.22l1.25-6.5H3.14z"/>
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
