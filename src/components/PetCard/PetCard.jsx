import React from 'react';
import { Link } from 'react-router-dom';
import './PetCard.css';
import maleIcon from '../../images/icons/ic_male.svg';
import femaleIcon from '../../images/icons/ic_female.svg';

const PetCard = ({ id, name, age, male, image }) => {
  return (
    <Link className='pet-card' to={'/pets/' + id} style={{background: `linear-gradient(rgba(217,217,217,0.1), rgba(164,164,164,.8)), url(${image})`}}>
      <img className='pet-card__icon' src={male ? maleIcon : femaleIcon} alt={male ? 'самец' : 'самка'} />
      <p className='pet-card__name'>{name}</p>
      <p className='pet-card__age'>{age}</p>
    </Link>
  );
}

export default PetCard;
