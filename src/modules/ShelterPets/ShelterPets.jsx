import React from 'react';
import './ShelterPets.css';
// import DetailsCard from '../../components/DetailsCard/DetailsCard';
import CardsSlider from '../../components/CardsSlider/CardsSlider';
import PetCard from '../../components/PetCard/PetCard';

const ShelterPets = () => {
  const [petsList, setPetsList] = React.useState([]); // список видов питомцев
  const [catsList, setCatsList] = React.useState([]); // список кошек приюта

  React.useEffect(() => {
    setPetsList([ // будет запрашиваться с бэкенда
      {
        id: 1,
        pets: 'Кошки',
      },
      {
        id: 2,
        pets: 'Собаки',
      },
      {
        id: 3,
        pets: 'Попугаи',
      },
    ]);
    setCatsList([ // будет запрашиваться с бэкенда
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
        {petsList.map((pets) => {
          return (
            <li className='shelter-pets__item' key={pets.id}>
              <details className='shelter-pets__detalis'>
                <summary className='shelter-pets__summary'>
                  <h3 className='shelter-pets__summary-title'>{pets.pets}</h3>
                  <div className='shelter-pets__summary-icon' />
                </summary>
                <CardsSlider listLength={catsList.length}>
                  {catsList.map((card) => {
                    return (
                      <li className='shelter-pets__card-item' key={card.id}>
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
          );
        })}
      </ul>
    </section>
  );
};

export default ShelterPets;
