import React from 'react';
import './CardsSlider.css';

const CardsSlider = ({ children, listLength }) => {
  const slider = React.useRef(null); // элемент слайдера

  let position = 0; // смещение карточек в слайдере при листании

  const handlePrev = () => { // показать предыдущие карточки
    if (position < 0) position += 200;
    slider.current.childNodes.forEach((element) => {
      element.style = `transform: translateX(${position}px)`;
    });
  };

  const handleNext = () => { // показать следующие карточки
    if (position >= (-(listLength - 7) * 200)) position -= 200;
    slider.current.childNodes.forEach((element) => {
      element.style = `transform: translateX(${position}px)`;
    });
  };

  return (
    <>
      <ul className='cards-slider' ref={slider}>
        {children}
      </ul>
      <div className='cards-slider__buttons'>
        <button className='cards-slider__button' type='button' onClick={handlePrev} />
        <button className='cards-slider__button cards-slider__button_next' type='button' onClick={handleNext} />
      </div>
    </>
  );
};

export default CardsSlider;
