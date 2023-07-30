import React from 'react';
import { useInView } from 'react-intersection-observer'; // позволяет отслеживать находится ли объект на экране и на какую часть
import './Promo.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import promoPhotoLeft from '../../images/main__promo_position_left.jpg';
import promoPhotoRight from '../../images/main__promo_position_right.jpg';

const Promo = () => {
  const { ref, inView } = useInView({ threshold: 1 });

  return (
    <MainContainer theme='additional'>
      <section className='promo main-page-section' id='about'>
        <h2 className='promo__mobile-title main-page-section-title standard-font standard-font_type_h2'>О нас</h2>
        <div className='promo__photo-container' ref={ref}>
          <img
            className={`promo__photo promo__photo_position_left ${inView && 'promo__photo_animation_to-left'}`}
            src={promoPhotoLeft}
            alt='наши любимцы'
          />
          <img
            className={`promo__photo promo__photo_position_right ${inView && 'promo__photo_animation_to-right'}`}
            src={promoPhotoRight}
            alt='наши любимцы'
          />
        </div>
        <div className='promo__text-container'>
          <h2 className='promo__title main-page-section-title standard-font standard-font_type_h2'>О нас</h2>
          <p className='promo__text standard-font standard-font_type_h3'>Наш проект “Лапки помощи” призван помочь приютам</p>
          <p className='promo__text standard-font standard-font_type_h3'>
            Здесь вы можете поддержать приюты материально или забрать к себе домой одного из питомцев
          </p>
          <p className='promo__text standard-font standard-font_type_h3'>В пару кликов вы способны изменить чью-то жизнь. Пожалуйста, не проходите мимо</p>
        </div>
      </section>
    </MainContainer>
  );
};

export default Promo;
