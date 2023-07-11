import React, { useRef } from 'react';
import './CardsSlider.scss';

const CardsSlider = ({ children, listLength, columnGap = 24, cardWidth = 200, isButtonsHidden = false }) => {
  const slider = useRef(null); // элемент слайдера

  let position = 0; // смещение карточек в слайдере при листании

  // показать предыдущие карточки
  const handlePrev = () => {
    if (position < 0) position += 200;
    slider.current.childNodes.forEach((element) => {
      element.style = `transform: translateX(${position}px)`;
    });
  };

  // показать следующие карточки
  const handleNext = () => {
    if (position >= -(listLength - 7) * (columnGap + cardWidth)) position -= columnGap + cardWidth;
    slider.current.childNodes.forEach((element) => {
      element.style = `transform: translateX(${position}px)`;
    });
  };

  return (
    <>
      <ul className='cards-slider' ref={slider} style={{ columnGap: `${columnGap}px` }}>
        {children}
      </ul>
      <div className={`cards-slider__buttons ${isButtonsHidden && 'cards-slider__buttons_hidden'}`}>
        <button className='cards-slider__button' type='button' onClick={handlePrev} />
        <button className='cards-slider__button cards-slider__button_next' type='button' onClick={handleNext} />
      </div>
    </>
  );
};

export default CardsSlider;
