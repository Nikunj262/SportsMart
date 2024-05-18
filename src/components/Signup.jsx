import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Import the CSS file for Signup page styling

const Signup = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/signup', { email, password });
      console.log(response.data);
      setIsLoggedIn(true); // Update isLoggedIn state upon successful signup
    } catch (error) {
      console.error(error.response.data.message);
      setError(error.response.data.message); // Set error message if signup fails
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message if signup fails */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn-signup">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
