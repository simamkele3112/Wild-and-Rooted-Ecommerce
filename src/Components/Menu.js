/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import menuBackground from '../Assets/images/menu-background.jpeg'; // Adjust the path according to your folder structure
import foodImage from '../Assets/images/food.jpg';
import vegetablesImage from '../Assets/images/vegetables.jpeg';
import fruitsImage from '../Assets/images/fruits.jpeg';


const menuData = [
  {
    route: "/Categories/Food",
    image: foodImage,
    alt: "Fresh Organic Food",
    name: "Food",
    price: "R64.99 / lb",  // Added price
    link: "order.html"
  },
  {
    route: "/Categories/Vegetables",
    image: vegetablesImage,
    alt: "Local Organic Vegetables",
    name: "Vegetables",
    price: "R22.99 / lb",  // Added price
    link: "order.html"
  },
  {
    route: '/Categories/Fruits',
    image: fruitsImage,
    alt: "Farm Fresh Fruits",
    name: "Fruit",
    price: "R23.49 / dozen",  // Added price
    link: "order.html"
  },
  // Add more menu items as needed
];

const Menu = () => {
  return (
    <section id="menu" className="menu" style={{ backgroundImage: `url(${menuBackground})` }}>
      <div className="container">
        <h2>Categories</h2>
        <p>Browse our selection of fresh food, vegetables, and fruits and order directly from our store. Delivered directly to you!</p>
        <div className="menu-list">
          {menuData.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.alt} />
              <h3>{item.name}</h3>
              <Link to= {item.route} className="btn">Order now</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Menu;
