import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CardsSlider from '../../components/CardsSlider/CardsSlider';

const YellowShelters = () => {
  const { sheltersByColor, filteredShelters, isDataLoading } = useOutletContext();
  return (
    !isDataLoading && (
      <CardsSlider>
        {filteredShelters.length > 0 ? sheltersByColor : <p>На данный момент таких приютов нет, попробуйте помочь приютам другого цвета</p>}
      </CardsSlider>
    )
  );
};
export default YellowShelters;
