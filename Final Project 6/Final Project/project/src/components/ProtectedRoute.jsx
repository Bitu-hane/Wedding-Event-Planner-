import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Loading authentication...</div>; // or spinner
  }

  if (!user) {
    // Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  // Logged in → show the page
  return children;
};

export default ProtectedRoute;