import React from 'react';
import './DeclarationTextarea.scss';

const DeclarationTextarea = ({ caption, inputState, name, placeholder, textRows, textCols, required, showError = true }) => {
  return (
    <div className='declaration-textarea'>
      <label className='declaration-textarea__caption' htmlFor={name}>
        {caption}
      </label>
      <textarea
        className={`declaration-textarea__textarea ${inputState.dirty && inputState.invalidText && 'declaration-textarea__textarea_invalid'}`}
        value={inputState.value}
        onChange={inputState.onChange}
        onBlur={inputState.onBlur}
        cols={textCols}
        rows={textRows}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
      />
      {showError && <p className='declaration-textarea__error'>{inputState.dirty && inputState.invalidText}</p>}
    </div>
  );
};

export default DeclarationTextarea;
