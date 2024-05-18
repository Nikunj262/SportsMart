import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ isLoggedIn }) => {
  return (
    <div className="container-navbar">
      <div className="logo">
        <img src={logo} alt="SportsMart Logo" />
        <h1>
          <span className="sports">Sports</span>
          <span className="mart">Mart</span>
        </h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/about">About</Link></li>
          {isLoggedIn ? (
            <li><Link to="/logout">Logout</Link></li>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>
          )}
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
