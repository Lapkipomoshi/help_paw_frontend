import React from 'react';
import './DetalisCard.css';

const DetalisCard = ({ children, title, isOpen }) => {
  return (
    <li className='detalis-card'>
      <details className='detalis-card__detalis' open={isOpen}>
        <summary className='detalis-card__row'>
          <h3 className='detalis-card__title'>{title}</h3>
          <div className='detalis-card__icon' />
        </summary>
        {children}
      </details>
    </li>
  );
};

export default DetalisCard;
