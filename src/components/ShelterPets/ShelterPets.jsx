import React from 'react';
import './ShelterPets.css';

const ShelterPets = () => {
  const slider = React.useRef(null);

  const [petsList, setPetsList] = React.useState([]); // список питомцев приюта

  let position = 0;

  const handlePrev = () => {
    position -= 212;
    slider.current.childNodes.forEach((element) => {
      element.style = `transform: translateX(${position}px)`;
    });
  }

  const handleNext = () => {
    position += 212;
    slider.current.childNodes.forEach((element) => {
      element.style = `transform: translateX(${position}px)`;
    });
  }

  React.useEffect(() => {
    setPetsList([ // будет запрашиваться с бэкенда
      {id: 1,
        name: 'Пушистик',
        age: '2 года',
        male: true},
      {id: 2,
        name: 'Пушистик',
        age: '2 года',
        male: true},
      {id: 3,
        name: 'Пушистик',
        age: '2 года',
        male: true},
      {id: 4,
        name: 'Пушистик',
        age: '2 года',
        male: true},
      {id: 5,
        name: 'Пушистик',
        age: '2 года',
        male: true},
      {id: 6,
        name: 'Пушистик',
        age: '2 года',
        male: true},
      {id: 7,
        name: 'Пушистик',
        age: '2 года',
        male: true},
      {id: 8,
        name: 'Пушистик',
        age: '2 года',
        male: true},
      {id: 9,
        name: 'Пушистик',
        age: '2 года',
        male: true},
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
              {petsList.map((card, index) => (
                <li className='slider__item' key={index}></li>
              ))}
            </ul>
            <div className='slider__buttons'>
              <button className='slider__button slider__button' type='button' onClick={handlePrev} />
              <button className='slider__button slider__button_next' type='button' onClick={handleNext} />
            </div>
          </details>
        </li>
        <li className='shelter-pets__item'>
          <details className='shelter-pets__detalis'>
            <summary className='shelter-pets__summary'>
              <h3 className='shelter-pets__summary-title'>Пёсики</h3>
              <div className='shelter-pets__summary-icon' />
            </summary>
            <div className='shelter-pets__slider'>123</div>
          </details>
        </li>
      </ul>
    </section>
  );
}

export default ShelterPets;
