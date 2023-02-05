import React from 'react';
import './DetailsCard.css';
import PlusMinus from './svg/PlusMinus';

const DetailsCard = ({
  children, title, isOpen, iconType,
}) => {
  return (
    <li className='details-card'>
      <details className='details-card__details' open={isOpen}>
        <summary className='details-card__row'>
          <h3 className='details-card__title'>{title}</h3>
          {iconType === 'plus-minus' && <PlusMinus />}
        </summary>
        {children}
      </details>
    </li>
  );
};

export default DetailsCard;
