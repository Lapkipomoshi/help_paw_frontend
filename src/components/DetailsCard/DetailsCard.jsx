import React from 'react';
import './DetailsCard.css';
import PlusMinus from './svg/PlusMinus';

const DetailsCard = ({
  children, title, isOpen, textStyle, iconType,
}) => {
  return (
    <li className='details-card'>
      <details className='details-card__details' open={isOpen}>
        <summary className='details-card__row'>
          <p className={`details-card__title details-card__title_style_${textStyle}`}>{title}</p>
          {iconType === 'plus-minus' && <PlusMinus />}
        </summary>
        {children}
      </details>
    </li>
  );
};

export default DetailsCard;
