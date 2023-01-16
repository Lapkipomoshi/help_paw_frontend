import React from 'react';
import './HelpToShelter.css';

const HelpToShelter = () => {
  return (
    <section className='shelter-section help-to-shelter'>
      <h2 className='help-to-shelter__title'>Материальная помощь</h2>
      <button type='button' className='button help-to-shelter__button'>Пожертвовать деньги</button>
      <h2 className='help-to-shelter__title'>Нематериальная помощь</h2>
      <button type='button' className='button help-to-shelter__button'>Выгулять питомца</button>
    </section>
  );
}

export default HelpToShelter;
