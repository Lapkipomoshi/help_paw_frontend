import React from 'react';
import './ShelterPets.css';
import CardsSlider from '../../components/CardsSlider/CardsSlider';
import PetCard from '../../components/PetCard/PetCard';

const ShelterPets = () => {
  const [petsList, setPetsList] = React.useState([]); // список питомцев приюта

  React.useEffect(() => {
    setPetsList([ // будет запрашиваться с бэкенда
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
    ]);
  }, []);

  return (
    <section className='shelter-section shelter-pets'>
      <h2 className='shelter-section__title shelter-pets__title'>Наши животные</h2>
      <ul className='shelter-pets__list'>
        <li className='shelter-pets__item'>
          <details className='shelter-pets__detalis' open>
            <summary className='shelter-pets__summary'>
              <h3 className='shelter-pets__summary-title'>Кошки</h3>
              <div className='shelter-pets__summary-icon' />
            </summary>
            <CardsSlider listLength={petsList.length}>
              {petsList.map((card) => {
                return (
                  <li className='slider__item' key={card.id}>
                    <PetCard
                      id={card.id}
                      name={card.name}
                      age={card.age}
                      male={card.male}
                      image={card.image}
                    />
                  </li>
                );
              })}
            </CardsSlider>
          </details>
        </li>
        <li className='shelter-pets__item'>
          <details className='shelter-pets__detalis'>
            <summary className='shelter-pets__summary'>
              <h3 className='shelter-pets__summary-title'>Собаки</h3>
              <div className='shelter-pets__summary-icon' />
            </summary>
            <div className='shelter-pets__slider' />
          </details>
        </li>
        <li className='shelter-pets__item'>
          <details className='shelter-pets__detalis'>
            <summary className='shelter-pets__summary'>
              <h3 className='shelter-pets__summary-title'>Попугаи</h3>
              <div className='shelter-pets__summary-icon' />
            </summary>
            <div className='shelter-pets__slider' />
          </details>
        </li>
      </ul>
    </section>
  );
};

export default ShelterPets;
