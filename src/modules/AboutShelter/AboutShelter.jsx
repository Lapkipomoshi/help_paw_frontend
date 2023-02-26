import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './AboutShelter.css';
import InfoItem from '../../ui/InfoItem/InfoItem';
import classmatesIcon from '../../images/icons/footer__icon_classmates.svg';
import vkIcon from '../../images/icons/footer__icon_vk.svg';
import telegramIcon from '../../images/icons/footer__icon_telegram.svg';

const AboutShelter = () => {
  const { shelter } = useOutletContext();

  return (
    <section className='shelter-section about-shelter'>
      <div className='shelter-info'>
        <img className='shelter-info__logo' src={shelter.logo} alt='лого' />
        <div className='shelter-info__text-container'>
          <h2 className='shelter-section__title'>{shelter.name}</h2>
          <ul className='shelter-info__list'>
            <InfoItem argument='Адрес'>{shelter.address}</InfoItem>
            <InfoItem argument='Часы-работы'>{`${shelter.working_from_hour} - ${shelter.working_to_hour}`}</InfoItem>
            <InfoItem argument='Номер телефона'>{shelter.phone_number}</InfoItem>
            <InfoItem argument='E-mail'>{shelter.email}</InfoItem>
            <InfoItem argument='Сайт'>
              <a className='shelter-info__link' href={shelter.web_site} target='_blank' rel='noreferrer'>
                {shelter.web_site}
              </a>
            </InfoItem>
            <div className='shelter-info__icons'>
              <a href={shelter.ok_page} target='_blank' rel='noreferrer'>
                <img className='shelter-info__icon' src={classmatesIcon} alt='OK.ru' />
              </a>
              <a href={shelter.vk_page} target='_blank' rel='noreferrer'>
                <img className='shelter-info__icon' src={vkIcon} alt='ВК' />
              </a>
              <a href={shelter.telegram} target='_blank' rel='noreferrer'>
                <img className='shelter-info__icon' src={telegramIcon} alt='телеграм' />
              </a>
            </div>
          </ul>
        </div>
      </div>
      <h2 className='shelter-section__title'>Описание</h2>
      <p className='about-shelter__description'>{shelter.description}</p>
      <p className='about-shelter__text'>
        Собрано денег за всё время:
        {' '}
        <span className='color_text_additional'>{shelter.money_collected}</span>
      </p>
      <p className='about-shelter__text'>
        Забрали животных за всё время:
        {' '}
        <span className='color_text_additional'>{shelter.animals_adopted}</span>
      </p>
    </section>
  );
};

export default AboutShelter;
