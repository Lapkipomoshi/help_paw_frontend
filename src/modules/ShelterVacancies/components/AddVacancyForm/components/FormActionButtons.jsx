import React from 'react';
import Button from '../../../../../ui/Button/Button';
import { sendVacancy } from './vacanciesAPI';

const FormActionButtons = ({ isSubmitButtonDisabled, onClick, onSubmitSuccess, formValues }) => {
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('access');

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

      await sendVacancy(token, formData);
      onSubmitSuccess();
    } catch (error) {
      throw new Error('Network response was not ok');
    }
  };

  return (
    <div className='shelter-form__submit-buttons'>
      <Button submit disabled={isSubmitButtonDisabled} onClick={handleSubmit}>
        Добавить вакансию
      </Button>
      <Button onClick={onClick}>Отменить</Button>
    </div>
  );
};

export default FormActionButtons;