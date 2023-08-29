import React from 'react';
import './InfoItem.scss';

const InfoItem = ({ children, argument }) => {
  return (
    <li className='info-item'>
      {`${argument}: `}
      <span className='info-item__span'>{children}</span>
    </li>
  );
};

export default InfoItem;
