import React from 'react';
import CardsSlider from '../../components/CardsSlider/CardsSlider';

const ShelterList = ({ shelters, isDataLoading }) => {
  return (
    <>
      {isDataLoading && <p>Загрузка...</p>}
      {!isDataLoading && (
        <CardsSlider isButtonsHidden={shelters.length === 0}>
          {shelters.length > 0 ? shelters : <p>На данный момент таких приютов нет, попробуйте помочь приютам другого цвета, спасибо за ваше неравнодушие</p>}
        </CardsSlider>
      )}
    </>
  );
};

export default ShelterList;
