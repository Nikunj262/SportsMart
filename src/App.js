import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import './App.css'; // Import the CSS file
import Navbar from './components/Navbar'; // Import the Navbar component
import Footer from './components/Footer'; // Import the Footer component

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar component */}
      <div className="page-content"> {/* Apply the style to the content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
      <Footer /> {/* Include the Footer component */}
    </Router>
  );
};

export default App;
