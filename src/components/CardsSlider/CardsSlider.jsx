import React, { useRef } from 'react';
import './CardsSlider.scss';

const CardsSlider = ({ children, isButtonsHidden = false, modifier }) => {
  const defaultScrollPixelsAmount = 350;

  const sliderContainerRef = useRef(null);

  const handleSliderScroll = (direction) => {
    return () => {
      const scrollPixelsAmount = direction === 'left' ? -defaultScrollPixelsAmount : defaultScrollPixelsAmount;

      sliderContainerRef.current.scrollBy({ behavior: 'smooth', left: scrollPixelsAmount });
    };
  };

  return (
    <>
      <ul className={`cards-slider cards-slider_${modifier}`} ref={sliderContainerRef}>
        {children}
      </ul>
      <div className={`cards-slider__buttons cards-slider__buttons_${modifier} ${isButtonsHidden && 'cards-slider__buttons_hidden'}`}>
        <button className='cards-slider__button' type='button' onClick={handleSliderScroll('left')} />
        <button className='cards-slider__button cards-slider__button_next' type='button' onClick={handleSliderScroll('right')} />
      </div>
    </>
  );
};

export default CardsSlider;
