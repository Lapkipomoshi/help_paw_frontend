import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('access')) {
      setLoggedIn(false);
    }
  }, []);

  return (
    loggedIn ? <Component {...props} /> : <Navigate to='/' replace />
  );
};

export default ProtectedRoute;
