import React from 'react';
import Button from '../../../../../ui/Button/Button';

const FormActionButtons = ({ isSubmitButtonDisabled, onClick }) => {
  return (
    <div className='add-shelter-form__submit-buttons'>
      <Button submit disabled={isSubmitButtonDisabled}>
        Добавить вакансию
      </Button>

      <Button onClick={onClick}>Отменить</Button>
    </div>
  );
};

export default FormActionButtons;
