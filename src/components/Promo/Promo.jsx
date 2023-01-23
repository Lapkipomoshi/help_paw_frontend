import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Promo.css';
import promoPhotoLeft from '../../images/main__promo_position_left.jpg';
import promoPhotoRight from '../../images/main__promo_position_right.jpg';

const Promo = () => {
  const [isActiveAnimation, setIsActiveAnimation] = React.useState(false); // отобразить анимацию?

  const { ref, inView } = useInView({
    threshold: 1,
  });

  React.useEffect(() => {
    setIsActiveAnimation(inView); // включать анимацию, когда объект полностью виден и убирать, когда скрывается
  }, [inView])

  return (
    <section className='promo'>
      <div className='promo__photo-container' ref={ref}>
        <img className={`promo__photo promo__photo_position_left ${isActiveAnimation ? 'promo__photo_animation_to-left' : ''}`} src={promoPhotoLeft} alt='наши любимцы' />
        <img className={`promo__photo promo__photo_position_right ${isActiveAnimation ? 'promo__photo_animation_to-right' : ''}`} src={promoPhotoRight} alt='наши любимцы' />
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
