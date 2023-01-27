import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import classmatesIcon from '../../images/icons/footer__icon_classmates.svg';
import vkIcon from '../../images/icons/footer__icon_vk.svg';
import telegramIcon from '../../images/icons/footer__icon_telegram.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__flex-column-container'>
        <Link className='footer__title' to='/'>Лапки помощи</Link>
        <p className='footer__subtitle'>Сервис для помощи приютам </p>
      </div>
      <div className='footer__flex-column-container'>
        <Link className='footer__link' to='/shelters'>Карта приютов</Link>
        <Link className='footer__link' to='/news'>Новости</Link>
        <Link className='footer__link' to='/papers'>Полезные статьи</Link>
        <Link className='footer__link' to='/'>О компании</Link>
        <Link className='footer__link' to='/'>FAQ</Link>
      </div>
      <div className='footer__icons'>
        <Link className='footer__icon-link' to='/'>
          <img className='footer__icon' src={classmatesIcon} alt='OK.ru' />
        </Link>
        <Link className='footer__icon-link' to='/'>
          <img className='footer__icon' src={vkIcon} alt='ВК' />
        </Link>
        <Link className='footer__icon-link' to='/'>
          <img className='footer__icon' src={telegramIcon} alt='телеграм' />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
