import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SecondaryButton.css';

const SecondaryButton = ({
  children, className, submit, link, onClick = () => {}, to = '', disabled,
}) => {
  const navigate = useNavigate();

  return (
    <button
      className={`secondary-button ${className}`}
      type={submit ? 'submit' : 'button'}
      onClick={link ? () => { return navigate(to); } : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
