import React from 'react';
import './DetailsCard.css';

const DetailsCard = ({ children, title, isOpen }) => {
  return (
    <li className='details-card'>
      <details className='details-card__details' open={isOpen}>
        <summary className='details-card__row'>
          <h3 className='details-card__title'>{title}</h3>
          <div className='details-card__icon' />
        </summary>
        {children}
      </details>
    </li>
  );
};

export default DetailsCard;
