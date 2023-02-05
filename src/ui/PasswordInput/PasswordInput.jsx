import React from 'react';
import './PasswordInput.css';

function PasswordInput({ spanClass, spanText }) {
  return (
    <>
      <label className='input__label'>Пароль</label>
      <div className='password__container'>
        <input
          className='password__input'
          name='password'
          type='password'
          required
        />
        <button className='password-visibility' type='button' />
      </div>
      <span className={spanClass}>{spanText}</span>
    </>
  );
}

export default PasswordInput;
