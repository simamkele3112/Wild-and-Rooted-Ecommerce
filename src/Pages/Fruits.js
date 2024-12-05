import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext'; // Assuming you have a cartContext file
import './Fruits.css';

const Fruits = () => {
  const { cart, addToCart } = useContext(CartContext);

  const fruitCategories = {
    "Citrus Fruits": [
      {
        id: 10,
        name: "Orange",
        description: "Juicy, fresh oranges full of vitamin C.",
        price: "R20.00 per kg",
        image: "https://media.istockphoto.com/id/1536094876/photo/orange-fruit-in-wooden-box.jpg?s=2048x2048&w=is&k=20&c=K3qTRQ492Py2Y_xttw5ozRJJgEZGcp-sAcrRX6ckhck=",
      },
      {
        id: 11,
        name: "Lemon",
        description: "Tangy lemons, perfect for zest and fresh lemonade.",
        price: "R25.00 per kg",
        image: "https://res.cloudinary.com/dvv9fvblr/image/fetch/f_jpg,w_350/https://res.cloudinary.com/dvv9fvblr/image/upload/v1695068248/ouvt3k6bknrekxeolfwg.jpg",
      },
      {
        id: 12,
        name: "Lime",
        description: "Tangy lemons, perfect for zest and fresh lemonade.",
        price: "R16.00 per kg",
        image: "https://www.goodharvest.com.au/cdn/shop/articles/lemonade_fruit_490_x_490_px_1.png?v=1651639513",
      },
    ],
    "Berries": [
      {
        id: 13,
        name: "Strawberry",
        description: "Sweet, fresh strawberries, great for snacks or desserts.",
        price: "R40.00 per kg",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-Fo56ZTfOsfMS3d-treBKc-NIvPlrdUa2PvWA7kReHB4WGJIppuiYodgGhBboVkYxqPxpyM5CSAmMJ1IA6fakQecM-qP3cj_vKZRTQXkdKguKWDKUv_6y2lpjPRWbyHyZAIEz-l8LXCQ/s1600/cameron+highlands+strawberry+farm.jpg",
      },
      {
        id: 14,
        name: "Blueberry",
        description: "Delicious, antioxidant-rich blueberries.",
        price: "R45.00 per kg",
        image: "https://images.squarespace-cdn.com/content/v1/5bfec493cef372cbb6d8f389/af057257-7c91-4922-8418-8c65046c5f35/48B0684A-BCFD-4F6A-88A7-0FE8E2C9C95A.jpeg?format=2500w",
      },
      {
        id: 15,
        name: "Kiwi",
        description: "Delicious, antioxidant-rich kiwi.",
        price: "R50.00 per kg",
        image: "https://plantsender.com.au/wp-content/uploads/2022/05/KIWIBERRY-1.jpg",
      },
    ],
  };

  return (
    <div className="fruit-container">
      <header className="fruit-header">
        <h1>Our Fresh Fruits</h1>
        <Link to="/Cart" className="cart-icon">
          🛒 {cart.length} items
        </Link>
      </header>

      {Object.entries(fruitCategories).map(([category, fruits]) => (
        <section key={category} className="fruit-category">
          <h2>{category}</h2>
          <div className="fruit-cards">
            {fruits.map((fruit) => (
              <div key={fruit.id} className="fruit-card">
                <img src={fruit.image} alt={fruit.name} className="fruit-image" />
                <h3 className="fruit-name">{fruit.name}</h3>
                <p className="fruit-description">{fruit.description}</p>
                <p className="fruit-price">{fruit.price}</p>
                <button onClick={() => addToCart(fruit)} className="order-btn">
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Fruits;
