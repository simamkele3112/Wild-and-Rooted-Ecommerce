/* eslint-disable no-undef */
import React from 'react';
import './Home.css';
// import logo from './Assets/images/logo.jpeg'; // Adjust path as needed
// eslint-disable-next-line no-unused-vars
import healthyRestuarantCover from '../Assets/images/healthy-restaurants-cover.jpg'; // Adjust path as needed

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src='https://i.postimg.cc/Hn1CX0zZ/healthy-restaurants-cover.jpg' alt="" className="hero-logo" />
        <img src={healthyRestaurantCover} alt="Healthy Restaurants Cover" />

        <h1>Welcome to Farmhouse Fare</h1>
        <p>Your farm-to-table experience starts here!</p>
        <a href="#menu" className="btn">Explore Our Menu</a>
      </div>
    </section>
  );
};

export default Hero;
