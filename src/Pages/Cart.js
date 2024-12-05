import React, { useContext, useState } from 'react';
import { CartContext } from './cartContext';
import { Link } from 'react-router-dom';
import './carts.css';

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Calculate total price based on quantity
  const calculateTotal = () => {
    return cart
      .reduce(
        (total, item) => total + parseFloat(item.price.split(" ")[0].replace("R", "")) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items before checking out.");
      return;
    }
    clearCart();
    setCheckoutSuccess(true);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Continue Shopping</Link></p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div>
                <h3>{item.name} (x{item.quantity})</h3>
                <p>Price per unit: {item.price}</p>
                <p>Subtotal: R {(parseFloat(item.price.split(" ")[0].replace("R", "")) * item.quantity).toFixed(2)}</p>
                
                {/* Add and Remove Buttons */}
                <div className="item-controls">
                  <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">
                    ➖ Remove
                  </button>
                  <button onClick={() => addToCart(item)} className="add-item-btn">
                    ➕ Add
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total: R {calculateTotal()}</h3>
          </div>

          {/* Checkout Section */}
          <button onClick={handleCheckout} className="checkout-btn">
            Checkout
          </button>

          {/* Checkout Success Message */}
          {checkoutSuccess && (
            <div className="checkout-success">
              <p>Thank you for your purchase! 🎉</p>
              <Link to="/">Continue Shopping</Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
