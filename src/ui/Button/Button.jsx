import React from 'react';
import { useNavigate } from 'react-router-dom'; // подключает хук для программной навигации
import './Button.css';

const Button = ({
  children, className = '', link, onClick = () => {}, to = '', disabled,
}) => {
  const navigate = useNavigate(); // хук для использования программной навигации

  return (
    <button className={`button ${className}`} type='button' onClick={link ? () => { return navigate(to); } : onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
