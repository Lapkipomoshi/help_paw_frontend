/* eslint-disable no-unused-vars */ // удалить, когда подключат api
import React, { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { InfoItem, Button, Tooltip } from '../../ui';
import { clockIcon, locationIcon, slide1, slide2, slide3 } from '../../images';
import getPet from './api';
import generateKey from '../../utils/getUniqueKey';
import 'swiper/swiper.scss';
import './PetModule.scss';

const PetModule = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const { id: shelterId, petId } = useParams();
  const { shelter } = useOutletContext();

  const [{ name, age, breed, gallery, sex, sheltering_time }, setPet] = useState({}); // информация о питомце

  const [isTakedHome, setIsTakedHome] = useState(false);
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [tooltipIsVisible, setTooltipIsVisible] = useState(false);

  const [isLoadingReq, setIsLoadingReq] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoadingReq(true);
        const pet = await getPet(shelterId, petId);
        setPet(pet);
        setIsLoadingReq(false);
      } catch (err) {
        setIsLoadingReq(false);
        setError(err); // Можно вывести модалочку с ошибкой
      }
    };
    fetchData();
  }, []);

  const handleTakeHomeButtonClick = () => {
    setPopupIsVisible(true);

    setIsTakedHome(true); // Инсценировали заявку, обговоренную в чате. В попап прокинем владельца приюта и самого пушистика.
  };

  const showTooltip = () => {
    if (isTakedHome) {
      setTooltipIsVisible(true);
    }
  };

  const hideTooltip = () => {
    if (isTakedHome) {
      setTooltipIsVisible(false);
    }
  };

  // Функция для отображения текста загрузки или значения
  const renderLoadingOrValue = (isLoading, value) => {
    return isLoading ? 'Загрузка...' : value;
  };

  return (
    <section className='shelter-section pet-module'>
      <div className='pet-module__pet-part'>
        <div className='pet-module__preview'>
          <Swiper spaceBetween={50} slidesPerView={1} navigation loop='true' pagination={{ clickable: true }}>
            {!!gallery && gallery.length > 0 ? (
              gallery.map(({ image }, index) => {
                return (
                  <SwiperSlide key={generateKey(index)}>
                    <img className='pet-swiper__slide-image' src={image} alt='' />
                  </SwiperSlide>
                );
              })
            ) : (
              <>
                <SwiperSlide>
                  <img className='pet-swiper__slide-image' src={slide1} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='pet-swiper__slide-image' src={slide2} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                  <img className='pet-swiper__slide-image' src={slide3} alt='' />
                </SwiperSlide>
              </>
            )}
          </Swiper>
          <div className='pet-module__info-container'>
            <h2 className='standard-font standard-font_type_h2'>{renderLoadingOrValue(isLoadingReq, name || 'Безымянный')}</h2>
            <ul className='pet-module__info-list'>
              {/* eslint-disable-next-line no-nested-ternary */}
              <InfoItem argument='Пол'>{renderLoadingOrValue(isLoadingReq, sex ? (sex === 'male' ? 'Мальчик' : 'Девочка') : '~')}</InfoItem>
              <InfoItem argument='Возраст'>{renderLoadingOrValue(isLoadingReq, age >= 0 ? age : '~')}</InfoItem>
              <InfoItem argument='Порода'>{renderLoadingOrValue(isLoadingReq, breed || 'Обыкновенная')}</InfoItem>
            </ul>
            <div className='pet-module__additional-shelter-info'>
              <div className='pet-additional-info-card'>
                <img className='pet-additional-info-card__shelter-info-image' src={clockIcon} alt='срок содержания' />
                <div className='pet-additional-info-card__text-container'>
                  <p className='standard-font standard-font_type_bode'>{renderLoadingOrValue(isLoadingReq, sheltering_time >= 0 ? sheltering_time : '~')}</p>
                  <p className='pet-additional-info-card__secondary-string standard-font standard-font_type_small'>В приюте</p>
                </div>
              </div>
              <div className='pet-additional-info-card'>
                <img className='pet-additional-info-card__shelter-info-image' src={locationIcon} alt='место расположения' />
                <div className='pet-additional-info-card__text-container'>
                  <p className='standard-font standard-font_type_bode'>{shelter.name}</p>
                  <p className='pet-additional-info-card__secondary-string standard-font standard-font_type_small'>{shelter.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pet-module__description-container'>
          <h3 className='standard-font standard-font_type_h3'>Описание</h3>
          <p className='pet-module__description standard-font standard-font_type_body'>
            Мы подобрали ее на улице, когда она была совсем крохотной. Это очень ласковая игривая кошка. Ее любимая еда это рыба. Любит гулять. Предыдущие
            хозяева были добры с ней.
          </p>
        </div>
        <div className='pet-module__button-wrapper'>
          {tooltipIsVisible && (
            <Tooltip className='pet-module__tooltip-container'>
              <div className='pet-module__tooltip-inner'>
                <p className='standard-font_type_smallest'>Вы уже отправили заявку в приют на этого питомца.</p>
                <p className='standard-font_type_smallest'>Посмотреть свою заявку вы можете в Чате, в переписке с владельцем приюта.</p>
              </div>
            </Tooltip>
          )}
          <Button
            type='button'
            onClick={handleTakeHomeButtonClick}
            className={isTakedHome && 'button_disabled'}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
          >
            Забрать домой
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PetModule;
