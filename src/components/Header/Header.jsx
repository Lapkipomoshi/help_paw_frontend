import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';

const Header = ({ loggedIn }) => {
  return (
    <header className='header'>
      <Link className='header__logo-link' to='/'>
        <img className='header__logo' src={logo} alt='лого' />
      </Link>
      <nav className='menu'>
        <NavLink to='/papers' className={({isActive}) => `menu__link ${isActive ? 'menu__link_active' : ''}`}>Полезные статьи</NavLink>
        <NavLink to='/map' className={({isActive}) => `menu__link ${isActive ? 'menu__link_active' : ''}`}>Карта приютов</NavLink>
        <NavLink to='/news' className={({isActive}) => `menu__link ${isActive ? 'menu__link_active' : ''}`}>Новости</NavLink>
      </nav>
      <Link className={'header__sign-up ' + (loggedIn ? 'display_none' : '')} to='/sign-up'>Регистрация</Link>
      <Link className={'header__profile ' + (loggedIn ? '' : 'display_none')} to='/profile' />
    </header>
  );
}

export default Header;
