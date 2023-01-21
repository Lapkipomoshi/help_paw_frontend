import React from 'react';
import './ShelterPets.css';

const ShelterPets = () => {
  const [petsList, setPetsList] = React.useState([]); // список питомцев приюта

  React.useEffect(() => {
    setPetsList([1,2,3,4,5,6,7,8,9]);
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
            <ul className='slider'>
              {petsList.map((card) => (
                <li className='slider__item'></li>
              ))}
            </ul>
            <div className='slider__buttons'>
              <button className='slider__button slider__button' type='button' />
              <button className='slider__button slider__button_next' type='button' />
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
