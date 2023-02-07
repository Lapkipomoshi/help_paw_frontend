import React from 'react';
import './DetailsCard.css';
import PlusMinus from './svg/PlusMinus';
import Arrow from './svg/Arrow';

const DetailsCard = ({
  children, title, isOpen, textStyle = 'faq', iconType = 'plus-minus',
}) => {
  return (
    <details className='details-card' open={isOpen}>
      <summary className={`details-card__summary details-card__summary_style_${textStyle}`}>
        <p className={`details-card__title details-card__title_style_${textStyle}`}>{title}</p>
        {iconType === 'plus-minus' && <PlusMinus />}
        {iconType === 'arrow' && <Arrow />}
      </summary>
      {children}
    </details>
  );
};

export default DetailsCard;
