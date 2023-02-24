import React from 'react';
import './ProfilePopup.css';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button/Button';

function ProfilePopup({ isOpen, closeProfilePopup }) {
  return (
    <div className={`profile-popup ${isOpen && 'profile-popup_opened'}`}>
      <p className='profile-popup__name'>Александр</p>
      <p className='profile-popup__email'>alex@gmail.com</p>
      <Link className='profile-popup__link' to='/profile/edit'>Редактировать</Link>
      <Link className='profile-popup__link' to='/profile/edit-password'>Изменить пароль</Link>
      <Button className='profile-popup__button' submit>Выйти</Button>
      <button
        type='button'
        className='profile-popup__button-close'
        onClick={closeProfilePopup}
      />
    </div>
  );
}

export default ProfilePopup;
