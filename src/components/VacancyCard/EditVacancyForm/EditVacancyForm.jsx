import React, { useState, useEffect } from 'react';
import '../../../modules/ShelterVacancies/components/AddVacancyForm/AddVacancyForm.scss';
import { Button } from '../../../ui';
import DeclarationInput from '../../../ui/DeclarationInput/DeclarationInput';
import Select from '../../../ui/Select/Select';
import FormTextarea from '../../../modules/ShelterVacancies/components/AddVacancyForm/components/FormTextarea';
import useInput from '../../../hooks/useInput';
import EditActionButtons from './EditActionButtons';
import * as regex from '../../../utils/regex';
import * as errorMessage from '../../../utils/errorMessage';
import { getEducationOptions, getShiftOptions, getSalaryOptions } from '../../../modules/ShelterVacancies/components/AddVacancyForm/constants';

// eslint-disable-next-line
const EditVacancyForm = ({ id, title, salary, education, schedule, is_ndfl, description, onDelete, onClose, onSubmitSuccess, isLoading }) => {
  const [formData, setFormData] = useState({
    id: id || '',
    title: title || '',
    salary: salary || '',
    education: education || '',
    schedule: schedule || '',
    // eslint-disable-next-line
    is_ndfl: is_ndfl || '',
    description: description || '',
  });

  const [educationOptions, setEducationOptions] = useState([]);
  const [shiftOptions, setShiftOptions] = useState([]);
  const [salaryOptions, setSalaryOptions] = useState([]);

  const jobDescriptionInput = useInput('', { notEmpty: true, maxLength: 3000, regex: regex.TEXT }, errorMessage.VACANCY_DESCRIPTION);

  const handleInputChange = (field, value) => {
    // eslint-disable-next-line
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleDescriptionChange1 = (evt) => {
    jobDescriptionInput.onChange(evt);

    setFormData((prevData) => {
      return {
        ...prevData,
        description: evt.target.value,
      };
    });
  };

  useEffect(() => {
    const fetchOptions = async () => {
      const shiftOpts = await getShiftOptions();
      const educationOpts = await getEducationOptions();
      const salaryOpts = getSalaryOptions();
      if (shiftOpts) {
        setShiftOptions(shiftOpts);
      }
      if (educationOpts) {
        setEducationOptions(educationOpts);
      }
      if (salaryOpts) {
        setSalaryOptions(salaryOpts);
      }
    };
    fetchOptions();
  }, []);

  return (
    <form className='vacancy-form'>
      <div className='vacancy-form__edit' >
        <button
          type='button'
          className='vacancy-form__edit-btn'
          onClick={onClose}
        />
        <Button theme='tertiary' onClick={onClose}>Отменить редактирование вакансии</Button>
      </div>
      <DeclarationInput
        caption='Название вакансии*'
        inputState={{ value: formData.title, onChange: (e) => { handleInputChange('title', e.target.value); } }}
        type='text' name='position' required />

      <div className='vacancy-form__container'>
        <DeclarationInput
          caption='Заработная плата*'
          inputState={{ value: formData.salary, onChange: (e) => { handleInputChange('salary', e.target.value); } }}
          type='number' name='salaryInput' required placeholder='₽'
        />
        <Select
          label='Тип оплаты*'
          onChange={handleInputChange}
          options={salaryOptions}
          id='is_ndfl'
          isMulti={false}
          initialValues={formData.is_ndfl}
        />
      </div>
      <div className='vacancy-form__container'>
        <Select
          label='График работы*'
          id='schedule'
          isMulti
          onChange={handleInputChange}
          options={shiftOptions}
          initialValues={formData.schedule}
        />
        <Select
          label='Образование*'
          id='education'
          isMulti={false}
          onChange={handleInputChange}
          options={educationOptions}
          initialValues={formData.education}
        />
      </div>
      <FormTextarea
        jobDescriptionInput={jobDescriptionInput}
        handleDescriptionChange={handleDescriptionChange1}
        initialValues={formData.description}
      />
      <EditActionButtons formData={formData} onDelete={onDelete} onSubmitSuccess={onSubmitSuccess} onClose={onClose} isLoading={isLoading} />
    </form>
  );
};

export default EditVacancyForm;