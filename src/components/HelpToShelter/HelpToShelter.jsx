import React from 'react';
import './HelpToShelter.css';

const HelpToShelter = () => {
  return (
    <section className='shelter-section help-to-shelter'>
      <h2 className='shelter-section__title help-to-shelter__title'>Материальная помощь</h2>
      <button className='button help-to-shelter__button' type='button'>Пожертвовать деньги</button>
      <h2 className='shelter-section__title help-to-shelter__title'>Нематериальная помощь</h2>
      <button className='button help-to-shelter__button' type='button'>Выгулять питомца</button>
    </section>
  );
};

export default HelpToShelter;
