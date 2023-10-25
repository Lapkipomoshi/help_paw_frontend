import React from 'react';
import Button from '../../../../../ui/Button/Button';

const FormActionButtons = ({ isSubmitButtonDisabled, onClick, onSubmitSuccess }) => {
  const handleSubmit = () => {
    // TODO сделать отправку формы
    onSubmitSuccess();
  };

  return (
    <div className='add-shelter-form__submit-buttons'>
      {/* <Button submit disabled={isSubmitButtonDisabled} onClick={handleSubmit} onSubmitSuccess={onSubmitSuccess}> */}
      <Button submit disabled={isSubmitButtonDisabled} onClick={handleSubmit}>
        Добавить вакансию
      </Button>
      <Button onClick={onClick}>Отменить</Button>
    </div>
  );
};

export default FormActionButtons;
