import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="mb-3">Total items: <strong>{totalCount}</strong></div>
      <div className="mb-3">Total cost: <strong>${totalCost}</strong></div>
      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <div className="row">
          {cartItems.map(item => (
            <div className="col-md-6 mb-4" key={item.id}>
              <div className="card h-100">
                <img src={item.image} className="card-img-top" alt={item.name} style={{height: '120px', objectFit: 'contain'}} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Unit price: ${item.price}</p>
                  <div className="d-flex align-items-center mb-2">
                    <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => dispatch(decreaseQuantity(item.id))} disabled={item.quantity === 1}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn btn-outline-secondary btn-sm ms-2" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                  <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="d-flex gap-3 mt-4">
        <button className="btn btn-primary" onClick={() => alert('Coming Soon!')}>Checkout</button>
        <Link className="btn btn-outline-success" to="/products">Continue Shopping</Link>
        <button className="btn btn-outline-danger" onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
  );
};

export default CartPage;
