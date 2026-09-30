import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// Dev switch from .env - must match DISABLE_ADMIN_AUTH on the server.
// Set REACT_APP_DISABLE_ADMIN_AUTH=false (or delete it) before going live.
const AUTH_DISABLED = process.env.REACT_APP_DISABLE_ADMIN_AUTH === 'true';

const RequireAdmin = ({ children }) => {
  const { isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();

  if (AUTH_DISABLED) return children;
  if (isLoading) return null;

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (!user?.isAdmin) {
    return (
      <div style={{ padding: '120px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>Admin access required</h1>
        <p style={{ color: '#86868b' }}>Your account does not have permission to view this area.</p>
      </div>
    );
  }

  return children;
};

export default RequireAdmin;