import React from 'react';
import './InfoTooltip.scss';

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

        <button
          type='button'
          className='popup__button-close'
          // onClick={onClose}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;
