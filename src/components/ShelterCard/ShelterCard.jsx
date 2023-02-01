import React from 'react';
import { Link } from 'react-router-dom';
import './ShelterCard.css';

const ShelterCard = ({
  image, logo, title, address, workingHours, linkID,
}) => {
  return (
    <Link className='shelter-card' to={linkID}>
      <img className='shelter-card__image' src={image} alt='лого приюта' />
      <h3 className='shelter-card__title'>{title}</h3>
      <p className='shelter-card__address'>{address}</p>
      <p className='shelter-card__working-hours'>
        Часы работы:
        {' '}
        <span className='shelter-card__hours'>
          {workingHours}
        </span>
      </p>
      <img className='shelter-card__logo' src={logo} alt='ЧП' />
    </Link>
  );
};

export default ShelterCard;
