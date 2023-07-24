import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './AboutShelter.scss';
import InfoItem from '../../ui/InfoItem/InfoItem';
import classmatesIcon from '../../images/icons/footer__icon_classmates.svg';
import vkIcon from '../../images/icons/footer__icon_vk.svg';
import telegramIcon from '../../images/icons/footer__icon_telegram.svg';
import EditPenIcon from '../../images/EditPenIcon/EditPenIcon';
import DeleteIcon from '../../images/DeleteIcon/DeleteIcon';
import ShelterOwnerStatistics from '../ShelterOwnerStatistics/ShelterOwnerStatistics';

// TODO переделать названия классов (объединить?), не совсем понятно, по какому принципу about-shelter, shelter-info

const AboutShelter = () => {
  const { shelter, isOwner, isLoading } = useOutletContext();

  if (isLoading) {
    return null;
  }

  // TODO сделать функционал иконок редактирования и удаления
  // TODO разбить на компоненты

  return (
    <section className='shelter-section'>
      <div className='shelter-info'>
        <img className='shelter-info__logo' src={shelter.logo} alt='лого' />

        <div className='shelter-info__text-container'>
          <div className='about-shelter__title-container'>
            <h2 className='shelter-section__title'>{shelter.name}</h2>

            {/* TODO __icon-button_title - подумать над названием класса, тут не title будет редактироваться, а ведет на 6.2.1.4 в фигме */}
            {isOwner && (
              <button type='button' className='about-shelter__icon-button about-shelter__icon-button_title-edit'>
                <EditPenIcon />
              </button>
            )}
            {isOwner && (
              <button type='button' className='about-shelter__icon-button about-shelter__title-button_title-delete'>
                <DeleteIcon />
              </button>
            )}
          </div>

          <ul className='shelter-info__list'>
            <InfoItem argument='Адрес'>{shelter.address}</InfoItem>
            <InfoItem argument='Часы-работы'>{`${shelter.working_from_hour} - ${shelter.working_to_hour}`}</InfoItem>
            <InfoItem argument='Номер телефона'>{shelter.phone_number}</InfoItem>
            <InfoItem argument='E-mail'>{shelter.email}</InfoItem>
            {shelter.web_site !== '' && (
              <InfoItem argument='Сайт'>
                <a className='shelter-info__link' href={shelter.web_site} target='_blank' rel='noreferrer'>
                  {shelter.web_site}
                </a>
              </InfoItem>
            )}
            <div className='shelter-info__icons'>
              {shelter.vk_page !== '' && (
                <a href={shelter.ok_page} target='_blank' rel='noreferrer'>
                  <img className='shelter-info__icon' src={classmatesIcon} alt='OK.ru' />
                </a>
              )}

              {shelter.ok_page !== '' && (
                <a href={shelter.vk_page} target='_blank' rel='noreferrer'>
                  <img className='shelter-info__icon' src={vkIcon} alt='ВК' />
                </a>
              )}

              {shelter.telegram !== '' && (
                <a href={shelter.telegram} target='_blank' rel='noreferrer'>
                  <img className='shelter-info__icon' src={telegramIcon} alt='телеграм' />
                </a>
              )}
            </div>
          </ul>
        </div>
      </div>

      <div className='about-shelter__description-title-container'>
        <h3 className='standard-font_type_h3 about-shelter__description-title'>Описание</h3>
        {isOwner && (
          <button type='button' className='about-shelter__icon-button about-shelter__icon-button_description-edit'>
            <EditPenIcon />
          </button>
        )}
      </div>

      <p className={`about-shelter__description standard-font_type_body ${isOwner ? 'about-shelter__description_owner' : 'about-shelter__description_user'}`}>
        {shelter.description}
      </p>

      {isOwner && <ShelterOwnerStatistics />}

      <h3 className='standard-font_type_h3 about-shelter__metrics-dotantion'>
        Собрано денег за всё время: <span className='color_text_additional'>{shelter.money_collected}</span>
      </h3>
      <h3 className='standard-font_type_h3 about-shelter__metrics-adopted-animals'>
        Забрали животных за всё время: <span className='color_text_additional'>{shelter.animals_adopted}</span>
      </h3>
    </section>
  );
};

export default AboutShelter;
