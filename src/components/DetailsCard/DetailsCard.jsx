import React from 'react';
import './DetailsCard.css';
import PlusMinus from './svg/PlusMinus';
import Arrow from './svg/Arrow';

const DetailsCard = ({ children, title, isOpen, iconType, titleClasses, containerClasses }) => {
  return (
    <details className='details-card' open={isOpen}>
      <summary className={`details-card__summary ${containerClasses}`}>
        <p className={`details-card__title ${titleClasses}`}>{title}</p>
        {iconType === 'plus-minus' && <PlusMinus />}
        {iconType === 'arrow' && <Arrow />}
      </summary>
      {children}
    </details>
  );
};

export default DetailsCard;
