import React from 'react';
import './DetailsCard.css';

const DetailsCard = ({ children, title, isOpen }) => {
  return (
    <li className='details-card'>
      <details className='details-card__details' open={isOpen}>
        <summary className='details-card__row'>
          <h3 className='details-card__title'>{title}</h3>
          <svg className='details-card__icon' width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <line id='svg-vertical' x1='16.5' y1='1.5' x2='16.5' y2='30.5' stroke='#111c2c' strokeWidth='3' strokeLinecap='round' />
            <line x1='30.5' y1='16.5' x2='1.5' y2='16.5' stroke='#111c2c' strokeWidth='3' strokeLinecap='round' />
          </svg>
        </summary>
        {children}
      </details>
    </li>
  );
};

export default DetailsCard;
