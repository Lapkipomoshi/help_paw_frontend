import React from 'react';
import './HelpToShelter.css';
import Button from '../Button/Button';

const HelpToShelter = () => {
  return (
    <section className='shelter-section help-to-shelter'>
      <h2 className='shelter-section__title help-to-shelter__title'>Материальная помощь</h2>
      <Button type='button' className='primary help-to-shelter__button'>Пожертвовать деньги</Button>
      <h2 className='shelter-section__title help-to-shelter__title'>Нематериальная помощь</h2>
      <Button type='button' className='primary help-to-shelter__button'>Выгулять питомца</Button>
    </section>
  );
}

export default HelpToShelter;
