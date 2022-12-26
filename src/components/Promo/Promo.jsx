import React from 'react';
import './Promo.css';
import promoPhoto from '../../images/main__promo.svg';

const Promo = () => {
  return (
    <section className='promo'>
      <img className='promo__photo' src={promoPhoto} alt='наши любимцы' />
      <div className='promo__text-container'>
        <h2 className='section-title'>О нас</h2>
        <p className='promo__text'>Наш проект “Лапка помощи” призван помочь приютам</p>
        <p className='promo__text'>Здесь вы можете поддержать приюты материально или забрать к себе домой одного из питомцев</p>
        <p className='promo__text'>В пару кликов вы способны изменить чью-то жизнь. Пожалуйста, не проходите мимо</p>
      </div>
    </section>
  );
}

export default Promo;
