import React from 'react';
import { useNavigate } from 'react-router-dom'; // подключает хук для программной навигации
import './Button.scss';

const Button = ({
  children, className = '', theme = 'accent', onClick = () => {}, to = '', submit, link, disabled, innerRef
}) => {
  const navigate = useNavigate(); // хук для использования программной навигации

  return (
    <button
      className={`button button_theme_${theme} ${className}`}
      type={submit ? 'submit' : 'button'}
      onClick={link ? () => { return navigate(to); } : onClick}
      disabled={disabled}
      ref={innerRef}
    >
      {children}
    </button>
  );
};

export default Button;
