/* eslint-disable no-unused-vars */ // удалить, когда подключат api
import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './PetModule.scss';
import InfoItem from '../../ui/InfoItem/InfoItem';
import Button from '../../ui/Button/Button';
import clockIcon from '../../images/icons/ic_clock.svg';
import locationIcon from '../../images/icons/ic_location.svg';
import slide1 from '../../images/main__banner.png';
import slide2 from '../../images/main__promo_position_left.jpg';
import slide3 from '../../images/main__promo_position_right.jpg';

const PetModule = () => {

  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const { id } = useParams(); // id питомца, получаемый из url-адреса текущей страницы
  const { shelter } = useOutletContext();

  const [pet, setPet] = useState({}); // информация о питомце

  return (
    <section className='shelter-section pet-module'>
      <div className='pet-module__pet-part'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop='true'
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img className='pet-swiper__slide-image' src={slide1} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img className='pet-swiper__slide-image' src={slide2} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img className='pet-swiper__slide-image' src={slide3} alt='' />
          </SwiperSlide>
        </Swiper>
        <div className='pet-module__info-container'>
          <h2 className='standard-font standard-font_type_h2'>Пушистик</h2>
          <ul className='pet-module__info-list'>
            <InfoItem argument='Пол'>девочка</InfoItem>
            <InfoItem argument='Возраст'>2 года</InfoItem>
            <InfoItem argument='Порода'>Британская</InfoItem>
          </ul>
          <div className='pet-module__additional-shelter-info'>
            <div className='pet-additional-info-card'>
              <img className='pet-additional-info-card__shelter-info-image' src={clockIcon} alt='срок содержания' />
              <div className='pet-additional-info-card__text-container'>
                <p className='standard-font standard-font_type_bode'>1 год</p>
                <p className='pet-additional-info-card__secondary-string standard-font standard-font_type_small'>В приюте</p>
              </div>
            </div>
            <div className='pet-additional-info-card'>
              <img className='pet-additional-info-card__shelter-info-image' src={locationIcon} alt='место расположения' />
              <div className='pet-additional-info-card__text-container'>
                <p className='standard-font standard-font_type_bode'>Приют Бирюлево</p>
                <p className='pet-additional-info-card__secondary-string standard-font standard-font_type_small'>г. Москва</p>
              </div>
            </div>
          </div>
        </div>
        <div className='pet-module__description-container'>
          <h3 className='standard-font standard-font_type_h3'>Описание</h3>
          <p className='pet-module__description standard-font standard-font_type_body'>
            Мы подобрали ее на улице, когда она была совсем крохотной.
            Это очень ласковая игривая кошка. Ее любимая еда это рыба. Любит гулять. Предыдущие хозяева были добры с ней.
          </p>
        </div>
        <Button type='button' onClick={() => {}}>Забрать домой</Button>
      </div>
    </section>
  );
};

export default PetModule;
