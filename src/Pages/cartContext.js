import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart or increase quantity if it already exists
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // If item exists, increase quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If item is new, add it with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart or decrease quantity
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === id);
      if (existingItem && existingItem.quantity > 1) {
        // If more than 1 quantity, decrease by 1
        return prevCart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        // If only 1 left, remove the item
        return prevCart.filter((cartItem) => cartItem.id !== id);
      }
    });
  };

  // Clear the entire cart
  const clearCart = () => setCart([]);

  // Get total item count in the cart
  const getItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Get total price of items in the cart
  const calculateTotal = () => {
    return cart
      .reduce(
        (total, item) => total + item.quantity * parseFloat(item.price.split(' ')[0].replace('R', '')),
        0
      )
      .toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getItemCount,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
