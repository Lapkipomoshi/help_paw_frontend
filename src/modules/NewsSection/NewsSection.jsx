import React from 'react';
import { Link } from 'react-router-dom';
import './NewsSection.css';
import NewCard from '../../components/NewCard/NewCard';
import dataIcon from '../../images/icons/ic_data.svg';
import selfIcon from '../../images/icons/ic_self.svg';
import newPhoto from '../../images/new-big-card.jpg';
import newPhoto1 from '../../images/new-card__photo_1.jpg';
import newPhoto2 from '../../images/new-card__photo_2.jpg';
import newPhoto3 from '../../images/new-card__photo_3.jpg';

const NewsSection = () => {
  return (
    <div className='news-section'>
      <Link className='new-big-card' to='/news/1'>
        <img className='new-big-card__photo' src={newPhoto} alt='фото новости' />
        <div className='new-big-card__content'>
          <div className='new-big-card__row'>
            <div className='new-big-card__info-block'>
              <img className='new-big-card__icon' src={dataIcon} alt='дата' />
              <p className='new-big-card__info'>12.12.2022</p>
            </div>
            <div className='new-big-card__info-block'>
              <img className='new-big-card__icon' src={selfIcon} alt='приют' />
              <p className='new-big-card__info'>Приют Бирюлево</p>
            </div>
          </div>
          <h3 className='new-big-card__title'>В приюте Бирюлево побывали школьники</h3>
          <p className='new-big-card__text'>
            Работники приюта показали им как устроен приют и ученики помогали выгуливать
            собак. Работники приюта показали им как устроен приют и ученики помогали выгуливать собак
          </p>
        </div>
      </Link>
      <ul className='news-section__column'>
        <li className='news-section__item'>
          <NewCard
            title='В приюте Бирюлево побывали школьники'
            data='12.12.2022'
            shelter='Приют Бирюлево'
            image={newPhoto1}
            link='/news/2'
          />
        </li>
        <li className='news-section__item'>
          <NewCard
            title='В приюте Бирюлево побывали школьники'
            data='12.12.2022'
            shelter='Приют Бирюлево'
            image={newPhoto2}
            link='/news/2'
          />
        </li>
        <li className='news-section__item'>
          <NewCard
            title='В приюте Бирюлево побывали школьники'
            data='12.12.2022'
            shelter='Приют Бирюлево'
            image={newPhoto3}
            link='/news/2'
          />
        </li>
      </ul>
    </div>
  );
};

export default NewsSection;
