import React from 'react';
import './Input.css';

function Input({
  labelText, inputName, inputType, spanText, onChange, minLength, maxLength, errorMessage, isValid, value,
}) {
  return (
    <div className='input__wrapper'>
      <label className='input__label'>{labelText}</label>
      <input
        className={`input ${errorMessage && 'input_invalid'} ${isValid && 'input_valid'}`}
        name={inputName}
        type={inputType}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        required
        onChange={onChange}
      />
      <span className='input__error'>{spanText}</span>
    </div>
  );
}

export default Input;
