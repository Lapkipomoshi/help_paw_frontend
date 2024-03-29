import React from 'react';
import { useNavigate } from 'react-router-dom'; // подключает хук для программной навигации
import './Button.scss';

const Button = ({ children, className = '', theme = 'accent', onClick = () => {}, to = '', submit, link, disabled, ...rest }) => {
  const navigate = useNavigate(); // хук для использования программной навигации

  const handleClick = () => {
    if (link) {
      navigate(to);
    } else onClick();
  };

  return (
    <button className={`button button_theme_${theme} ${className}`} type={submit ? 'submit' : 'button'} onClick={handleClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
