import React from 'react';
import './Arrow.css';

const Arrow = ({ openedSelect }) => {
  return (
    <svg className={`arrow ${openedSelect && 'arrow_rotate'}`} width='36' height='21' viewBox='0 0 36 21' fill='none'>
      <path
        d={`M34.9204 1.25245C35.7015 2.0335 35.7015 3.29983 34.9204 4.08088L19.4155 19.5858C18.6345 20.3668 17.3681 20.3668 16.5871
      19.5858L1.08218 4.08088C0.301133 3.29983 0.301134 2.0335 1.08218 1.25245L1.50792 0.826714C2.28897 0.0456657 3.5553 0.0456657 4.33635
      0.826714L16.5871 13.0775C17.3681 13.8585 18.6345 13.8585 19.4155 13.0775L31.6663 0.826715C32.4473 0.0456676 33.7136 0.0456657 34.4947
      0.826714L34.9204 1.25245Z`}
      />
    </svg>
  );
};

export default Arrow;
