import React, { useContext } from 'react';
import './ProfilePopup.css';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function ProfilePopup({ isOpen, closeProfilePopup }) {
  const currentUser = useContext(CurrentUserContext);
  const { username, email } = currentUser;

  return (
    <div className={`profile-popup ${isOpen && 'profile-popup_opened'}`}>
      <Link className='profile-popup__name' to='/profile' onClick={closeProfilePopup}>{username}</Link>
      <p className='profile-popup__email'>{email}</p>
      <Link className='profile-popup__link' to='/profile/edit' onClick={closeProfilePopup}>Редактировать</Link>
      <Link className='profile-popup__link' to='/profile/edit-password' onClick={closeProfilePopup}>Изменить пароль</Link>
      <Link className='profile-popup__button' to='/profile/sign-out' onClick={closeProfilePopup}>Выйти</Link>
      <button
        type='button'
        className='profile-popup__button-close'
        onClick={closeProfilePopup}
      />
    </div>
  );
}

export default ProfilePopup;
