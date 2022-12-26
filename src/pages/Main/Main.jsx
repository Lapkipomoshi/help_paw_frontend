import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import bannerImage from '../../images/main__banner.svg';
import paperPhoto1 from '../../images/paper-card__photo_1.svg';
import paperPhoto2 from '../../images/paper-card__photo_2.svg';
import paperPhoto3 from '../../images/paper-card__photo_3.svg';

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

      </section>
      <section className='shelters-on-main'>

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

      </section>
    </main>
  );
}

export default Main;
