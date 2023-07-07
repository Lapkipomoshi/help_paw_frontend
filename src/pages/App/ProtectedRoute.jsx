import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ condition, component: Component, ...props }) => {
  return (
    condition ? <Component {...props} /> : <Navigate to='/' replace />
  );
};

export default ProtectedRoute;
