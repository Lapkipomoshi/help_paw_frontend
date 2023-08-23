import React from 'react';
import { Link } from 'react-router-dom';

import './PrivacyCheckbox.scss';

const PrivacyCheckbox = ({ onClick }) => {
  return (
    <div className='privacy-checkbox'>
      <label className='privacy-checkbox__container'>
        <input className='privacy-checkbox__input' type='checkbox' onClick={onClick} />
        <span className='privacy-checkbox__checkbox' />
      </label>

      <p className='privacy-checkbox__text standard-font standard-font_type_small'>
        Я согласен с{' '}
        <Link className='privacy-checkbox__link standard-font standard-font_type_small' to='/privacy' target='_blank'>
          Политикой конфиденциальности
        </Link>{' '}
        и{' '}
        <Link className='privacy-checkbox__link standard-font standard-font_type_small' to='/terms' target='_blank'>
          Условиями использования сервиса
        </Link>
      </p>
    </div>
  );
};

export default PrivacyCheckbox;
