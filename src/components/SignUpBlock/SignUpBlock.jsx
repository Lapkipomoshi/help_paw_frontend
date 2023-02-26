import React from 'react';
import './SignUpBlock.css';
import { Link } from 'react-router-dom';

const SignUpBlock = ({ className }) => {
  return (
    <div className={`signup-block signup-block_${className}`}>
      <p className='signup-block__text'>Нет аккаунта?</p>
      <Link className='signup-block__link' to='/sign-up'>Зарегистрироваться</Link>
    </div>
  );
};

export default SignUpBlock;
