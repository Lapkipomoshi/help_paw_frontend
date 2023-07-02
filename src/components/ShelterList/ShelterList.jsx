import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CardsSlider from '../CardsSlider/CardsSlider';

const ShelterList = () => {
  const { sheltersByColor, filteredShelters, isDataLoading } = useOutletContext();
  return (
    !isDataLoading && (
      <CardsSlider>
        {filteredShelters.length > 0 ? (
          sheltersByColor
        ) : (
          <p>На данный момент таких приютов нет, попробуйте помочь приютам другого цвета, спасибо за ваше неравнодушие</p>
        )}
      </CardsSlider>
    )
  );
};

export default ShelterList;
