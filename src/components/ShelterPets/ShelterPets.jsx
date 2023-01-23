import React from 'react';
import './ShelterPets.css';
import PetCard from '../PetCard/PetCard';

const ShelterPets = () => {
  const slider = React.useRef(null); // элемент слайдера

  const [petsList, setPetsList] = React.useState([]); // список питомцев приюта

  let position = 0; // смещение карточек в слайдере при листании

  const handlePrev = () => { // показать предыдущие карточки
    if (position < 0) position += 200;
    slider.current.childNodes.forEach((element) => {
      element.style = `transform: translateX(${position}px)`;
    });
  }

  const handleNext = () => { // показать следующие карточки
    if (position >= (-(petsList.length - 7)*200)) position -= 200;
    slider.current.childNodes.forEach((element) => {
      element.style = `transform: translateX(${position}px)`;
    });
  }

  React.useEffect(() => {
    setPetsList([ // будет запрашиваться с бэкенда
      {id: 1,
        name: 'Пушистик',
        age: '2 года',
        male: true,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},
      {id: 2,
        name: 'Пушистик',
        age: '2 года',
        male: true,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},
      {id: 3,
        name: 'Пушистик',
        age: '2 года',
        male: false,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},
      {id: 4,
        name: 'Пушистик',
        age: '2 года',
        male: true,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},
      {id: 5,
        name: 'Пушистик',
        age: '2 года',
        male: true,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},
      {id: 6,
        name: 'Пушистик',
        age: '2 года',
        male: false,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},
      {id: 7,
        name: 'Пушистик',
        age: '2 года',
        male: true,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},
      {id: 8,
        name: 'Пушистик',
        age: '2 года',
        male: true,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'},
      {id: 9,
        name: 'Пушистик',
        age: '2 года',
        male: false,
        image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'},
  ]);
  }, [])

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
            <ul className='slider' ref={slider}>
              {petsList.map((card) => (
                <li className='slider__item' key={card.id}>
                  <PetCard
                  id={card.id} name={card.name} age={card.age} male={card.male} image={card.image} />
                </li>
              ))}
            </ul>
            <div className='slider__buttons'>
              <button className='slider__button' type='button' onClick={handlePrev} />
              <button className='slider__button slider__button_next' type='button' onClick={handleNext} />
            </div>
          </details>
        </li>
        <li className='shelter-pets__item'>
          <details className='shelter-pets__detalis'>
            <summary className='shelter-pets__summary'>
              <h3 className='shelter-pets__summary-title'>Собаки</h3>
              <div className='shelter-pets__summary-icon' />
            </summary>
            <div className='shelter-pets__slider'></div>
          </details>
        </li>
        <li className='shelter-pets__item'>
          <details className='shelter-pets__detalis'>
            <summary className='shelter-pets__summary'>
              <h3 className='shelter-pets__summary-title'>Попугаи</h3>
              <div className='shelter-pets__summary-icon' />
            </summary>
            <div className='shelter-pets__slider'></div>
          </details>
        </li>
      </ul>
    </section>
  );
}

export default ShelterPets;
