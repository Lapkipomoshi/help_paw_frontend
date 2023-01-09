import React from 'react';
import { Link } from 'react-router-dom';
import './ShelterCard.css';
import paw from '../../images/paw.svg';

const ShelterCard = ({ image, title, address, workingHours, linkID }) => {
  return (
    <li className='shelter-card'>
      <img className='shelter-card__logo' src={image} alt='лого приюта' />
      <h3 className='shelter-card__title'>{title}</h3>
      <p className='shelter-card__address'>{address}</p>
      <p className='shelter-card__working-hours'>Часы работы: <span className='shelter-card__hours'>{workingHours}</span></p>
      <Link className='shelter-card__link' to={linkID}>Читать подробнее</Link>
      <img className='shelter-card__paw' src={paw} alt='ЧП' />
    </li>
  );
}

export default ShelterCard;
