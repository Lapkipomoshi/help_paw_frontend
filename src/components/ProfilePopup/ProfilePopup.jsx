import React, { useContext, useEffect, useRef } from 'react';
import './ProfilePopup.scss';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function ProfilePopup({ isOpen, closeProfilePopup }) {
  const currentUser = useContext(CurrentUserContext);
  const { username, email } = currentUser;
  const ref = useRef(null);

  const handleOverlayClose = (e) => {
    const popup = e.target.classList;
    if ((ref.current && !ref.current.contains(e.target) || popup.contains('profile-popup_opened') || popup.contains('profile-popup__button-close'))) {
      closeProfilePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOverlayClose, true);
    return () => {
      document.removeEventListener('click', handleOverlayClose, true);
    };
  }, [closeProfilePopup]);

  return (
    <div className={`profile-popup ${isOpen && 'profile-popup_opened'}`} ref={ref}>
      <div className='profile-popup__container'>
        <Link className='profile-popup__name' to='/profile' onClick={closeProfilePopup}>{username}</Link>
        <p className='profile-popup__email'>{email}</p>
        <Link className='profile-popup__link' to='/profile/edit' onClick={closeProfilePopup}>Редактировать профиль</Link>
        <Link className='profile-popup__link' to='/profile/edit/password' onClick={closeProfilePopup}>Изменить пароль</Link>
        <Link className='profile-popup__button' to='/profile/sign-out' onClick={closeProfilePopup}>Выйти</Link>
        <button
          type='button'
          className='profile-popup__button-close'
          onClick={closeProfilePopup}
        />
      </div>
    </div>
  );
}

export default ProfilePopup;
