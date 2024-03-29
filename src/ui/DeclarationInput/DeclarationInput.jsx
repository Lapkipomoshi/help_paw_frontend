import React from 'react';
import './DeclarationInput.scss';

// TODO убрать li,  это форма, а не список. Выше, где используется, заменить ul на form
const DeclarationInput = ({ caption, inputState, type, name, placeholder, required, showError = true }) => {
  return (
    <li className='declaration-input'>
      <label className='declaration-input__caption' htmlFor={name}>
        {caption}
      </label>
      <input
        className={`declaration-input__input ${inputState.dirty && inputState.invalidText && 'declaration-input__input_invalid'}`}
        value={inputState.value}
        onChange={inputState.onChange}
        onBlur={inputState.onBlur}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
      />
      {showError && <p className='declaration-input__error'>{inputState.dirty && inputState.invalidText}</p>}
    </li>
  );
};

export default DeclarationInput;
