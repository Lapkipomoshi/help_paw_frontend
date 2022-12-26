import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import bannerImage from '../../images/main__banner.svg';
import promoPhoto from '../../images/main__promo.svg';
import shelterLogo from '../../images/shelter-logo.svg';
import paw from '../../images/paw.svg';
import paperPhoto1 from '../../images/paper-card__photo_1.svg';
import paperPhoto2 from '../../images/paper-card__photo_2.svg';
import paperPhoto3 from '../../images/paper-card__photo_3.svg';
import faqPlus from '../../images/faq__plus.svg';
import faqMinus from '../../images/faq__minus.svg';

const Main = () => {
  return (
    <main className='main'>
      <section className='banner'>
        <img className='banner__image' src={bannerImage} alt='питомцы' />
        <h1 className='banner__title'>Помогаем тем, кто в этом нуждается</h1>
        <div className='banner__line'></div>
        <p className='banner__subtitle'>Лапки помощи - это проект помощи приютам для животных.</p>
        <Link className='banner__button' to='/map'>Хочу помогать</Link>
      </section>
      <section className='promo'>
        <img className='promo__photo' src={promoPhoto} alt='наши любимцы' />
        <div className='promo__text-container'>
          <h2 className='promo__title'>О нас</h2>
          <p className='promo__text'>Наш проект “Лапка помощи” призван помочь приютам</p>
          <p className='promo__text'>Здесь вы можете поддержать приюты материально или забрать к себе домой одного из питомцев</p>
          <p className='promo__text'>В пару кликов вы способны изменить чью-то жизнь. Пожалуйста, не проходите мимо</p>
        </div>
      </section>
      <section className='shelters-on-main'>
        <h2 className='shelters-on-main__title'>Приюты, которым очень нужна помощь</h2>
        <ul className='shelters-on-main__shelters-container'>
          <li className='shelter-card'>
            <img className='shelter-card__logo' src={shelterLogo} alt='лого приюта' />
            <h3 className='shelter-card__title'>Приют Бирюлево</h3>
            <p className='shelter-card__address'>Востряковский пр-д, 10А, Москва, Россия</p>
            <p className='shelter-card__working-hours'>Часы работы: <span className='shelter-card__hours'>10:00 - 18:00</span></p>
            <Link className='shelter-card__link' to='/shelters'>Читать подробнее</Link>
            <img className='shelter-card__paw' src={paw} alt='ЧП' />
          </li>
          <li className='shelter-card'>
            <img className='shelter-card__logo' src={shelterLogo} alt='лого приюта' />
            <h3 className='shelter-card__title'>Приют Бирюлево</h3>
            <p className='shelter-card__address'>Востряковский пр-д, 10А, Москва, Россия</p>
            <p className='shelter-card__working-hours'>Часы работы: <span className='shelter-card__hours'>10:00 - 18:00</span></p>
            <Link className='shelter-card__link' to='/shelters'>Читать подробнее</Link>
            <img className='shelter-card__paw' src={paw} alt='ЧП' />
          </li>
          <li className='shelter-card'>
            <img className='shelter-card__logo' src={shelterLogo} alt='лого приюта' />
            <h3 className='shelter-card__title'>Приют Бирюлево</h3>
            <p className='shelter-card__address'>Востряковский пр-д, 10А, Москва, Россия</p>
            <p className='shelter-card__working-hours'>Часы работы: <span className='shelter-card__hours'>10:00 - 18:00</span></p>
            <Link className='shelter-card__link' to='/shelters'>Читать подробнее</Link>
            <img className='shelter-card__paw' src={paw} alt='ЧП' />
          </li>
        </ul>
        <Link className='shelters-on-main__link margin-left_auto' to='/map'>Смотреть на карте</Link>
        <div className='shelters-on-main__text-container'>
          <h3 className='shelters-on-main__text-title'>Вы владелец приюта?</h3>
          <p className='shelters-on-main__text-subtitle'>Можете добавить ваш приют на наш сайт прямо сейчас!</p>
          <Link className='shelters-on-main__link margin_column-center shelters-on-main__link_disabled' to='/sign-up-shelter'>Добавить приют</Link>
        </div>
      </section>
      <section className='papers-on-main'>
        <h2 className='papers-on-main__title'>Полезные статьи</h2>
        <ul className='papers-on-main__flex-container'>
          <li className='papers-on-main__flex-element'>
            <Link className='paper-card' to='/paper'>
              <img className='paper-card__image' src={paperPhoto1} alt='фото' />
              <p className='paper-card__text'>Животное из приюта: что надо знать перед тем, как взять его в дом?</p>
            </Link>
          </li>
          <li className='papers-on-main__flex-element'>
            <Link className='paper-card' to='/paper'>
              <img className='paper-card__image' src={paperPhoto2} alt='фото' />
              <p className='paper-card__text'>Как отучить собаку прыгать на вас при встрече</p>
            </Link>
          </li>
          <li className='papers-on-main__flex-element'>
            <Link className='paper-card' to='/paper'>
              <img className='paper-card__image' src={paperPhoto3} alt='фото' />
              <p className='paper-card__text'>Современные кинологи не применяют наказание. Почему?</p>
            </Link>
          </li>
        </ul>
      </section>
      <section className='faq'>
        <h2 className='faq__title'>FAQ</h2>
        <ul className='faq__list'>
          <li className='faq__card'>
            <details className='faq__detalis' open>
              <summary className='faq__card-row'>
                <h3 className='faq__card-title'>Как пожертвовать деньги приюту?</h3>
                <div className='faq__card-icon' />
              </summary>
              <p className='faq__card-text'>Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”</p>
            </details>
          </li>
          <li className='faq__card'>
            <details className='faq__detalis'>
              <summary className='faq__card-row'>
                <h3 className='faq__card-title'>Как взять питомца домой?</h3>
                <div className='faq__card-icon' src={faqPlus} alt='развернуть' />
              </summary>
              <p className='faq__card-text'>Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”</p>
            </details>
          </li>
          <li className='faq__card'>
            <details className='faq__detalis'>
              <summary className='faq__card-row'>
                <h3 className='faq__card-title'>Как зарегистрировать приют?</h3>
                <div className='faq__card-icon' src={faqPlus} alt='развернуть' />
              </summary>
              <p className='faq__card-text'>Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”</p>
            </details>
          </li>
          <li className='faq__card'>
            <details className='faq__detalis'>
              <summary className='faq__card-row'>
                <h3 className='faq__card-title'>Какая минимальная сумма пожертвования?</h3>
                <div className='faq__card-icon' src={faqPlus} alt='развернуть' />
              </summary>
              <p className='faq__card-text'>Что бы сделать пожертвование, вам нужно открыть страницу приюта и нажать кнопку “Пожертвовать приюту”</p>
            </details>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Main;
