import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AddVacancyForm.scss';
import Button from '../../../ui/Button/Button';
import useInput from '../../../hooks/useInput';
import DeclarationInput from '../../../ui/DeclarationInput/DeclarationInput';
import Select from '../../../ui/Select/Select';
import * as regex from '../../../utils/regex';
import * as errorMessage from '../../../utils/errorMessage';

const AddVacancyForm = () => {
  const [formValues, setFormValues] = useState({
    schedule: [],
    salary: null,
    education: '',
    is_ndfl: '',
    description: '',
    position: '',
  });

  const vacancyName = useInput('', { notEmpty: true, maxLength: 30, regex: regex.NAME_REGEX }, errorMessage.VACANCY_NAME);
  const vacancySalary = useInput('', { notEmpty: true, maxLength: 12, regex: regex.NUMBER }, errorMessage.VACANCY_SALARY);
  const vacancyDescription = useInput('', { notEmpty: true, maxLength: 3000, regex: regex.TEXT }, errorMessage.VACANCY_DESCRIPTION);

  const [isChecked, setIsChecked] = useState(false);

  const handleChangeCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const isFormButtonDisabled =
    vacancyName.invalidText ||
    vacancySalary.invalidText ||
    vacancyDescription.invalidText ||
    !isChecked ||
    formValues.education.length !== 0 ||
    formValues.schedule.length === 0;

  // TODO написать api для отправки формы в след PR
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit');
  };

  const handleDesctiptionChange = (evt) => {
    vacancyDescription.onChange(evt);

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
        salary: vacancySalary.value,
        position: vacancyName.value,
      };
    });
  }, [vacancySalary.value, vacancyName.value]);

  const handleSelectChange = (id, selected) => {
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [id]: selected,
      };
    });
  };

  // TODO бэк сказал сделал эндпоинты для селектов, пока замокала, в след PR
  const shiftItems = [
    { label: 'Полный день', id: 'slug1' },
    { label: 'Сменный', id: 'slug2' },
    { label: 'Гибкий', id: 'slug3' },
    { label: 'Удаленная работа', id: 'slug4' },
  ];

  const salaryItems = [
    { label: 'На руки', id: '11' },
    { label: 'с НДФЛ', id: '22' },
  ];

  const educationItems = [
    { label: 'Не требуется', id: '111' },
    { label: 'Среднее специальное', id: '222' },
    { label: 'Высшее', id: '333' },
  ];

  return (
    <form className='add-vacancy-form__container' onSubmit={handleSubmit}>
      <DeclarationInput caption='Название вакансии*' inputState={vacancyName} type='text' name='vacancyName' required />

      <div className='add-vacancy-form__flex-container'>
        <DeclarationInput caption='Заработная плата*' inputState={vacancySalary} type='number' name='vacancySalary' required placeholder='₽' />

        <Select label='Тип оплаты*' onChange={handleSelectChange} options={salaryItems} isMulti={false} required />
      </div>

      <div className='add-vacancy-form__flex-container'>
        <Select label='График работы*' onChange={handleSelectChange} options={shiftItems} id='schedule' isMulti required />

        <Select label='Образование*' onChange={handleSelectChange} options={educationItems} isMulti={false} required />
      </div>

      <p className='add-vacancy-form__desctioption-title'>Обязанности*</p>
      <textarea
        className={`add-vacancy-form__description ${vacancyDescription.dirty && vacancyDescription.invalidText && 'add-vacancy-form__textarea_invalid'}`}
        value={vacancyDescription.value}
        onChange={handleDesctiptionChange}
        onBlur={vacancyDescription.onBlur}
        name='description'
        required
      />
      <p className='add-shelter-form__error'>{vacancyDescription.dirty && vacancyDescription.invalidText}</p>

      {/* TODO вынести соглашение в отдельный компонент, используется еще в 2х местах, это взято ShelterStep */}
      <div className='register__privacy'>
        {/* TODO этот checkbox уже на макете выглядит по другому, поменять везде */}
        <label className='checkbox__container'>
          <input className='checkbox__input' type='checkbox' onClick={handleChangeCheckbox} />
          <span className='checkbox' />
        </label>

        <p className='register__text standard-font standard-font_type_small'>
          Я согласен с{' '}
          <Link className='register__link standard-font standard-font_type_small' to='/privacy' target='_blank'>
            Политикой конфиденциальности
          </Link>{' '}
          и{' '}
          <Link className='register__link standard-font standard-font_type_small' to='/terms' target='_blank'>
            Условиями использования сервиса
          </Link>
        </p>
      </div>

      <div className='add-shelter-form__submit-buttons'>
        <Button submit disabled={isFormButtonDisabled}>
          Добавить вакансию
        </Button>

        {/* TODO добавить логику кнопки Отменить, она стирает все значения и убирает рендеринг формы */}
        <Button>Отменить</Button>
      </div>
    </form>
  );
};

export default AddVacancyForm;
