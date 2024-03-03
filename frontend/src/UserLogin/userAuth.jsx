// UserAuthPage.js

import React, { useState } from 'react';
import axios from 'axios';
import './userAuth.css'; // Import a separate CSS file for styling

const UserAuthPage = () => {
  const [mode, setMode] = useState('login');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setMessage('');
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/registration', {
        userEmail,
        password,
        phoneNumber,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        userEmail,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Login failed. Username/Password error.');
    }
  };

  return (
    <div className="auth-container">
      <h1>AD-Mission</h1>
      <div className="auth-form">
        {mode === 'login' ? (
          <>
            <div>
              <label>Email:</label>
              <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </>
        ) : (
          <>
            <div>
              <label>Email:</label>
              <input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <label>Phone Number:</label>
              <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
          </>
        )}
      </div>
      <div className="auth-buttons">
        <button className="primary-button" onClick={mode === 'login' ? handleLogin : handleRegistration}>
          {mode === 'login' ? 'Login' : 'Register'}
        </button>
        <button className="secondary-button" onClick={() => handleModeChange(mode === 'login' ? 'registration' : 'login')}>
          {mode === 'login' ? 'Registration' : 'Login'}
        </button>
      </div>
      <div className="auth-message">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default UserAuthPage;
