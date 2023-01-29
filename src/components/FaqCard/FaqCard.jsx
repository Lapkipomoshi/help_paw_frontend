import React from 'react';
import './FaqCard.css';

const FaqCard = ({ children, title }) => {
  return (
    <li className='faq-card'>
      <details className='faq-card__detalis' open>
        <summary className='faq-card__row'>
          <h3 className='faq-card__title'>{title}</h3>
          <div className='faq-card__icon' />
        </summary>
        {children}
      </details>
    </li>
  );
};

export default FaqCard;
