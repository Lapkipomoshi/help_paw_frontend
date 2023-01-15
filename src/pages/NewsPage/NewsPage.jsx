import React from 'react';
import './NewsPage.css';
import dataIcon from '../../images/icons/ic_data.svg';
import dataSelf from '../../images/icons/ic_self.svg';

const NewsPage = () => {
  return (
    <main className='main news'>
      <section className='news__title-row'>
        <h2 className='news__title'>Новости</h2>
        <button className='button' type='button'>Предложить новость</button>
      </section>
      <section className='news-section'>
        <div className='new-big-card'>
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
        <div className='news-section__column'>
          <div className='new-card'>
            <img className='new-card__image' src='' alt='' />
            <div className='new-card__info'>
              <h4 className='new-card__title'>В приюте Бирюлево побывали школьники</h4>
              <div className='new-card__info-block'>
                <img className='new-card__icon' src={dataIcon} alt='дата' />
                <p className='new-card__info'>12.12.2022</p>
              </div>
              <div className='new-card__info-block'>
                <img className='new-card__icon' src={dataSelf} alt='приют' />
                <p className='new-card__info'>Приют Бирюлево</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NewsPage;
