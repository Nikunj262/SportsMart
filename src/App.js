import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import './App.css'; // Import the CSS file
import Navbar from './components/Navbar'; // Import the Navbar component
import Footer from './components/Footer'; // Import the Footer component
import Login from './components/Login'; // Import the Login component
import Signup from './components/Signup'; // Import the Signup component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
 
      <div className="page-content"> {/* Apply the style to the content */}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
          <Route path="/about" element={isLoggedIn ? <About /> : <Login />} />
          <Route path="/users" element={isLoggedIn ? <Users /> : <Login />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </div>
      <Footer /> {/* Include the Footer component */}
    </Router>
  );
};

export default App;
