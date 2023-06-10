import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';
import './Footer.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons';

const Footer = () => {
  const isMobile = useMediaQuery({
    maxWidth: 649,
  });

  const isTablet = useMediaQuery({
    maxWidth: 1199,
    minWidth: 650,
  });

  const isWide = useMediaQuery({
    minWidth: 1200,
  });

  return (
    <MainContainer theme='additional'>
      <footer className='footer'>
        <div className='footer__flex-container'>
          <Link className='footer__title' to='/'>
            Лапки помощи
          </Link>
          <p className='footer__subtitle'>Сервис для помощи приютам </p>

          {isTablet && (
            <div className='footer__icons-container'>
              <SocialMediaIcons />
            </div>
          )}
        </div>

        <div className='footer__flex-column-container'>
          <Link className='footer__link' to='/shelters'>
            Карта приютов
          </Link>
          <Link className='footer__link' to='/news'>
            Новости
          </Link>
          <Link className='footer__link' to='/papers'>
            Полезные статьи
          </Link>
          {!isMobile && (
            <HashLink className='footer__link' to='/#about'>
              О компании
            </HashLink>
          )}
          {!isMobile && (
            <HashLink className='footer__link' to='/#faq'>
              Вопросы
            </HashLink>
          )}
        </div>

        {(isWide || isMobile) && <SocialMediaIcons />}
      </footer>
    </MainContainer>
  );
};

export default Footer;
