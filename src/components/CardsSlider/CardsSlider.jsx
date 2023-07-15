import React, { useRef } from 'react';
import './CardsSlider.scss';

const CardsSlider = ({ children, columnGap, isButtonsHidden = false }) => {
  const sliderContainerRef = useRef(null);

  function handleLeftArrowClick() {
    sliderContainerRef.current.scrollBy({ behavior: 'smooth', left: -350 });
  }

  function handleRightArrowClick() {
    sliderContainerRef.current.scrollBy({ behavior: 'smooth', left: 350 });
  }

  return (
    <>
      <ul className='cards-slider' ref={sliderContainerRef} style={{ columnGap: `${columnGap}px` }}>
        {children}
      </ul>
      <div className={`cards-slider__buttons ${isButtonsHidden && 'cards-slider__buttons_hidden'}`}>
        <button className='cards-slider__button' type='button' onClick={handleLeftArrowClick} />
        <button className='cards-slider__button cards-slider__button_next' type='button' onClick={handleRightArrowClick} />
      </div>
    </>
  );
};

export default CardsSlider;
