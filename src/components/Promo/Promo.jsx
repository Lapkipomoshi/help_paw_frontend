import React from 'react';
import './Promo.css';
import promoPhotoLeft from '../../images/main__promo_position_left.jpg';
import promoPhotoRight from '../../images/main__promo_position_right.jpg';

const Promo = () => {
  return (
    <section className='promo'>
      <div className='promo__photo-container'>
        <img className='promo__photo promo__photo_position_left' src={promoPhotoLeft} alt='наши любимцы' />
        <img className='promo__photo promo__photo_position_right' src={promoPhotoRight} alt='наши любимцы' />
      </div>
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
