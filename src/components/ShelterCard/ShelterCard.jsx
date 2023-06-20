import React from 'react';
import { Link } from 'react-router-dom';
import './ShelterCard.scss';

const ShelterCard = ({ id, name, address, workingFromHour, workingToHour, logo, profileImage }) => {
  return (
    <Link className='shelter-card' to={`/shelters/${id}/about`}>
      <div className='shelter-card__image-container'>
        <img className='shelter-card__image' src={profileImage} alt='фото' />
      </div>

      <div className='shelter-card__content-container'>
        <h3 className='shelter-card__title standard-font_type_h4'>{name}</h3>
        <p className='shelter-card__address standard-font_type_small'>{address}</p>
        <p className='shelter-card__working-hours standard-font_type_small'>
          Часы работы:<span className='shelter-card__hours'>{`${workingFromHour} - ${workingToHour}`}</span>
        </p>
      </div>
      <img className='shelter-card__logo' src={logo} alt='логотип' />
    </Link>
  );
};

export default ShelterCard;
