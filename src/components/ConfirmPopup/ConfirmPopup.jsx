import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmPopup.scss';
import { Button } from '../../ui';
import DeleteIcon from '../../images/DeleteIcon/DeleteIcon';

const ConfirmPopup = ({ isOpen, question, onClose, desc = '', confirmBtnText, rejectBtnText, iconBasket }) => {
  const popup = useRef(null);
  const navigate = useNavigate();

  const handleOverlayClose = (e) => {
    const confirmPopup = e.target.classList;
    if (confirmPopup.contains('popup_opened') || confirmPopup.contains('popup__button-close')) {
      onClose();
    }
  };

  const handleEscClose = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleCloseToNews = () => {
    navigate(-1);
    onClose();
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
      <div className='popup__content'>
        <h3 className='popup__content-question standard-font standard-font_type_h3'>{question}</h3>

        {desc !== '' && <p className='popup__content-descr' >{desc}</p>}

        <Button
          type='button'
          className='popup__content-close'
          onClick={onClose}
        />
        <div className='popup__content-btn-group'>
          <Button
            className='popup__content-btn-group-confirm'
            type='button'
            onClick={handleCloseToNews}
          >
            {iconBasket && <DeleteIcon />} {confirmBtnText}
          </Button>
          <Button
            className='popup__content-btn-group-reject'
            type='button'
            onClick={onClose}
            theme='transparent'
          >
            {rejectBtnText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
