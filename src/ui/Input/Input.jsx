import React from 'react';
import './Input.scss';

function Input({
  labelText, inputName, inputType, spanText, onChange, minLength, maxLength, errorMessage, isValid, value,
}) {
  return (
    <div className='input__wrapper'>
      <label className='input__label standard-font standard-font_type_body'>{labelText}</label>
      <input
        className={`input standard-font standard-font_type_body ${errorMessage && 'input_invalid'} ${isValid && 'input_valid'}`}
        name={inputName}
        type={inputType}
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        required
        onChange={onChange}
      />
      <span className='input__error standard-font standard-font_type_smallest'>{spanText}</span>
    </div>
  );
}

export default Input;
