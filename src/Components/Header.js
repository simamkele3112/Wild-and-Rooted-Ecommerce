/* eslint-disable no-unused-vars */
import React from 'react';
// import ''; // Add styles for header
// import logo from '../Assets/images/logo.jpeg'; // Go up one level from Components to src
 // Adjust path as needed

const Header = () => {
  return (
    <header className="header">
      <img src='' alt="Farmhouse Fare Logo" className="logo" />
      <nav>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
