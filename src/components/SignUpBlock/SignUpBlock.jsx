import React from 'react';
import './SignUpBlock.scss';
import { Link } from 'react-router-dom';

const SignUpBlock = ({ className }) => {
  return (
    <div className={`signup-block signup-block_${className}`}>
      <p className='signup-block__text standard-font standard-font_type_base'>Нет аккаунта?&nbsp;</p>
      <Link className='signup-block__link standard-font standard-font_type_base' to='/sign-up'>Зарегистрироваться</Link>
    </div>
  );
};

export default SignUpBlock;
