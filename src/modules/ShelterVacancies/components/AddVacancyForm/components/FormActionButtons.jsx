import React from 'react';
import Button from '../../../../../ui/Button/Button';
import { getToken, sendDataWithToken } from './api';

const FormActionButtons = ({ isSubmitButtonDisabled, onClick, onSubmitSuccess, formValues }) => {
  const handleSubmit = async () => {
    try {
      const email = 'nikita845217@yandex.ru';
      const password = 'pf2ee56df94';
      const token = await getToken(email, password);

      const formattedSalary = parseInt(formValues.salary, 10);
      const formattedIsNdfl = formValues.is_ndfl[0] || '';
      const formattedEducation = formValues.education[0] || '';
      const formattedDescription = formValues.description;

      const formData = {
        position: formValues.position,
        salary: formattedSalary,
        is_ndfl: formattedIsNdfl,
        schedule: formValues.schedule,
        education: formattedEducation,
        description: formattedDescription,
      };

      await sendDataWithToken(token, formData);
      onSubmitSuccess();
    } catch (error) {
      throw new Error('Network response was not ok');
    }
  };

  return (
    <div className='add-shelter-form__submit-buttons'>
      <Button submit disabled={isSubmitButtonDisabled} onClick={handleSubmit}>
        Добавить
      </Button>
      <Button onClick={onClick}>Отменить</Button>
    </div>
  );
};

export default FormActionButtons;
