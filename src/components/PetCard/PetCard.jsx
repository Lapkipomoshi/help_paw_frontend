import React from 'react';
import { Link } from 'react-router-dom';
import './PetCard.scss';
import maleIcon from '../../images/icons/ic_male.svg';
import femaleIcon from '../../images/icons/ic_female.svg';

const PetCard = ({
  name, age, sex, gallery, link
}) => {
  return (
    <Link
      className='pet-card'
      to={link}
    >
      <img className='pet-card__photo' src={gallery[0].image} alt={name} />
      <div className='pet-card__cover' />
      <img className='pet-card__icon' src={sex === 'male' ? maleIcon : femaleIcon} alt={sex === 'male' ? 'самец' : 'самка'} />
      <p className='pet-card__name'>{name}</p>
      <p className='pet-card__age'>{age}</p>
    </Link>
  );
};

export default PetCard;
