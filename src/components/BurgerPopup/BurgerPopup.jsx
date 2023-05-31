import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../modules/Header/Header.scss';
import './BurgerPopup.scss';

const BurgerPopup = ({ onNavLinkClick }) => {
  return (
    <div className='burger-popup__container' role='presentation'>
      <NavLink
        onClick={onNavLinkClick}
        className={({ isActive }) => {
          return `menu__link ${isActive ? 'menu__link_active' : ''}`;
        }}
        to='/'
      >
        Главная
      </NavLink>

      <NavLink
        onClick={onNavLinkClick}
        className={({ isActive }) => {
          return `menu__link ${isActive ? 'menu__link_active' : ''}`;
        }}
        to='/papers'
      >
        Полезные статьи
      </NavLink>

      <NavLink
        onClick={onNavLinkClick}
        className={({ isActive }) => {
          return `menu__link ${isActive ? 'menu__link_active' : ''}`;
        }}
        to='/shelters'
      >
        Карта приютов
      </NavLink>

      <NavLink
        onClick={onNavLinkClick}
        className={({ isActive }) => {
          return `menu__link ${isActive ? 'menu__link_active' : ''}`;
        }}
        to='/news'
      >
        Новости
      </NavLink>
    </div>
  );
};

export default BurgerPopup;
