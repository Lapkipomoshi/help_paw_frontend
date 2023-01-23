import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  className = '',
  onClick = () => {},
  disabled = false,
  type = 'button',
  ... props
}) => {
  if (type === 'link') {
    return (
      <Link className={`button button_${className}`} to={onClick} target="_blank">{children}</Link>
    );
  }
  return (
    <button disabled={disabled}
            className={`button button_${className}`}
            type={type}
    >
      {children}
    </button>
  );
};

export default Button;
