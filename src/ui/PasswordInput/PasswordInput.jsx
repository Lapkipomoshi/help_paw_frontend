import React, { useState } from 'react';
import './PasswordInput.css';

function PasswordInput({
  spanText, minLength, maxLength, onChange, errorMessage, isValid,
}) {
  const [isOpen, setIsOpen] = useState(false);
  function showPassword() {
    const passwordInput = document.querySelector('.password__input');
    if (passwordInput.getAttribute('type') === 'password') {
      setIsOpen(true);
      passwordInput.setAttribute('type', 'text');
    } else {
      setIsOpen(false);
      passwordInput.setAttribute('type', 'password');
    }
  }

  return (
    <>
      <label className='input__label'>Пароль</label>
      <div className='password__container'>
        <input
          className={`password__input ${isOpen && 'password__input_opened'} ${errorMessage && 'password__input_invalid'} ${isValid && 'password__input_valid'}`}
          name='password'
          type='password'
          required
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
        />
        <button className='password-visibility' type='button' onClick={showPassword} />
      </div>
      <span className='input__error'>{spanText}</span>
    </>
  );
}

export default PasswordInput;
