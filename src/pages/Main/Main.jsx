import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import shelterLogo from '../../images/shelter-logo.svg';
import paw from '../../images/pa.svg';

const Main = () => {
  return (
    <main className='main'>
      <section className='banner'>

      </section>
      <section className='promo'>

      </section>
      <section className='shelters-on-main'>
        <h2 className='shelters-on-main__title'>Приюты, которым очень нужна помощь</h2>
        <div className='shelters-on-main__shelters-container'>
          <div className='shelter-card'>
            <img className='shelter-card__logo' src={shelterLogo} alt='лого приюта' />
            <h3 className='shelter-card__title'>Приют Бирюлево</h3>
            <p className='shelter-card__address'>Востряковский пр-д, 10А, Москва, Россия</p>
            <p className='shelter-card__working-hours'>Часы работы: <span className='shelter-card__hours'>10:00 - 18:00</span></p>
            <Link className='shelter-card__link' to='/shelters'></Link>
            <img className='shelter-card__paw' src={paw} alt='ЧП' />
          </div>
          <div className='shelter-card'>
            <img className='shelter-card__logo' src={shelterLogo} alt='лого приюта' />
            <h3 className='shelter-card__title'>Приют Бирюлево</h3>
            <p className='shelter-card__address'>Востряковский пр-д, 10А, Москва, Россия</p>
            <p className='shelter-card__working-hours'>Часы работы: <span className='shelter-card__hours'>10:00 - 18:00</span></p>
            <Link className='shelter-card__link' to='/shelters'></Link>
            <img className='shelter-card__paw' src={paw} alt='ЧП' />
          </div>
          <div className='shelter-card'>
            <img className='shelter-card__logo' src={shelterLogo} alt='лого приюта' />
            <h3 className='shelter-card__title'>Приют Бирюлево</h3>
            <p className='shelter-card__address'>Востряковский пр-д, 10А, Москва, Россия</p>
            <p className='shelter-card__working-hours'>Часы работы: <span className='shelter-card__hours'>10:00 - 18:00</span></p>
            <Link className='shelter-card__link' to='/shelters'></Link>
            <img className='shelter-card__paw' src={paw} alt='ЧП' />
          </div>
        </div>
        <Link className='shelters-on-main__link' to='/map'>Смотреть на карте</Link>
        <div className='shelters-on-main__text-container'>
          <h3 className='shelters-on-main__text-title'>Вы владелец приюта?</h3>
          <p className='shelters-on-main__text-subtitle'>Можете добавить ваш приют на наш сайт прямо сейчас!</p>
          <Link className='shelters-on-main__link shelters-on-main__link_disabled' to='/sign-up-shelter'>Добавить приют</Link>
        </div>
      </section>
      <section className='papers-on-main'>

      </section>
      <section className='faq'>

      </section>
    </main>
  );
}

export default Main;
