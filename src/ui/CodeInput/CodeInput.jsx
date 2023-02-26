import React from 'react';
import './CodeInput.css';

function CodeInput() {
  return (
    <div className='code-input__wrapper'>
      <input className='code-input' maxLength='6' defaultValue='' />
    </div>
  );
}

export default CodeInput;
