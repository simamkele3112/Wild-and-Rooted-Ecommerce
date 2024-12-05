import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserData from '../Pages/userData';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = UserData.find(
      (u) =>
        (u.username === username && u.password === password) ||
        (u.email === username && u.password === password)
    );

    if (user) {
      setError('');
      localStorage.setItem('username', username);
      navigate('/');
      window.location.reload();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-box">
      <div className="login-inner">
        <h2 className="login-header">Sign In</h2>
        <form onSubmit={handleSubmit} className="login-form-container">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-submit-btn">
            Submit
          </button>
          <p className="login-terms">
            By clicking Continue or Sign up, you agree to our Terms of Use and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
