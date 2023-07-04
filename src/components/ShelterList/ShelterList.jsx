import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './ShelterList.scss';
import CardsSlider from '../CardsSlider/CardsSlider';

const ShelterList = () => {
  const { sheltersByColor, isDataLoading } = useOutletContext();

  let isButtonsHidden;
  if (sheltersByColor.length === 0) {
    isButtonsHidden = 'shelter-list__buttons_hidden';
  }

  return (
    <>
      {isDataLoading && <p>Загрузка...</p>}
      {!isDataLoading && (
        <CardsSlider isButtonsHidden={isButtonsHidden}>
          {sheltersByColor.length > 0 ? (
            sheltersByColor
          ) : (
            <p>На данный момент таких приютов нет, попробуйте помочь приютам другого цвета, спасибо за ваше неравнодушие</p>
          )}
        </CardsSlider>
      )}
    </>
  );
};

export default ShelterList;
