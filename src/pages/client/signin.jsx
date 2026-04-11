import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/signin.css'; 

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing in with:", email, password);
  };

  return (
    <div className="sigin-container">
      <div className="sigin-content">
        
        <header className="sigin-header">
          <h1 className="sigin-title">Sign in to your account</h1>
        </header>

        <form className="sigin-form" onSubmit={handleSubmit}>
          <div className="sigin-input-group">
            <input 
              type="text" 
              className="sigin-input" 
              placeholder="Email or Account ID" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="sigin-input-group">
            <input 
              type="password" 
              className="sigin-input" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <p className="sigin-forgot-link">
            <Link to="/forgot-password" className="sigin-text-link">
              Forgotten your password?
            </Link>
          </p>

          <button type="submit" className="sigin-submit-btn">
            Sign In
          </button>
        </form>

        <div className="sigin-divider"></div>

        <div className="sigin-create-account">
          <p>Don't have an account? <Link to="/register" className="sigin-text-link">Create yours now.</Link></p>
        </div>

      </div>
    </div>
  );
};

export default SignIn;