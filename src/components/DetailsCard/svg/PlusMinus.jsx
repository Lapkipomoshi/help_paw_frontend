import React from 'react';
import './PlusMinus.css';

const PlusMinus = () => {
  return (
    <svg className='plus-minus' width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <line className='plus-minus__vertical' x1='16.5' y1='1.5' x2='16.5' y2='30.5' strokeWidth='3' strokeLinecap='round' />
      <line x1='30.5' y1='16.5' x2='1.5' y2='16.5' strokeWidth='3' strokeLinecap='round' />
    </svg>
  );
};

export default PlusMinus;
