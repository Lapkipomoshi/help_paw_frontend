import React from 'react';
import { useParams } from 'react-router-dom';
import './AboutShelter.css';
import InfoRow from '../../ui/InfoRow/InfoRow';
import shelterLogo from '../../images/shelter-logo.jpg';
import classmatesIcon from '../../images/icons/footer__icon_classmates.svg';
import vkIcon from '../../images/icons/footer__icon_vk.svg';
import telegramIcon from '../../images/icons/footer__icon_telegram.svg';

const AboutShelter = () => {
  const { id } = useParams(); // id приюта, получаемый из url-адреса текущей страницы
  const [cardInfo, setCardInfo] = React.useState({}); // вся информация о приюте

  React.useEffect(() => {
    setCardInfo({ // будет запрашиваться с бэкенда
      id,
      logo: '../../images/shelter-logo.jpg',
      title: 'Приют Бирюлево',
      address: 'Востряковсий пр-д, 10А, Москва, Россия',
      workingHours: '10:00 - 18:00',
      phone: '+74955143389',
      email: 'email@email.com',
      link: 'https://izpriuta.ru',
      descriprion: `Приют Бирюлево - это муниципальный приют для бездомных собак и кошек в Южном округе г. Москвы.
      В нём живет почти 2500 собак и 150 кошек. Большие и маленькие, пушистые и гладкие,
      весёлые и задумчивые - и на всех одна большая мечта
       - встретить своего Человека и найти Дом.`,
      okLink: 'https://ok.ru/',
      vkLink: 'vk.com',
      telegramLink: 't.me',
      gettingAllMoney: 6457362,
      takingAllPets: 365,
    });
  }, [id]);

  return (
    <section className='shelter-section about-shelter'>
      <div className='shelter-info'>
        <img className='shelter-info__logo' src={shelterLogo} alt='лого' />
        <div className='shelter-info__text-container'>
          <h2 className='shelter-section__title'>{cardInfo.title}</h2>
          <ul className='shelter-info__list'>
            <InfoRow argument='Адрес'>{cardInfo.address}</InfoRow>
            <InfoRow argument='Часы-работы'>{cardInfo.workingHours}</InfoRow>
            <InfoRow argument='Номер телефона'>{cardInfo.phone}</InfoRow>
            <InfoRow argument='E-mail'>{cardInfo.email}</InfoRow>
            <InfoRow argument='Сайт'>
              <a className='shelter-info__link' href={cardInfo.link} target='_blank' rel='noreferrer'>
                {cardInfo.link}
              </a>
            </InfoRow>
            <div className='shelter-info__icons'>
              <a href={cardInfo.okLink} target='_blank' rel='noreferrer'>
                <img className='shelter-info__icon' src={classmatesIcon} alt='OK.ru' />
              </a>
              <a href={cardInfo.vkLink} target='_blank' rel='noreferrer'>
                <img className='shelter-info__icon' src={vkIcon} alt='ВК' />
              </a>
              <a href={cardInfo.telegramLink} target='_blank' rel='noreferrer'>
                <img className='shelter-info__icon' src={telegramIcon} alt='телеграм' />
              </a>
            </div>
          </ul>
        </div>
      </div>
      <h2 className='shelter-section__title'>Описание</h2>
      <p className='about-shelter__description'>{cardInfo.descriprion}</p>
      <p className='about-shelter__text'>
        Собрано денег за всё время:
        {' '}
        <span className='color_text_additional'>{cardInfo.gettingAllMoney}</span>
      </p>
      <p className='about-shelter__text'>
        Забрали животных за всё время:
        {' '}
        <span className='color_text_additional'>{cardInfo.takingAllPets}</span>
      </p>
    </section>
  );
};

export default AboutShelter;
