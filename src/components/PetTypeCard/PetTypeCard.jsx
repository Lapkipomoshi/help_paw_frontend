import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PetTypeCard.css';
import CatType from '../../images/type_cat.jpg';
import DogType from '../../images/type_dog.jpg';
import ParrotType from '../../images/type_parrot.jpg';
import HamsterType from '../../images/type_hamster.jpg';

const PetTypeCard = ({ shelterId, type }) => {
  const [animalType, setAnimalType] = useState('');

  useEffect(() => {
    switch (type.toLowerCase()) {
    case 'кошки':
      setAnimalType(CatType);
      break;
    case 'собаки':
      setAnimalType(DogType);
      break;
    case 'попугаи':
      setAnimalType(ParrotType);
      break;
    case 'хомяки':
      setAnimalType(HamsterType);
      break;
    default:
      setAnimalType(CatType);
    }
  }, []);

  return (
    <Link className='pet-type-card' to={`/shelters/${shelterId}/pets/${type.toLowerCase()}`}>
      <h3 className='pet-type-card__title'>{type}</h3>
      <img className='pet-type-card__image' src={animalType} alt={type} />
    </Link>
  );
};

export default PetTypeCard;
