import React, { useEffect, useState } from 'react';
import './AddVacancyForm.scss';
import useInput from '../../../../hooks/useInput';
import DeclarationInput from '../../../../ui/DeclarationInput/DeclarationInput';
import Select from '../../../../ui/Select/Select';
import * as regex from '../../../../utils/regex';
import * as errorMessage from '../../../../utils/errorMessage';
import { defaultFormValues, getShiftOptions, getSalaryOptions, getEducationOptions } from './constants';
import FormActionButtons from './components/FormActionButtons';
import FormTextarea from './components/FormTextarea';
import PrivacyCheckbox from '../../../../components/PrivacyCheckbox/PrivacyCheckbox';

const AddVacancyForm = ({ onChange, onSubmitSuccess }) => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [shiftOptions, setShiftOptions] = useState([]);
  const [educationOptions, setEducationOptions] = useState([]);
  const [salaryOptions, setSalaryOptions] = useState([]);

  const jobTitleInput = useInput('', { notEmpty: true, maxLength: 30, regex: regex.NAME_REGEX }, errorMessage.VACANCY_NAME);
  const salaryInput = useInput('', { notEmpty: true, maxLength: 12, regex: regex.NUMBER }, errorMessage.VACANCY_SALARY);
  const jobDescriptionInput = useInput('', { notEmpty: true, maxLength: 3000, regex: regex.TEXT }, errorMessage.VACANCY_DESCRIPTION);

  const [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked((prev) => {
      return !prev;
    });
  };

  const isSubmitButtonDisabled =
    jobTitleInput.invalidText ||
    salaryInput.invalidText ||
    jobDescriptionInput.invalidText ||
    !isChecked ||
    formValues.education.length === 0 ||
    formValues.is_ndfl.length === 0 ||
    formValues.schedule.length === 0;

  const handleCancelClick = () => {
    setFormValues(defaultFormValues);
    onChange();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleDescriptionChange = (evt) => {
    jobDescriptionInput.onChange(evt);

    setFormValues((prevValues) => {
      return {
        ...prevValues,
        description: evt.target.value,
      };
    });
  };

  useEffect(() => {
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        salary: salaryInput.value,
        position: jobTitleInput.value,
      };
    });
  }, [salaryInput.value, jobTitleInput.value]);

  useEffect(() => {
    const fetchOptions = async () => {
      const fetchedShiftOptions = await getShiftOptions();
      const fetchedEducationOptions = await getEducationOptions();
      const fetchedSalaryOptions = await getSalaryOptions();
      if (fetchedShiftOptions) {
        setShiftOptions(fetchedShiftOptions);
      }
      if (fetchedEducationOptions) {
        setEducationOptions(fetchedEducationOptions);
      }
      if (fetchedSalaryOptions) {
        setSalaryOptions(fetchedSalaryOptions);
      }
    };
    fetchOptions();
  }, []);

  const handleSelectChange = (id, selected) => {
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [id]: selected,
      };
    });
  };

  return (
    <form className='add-vacancy-form__container' onSubmit={handleSubmit}>
      <DeclarationInput caption='Название вакансии*' inputState={jobTitleInput} type='text' name='jobTitleInput' required />

      <div className='add-vacancy-form__flex-container'>
        <DeclarationInput caption='Заработная плата*' inputState={salaryInput} type='number' name='salaryInput' required placeholder='₽' />

        <Select label='Тип оплаты*' onChange={handleSelectChange} options={salaryOptions} id='is_ndfl' isMulti={false} />
      </div>

      <div className='add-vacancy-form__flex-container'>
        <Select label='График работы*' onChange={handleSelectChange} options={shiftOptions} id='schedule' isMulti />

        <Select label='Образование*' onChange={handleSelectChange} options={educationOptions} id='education' isMulti={false} />
      </div>

      <FormTextarea jobDescriptionInput={jobDescriptionInput} handleDescriptionChange={handleDescriptionChange} />

      <PrivacyCheckbox onChange={toggleCheckbox} />

      <FormActionButtons
        isSubmitButtonDisabled={isSubmitButtonDisabled}
        onClick={handleCancelClick}
        onSubmitSuccess={onSubmitSuccess}
        salaryInput={salaryInput}
        formValues={formValues}
        jobTitleInput={jobTitleInput}
        jobDescriptionInput={jobDescriptionInput}
      />
    </form>
  );
};

export default AddVacancyForm;
