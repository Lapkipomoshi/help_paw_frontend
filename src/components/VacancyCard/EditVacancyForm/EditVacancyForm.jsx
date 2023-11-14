import React, { useState, useEffect } from 'react';
import '../../../modules/ShelterVacancies/components/AddVacancyForm/AddVacancyForm.scss';
import DeclarationInput from '../../../ui/DeclarationInput/DeclarationInput';
import Select from '../../../ui/Select/Select';
import { getEducationOptions } from '../../../modules/ShelterVacancies/components/AddVacancyForm/constants';

const EditVacancyForm = ({ initialValues }) => {
  const [formData, setFormData] = useState(initialValues);
  const [educationOptions, setEducationOptions] = useState([]);

  useEffect(() => {
    const fetchEducationOptions = async () => {
      try {
        const options = await getEducationOptions();
        setEducationOptions(options);
      } catch (error) {
        console.error('Ошибка загрузки опций образования:', error);
      }
    };

    fetchEducationOptions();
  }, []);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name, selectedValue) => {
    setFormData({
      ...formData,
      [name]: selectedValue,
    });
  };

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
          label='Образование*'
          id='education'
          isMulti={false}
          onChange={handleSelectChange}
          options={educationOptions}
          initialValues={formData.education}
        />
      </div>
    </form>
  );
};

export default EditVacancyForm;