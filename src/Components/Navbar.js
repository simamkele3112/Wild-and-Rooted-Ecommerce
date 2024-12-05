import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation to get current path
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa'; // Importing the cart icon from react-icons
 
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // Get current route path
 
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };
 
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
 
  return (
    <header>
      <nav>
        <div className="logo-container">
          <img
            src="https://i.postimg.cc/XNPj7F9C/logo.jpg"
            alt="Farmhouse Fare Logo"
            className="logo"
          />
          <h1 className="logo-text">Farmhouse Fare</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link to='/' className={`link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          </li>
          <li
            className={`dropdown ${isDropdownOpen ? 'open' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link to='/Categories' className={`link ${location.pathname === '/Categories' ? 'active' : ''}`}>Categories</Link>
            {isDropdownOpen && (
  <ul className="dropdown-menu">
    <li><Link to='/Categories/Fruits' className="dropdown-item">Fruits</Link></li>
    <li><Link to='/Categories/Vegetables' className="dropdown-item">Vegetables</Link></li>
    <li><Link to='/Categories/Food' className="dropdown-item">Food</Link></li>
  </ul>
)}
          </li>
          <li><Link to="/Orders" className={`link ${location.pathname === '/Orders' ? 'active' : ''}`}>Orders</Link></li>
          <li><Link to="/Inventory" className={`link ${location.pathname === '/Inventory' ? 'active' : ''}`}>Inventory</Link></li> 
          <li><Link to='/Registration' className={`link ${location.pathname === '/Registration' ? 'active' : ''}`}>Register</Link></li>
          <li><Link to='/Login' className={`link ${location.pathname === '/Login' ? 'active' : ''}`}>Login</Link></li>
          <li>
            <Link to='/Cart' className={`link ${location.pathname === '/Cart' ? 'active' : ''}`}>
              <FaShoppingCart className="cart-icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
 
export default Navbar;
 
