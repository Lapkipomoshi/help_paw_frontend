import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import './ShelterPets.css';
import PetTypeCard from '../../components/PetTypeCard/PetTypeCard';

const ShelterPets = () => {
  const { shelter } = useOutletContext();
  const [petsList, setPetsList] = useState([]); // список видов питомцев

  useEffect(() => {
    setPetsList([ // будет запрашиваться с бэкенда
      {
        id: 1,
        type: 'Кошки',
      },
      {
        id: 2,
        type: 'Собаки',
      },
      {
        id: 3,
        type: 'Попугаи',
      },
      {
        id: 4,
        type: 'Хомяки',
      },
    ]);
    /* setCatsList([ // будет запрашиваться с бэкенда
      {
        id: 1,
        name: 'Пушистик',
        age: '2 года',
        male: true,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      },
      {
        id: 2,
        name: 'Пушистик',
        age: '2 года',
        male: true,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      },
      {
        id: 3,
        name: 'Пушистик',
        age: '2 года',
        male: false,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      },
      {
        id: 4,
        name: 'Пушистик',
        age: '2 года',
        male: true,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      },
      {
        id: 5,
        name: 'Пушистик',
        age: '2 года',
        male: true,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      },
      {
        id: 6,
        name: 'Пушистик',
        age: '2 года',
        male: false,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      },
      {
        id: 7,
        name: 'Пушистик',
        age: '2 года',
        male: true,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      },
      {
        id: 8,
        name: 'Пушистик',
        age: '2 года',
        male: true,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      },
      {
        id: 9,
        name: 'Пушистик',
        age: '2 года',
        male: false,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      },
    ]); */
  }, []);

  return (
    <section className='shelter-section shelter-pets'>
      <h2 className='shelter-section__title shelter-pets__title'>Наши животные</h2>
      <ul className='shelter-pets__list'>
        {petsList.map((type) => {
          return (
            <li className='shelter-pets__pets-item' key={type.id}>
              <PetTypeCard shelterId={shelter.id} type={type.type} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ShelterPets;
