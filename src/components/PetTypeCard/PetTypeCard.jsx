import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PetTypeCard.css';
import CatType from '../../images/type_cat.jpg';
import DogType from '../../images/type_dog.jpg';
import ParrotType from '../../images/type_parrot.jpg';
import HamsterType from '../../images/type_hamster.jpg';

const PetTypeCard = ({ type }) => {
  const [animalTypeImage, setAnimalTypeImage] = useState('');
  const [typeOnRussian, setTypeOnRussian] = useState('');

  useEffect(() => {
    switch (type.toLowerCase()) {
      case 'cat':
        setAnimalTypeImage(CatType);
        setTypeOnRussian('Кошки');
        break;
      case 'dog':
        setAnimalTypeImage(DogType);
        setTypeOnRussian('Собаки');
        break;
      case 'parrot':
        setAnimalTypeImage(ParrotType);
        setTypeOnRussian('Попугаи');
        break;
      case 'hamster':
        setAnimalTypeImage(HamsterType);
        setTypeOnRussian('Хомяки');
        break;
      default:
        setAnimalTypeImage(CatType);
        setTypeOnRussian(type);
    }
  }, []);

  return (
    <Link className='pet-type-card' to={`type/${type.toLowerCase()}`}>
      <h3 className='pet-type-card__title'>{typeOnRussian}</h3>
      <img className='pet-type-card__image' src={animalTypeImage} alt={typeOnRussian} />
    </Link>
  );
};

export default PetTypeCard;
