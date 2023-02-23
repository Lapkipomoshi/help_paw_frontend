import React from 'react';
import './InfoTooltip.css';

function InfoTooltip({
  isOpen, image, message,
}) {
  return (
    <div
      className={`popup ${isOpen && 'popup_opened'}`}
    >
      <div className='popup__container'>
        <img
          className='popup__image'
          alt='Картинка'
          src={image}
        />

        <p className='popup__text'>{message}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
