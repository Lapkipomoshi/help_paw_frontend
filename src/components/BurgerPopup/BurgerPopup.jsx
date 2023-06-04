import React from 'react';
import './BurgerPopup.scss';
import MenuLink from '../../ui/MenuLink/MenuLink';

const BurgerPopup = ({ onNavLinkClick }) => {
  return (
    <div className='burger-popup__container' role='presentation'>
      <MenuLink url='/' onClick={onNavLinkClick}>
        Главная
      </MenuLink>

      <MenuLink url='/papers' onClick={onNavLinkClick}>
        Полезные статьи
      </MenuLink>

      <MenuLink url='/shelters' onClick={onNavLinkClick}>
        Карта приютов
      </MenuLink>

      <MenuLink url='/news' onClick={onNavLinkClick}>
        Новости
      </MenuLink>
    </div>
  );
};

export default BurgerPopup;
