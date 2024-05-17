// client/src/pages/Home.js
import React from 'react';
import './Style.css';
import product1Image from '../assets/logo.png';
import product2Image from '../assets/logo.png';

const Home = () => {
  return (
    <div className="container">
      <h1 className="heading">Welcome to Sportsmart</h1>
      <div className="home-content">
        <p>Sportsmart is your ultimate destination for all things sports! Whether you're a professional athlete or a weekend warrior, we've got everything you need to stay active and perform at your best.</p>
        <h2>Featured Products</h2>
        <div className="featured-products">
          <div className="product">
            <img src={product1Image} alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
          </div>
          <div className="product">
            <img src={product2Image} alt="Product 2" />
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
