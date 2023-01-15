import React from 'react';
import { Link } from 'react-router-dom';
import './NewsSection.css';
import newPhoto from '../../images/new-big-card.jpg';
import dataIcon from '../../images/icons/ic_data.svg';
import dataSelf from '../../images/icons/ic_self.svg';
import dataDarkIcon from '../../images/icons/ic_data_dark.svg';
import dataDarkSelf from '../../images/icons/ic_self_dark.svg';

const NewsSection = () => {
  return (
    <section className='news-section'>
      <Link className='new-big-card' to='/news/1'>
        <img className='new-big-card__photo' src={newPhoto} alt='фото новости' />
        <div className='new-big-card__content'>
          <div className='new-big-card__row'>
            <div className='new-big-card__info-block'>
              <img className='new-big-card__icon' src={dataIcon} alt='дата' />
              <p className='new-big-card__info'>12.12.2022</p>
            </div>
            <div className='new-big-card__info-block'>
              <img className='new-big-card__icon' src={dataSelf} alt='приют' />
              <p className='new-big-card__info'>Приют Бирюлево</p>
            </div>
          </div>
          <h3 className='new-big-card__title'>В приюте Бирюлево побывали школьники</h3>
          <p className='new-big-card__text'>Работники приюта показали им как устроен приют и ученики помогали выгуливать собак. 
          Работники приюта показали им как устроен приют и ученики помогали выгуливать собак</p>
        </div>
      </Link>
      <ul className='news-section__column'>
        <li className='news-section__item'>
          <Link className='new-card' to=''>
            <img className='new-card__image' src='' alt='' />
            <div className='new-card__info'>
              <h4 className='new-card__title'>В приюте Бирюлево побывали школьники</h4>
              <div className='new-card__info-block'>
                <img className='new-card__icon' src={dataDarkIcon} alt='дата' />
                <p className='new-card__info'>12.12.2022</p>
              </div>
              <div className='new-card__info-block'>
                <img className='new-card__icon' src={dataDarkSelf} alt='приют' />
                <p className='new-card__info'>Приют Бирюлево</p>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default NewsSection;
