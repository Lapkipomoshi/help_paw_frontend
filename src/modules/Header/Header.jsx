import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import './Header.scss';
import Paw from './svg/Paw';
import ProfilePopup from '../../components/ProfilePopup/ProfilePopup';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const Header = () => {
  const { username } = useContext(CurrentUserContext);
  const [profilePopupOpen, setProfilePopupOpen] = useState(false);

  const openProfilePopup = () => {
    setProfilePopupOpen(true);
  };

  const closeProfilePopup = () => {
    setProfilePopupOpen(false);
  };

  return (
    <MainContainer theme='additional'>
      <header className='header'>
        <Link className='header__logo-link' to='/'>
          <Paw className='header__logo' />
        </Link>
        <nav className='menu menu_items_links'>
          <NavLink
            className={({ isActive }) => {
              return `menu__link ${isActive ? 'menu__link_active' : ''}`;
            }}
            to='/papers'
          >
            Полезные статьи
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `menu__link ${isActive ? 'menu__link_active' : ''}`;
            }}
            to='/shelters'
          >
            Карта приютов
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `menu__link ${isActive ? 'menu__link_active' : ''}`;
            }}
            to='/news'
          >
            Новости
          </NavLink>
        </nav>
        <nav className='menu'>
          <NavLink className={`menu__sign menu__sign_in ${username ? 'display_none' : ''}`} to='/sign-in'>Вход</NavLink>
          <NavLink className={`menu__sign menu__sign_up ${username ? 'display_none' : ''}`} to='/sign-up'>Регистрация</NavLink>
          <button className={`menu__profile ${username ? '' : 'display_none'}`} type='button' onClick={openProfilePopup} />
        </nav>

        <ProfilePopup isOpen={profilePopupOpen} closeProfilePopup={closeProfilePopup} />
      </header>
    </MainContainer>
  );
};

export default Header;
