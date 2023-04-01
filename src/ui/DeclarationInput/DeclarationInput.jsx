/* eslint-disable react/no-unknown-property */
import React from 'react';
import './DeclarationInput.css';

function DeclarationInput({
  caption, inputState, type, name,
}) {
  return (
    <>
      <label className='declaration-input__caption' htmlFor={name}>{caption}</label>
      <input
        className='declaration-input__input'
        value={inputState.value}
        onChange={(e) => { inputState.onChange(e); }}
        onBlur={inputState.onBlur}
        type={type}
        name={name}
        id={name}
      />
      <p className='declaration-input__error'>{inputState.dirty && inputState.invalidText}</p>
    </>
  );
}

export default DeclarationInput;
