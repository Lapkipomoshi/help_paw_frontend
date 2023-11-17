import React, { useState, useEffect } from 'react';
import '../../../modules/ShelterVacancies/components/AddVacancyForm/AddVacancyForm.scss';
import DeclarationInput from '../../../ui/DeclarationInput/DeclarationInput';
import Select from '../../../ui/Select/Select';
import FormTextarea from '../../../modules/ShelterVacancies/components/AddVacancyForm/components/FormTextarea';
import useInput from '../../../hooks/useInput';
import EditActionButtons from './EditActionButtons';
import * as regex from '../../../utils/regex';
import * as errorMessage from '../../../utils/errorMessage';
import { getEducationOptions, getShiftOptions, getSalaryOptions } from '../../../modules/ShelterVacancies/components/AddVacancyForm/constants';

// eslint-disable-next-line
const EditVacancyForm = ({ id, title, salary, education, schedule, is_ndfl, description, onDelete, onSubmitSuccess }) => {
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
    // onFieldChange(field, value);
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
      try {
        const [salaryOpts, educationOpts, shiftOpts] = await Promise.all([
          getSalaryOptions(),
          getEducationOptions(),
          getShiftOptions(),
        ]);
        setSalaryOptions(salaryOpts);
        setEducationOptions(educationOpts);
        setShiftOptions(shiftOpts);
      } catch (error) {
        throw new Error('Network response was not ok');
      }
    };

    fetchOptions();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line
    console.log('Загруженные данные в форму для редактирования:', formData);
  }, [formData]);

  return (
    <form className='add-vacancy-form__container'>
      <DeclarationInput
        caption='Название вакансии*'
        inputState={{ value: formData.title, onChange: (e) => { handleInputChange('title', e.target.value); } }}
        type='text' name='position' required />

      <div className='add-vacancy-form__flex-container'>
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
      <div className='add-vacancy-form__flex-container'>
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

      {/* <EditActionButtons id={id} title={title} salary={salary}
        education={education} schedule={schedule} is_ndfl={is_ndfl} description={description} onDelete={onDelete} onSubmitSuccess={onSubmitSuccess} /> */}
      <EditActionButtons formData={formData} onDelete={onDelete} onSubmitSuccess={onSubmitSuccess} />

    </form>
  );
};

export default EditVacancyForm;