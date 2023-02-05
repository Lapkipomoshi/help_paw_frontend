import React from 'react';
import './DetailsCard.css';
import PlusMinus from './svg/PlusMinus';
import Arrow from './svg/Arrow';

const DetailsCard = ({
  children, title, isOpen, textStyle = 'faq', iconType = 'plus-minus',
}) => {
  return (
    <li className={`details-card details-card_style_${textStyle}`}>
      <details className='details-card__details' open={isOpen}>
        <summary className={`details-card__summary details-card__summary_style_${textStyle}`}>
          <p className={`details-card__title details-card__title_style_${textStyle}`}>{title}</p>
          {iconType === 'plus-minus' && <PlusMinus />}
          {iconType === 'arrow' && <Arrow />}
        </summary>
        {children}
      </details>
    </li>
  );
};

export default DetailsCard;
