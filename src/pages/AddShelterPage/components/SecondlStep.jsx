import React from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../../hooks/useInput';
import Button from '../../../ui/Button/Button';
import * as regex from '../../../utils/regex';
import * as errorMessage from '../../../utils/errorMessage';

const SecondlStep = ({
  handleChangeCheckbox, logo, handleLogo, handleBack,
}) => {
  const startTime = useInput('', false, { empty: true, regex: regex.TIME }, errorMessage.TIME);
  const finishTime = useInput('', false, { empty: true, regex: regex.TIME }, errorMessage.TIME);
  const shelterName = useInput('', false, { empty: true, maxLength: 50 }, errorMessage.SHELTER);

  return (
    <>
      <label className='add-shelter-form__caption'>Логотип приюта</label>
      <div className='add-shelter-form__photo-block'>
        <label>
          <input onChange={handleLogo} id='photo-input' type='file' name='logo' accept='.jpg, .jpeg, .png' />
          <img className={`add-shelter-form__logo ${!logo && 'add-shelter-form__logo_hidden'}`} src={logo} alt='' />
        </label>
      </div>
      <label className='add-shelter-form__caption'>Часы приюта*</label>
      <div className='add-shelter-form__clock'>
        <input
          className='add-shelter-form__time-input'
          value={startTime.value}
          onChange={(e) => { startTime.onChange(e); }}
          onBlur={startTime.onBlur}
          type='text'
          name='startTime'
          placeholder='00:00'
          required
        />
        <p>-</p>
        <input
          className='add-shelter-form__time-input'
          value={finishTime.value}
          onChange={(e) => { finishTime.onChange(e); }}
          onBlur={finishTime.onBlur}
          type='text'
          name='finishTime'
          placeholder='00:00'
          required
        />
      </div>
      <p className='add-shelter-form__error'>
        {(startTime.dirty || finishTime.dirty) && (startTime.invalidText ? startTime.invalidText : finishTime.invalidText)}
      </p>
      <div className='add-shelter-form__flex'>
        <div className='add-shelter-form__column'>
          <label className='add-shelter-form__caption'>Название приюта*</label>
          <input
            className='add-shelter-form__input'
            value={shelterName.value}
            onChange={(e) => { shelterName.onChange(e); }}
            onBlur={shelterName.onBlur}
            type='text'
            name='shelterName'
            required
          />
          <p className='add-shelter-form__error'>{shelterName.dirty && shelterName.invalidText}</p>
          <label className='add-shelter-form__caption'>ИНН*</label>
          <input className='add-shelter-form__input' type='number' name='INN' required />
          <label className='add-shelter-form__caption'>Ссылка на сайт приюта</label>
          <input className='add-shelter-form__input' type='url' name='webSite' />
          <label className='add-shelter-form__caption'>Ссылка на канал приюта в &laquo;Telegram&raquo;</label>
          <input className='add-shelter-form__input' type='url' name='telegram' />
        </div>
        <div className='add-shelter-form__column'>
          <label className='add-shelter-form__caption'>Виды животных*</label>
          <input className='add-shelter-form__input' type='text' name='animal' required />
          <label className='add-shelter-form__caption'>Адрес приюта*</label>
          <input className='add-shelter-form__input' type='text' name='address' required />
          <label className='add-shelter-form__caption'>Ссылка на группу приюта в &laquo;Одноклассники&raquo;</label>
          <input className='add-shelter-form__input' type='url' name='okPage' />
          <label className='add-shelter-form__caption'>Ссылка на группу приюта в &laquo;VK&raquo;</label>
          <input className='add-shelter-form__input' type='url' name='vkPage' />
        </div>
      </div>
      <label className='add-shelter-form__caption'>Описание приюта*</label>
      <textarea className='add-shelter-form__textarea' name='description' required />
      <div className='register__privacy'>
        <label className='checkbox__container'>
          <input type='checkbox' className='checkbox__input' onClick={handleChangeCheckbox} />
          <span className='checkbox' />
        </label>
        <p className='register__agreement'>
          Я согласен с
          <Link className='register__privacy-link' to='/' target='_blank'> Политикой конфиденциальности </Link>
          и
          <Link className='register__privacy-link' to='/' target='_blank'> Условиями использования сервиса</Link>
        </p>
      </div>
      <div className='add-shelter-form__buttons'>
        <Button submit>Добавить приют</Button>
        <Button theme='transparent' onClick={handleBack}>Назад</Button>
      </div>
    </>
  );
};

export default SecondlStep;
