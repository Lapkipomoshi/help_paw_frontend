import React from 'react';
import './PasswordInput.css';

function PasswordInput({
  spanClass, spanText, minLength, onChange, errorMessage,
}) {
  function showPassword() {
    const passwordInput = document.querySelector('.password__input');
    if (passwordInput.getAttribute('type') === 'password') {
      passwordInput.setAttribute('type', 'text');
    } else {
      passwordInput.setAttribute('type', 'password');
    }
  }

  return (
    <>
      <label className='input__label'>Пароль</label>
      <div className='password__container'>
        <input
          className={`password__input ${errorMessage && 'password__input_invalid'}`}
          name='password'
          type='password'
          required
          minLength={minLength}
          onChange={onChange}
        />
        <button className='password-visibility' type='button' onClick={showPassword} />
      </div>
      <span className={spanClass}>{spanText}</span>
    </>
  );
}

export default PasswordInput;
