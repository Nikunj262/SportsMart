import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    // Perform logout action
    setIsLoggedIn(false);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="SportsMart Logo" />
        <h1>
          <span className="sports">Sports</span>
          <span className="mart">Mart</span>
        </h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
        {isLoggedIn ? (
          <li><button onClick={handleLogout}>Logout</button></li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
