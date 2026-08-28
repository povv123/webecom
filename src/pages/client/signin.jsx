import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../../styles/signin.css';

const SignIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await login(email, password);
      const redirectTo = location.state?.from?.pathname || '/account';
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message || 'Unable to sign in.');
    } finally {
      setSubmitting(false);
    }
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
              type="email"
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

          {error && <p className="sigin-forgot-link" style={{ color: '#ff3b30', margin: '-14px 0 20px' }}>{error}</p>}

          <button type="submit" className="sigin-submit-btn" disabled={submitting}>
            {submitting ? 'Signing In…' : 'Sign In'}
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
