import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import './Header.css';
import Paw from './svg/Paw';
import ProfilePopup from '../../components/ProfilePopup/ProfilePopup';

const Header = ({ loggedIn }) => {
  const [profilePopupOpen, setProfilePopupOpen] = useState(false);

  function openProfilePopup() {
    setProfilePopupOpen(true);
  }

  function closeProfilePopup() {
    setProfilePopupOpen(false);
  }

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
          <NavLink className={`menu__sign menu__sign_in ${loggedIn ? 'display_none' : ''}`} to='/sign-in'>Вход</NavLink>
          <NavLink className={`menu__sign menu__sign_up ${loggedIn ? 'display_none' : ''}`} to='/sign-up'>Регистрация</NavLink>
          {/* eslint-disable-next-line react/jsx-no-bind */}
          <NavLink className={`menu__profile ${loggedIn ? '' : 'display_none'}`} to='/profile' onMouseEnter={openProfilePopup} />
        </nav>

        {/* eslint-disable-next-line react/jsx-no-bind */}
        <ProfilePopup isOpen={profilePopupOpen} closeProfilePopup={closeProfilePopup} />
      </header>
    </MainContainer>
  );
};

export default Header;
