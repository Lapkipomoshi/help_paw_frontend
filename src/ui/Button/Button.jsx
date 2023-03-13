import React from 'react';
import { useNavigate } from 'react-router-dom'; // подключает хук для программной навигации
import './Button.css';

const Button = ({
  children, className = '', theme = 'accent', onClick = () => {}, to = '', submit, link, disabled,
}) => {
  const navigate = useNavigate(); // хук для использования программной навигации

  return (
    <button
      className={`button button__${theme} ${className}`}
      type={submit ? 'submit' : 'button'}
      onClick={link ? () => { return navigate(to); } : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
