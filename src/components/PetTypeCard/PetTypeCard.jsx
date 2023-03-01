import React from 'react';
import { Link } from 'react-router-dom';
import './PetTypeCard.css';
import DogImage from '../../images/dog.png';

const PetTypeCard = ({ shelterId, type }) => {
  return (
    <Link className='pet-type-card' to={`/shelters/${shelterId}/pets/${type.toLowerCase()}`}>
      <h3 className='pet-type-card__title'>{type}</h3>
      <img className='pet-type-card__image' src={DogImage} alt={type} />
    </Link>
  );
};

export default PetTypeCard;
