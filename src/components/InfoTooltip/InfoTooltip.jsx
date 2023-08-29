import React, { useEffect, useRef } from 'react';
import './InfoTooltip.scss';

const InfoTooltip = ({ isOpen, image, message, onClose }) => {
  const popup = useRef(null);

  const handleOverlayClose = (e) => {
    const infoPopup = e.target.classList;
    if (infoPopup.contains('popup_opened') || infoPopup.contains('popup__button-close')) {
      onClose();
    }
  };

  const handleEscClose = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

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

        <h3 className='popup__text standard-font standard-font_type_h3'>{message}</h3>

        <button
          type='button'
          className='popup__button-close'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default InfoTooltip;
