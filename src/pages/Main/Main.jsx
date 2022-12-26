import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import bannerImage from '../../images/main__banner.svg';
import promoPhoto from '../../images/main__promo.svg';

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

      </section>
      <section className='papers-on-main'>

      </section>
      <section className='faq'>

      </section>
    </main>
  );
}

export default Main;
