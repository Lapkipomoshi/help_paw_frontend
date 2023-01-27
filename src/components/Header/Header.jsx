import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/icons/ic_paw.svg';

const Header = ({ loggedIn }) => {
  return (
    <header className='header'>
      <Link className='header__logo-link' to='/'>
        <img className='header__logo' src={logo} alt='лого' />
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
        <NavLink className={`menu__sign-in ${loggedIn ? 'display_none' : ''}`} to='/sign-in'>Войти</NavLink>
        <NavLink className={`menu__sign-up ${loggedIn ? 'display_none' : ''}`} to='/sign-up'>Регистрация</NavLink>
        <NavLink className={`menu__profile ${loggedIn ? '' : 'display_none'}`} to='/profile' />
      </nav>
    </header>
  );
};

export default Header;
