import React, { useEffect, useRef } from 'react';
import './InfoTooltip.scss';

function InfoTooltip({
  isOpen, image, message, onClose,
}) {
  const popup = useRef(null);
  function handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__button-close')) {
      onClose();
    }
  }

  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', handleOverlayClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', handleOverlayClose);
    };
  }, []);

  return (
    <div
      className={`popup ${isOpen && 'popup_opened'}`}
      ref={popup}
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
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;
