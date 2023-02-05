import React from 'react';
import './Input.css';

function Input({
  labelText, inputName, inputType,
}) {
  return (
    <div className='input__wrapper'>
      <label className='input__label'>{labelText}</label>
      <input
        className='input'
        name={inputName}
        type={inputType}
        required
        minLength='2'
        maxLength='20'
      />
      <span className='input__error' />
    </div>
  );
}

export default Input;
