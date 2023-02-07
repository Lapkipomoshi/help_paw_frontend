import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import Paw from './svg/Paw';

const Header = ({ loggedIn }) => {
  return (
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
        <NavLink className={`menu__sign-in ${loggedIn ? 'display_none' : ''}`} to='/sign-in'>Вход</NavLink>
        <NavLink className={`menu__sign-up ${loggedIn ? 'display_none' : ''}`} to='/sign-up'>Регистрация</NavLink>
        <NavLink className={`menu__profile ${loggedIn ? '' : 'display_none'}`} to='/profile' />
      </nav>
    </header>
  );
};

export default Header;
