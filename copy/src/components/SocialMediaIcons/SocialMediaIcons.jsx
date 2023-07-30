import React from 'react';
import { Link } from 'react-router-dom';
import './SocialMediaIcons.scss';
import classmatesIcon from '../../images/icons/footer__icon_classmates.svg';
import vkIcon from '../../images/icons/footer__icon_vk.svg';
import telegramIcon from '../../images/icons/footer__icon_telegram.svg';

const SocialMediaIcons = () => {
  return (
    <div className='social-media-icons__container'>
      <Link className='social-media-icons__icon-link' to='/'>
        <img src={classmatesIcon} alt='одноклассники' />
      </Link>
      <Link className='social-media-icons__icon-link' to='/'>
        <img src={vkIcon} alt='вконтакте' />
      </Link>
      <Link className='social-media-icons__icon-link' to='/'>
        <img src={telegramIcon} alt='телеграм' />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
