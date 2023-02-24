import React, { useContext } from 'react';
import './ProfilePopup.css';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function ProfilePopup({ isOpen, closeProfilePopup, onSignout }) {
  const currentUser = useContext(CurrentUserContext);
  const { username, email } = currentUser;

  return (
    <div className={`profile-popup ${isOpen && 'profile-popup_opened'}`}>
      <p className='profile-popup__name'>{username}</p>
      <p className='profile-popup__email'>{email}</p>
      <Link className='profile-popup__link' to='/profile/edit'>Редактировать</Link>
      <Link className='profile-popup__link' to='/profile/edit-password'>Изменить пароль</Link>
      <Button className='profile-popup__button' submit onClick={onSignout}>Выйти</Button>
      <button
        type='button'
        className='profile-popup__button-close'
        onClick={closeProfilePopup}
      />
    </div>
  );
}

export default ProfilePopup;
