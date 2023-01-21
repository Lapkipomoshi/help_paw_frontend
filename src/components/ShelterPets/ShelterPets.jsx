import React from 'react';
import './ShelterPets.css';

const ShelterPets = () => {
  return (
    <section className='shelter-section shelter-pets'>
      <h2 className='shelter-section__title'>Наши животные</h2>
      <ul className='shelter-pets__list'>
        <li className='shelter-pets__item'>
          <details className='shelter-pets__detalis' open>
            <summary className='shelter-pets__summary'>
              <h3 className='shelter-pets__summary-title'>Кошки</h3>
              <div className='shelter-pets__summary-icon' />
            </summary>
            <div className='shelter-pets__slider'>123</div>
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
