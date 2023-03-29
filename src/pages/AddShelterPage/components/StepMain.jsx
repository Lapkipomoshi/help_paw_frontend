import React from 'react';
import Button from '../../../ui/Button/Button';

const StepMain = () => {
  return (
    <>
      <label className='add-shelter-form__caption'>ФИО владельца приюта*</label>
      <input className='add-shelter-form__input' type='text' name='owner' required />
      <label className='add-shelter-form__caption'>Номер телефона*</label>
      <input className='add-shelter-form__input' type='tel' name='phone' required />
      <label className='add-shelter-form__caption'>E-mail*</label>
      <input className='add-shelter-form__input' type='email' name='email' required />
      <div className='add-shelter-form__buttons'>
        <Button submit>Далее</Button>
        <Button theme='transparent'>Отменить</Button>
      </div>
    </>
  );
};

export default StepMain;
