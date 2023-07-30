import React, { useState } from 'react';
import './PasswordInput.scss';

function PasswordInput({
  spanText, minLength, maxLength, onChange, errorMessage, isValid, spanPrompt,
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
      <label className='input__label standard-font standard-font_type_body'>Пароль</label>
      <div className={
        `password__container
        ${errorMessage && 'password__container_invalid'}
        ${isValid && 'password__container_valid'}`
      }>
        <input
          className={
            `password__input standard-font standard-font_type_password
            ${isOpen && 'password__input_opened'}`
          }
          name='password'
          type='password'
          required
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
        />
        <button className={`password-visibility ${isOpen && 'password-visibility_opened'}`} type='button' onClick={showPassword} />
      </div>
      <span className={`input__span standard-font standard-font_type_smallest ${errorMessage && 'input__error'}`}>{errorMessage ? spanText : spanPrompt}</span>
    </>
  );
}

export default PasswordInput;
