import React, { useState } from 'react';
import '../css/Login.css'; // Import your CSS file

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username/email and password.');
      return;
    }

    // Add your login logic here using the entered username and password
    console.log('Login clicked. Username:', username, 'Password:', password);

    // Reset error state
    setError('');
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username/email and password.');
      return;
    }

    // Add your signup logic here using the entered username and password
    console.log('Signup clicked. Username:', username, 'Password:', password);

    // Reset error state
    setError('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label className="form-label">
          Username/Email
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Password 
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
        <button onClick={handleSignup} className="signup-button">
          Signup
        </button>
      </form>
    </div>
  );
}
