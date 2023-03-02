import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ShelterSamePets.css';
// import PetTypeCard from '../../components/PetTypeCard/PetTypeCard';

const ShelterSamePets = () => {
  const { type } = useParams();

  useEffect(() => {
    console.log(type);
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
  }, [type]);

  return (
    <section className='shelter-section shelter-same-pets'>
      <Link className='shelter-same-pets__link' to='../pets'>Назад</Link>
      {/* <h2 className='shelter-section__title'>Наши животные</h2>
      <ul className='shelter-same-pets__list'>
        {shelter.animal_types && shelter.animal_types.map((type) => {
          return (
            <li className='shelter-same-pets__pets-item' key={type}>
              <PetTypeCard shelterId={shelter.id} type={type} />
            </li>
          );
        })}
      </ul> */}
    </section>
  );
};

export default ShelterSamePets;
