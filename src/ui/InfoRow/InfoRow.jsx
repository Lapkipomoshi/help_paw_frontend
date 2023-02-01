import React from 'react';
import './InfoRow.css';

const InfoRow = ({ children, argument }) => {
  return (
    <li className='info-row'>
      {`${argument}: `}
      <span className='info-row__span'>{children}</span>
    </li>
  );
};

export default InfoRow;
