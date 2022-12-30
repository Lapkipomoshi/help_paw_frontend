import React from "react";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    props.loggedIn ? <Component {...props} /> : <div />
  );
};

export default ProtectedRoute;