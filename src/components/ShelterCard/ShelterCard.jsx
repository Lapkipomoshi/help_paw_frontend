import React from 'react';
import { Link } from 'react-router-dom';
import './ShelterCard.css';

const ShelterCard = ({
  id, name, address, workingFromHour, workingToHour, logo, profileImage,
}) => {
  return (
    <Link className='shelter-card' to={`/shelters/${id}/about`}>
      <img className='shelter-card__image' src={profileImage} alt='фото' />
      <h3 className='shelter-card__title'>{name}</h3>
      <p className='shelter-card__address'>{address}</p>
      <p className='shelter-card__working-hours'>
        Часы работы:
        {' '}
        <span className='shelter-card__hours'>
          {`${workingFromHour} - ${workingToHour}`}
        </span>
      </p>
      <img className='shelter-card__logo' src={logo} alt='логотип' />
    </Link>
  );
};

export default ShelterCard;
