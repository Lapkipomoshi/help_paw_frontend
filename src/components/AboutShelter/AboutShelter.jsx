import React from 'react';
import './AboutShelter.css';
import shelterLogo from '../../images/shelter-logo.jpg';
import vkIcon from '../../images/icons/footer__icon_vk.svg';
import telegramIcon from '../../images/icons/footer__icon_telegram.svg';

const AboutShelter = () => {
  return (
    <section className='shelter-section about-shelter'>
      <div className='shelter-info'>
        <img className='shelter-info__logo' src={shelterLogo} alt='лого' />
        <div className='shelter-info__text-container'>
          <h2 className='shelter-info__title'>Приют Бирюлево</h2>
          <p className='shelter-info__text'>Адрес: <span className='color_text_additional'>Востряковсий пр-д, 10А, Москва, Россия</span></p>
          <p className='shelter-info__text'>Часы-работы: <span className='color_text_additional'>10:00 - 18:00</span></p>
          <p className='shelter-info__text'>Номер телефона: <span className='color_text_additional'>+74955143389</span></p>
          <p className='shelter-info__text'>E-mail: <span className='color_text_additional'>email@email.com</span></p>
          <p className='shelter-info__text'>Сайт: <a className='shelter-info__link' href='https://izpriuta.ru' target='_blank' rel="noreferrer">
            https://izpriuta.ru
            </a></p>
          <div className='shelter-info__icons'>
            <img className='shelter-info__icon' src={vkIcon} alt='ВК' />
            <img className='shelter-info__icon' src={telegramIcon} alt='Телеграм' />
          </div>
        </div>
      </div>
      <h2 className='about-shelter__title'>Описание</h2>
      <p className='about-shelter__description'>Приют Бирюлево - это муниципальный приют для бездомных собак и кошек в Южном округе г. Москвы.
       В нем живет почти 2500 собак и 150 кошек. Большие и маленькие, пушистые и гладкие, веселые и задумчивые - и на всех одна большая мечта
        - встретить своего Человека и найти Дом.</p>
      <p className='about-shelter__text'>Собрано денег за всё время: <span className='color_text_additional'>645 7362</span></p>
      <p className='about-shelter__text'>Забрали животных за всё время: <span className='color_text_additional'>365</span></p>
    </section>
  );
}

export default AboutShelter;
